import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-proposal-card-shimmer',
  templateUrl: './proposal-card-shimmer.component.html',
  styleUrl: './proposal-card-shimmer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalCardShimmerComponent {}
