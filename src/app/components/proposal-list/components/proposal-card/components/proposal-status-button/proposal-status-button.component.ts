import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';

import { ProposalStatus } from '../../../../../../models/proposals/proposal-status.model';

/**
 * TODO: (AlexanderFSP) Add icons `PROPOSAL_STATUS_UNSPECIFIED` & `PROPOSAL_STATUS_DEPOSIT_PERIOD` (?)
 */
const STATUS_TEXT: Record<ProposalStatus, string | null> = {
  [ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED]: null,
  [ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD]: null,
  [ProposalStatus.PROPOSAL_STATUS_FAILED]: 'Failed',
  [ProposalStatus.PROPOSAL_STATUS_PASSED]: 'Passed',
  [ProposalStatus.PROPOSAL_STATUS_REJECTED]: 'Rejected',
  [ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD]: 'Vote'
};

/**
 * TODO: (AlexanderFSP) Add icons `PROPOSAL_STATUS_UNSPECIFIED` & `PROPOSAL_STATUS_DEPOSIT_PERIOD` (?)
 *
 * https://icons8.com/icon/set/popular/pulsar-line
 */
const STATUS_ICON: Record<ProposalStatus, SvgIcons | null> = {
  [ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED]: null,
  [ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD]: null,
  [ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD]: 'edit',
  [ProposalStatus.PROPOSAL_STATUS_PASSED]: 'checkmark',
  [ProposalStatus.PROPOSAL_STATUS_REJECTED]: 'cancel',
  [ProposalStatus.PROPOSAL_STATUS_FAILED]: 'unavailable'
};

@Component({
  standalone: true,
  selector: 'app-proposal-status-button',
  templateUrl: './proposal-status-button.component.html',
  styleUrl: './proposal-status-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SvgIconComponent]
})
export class ProposalStatusButtonComponent {
  public readonly status = input.required<ProposalStatus>();

  protected readonly statusText = STATUS_TEXT;
  protected readonly statusIcon = STATUS_ICON;
}
