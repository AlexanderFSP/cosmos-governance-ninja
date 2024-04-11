import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-network-card',
  templateUrl: './network-card.component.html',
  styleUrl: './network-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkCardComponent {}
