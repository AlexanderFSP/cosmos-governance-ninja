import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { BehaviorSubject, concatMap, exhaustMap, filter, map, Observable, shareReplay, startWith, take } from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { IPaginatedProposals, IPaginatedProposalsQueryParams } from '../../models/proposals/paginated-proposals.model';
import { IProposal } from '../../models/proposals/proposal.model';
import { ProposalsService } from '../../services/proposals.service';
import { ButtonComponent } from '../button/button.component';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';
import { WhenInViewportDirective } from './directives/when-in-viewport/when-in-viewport.directive';
import { VoteDialogService } from './services/vote-dialog-service/vote-dialog.service';

@Component({
  standalone: true,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrl: './proposal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, ProposalCardComponent, ButtonComponent, WhenInViewportDirective]
})
export class ProposalListComponent implements OnInit {
  public readonly selectedChain = input.required<IChainInfoView>();

  public readonly backToChainList = output();

  protected readonly shimmers = Array(3);
  protected paginatedProposals$!: Observable<IPaginatedProposals | null>;
  protected canShowShimmers$!: Observable<boolean>;

  private readonly proposalsService = inject(ProposalsService);
  private readonly voteDialogService = inject(VoteDialogService);

  private readonly loadNextSig$ = new BehaviorSubject<void>(void 0);

  public ngOnInit(): void {
    this.paginatedProposals$ = this.getPaginatedProposals();
    this.canShowShimmers$ = this.getCanShowShimmers();
  }

  protected onLoadNext(): void {
    this.loadNextSig$.next();
  }

  protected onVote(proposal: IProposal): void {
    this.voteDialogService.open(proposal);
  }

  /**
   * TODO: (AlexanderFSP) Handle errors somehow
   */
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
