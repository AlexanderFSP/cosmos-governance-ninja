import { inject, Injectable } from '@angular/core';
import { GasPrice, MsgVoteEncodeObject, SigningStargateClient } from '@cosmjs/stargate';
import { ChainInfo, Key, Window } from '@keplr-wallet/types';
import { WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { IChainInfoView } from '../models/chain-info-view.model';

/**
 * Facade over `window.keplr` object (entity that is injected by Keplr extension)
 *
 * @see https://docs.keplr.app/api/cosmjs.html
 */
@Injectable({
  providedIn: 'root'
})
export class KeplrService {
  private readonly window = inject<Window>(WINDOW);
  private readonly registeredChainIds$ = new BehaviorSubject<string[]>([]);

  /**
   * Local storage key. Used to prevent the user from being prompted for
   * access to added networks each time the application is opened
   */
  private readonly chainInfosRequestedKey = 'chain-infos-requested';

  constructor() {
    this.determineRegisteredChainIds();
  }

  public get isKeplrInstalled(): boolean {
    return !!this.window.keplr;
  }

  public isChainRegistered(chainId: string): Observable<boolean> {
    return this.registeredChainIds$.pipe(map(registeredChainIds => registeredChainIds.includes(chainId)));
  }

  public async enable(chainInfo: ChainInfo): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    await this.window.keplr.experimentalSuggestChain(chainInfo);

    return this.window.keplr.enable(chainInfo.chainId);
  }

  public async getKey(chainInfo: ChainInfo): Promise<Key> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    await this.enable(chainInfo);

    return this.window.keplr.getKey(chainInfo.chainId);
  }

  public async suggestChain(chainInfo: ChainInfo): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    try {
      await this.window.keplr.experimentalSuggestChain(chainInfo);
      this.determineRegisteredChainIds(true);
    } catch {
      /* empty */
    }
  }

  /**
   * Broadcasts a signed transaction to the network without monitoring it.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is broadcasted, a `string` containing the hash of the transaction is returned. The caller then
   * usually needs to check if the transaction was included in a block and was successful.
   *
   * @returns Returns the hash of the transaction
   */
  public async signAndBroadcastSync(chain: IChainInfoView, messages: MsgVoteEncodeObject[]): Promise<string> {
    await this.enable(chain.info);

    /**
     * Decided to use `getOfflineSignerOnlyAmino` instead of `getOfflineSigner`, because for Ledger I get such kind
     * of error: "Error: SIGN_MODE_DIRECT can’t be signed on Ledger. Contact the web app provider to fix this issue."
     *
     * TODO: (AlexanderFSP) Understand the difference between `OfflineAminoSigner` and `OfflineDirectSigner`
     */
    const offlineSigner =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.window.getOfflineSignerOnlyAmino!(chain.info.chainId);

    const { gasPriceStep, coinMinimalDenom } = chain.info.feeCurrencies[0];
    const signingClient = await SigningStargateClient.connectWithSigner(chain.rpcUrl, offlineSigner, {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      gasPrice: GasPrice.fromString(`${gasPriceStep!.average}${coinMinimalDenom}`)
    });

    const voter = (await offlineSigner.getAccounts())[0].address;

    return signingClient.signAndBroadcastSync(voter, messages, chain.fee);
  }

  /**
   * @param force Indicates that it is necessary to re-request access to the user's networks, even if it was previously denied
   */
  private async determineRegisteredChainIds(force?: boolean): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    if (!force && localStorage.getItem(this.chainInfosRequestedKey)) {
      return;
    }

    try {
      const registeredChainIds = (await this.window.keplr.getChainInfosWithoutEndpoints()).map(
        chainInfo => chainInfo.chainId
      );

      this.registeredChainIds$.next(registeredChainIds);
      localStorage.removeItem(this.chainInfosRequestedKey);
    } catch {
      localStorage.setItem(this.chainInfosRequestedKey, 'true');
    }
  }
}
