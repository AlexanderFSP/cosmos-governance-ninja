import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-chain-card',
  templateUrl: './chain-card.component.html',
  styleUrl: './chain-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChainCardComponent {}
