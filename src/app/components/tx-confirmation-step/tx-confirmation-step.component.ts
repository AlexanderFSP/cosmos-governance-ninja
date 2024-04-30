import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-tx-confirmation-step',
  templateUrl: './tx-confirmation-step.component.html',
  styleUrl: './tx-confirmation-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent, ButtonComponent]
})
export class TxConfirmationStepComponent {
  public readonly txId = input.required<string>();

  public readonly backToProposalList = output();
}
