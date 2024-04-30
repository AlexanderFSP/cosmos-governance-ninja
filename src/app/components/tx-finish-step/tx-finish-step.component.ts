import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IndexedTx } from '@cosmjs/stargate';

@Component({
  standalone: true,
  selector: 'app-tx-finish-step',
  templateUrl: './tx-finish-step.component.html',
  styleUrl: './tx-finish-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxFinishStepComponent {
  /**
   * `null` if the transaction was not found in the chain 120 seconds after it was sent
   *
   * TODO: (AlexanderFSP) Copyright for it `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of 120 seconds.`
   */
  public readonly result = input<IndexedTx | null>();
}
