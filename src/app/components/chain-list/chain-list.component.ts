import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChainCardComponent } from './components/chain-card/chain-card.component';

@Component({
  standalone: true,
  selector: 'app-chain-list',
  templateUrl: './chain-list.component.html',
  styleUrl: './chain-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChainCardComponent],
})
export class ChainListComponent {}
