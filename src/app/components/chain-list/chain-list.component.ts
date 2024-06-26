import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { ChainCardComponent } from './components/chain-card/chain-card.component';

@Component({
  standalone: true,
  selector: 'app-chain-list',
  templateUrl: './chain-list.component.html',
  styleUrl: './chain-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChainCardComponent]
})
export class ChainListComponent {
  public readonly chains = input.required<IChainInfoView[]>();

  public readonly selectChain = output<IChainInfoView>();
}
