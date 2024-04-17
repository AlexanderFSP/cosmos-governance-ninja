import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProposal } from 'src/app/models/proposal.model';

@Component({
  standalone: true,
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrl: './proposal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalCardComponent {
  public readonly proposal = input.required<IProposal>();
}
