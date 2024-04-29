import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tx-finish-step',
  templateUrl: './tx-finish-step.component.html',
  styleUrl: './tx-finish-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxFinishStepComponent {}
