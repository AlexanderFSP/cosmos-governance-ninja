import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrl: './vote-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteDialogComponent {}
