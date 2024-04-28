import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  exhaustMap,
  filter,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  take,
  tap
} from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { IPaginatedProposals, IPaginatedProposalsQueryParams } from '../../models/proposals/paginated-proposals.model';
import { ProposalsService } from '../../services/proposals.service';
import { ButtonComponent } from '../button/button.component';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';
import { WhenInViewportDirective } from './directives/when-in-viewport/when-in-viewport.directive';
import { IProposalVoteView } from './services/proposal-votes/models/proposal-vote-view.model';
import { ProposalVotesService } from './services/proposal-votes/proposal-votes.service';

@Component({
  standalone: true,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrl: './proposal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, ProposalCardComponent, ButtonComponent, WhenInViewportDirective],
  providers: [ProposalVotesService]
})
export class ProposalListComponent implements OnInit {
  public readonly selectedChain = input.required<IChainInfoView>();

  public readonly backToChainList = output();

  protected readonly shimmers = Array(3);
  protected paginatedProposals$!: Observable<IPaginatedProposals | null>;
  protected canShowShimmers$!: Observable<boolean>;
  protected readonly votes: Record<string, Observable<IProposalVoteView>> = {};

  protected readonly proposalVotesService = inject(ProposalVotesService);

  private readonly proposalsService = inject(ProposalsService);

  private readonly loadNextSig$ = new BehaviorSubject<void>(void 0);

  public ngOnInit(): void {
    this.paginatedProposals$ = this.getPaginatedProposals();
    this.canShowShimmers$ = this.getCanShowShimmers();
  }

  protected onLoadNext(): void {
    this.loadNextSig$.next();
  }

  private getPaginatedProposals(): Observable<IPaginatedProposals | null> {
    return this.loadNextSig$.pipe(
      concatMap(() => this.paginatedProposals$.pipe(take(1))),
      filter(paginatedProposals => paginatedProposals?.pagination.next_key !== null),
      exhaustMap(paginatedProposals => {
        const params: IPaginatedProposalsQueryParams = {
          'pagination.limit': '10',
          'pagination.reverse': true
        };

        if (paginatedProposals?.pagination.next_key) {
          params['pagination.key'] = paginatedProposals.pagination.next_key;
        }

        return this.proposalsService.getPaginatedProposals(this.selectedChain().restUrl, params).pipe(
          tap(response => {
            for (const proposal of response.proposals) {
              this.votes[proposal.id] = this.proposalVotesService
                .getVote(this.selectedChain(), proposal)
                .pipe(shareReplay({ bufferSize: 1, refCount: true }));
            }
          }),
          catchError(() => of({ proposals: [], pagination: { next_key: null, total: '0' } })),
          map(response => ({
            proposals: [...(paginatedProposals?.proposals ?? []), ...response.proposals],
            pagination: response.pagination
          }))
        );
      }),
      startWith(null),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private getCanShowShimmers(): Observable<boolean> {
    return this.paginatedProposals$.pipe(map(paginatedProposals => paginatedProposals?.pagination.next_key !== null));
  }
}
