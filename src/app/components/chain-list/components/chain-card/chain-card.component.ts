import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IChainInfo } from 'src/app/models/chain-info.model';

@Component({
  standalone: true,
  selector: 'app-chain-card',
  templateUrl: './chain-card.component.html',
  styleUrl: './chain-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
})
export class ChainCardComponent {
  public readonly chain = input.required<IChainInfo>();
}
