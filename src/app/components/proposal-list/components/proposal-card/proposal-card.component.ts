import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IProposal, ProposalStatus } from '../../../../models/paginated-proposals.model';

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

  protected readonly statusIcon = STATUS_ICON;
}
