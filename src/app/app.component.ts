import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { map } from 'rxjs';

import { ChainListComponent } from './components/chain-list/chain-list.component';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TxConfirmationStepComponent } from './components/tx-confirmation-step/tx-confirmation-step.component';
import { TxFinishStepComponent } from './components/tx-finish-step/tx-finish-step.component';
import { UnsupportedScreenSizeComponent } from './components/unsupported-screen-size/unsupported screen size.component';
import { CHAIN_LIST } from './constants/chain-list';
import { IChainInfoView } from './models/chain-info-view.model';
import { ITxResult } from './models/tx-result.model';
import { AbsoluteCardContentService } from './services/absolute-card-content.service';
import { InstallKeplrDialogService } from './services/install-keplr-dialog/install-keplr-dialog.service';
import { KeplrService } from './services/keplr.service';
import { ProposalVotesService } from './services/proposal-votes/proposal-votes.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    NgScrollbarModule,
    StepperComponent,
    ChainListComponent,
    ProposalListComponent,
    TxConfirmationStepComponent,
    TxFinishStepComponent,
    UnsupportedScreenSizeComponent
  ],
  providers: [ProposalVotesService]
})
export class AppComponent {
  @ViewChild(NgScrollbar) private readonly scrollable!: NgScrollbar;

  protected currentStepIdx = 0;
  protected selectedChain?: IChainInfoView;
  protected txId?: string;
  protected result?: ITxResult;

  protected readonly isUnsupportedScreenSize$ = inject(BreakpointObserver)
    .observe('(max-width: 960px)')
    .pipe(map(state => state.matches));
  protected readonly steps = ['Select a chain', 'Vote', 'Get confirmation', 'Finish'];
  protected readonly chains = CHAIN_LIST;

  protected readonly absoluteCardContentService = inject(AbsoluteCardContentService);

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly keplrService = inject(KeplrService);
  private readonly installKeplrDialogService = inject(InstallKeplrDialogService);
  private readonly proposalVotesService = inject(ProposalVotesService);

  protected async onSelectChain(chain: IChainInfoView): Promise<void> {
    if (!this.keplrService.isKeplrInstalled) {
      return this.installKeplrDialogService.open();
    }

    try {
      await this.keplrService.enable(chain.info);

      this.selectedChain = chain;
      this.proposalVotesService.setChain(chain);

      this.setStep(1);
    } catch {
      /* empty */
    }
  }

  protected onTxBroadcasted(txId: string): void {
    this.txId = txId;

    this.setStep(2);
  }

  protected onFinished(result: ITxResult): void {
    this.result = result;

    this.setStep(3);
  }

  protected setStep(stepIdx: number): void {
    this.currentStepIdx = stepIdx;
    this.scrollable.scrollTo({ top: 0, duration: 0 });

    this.cdr.detectChanges();
  }
}
