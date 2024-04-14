import { Injectable, inject } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { ChainInfo, Window } from '@keplr-wallet/types';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeplrService {
  private readonly window = inject<Window>(WINDOW);

  public readonly isInstalled = !!this.window.keplr;

  private readonly registeredChainIds$ = new BehaviorSubject<string[]>([]);

  constructor() {
    this.determineRegisteredChainIds();
  }

  public isChainRegistered(chainId: string): Observable<boolean> {
    return this.registeredChainIds$.pipe(
      map((registeredChainIds) => registeredChainIds.includes(chainId))
    );
  }

  public async suggestChain(chainInfo: ChainInfo): Promise<void> {
    if (!this.window.keplr) {
      return;
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
      return;
    }

    try {
      const registeredChainIds = (
        await this.window.keplr.getChainInfosWithoutEndpoints()
      ).map((chainInfo) => chainInfo.chainId);

      this.registeredChainIds$.next(registeredChainIds);
    } catch {
      /* empty */
    }
  }
}
