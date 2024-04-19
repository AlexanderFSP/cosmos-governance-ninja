import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, exhaustMap, filter, map, Observable, shareReplay, startWith, take } from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { IPaginatedProposals, IPaginatedProposalsQueryParams } from '../../models/proposals/paginated-proposals.model';
import { ProposalsService } from '../../services/proposals.service';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';

@Component({
  standalone: true,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrl: './proposal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, ProposalCardComponent]
})
export class ProposalListComponent implements OnInit {
  public readonly selectedChain = input.required<IChainInfoView>();

  protected paginatedProposals$!: Observable<IPaginatedProposals | null>;

  private readonly proposalsService = inject(ProposalsService);

  private readonly loadNextSig$ = new BehaviorSubject<void>(void 0);

  public ngOnInit(): void {
    this.paginatedProposals$ = this.getPaginatedProposals();
  }

  protected onLoadNext(): void {
    this.loadNextSig$.next();
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
}
