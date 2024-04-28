import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { IProposal } from '../../../../models/proposals/proposal.model';
import {
  PROPOSAL_VOTE_OPTION_TITLE,
  ProposalVoteOption
} from '../../../../models/proposals/proposal-vote-option.model';
import { ButtonComponent } from '../../../button/button.component';
import { VOTE_OPTIONS } from './models/vote-dialog-option.model';
import { VoteDialogRef } from './models/vote-dialog-ref.model';

export interface IVoteDialogComponentData {
  proposal: IProposal;
  selectedVote?: ProposalVoteOption | null;
  submittedVote?: ProposalVoteOption | null;
}

@Component({
  standalone: true,
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrl: './vote-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SvgIconComponent, ButtonComponent]
})
export class VoteDialogComponent {
  protected readonly voteDialogRef = inject(VoteDialogRef);

  protected readonly voteOptions = VOTE_OPTIONS;
  protected readonly voteOptionTitle = PROPOSAL_VOTE_OPTION_TITLE;

  protected get proposal(): IProposal {
    return this.voteDialogRef.data.proposal;
  }

  protected get selectedVote(): ProposalVoteOption | null | undefined {
    return this.voteDialogRef.data.selectedVote;
  }

  protected get submittedVote(): ProposalVoteOption | null | undefined {
    return this.voteDialogRef.data.submittedVote;
  }

  protected onResetClick(): void {
    this.voteDialogRef.close(this.submittedVote ?? null);
  }
}
