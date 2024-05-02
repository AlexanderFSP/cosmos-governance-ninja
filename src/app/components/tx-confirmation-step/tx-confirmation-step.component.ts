import { ChangeDetectionStrategy, Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { exhaustMap, filter, from, interval, Subject, take, takeUntil } from 'rxjs';

import { IChainInfoView } from '../../models/chain-info-view.model';
import { ITxResult } from '../../models/tx-result.model';
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
  public readonly finished = output<ITxResult>();

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
      .subscribe(result => {
        if (!result) {
          return this.finished.emit({ hash: this.txId() });
        }

        this.finished.emit({
          hash: this.txId(),
          code: result.code,
          // TODO: (AlexanderFSP) Parse `reason` from `result.events`
          reason: result.rawLog
        });
      });
  }
}
