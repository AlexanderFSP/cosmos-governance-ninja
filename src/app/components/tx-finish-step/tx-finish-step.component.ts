import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { ITxResult } from '../../models/tx-result.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-tx-finish-step',
  templateUrl: './tx-finish-step.component.html',
  styleUrl: './tx-finish-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent, ButtonComponent]
})
export class TxFinishStepComponent {
  public readonly result = input.required<ITxResult>();
  public readonly txExplorerLink = input.required<string>();

  public readonly selectAnotherChain = output();
  public readonly backToProposalList = output();

  public readonly errorDescription = computed(() => {
    if (this.result().reason) {
      return `Your transaction failed with the message «${this.result().reason}»`;
    }

    return `Transaction with ID ${
      this.result().hash
    } was submitted but was not yet found on the chain. You might want to check later. There was a wait of 120 seconds`;
  });
}
