import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { ProposalStatus } from '../../../../models/proposals/proposal-status.model';
import { IProposalVoteView } from '../../../../services/proposal-votes/models/proposal-vote-view.model';
import { HarmfulProposalOverlayComponent } from './components/harmful-proposal-overlay/harmful-proposal-overlay.component';
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
  imports: [DatePipe, ProposalCardShimmerComponent, ProposalStatusButtonComponent, HarmfulProposalOverlayComponent]
})
export class ProposalCardComponent {
  public readonly proposal = input<IProposal>();
  public readonly vote = input<IProposalVoteView | null>();

  public readonly editVote = output();

  protected ignoreHarmful = false;
  /**
   * The approach to identifying scam proposals is now very simple - if it contains the word “airdrop” or has an emoji, then it is a scam 🧠
   */
  public readonly isHarmful = computed(() => {
    const title = this.title() ?? '';
    const description = this.description() ?? '';

    const emojiPattern =
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

    if (emojiPattern.test(title) || emojiPattern.test(description)) {
      return true;
    }

    const airdropPattern = /airdrop/i;

    return airdropPattern.test(title) || airdropPattern.test(description);
  });
  protected readonly title = computed(() => this.proposal()?.title || this.proposal()?.messages[0]?.content?.title);
  protected readonly description = computed(
    () => this.proposal()?.summary || this.proposal()?.messages[0]?.content?.description
  );

  protected readonly proposalStatus = ProposalStatus;
  protected readonly statusIcon = STATUS_ICON;

  protected onProposalStatusButtonClick(): void {
    if (this.proposal()?.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD) {
      this.editVote.emit();
    }
  }
}
