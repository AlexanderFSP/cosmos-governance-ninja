import { inject, Injectable } from '@angular/core';
import { ChainInfo, Key, Window } from '@keplr-wallet/types';
import { WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

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
    if (!localStorage.getItem(this.chainInfosRequestedKey)) {
      this.determineRegisteredChainIds();
      localStorage.setItem(this.chainInfosRequestedKey, 'true');
    }
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

  public async getKey(chainId: string): Promise<Key> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    // TODO: (AlexanderFSP) Maybe we should additionally call `KeplrService#enable` here?

    return this.window.keplr.getKey(chainId);
  }

  public async suggestChain(chainInfo: ChainInfo): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    try {
      await this.window.keplr.experimentalSuggestChain(chainInfo);

      this.determineRegisteredChainIds();
    } catch {
      /* empty */
    }
  }

  private async determineRegisteredChainIds(): Promise<void> {
    if (!this.window.keplr) {
      throw new Error('Keplr is not installed');
    }

    try {
      const registeredChainIds = (await this.window.keplr.getChainInfosWithoutEndpoints()).map(
        chainInfo => chainInfo.chainId
      );

      this.registeredChainIds$.next(registeredChainIds);
    } catch {
      /* empty */
    }
  }
}
