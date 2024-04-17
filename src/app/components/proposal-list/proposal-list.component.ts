import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { BehaviorSubject, exhaustMap, Observable, shareReplay } from 'rxjs';
import { IChainInfoView } from 'src/app/models/chain-info-view.model';
import { IPaginatedProposals } from 'src/app/models/proposal.model';

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

  protected paginatedProposals$!: Observable<IPaginatedProposals>;

  private readonly proposalsService = inject(ProposalsService);

  private readonly loadNextSig$ = new BehaviorSubject(void 0);

  public ngOnInit(): void {
    this.paginatedProposals$ = this.getPaginatedProposals();
  }

  private getPaginatedProposals(): Observable<IPaginatedProposals> {
    return this.loadNextSig$.pipe(
      exhaustMap(() => this.proposalsService.getPaginatedProposals(this.selectedChain().restUrl)),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
