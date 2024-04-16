import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';

@Component({
  standalone: true,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrl: './proposal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProposalCardComponent],
})
export class ProposalListComponent {}
