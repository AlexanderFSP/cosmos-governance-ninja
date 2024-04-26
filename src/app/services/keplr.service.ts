import { inject, Injectable } from '@angular/core';
import { ChainInfo, Window } from '@keplr-wallet/types';
import { WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeplrService {
  public readonly isInstalled: boolean;

  private readonly window = inject<Window>(WINDOW);
  private readonly registeredChainIds$ = new BehaviorSubject<string[]>([]);

  constructor() {
    this.isInstalled = !!this.window.keplr;

    this.determineRegisteredChainIds();
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
