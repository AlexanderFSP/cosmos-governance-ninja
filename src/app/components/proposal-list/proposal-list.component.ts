import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  TemplateRef,
  ViewChild
} from '@angular/core';
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
  Subject,
  take,
  takeUntil,
  tap
} from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { IPaginatedProposals, IPaginatedProposalsQueryParams } from '../../models/proposals/paginated-proposals.model';
import { IProposal } from '../../models/proposals/proposal.model';
import { AbsoluteCardContentService } from '../../services/absolute-card-content.service';
import { IProposalVoteView } from '../../services/proposal-votes/models/proposal-vote-view.model';
import { ProposalVotesService } from '../../services/proposal-votes/proposal-votes.service';
import { ProposalsService } from '../../services/proposals.service';
import { ButtonComponent } from '../button/button.component';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';
import { WhenInViewportDirective } from './directives/when-in-viewport/when-in-viewport.directive';

@Component({
  standalone: true,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrl: './proposal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, ProposalCardComponent, ButtonComponent, WhenInViewportDirective]
})
export class ProposalListComponent implements OnInit, OnDestroy {
  @ViewChild('buttonsTplRef', { static: true }) private readonly buttonsTplRef!: TemplateRef<void>;

  public readonly selectedChain = input.required<IChainInfoView>();

  public readonly backToChainList = output();
  public readonly txBroadcasted = output<string>();

  protected readonly shimmers = Array(3);
  protected paginatedProposals$!: Observable<IPaginatedProposals | null>;
  protected canShowShimmers$!: Observable<boolean>;
  protected readonly votes: Record<string, Observable<IProposalVoteView>> = {};

  protected readonly proposalVotesService = inject(ProposalVotesService);

  private readonly proposalsService = inject(ProposalsService);
  private readonly absoluteCardContentService = inject(AbsoluteCardContentService);

  private readonly loadNextSig$ = new BehaviorSubject<void>(void 0);
  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.absoluteCardContentService.setTplRef(this.buttonsTplRef);

    this.paginatedProposals$ = this.getPaginatedProposals();
    this.canShowShimmers$ = this.getCanShowShimmers();
  }

  public ngOnDestroy(): void {
    this.absoluteCardContentService.setTplRef(null);

    this.destroy$.next();
    this.destroy$.complete();
  }

  protected onLoadNext(): void {
    this.loadNextSig$.next();
  }

  protected onEditVote(proposal: IProposal): void {
    this.proposalVotesService.editVote(proposal).pipe(takeUntil(this.destroy$)).subscribe();
  }

  protected onSign(): void {
    this.proposalVotesService
      .sign()
      .pipe(takeUntil(this.destroy$))
      .subscribe(txId => this.txBroadcasted.emit(txId));
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
                .getVote(proposal)
                .pipe(shareReplay({ bufferSize: 1, refCount: true }));
            }
          }),
          // TODO: (AlexanderFSP) Display error in snackbar
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
