import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GasPrice, MsgVoteEncodeObject, SigningStargateClient } from '@cosmjs/stargate';
import { Window } from '@keplr-wallet/types';
import { WINDOW } from '@ng-web-apis/common';

import { ChainListComponent } from './components/chain-list/chain-list.component';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CHAIN_LIST } from './constants/chain-list';
import { COSMOS_HUB_CHAIN_INFO } from './constants/chains';
import { IChainInfoView } from './models/chain-info-view.model';
import { InstallKeplrDialogService } from './services/install-keplr-dialog/install-keplr-dialog.service';
import { KeplrService } from './services/keplr.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent, ChainListComponent, ProposalListComponent]
})
export class AppComponent {
  @ViewChild('cardRef') private readonly cardRef!: ElementRef<HTMLElement>;

  protected currentStepIdx = 0;
  protected readonly steps: string[] = ['Select a chain', 'Vote', 'Get confirmation', 'Finish'];
  protected readonly chains = CHAIN_LIST;
  protected selectedChain?: IChainInfoView;

  private readonly window = inject<Window>(WINDOW);
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

  /**
   * Temporary handler, which initiate transaction with 2 yes votes on proposals 897 & 899
   *
   * TODO: [AlexanderFSP] Decouple logic into services
   */
  private async onVote(): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Install Keplr');
    }

    const {
      info: { chainId },
      rpcUrl
    } = COSMOS_HUB_CHAIN_INFO;

    await this.window.keplr.enable(chainId);

    /**
     * Decided to use `getOfflineSignerOnlyAmino` instead of `getOfflineSigner`, because for Ledger I get such kind
     * of error: "Error: SIGN_MODE_DIRECT can’t be signed on Ledger. Contact the web app provider to fix this issue."
     *
     * TODO: [AlexanderFSP] Understand the difference between `OfflineAminoSigner` and `OfflineDirectSigner`..
     */
    const offlineSigner =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.window.getOfflineSignerOnlyAmino!(chainId);

    const signingClient = await SigningStargateClient.connectWithSigner(rpcUrl, offlineSigner, {
      gasPrice: GasPrice.fromString('0.025ucosm')
    });

    const voter = (await offlineSigner.getAccounts())[0].address;
    const messages: MsgVoteEncodeObject[] = [
      {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: {
          proposalId: BigInt(897),
          voter,
          option: 1
        }
      },
      {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: {
          proposalId: BigInt(899),
          voter,
          option: 1
        }
      }
    ];

    await signingClient.signAndBroadcast(voter, messages, 'auto');
  }

  private resetScrollPosition(): void {
    this.cardRef.nativeElement.scrollTop = 0;
  }
}
