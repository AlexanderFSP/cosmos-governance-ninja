import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { ProposalStatus } from '../../../../models/proposals/proposal-status.model';
import { ProposalCardShimmerComponent } from './components/proposal-card-shimmer/proposal-card-shimmer.component';
import { ProposalStatusButtonComponent } from './components/proposal-status-button/proposal-status-button.component';

/**
 * TODO: (AlexanderFSP) Add icons `PROPOSAL_STATUS_UNSPECIFIED` (?)
 *
 * @see https://icons8.com/icons/authors/WVmZbri2l0pj/flat-icons/external-flaticons-flat-flat-icons/external-history-flaticons-flat-flat-icons
 */
const STATUS_ICON: Record<ProposalStatus, string | null> = {
  [ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED]: null,
  [ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD]: 'assets/images/proposal-status/deposit-period.png',
  [ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD]: 'assets/images/proposal-status/voting.png',
  [ProposalStatus.PROPOSAL_STATUS_PASSED]: 'assets/images/proposal-status/passed.png',
  [ProposalStatus.PROPOSAL_STATUS_REJECTED]: 'assets/images/proposal-status/rejected.png',
  [ProposalStatus.PROPOSAL_STATUS_FAILED]: 'assets/images/proposal-status/failed.png'
};

@Component({
  standalone: true,
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrl: './proposal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, ProposalCardShimmerComponent, ProposalStatusButtonComponent]
})
export class ProposalCardComponent {
  public readonly proposal = input<IProposal>();

  public readonly vote = output();

  protected readonly title = computed(() => this.proposal()?.title || this.proposal()?.messages[0]?.content?.title);
  protected readonly description = computed(
    () => this.proposal()?.summary || this.proposal()?.messages[0]?.content?.description
  );

  protected readonly proposalStatus = ProposalStatus;
  protected readonly statusIcon = STATUS_ICON;

  protected onProposalStatusButtonClick(): void {
    if (this.proposal()?.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD) {
      this.vote.emit();
    }
  }
}
