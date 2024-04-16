import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrl: './proposal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalCardComponent {}
