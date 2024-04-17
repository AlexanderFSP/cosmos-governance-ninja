import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPaginatedProposals } from '../models/proposal.model';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {
  private readonly http = inject(HttpClient);

  /**
   * @see https://api-cosmoshub-ia.cosmosia.notional.ventures/swagger/#/Query/Proposals
   */
  public getPaginatedProposals(restUrl: string): Observable<IPaginatedProposals> {
    return this.http.get<IPaginatedProposals>(`${restUrl}/cosmos/gov/v1beta1/proposals`);
  }
}
