import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, map, Observable, of, switchMap, tap } from 'rxjs';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { ProposalStatus } from '../../../../models/proposals/proposal-status.model';
import { IProposalVoteQueryParams } from '../../../../models/proposals/proposal-vote.model';
import { ProposalVoteOption } from '../../../../models/proposals/proposal-vote-option.model';
import { KeplrService } from '../../../../services/keplr.service';
import { ProposalsService } from '../../../../services/proposals.service';
import { IProposalVoteView } from './models/proposal-vote-view.model';

/**
 * Stateful service to retrieve, store & manage user's votes
 */
@Injectable()
export class ProposalVotesService {
  /**
   * Map with votes on proposals in `PROPOSAL_STATUS_VOTING_PERIOD` status
   */
  private readonly votes$ = new BehaviorSubject<Record<string, IProposalVoteView>>({});

  private readonly proposalsService = inject(ProposalsService);
  private readonly keplrService = inject(KeplrService);

  public getVote(restUrl: string, chainId: string, proposal: IProposal): Observable<IProposalVoteView> {
    if (proposal.status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD) {
      return of({ current: null, submitted: null });
    }

    if (this.votes$.value[proposal.id]) {
      return this.votes$.pipe(map(votes => votes[proposal.id]));
    }

    return from(this.keplrService.getKey(chainId)).pipe(
      switchMap(({ bech32Address }) => {
        const params: IProposalVoteQueryParams = {
          proposal_id: proposal.id,
          voter: bech32Address
        };

        return this.proposalsService.getProposalVote(restUrl, params).pipe(
          catchError(() => of(null)),
          tap(response => {
            this.votes$.next({
              ...this.votes$.value,
              [proposal.id]: {
                current: null,
                submitted: response?.vote.options[0].option ?? null
              }
            });
          }),
          switchMap(() => this.votes$.pipe(map(votes => votes[proposal.id])))
        );
      })
    );
  }

  public setVote(id: string, option?: ProposalVoteOption | null): void {
    this.votes$.next({
      ...this.votes$.value,
      [id]: {
        ...this.votes$.value[id],
        current: !option || this.votes$.value[id].submitted === option ? null : option
      }
    });
  }
}
