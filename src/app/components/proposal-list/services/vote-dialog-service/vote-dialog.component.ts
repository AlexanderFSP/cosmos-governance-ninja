import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { ProposalVoteOption } from '../../../../models/proposals/proposal-vote-option.model';
import { ButtonComponent } from '../../../button/button.component';
import { VOTE_OPTIONS } from './models/vote-dialog-option.model';
import { VoteDialogRef } from './models/vote-dialog-ref.model';

@Component({
  standalone: true,
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrl: './vote-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SvgIconComponent, ButtonComponent]
})
export class VoteDialogComponent {
  protected selectedOption?: ProposalVoteOption;

  protected readonly voteDialogRef = inject(VoteDialogRef);

  protected readonly voteOptions = VOTE_OPTIONS;
}
