import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tx-confirmation-step',
  templateUrl: './tx-confirmation-step.component.html',
  styleUrl: './tx-confirmation-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxConfirmationStepComponent {
  public readonly txId = input.required<string>();
}
