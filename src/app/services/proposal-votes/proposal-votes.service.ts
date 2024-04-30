import { inject, Injectable } from '@angular/core';
import { MsgVoteEncodeObject } from '@cosmjs/stargate';
import { BehaviorSubject, catchError, EMPTY, finalize, from, map, Observable, of, switchMap, take, tap } from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { IProposal } from '../../models/proposals/proposal.model';
import { ProposalStatus } from '../../models/proposals/proposal-status.model';
import { IProposalVoteQueryParams } from '../../models/proposals/proposal-vote.model';
import { PROPOSAL_VOTE_OPTION_NUMBER, ProposalVoteOption } from '../../models/proposals/proposal-vote-option.model';
import { KeplrService } from '../keplr.service';
import { ProposalsService } from '../proposals.service';
import { VoteDialogService } from '../vote-dialog-service/vote-dialog.service';
import { IProposalVoteView } from './models/proposal-vote-view.model';

/**
 * Stateful service to retrieve, store & manage user's votes
 */
@Injectable()
export class ProposalVotesService {
  public hasUnsavedVotes$!: Observable<boolean>;
  public isSigning$!: Observable<boolean>;

  private chain?: IChainInfoView;
  /**
   * Map with votes on proposals in `PROPOSAL_STATUS_VOTING_PERIOD` status
   */
  private readonly votes$ = new BehaviorSubject<Record<string, IProposalVoteView>>({});
  private readonly _isSigning$ = new BehaviorSubject(false);

  private readonly proposalsService = inject(ProposalsService);
  private readonly keplrService = inject(KeplrService);
  private readonly voteDialogService = inject(VoteDialogService);

  constructor() {
    this.hasUnsavedVotes$ = this.getHasUnsavedVotes();
    this.isSigning$ = this._isSigning$.asObservable();
  }

  public setChain(chain: IChainInfoView): void {
    this.chain = chain;

    this.votes$.next({});
    this._isSigning$.next(false);
  }

  public getVote(proposal: IProposal): Observable<IProposalVoteView> {
    if (!this.chain) {
      throw new Error(
        'Initialize the `chain` using the `ProposalVotesService.setChain` method before requesting votes'
      );
    }

    if (proposal.status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD) {
      return of({ current: null, submitted: null });
    }

    if (this.votes$.value[proposal.id]) {
      return this.votes$.pipe(map(votes => votes[proposal.id]));
    }

    const { info, restUrl } = this.chain;

    return from(this.keplrService.getKey(info)).pipe(
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

  public editVote(proposal: IProposal): Observable<ProposalVoteOption | null> {
    return this.votes$.pipe(
      take(1),
      map(votes => votes[proposal.id]),
      switchMap(({ current, submitted }) =>
        this.voteDialogService.open({
          proposal,
          selectedVote: current ?? submitted,
          submittedVote: submitted
        })
      ),
      tap(option => this.setVote(proposal.id, option))
    );
  }

  public sign(): Observable<string> {
    if (!this.chain) {
      throw new Error('Initialize the `chain` using the `ProposalVotesService.setChain` method before signing tx');
    }

    if (this._isSigning$.value) {
      return EMPTY;
    }

    this._isSigning$.next(true);

    const { chain } = this;

    return from(this.keplrService.getKey(chain.info)).pipe(
      switchMap(({ bech32Address }) => {
        const messages: MsgVoteEncodeObject[] = Object.entries(this.votes$.value)
          .filter(([, vote]) => vote.current)
          .map(([id, vote]) => ({
            typeUrl: '/cosmos.gov.v1beta1.MsgVote',
            value: {
              proposalId: BigInt(id),
              voter: bech32Address,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              option: PROPOSAL_VOTE_OPTION_NUMBER[vote.current!]
            }
          }));

        return from(this.keplrService.signAndBroadcastSync(chain, messages));
      }),
      finalize(() => this._isSigning$.next(false))
    );
  }

  private setVote(id: string, option?: ProposalVoteOption | null): void {
    this.votes$.next({
      ...this.votes$.value,
      [id]: {
        ...this.votes$.value[id],
        current: !option || this.votes$.value[id].submitted === option ? null : option
      }
    });
  }

  private getHasUnsavedVotes(): Observable<boolean> {
    return this.votes$.pipe(map(votes => Object.values(votes).some(({ current }) => current)));
  }
}
