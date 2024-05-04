import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPaginatedProposals, IPaginatedProposalsQueryParams } from '../models/proposals/paginated-proposals.model';
import { IProposalVote, IProposalVoteQueryParams } from '../models/proposals/proposal-vote.model';

/**
 * Http service for receiving information about proposals from blockchain via REST APIs
 */
@Injectable({
  providedIn: 'root'
})
export class ProposalsService {
  private readonly http = inject(HttpClient);

  /**
   * @see https://api-cosmoshub-ia.cosmosia.notional.ventures/swagger/#/Query/GovV1Proposal
   */
  public getPaginatedProposals(
    restUrl: string,
    params?: IPaginatedProposalsQueryParams
  ): Observable<IPaginatedProposals> {
    return this.http.get<IPaginatedProposals>(`${restUrl}/cosmos/gov/v1/proposals`, { params: { ...params } });
  }

  /**
   * @see https://api-cosmoshub-ia.cosmosia.notional.ventures/swagger/#/Query/GovV1Vote
   */
  public getProposalVote(restUrl: string, params: IProposalVoteQueryParams): Observable<IProposalVote> {
    return this.http.get<IProposalVote>(
      `${restUrl}/cosmos/gov/v1/proposals/${params.proposal_id}/votes/${params.voter}`,
      { params: { ...params } }
    );
  }
}
