import { ChangeDetectionStrategy, Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { IndexedTx, SigningStargateClient } from '@cosmjs/stargate';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { exhaustMap, filter, from, interval, Subject, take, takeUntil } from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-tx-confirmation-step',
  templateUrl: './tx-confirmation-step.component.html',
  styleUrl: './tx-confirmation-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent, ButtonComponent]
})
export class TxConfirmationStepComponent implements OnInit, OnDestroy {
  public readonly txId = input.required<string>();
  public readonly selectedChain = input.required<IChainInfoView>();

  public readonly backToProposalList = output();
  /**
   * Returns `null` if the transaction was not found in the chain 120 seconds after it was sent
   */
  public readonly finished = output<IndexedTx | null>();

  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.startPolling();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async startPolling(): Promise<void> {
    const signingClient = await SigningStargateClient.connect(this.selectedChain().rpcUrl);
    const start = performance.now();

    interval(3_000)
      .pipe(
        exhaustMap(() => from(signingClient.getTx(this.txId()))),
        filter(result => !!result || performance.now() - start >= 120_000),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe(result => this.finished.emit(result));
  }
}
