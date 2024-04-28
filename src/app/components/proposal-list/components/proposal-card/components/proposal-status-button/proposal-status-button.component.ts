import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';

import { ProposalStatus } from '../../../../../../models/proposals/proposal-status.model';
import {
  PROPOSAL_VOTE_OPTION_TITLE,
  ProposalVoteOption
} from '../../../../../../models/proposals/proposal-vote-option.model';

/**
 * TODO: (AlexanderFSP) Add icons `PROPOSAL_STATUS_UNSPECIFIED` & `PROPOSAL_STATUS_DEPOSIT_PERIOD` (?)
 */
const STATUS_CLASS: Record<ProposalStatus, string | null> = {
  [ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED]: null,
  [ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD]: null,
  [ProposalStatus.PROPOSAL_STATUS_FAILED]: 'secondary',
  [ProposalStatus.PROPOSAL_STATUS_PASSED]: 'success',
  [ProposalStatus.PROPOSAL_STATUS_REJECTED]: 'error',
  [ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD]: null
};

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

const VOTE_STATUS_CLASS: Record<ProposalVoteOption, string> = {
  [ProposalVoteOption.VOTE_OPTION_YES]: 'success',
  [ProposalVoteOption.VOTE_OPTION_NO]: 'error',
  [ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO]: 'error-dark',
  [ProposalVoteOption.VOTE_OPTION_ABSTAIN]: 'secondary'
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
  public readonly selectedVote = input<ProposalVoteOption | null>();

  protected readonly statusClass = computed(() => {
    const selectedVote = this.selectedVote();

    return selectedVote ? VOTE_STATUS_CLASS[selectedVote] : STATUS_CLASS[this.status()];
  });
  protected readonly statusText = computed(() => {
    const selectedVote = this.selectedVote();

    return selectedVote ? PROPOSAL_VOTE_OPTION_TITLE[selectedVote] : STATUS_TEXT[this.status()];
  });
  protected readonly statusIconKey = computed(() => (this.selectedVote() ? 'edit' : STATUS_ICON[this.status()]));

  protected readonly proposalStatus = ProposalStatus;
}
