import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-harmful-proposal-overlay',
  templateUrl: './harmful-proposal-overlay.component.html',
  styleUrl: './harmful-proposal-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HarmfulProposalOverlayComponent {
  public readonly show = output();
}
