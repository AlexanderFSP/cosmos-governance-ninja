import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ChainCardComponent } from './components/chain-card/chain-card.component';
import { IChainInfo } from '../../models/chain-info.model';

@Component({
  standalone: true,
  selector: 'app-chain-list',
  templateUrl: './chain-list.component.html',
  styleUrl: './chain-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChainCardComponent],
})
export class ChainListComponent {
  public readonly chains = input.required<IChainInfo[]>();

  public readonly selectChain = output<IChainInfo>();
}
