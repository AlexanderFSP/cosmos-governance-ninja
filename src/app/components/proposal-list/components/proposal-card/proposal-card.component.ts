import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { ProposalStatus } from '../../../../models/proposals/proposal-status.model';

/**
 * TODO: (AlexanderFSP) Add icons `PROPOSAL_STATUS_UNSPECIFIED` & `PROPOSAL_STATUS_DEPOSIT_PERIOD` (?)
 *
 * @see https://icons8.com/icons/authors/g26qDX9Ae6NS/icongeek26/external-icongeek26-linear-colour-icongeek26/external-politic-icongeek26-linear-colour-icongeek26
 */
const STATUS_ICON: Record<ProposalStatus, string | null> = {
  [ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED]: null,
  [ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD]: null,
  [ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD]: 'assets/voting.png',
  [ProposalStatus.PROPOSAL_STATUS_PASSED]: 'assets/passed.png',
  [ProposalStatus.PROPOSAL_STATUS_REJECTED]: 'assets/rejected.png',
  [ProposalStatus.PROPOSAL_STATUS_FAILED]: 'assets/rejected.png'
};

@Component({
  standalone: true,
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrl: './proposal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalCardComponent {
  public readonly proposal = input.required<IProposal>();

  protected readonly title = computed(() => this.proposal().title || this.proposal().messages[0]?.content?.title);
  protected readonly description = computed(
    () => this.proposal().summary || this.proposal().messages[0]?.content?.description
  );

  protected readonly statusIcon = STATUS_ICON;
}
