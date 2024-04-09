import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { Window } from '@keplr-wallet/types';
import { COSMOS_HUB_CHAIN_ID, COSMOS_HUB_RPC } from './constants/cosmos-hub';
import {
  GasPrice,
  MsgVoteEncodeObject,
  QueryClient,
  SigningStargateClient,
  setupGovExtension,
} from '@cosmjs/stargate';
import { connectComet } from '@cosmjs/tendermint-rpc';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly window = inject<Window>(WINDOW);

  public async ngOnInit(): Promise<void> {
    this.fetchProposals();
  }

  /**
   * Temporary handler, which initiate transaction with 2 yes votes on proposals 897 & 899
   *
   * TODO: (AlexanderFSP) Decouple logic into services
   */
  protected async onVote(): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Install Keplr');
    }

    await this.window.keplr.enable(COSMOS_HUB_CHAIN_ID);

    /**
     * Decided to use `getOfflineSignerOnlyAmino` instead of `getOfflineSigner`, because for Ledger I get such kind
     * of error: "Error: SIGN_MODE_DIRECT can’t be signed on Ledger. Contact the web app provider to fix this issue."
     *
     * TODO: (AlexanderFSP) Understand the difference between `OfflineAminoSigner` and `OfflineDirectSigner`..
     */
    const offlineSigner =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.window.getOfflineSignerOnlyAmino!(COSMOS_HUB_CHAIN_ID);

    const signingClient = await SigningStargateClient.connectWithSigner(
      COSMOS_HUB_RPC,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString('0.025ucosm'),
      }
    );

    const voter = (await offlineSigner.getAccounts())[0].address;
    const messages: MsgVoteEncodeObject[] = [
      {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: {
          proposalId: BigInt(897),
          voter,
          option: 1,
        },
      },
      {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: {
          proposalId: BigInt(899),
          voter,
          option: 1,
        },
      },
    ];

    await signingClient.signAndBroadcast(voter, messages, 'auto');
  }

  /**
   * Temporary method, which retrieves proposals in voting phase from RPC node
   */
  private async fetchProposals(): Promise<void> {
    // 1. Setup `CometClient` for `QueryClient`
    const cometClient = await connectComet(COSMOS_HUB_RPC);

    // 2. Setup `QueryClient` for `setupGovExtension`
    const queryClient = new QueryClient(cometClient);

    // 2. Setup `GovExtension` abstraction, which provides some methods to retrieve governance staff
    const govExtension = setupGovExtension(queryClient);

    // 4. Retrieve proposals in voting phase
    const votingProposals = await govExtension.gov.proposals(2, '', '');

    console.log(votingProposals);
  }
}
