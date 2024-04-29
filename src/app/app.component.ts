import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';

import { ChainListComponent } from './components/chain-list/chain-list.component';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TxConfirmationStepComponent } from './components/tx-confirmation-step/tx-confirmation-step.component';
import { TxFinishStepComponent } from './components/tx-finish-step/tx-finish-step.component';
import { CHAIN_LIST } from './constants/chain-list';
import { IChainInfoView } from './models/chain-info-view.model';
import { InstallKeplrDialogService } from './services/install-keplr-dialog/install-keplr-dialog.service';
import { KeplrService } from './services/keplr.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    StepperComponent,
    ChainListComponent,
    ProposalListComponent,
    TxConfirmationStepComponent,
    TxFinishStepComponent
  ]
})
export class AppComponent {
  @ViewChild('cardRef') private readonly cardRef!: ElementRef<HTMLElement>;

  protected currentStepIdx = 0;
  protected readonly steps: string[] = ['Select a chain', 'Vote', 'Get confirmation', 'Finish'];
  protected readonly chains = CHAIN_LIST;
  protected selectedChain?: IChainInfoView;
  protected txId?: string;

  private readonly keplrService = inject(KeplrService);
  private readonly installKeplrDialogService = inject(InstallKeplrDialogService);
  private readonly cdr = inject(ChangeDetectorRef);

  protected async onSelectChain(chain: IChainInfoView): Promise<void> {
    if (!this.keplrService.isKeplrInstalled) {
      return this.installKeplrDialogService.open();
    }

    try {
      await this.keplrService.enable(chain.info);

      this.selectedChain = chain;
      this.currentStepIdx = 1;

      this.resetScrollPosition();
      this.cdr.detectChanges();
    } catch {
      /* empty */
    }
  }

  protected onBackToChainList(): void {
    this.currentStepIdx = 0;

    this.resetScrollPosition();
  }

  protected onSigned(txId: string): void {
    this.txId = txId;
    this.currentStepIdx = 2;

    this.resetScrollPosition();
    this.cdr.detectChanges();
  }

  private resetScrollPosition(): void {
    this.cardRef.nativeElement.scrollTop = 0;
  }
}
