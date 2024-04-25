import { inject, Injectable } from '@angular/core';

import { ProposalVoteOption } from '../../../models/proposals/proposal-vote-option.model';
import { ProposalsService } from '../../../services/proposals.service';

/**
 * TODO: (AlexanderFSP) Stateful service to retrieve, store & manage user's votes
 */
@Injectable()
export class ProposalVotesService {
  /**
   * Map with votes on proposals in `PROPOSAL_STATUS_VOTING_PERIOD` status which
   * the current user **has selected on the UI in the current session**
   */
  private readonly votes: Record<string, ProposalVoteOption> = {};
  /**
   * Map with votes on proposals in `PROPOSAL_STATUS_VOTING_PERIOD` status which
   * the current user **has already submitted to the blockchain**
   */
  private readonly submittedVotes: Record<string, ProposalVoteOption> = {};

  private readonly proposalsService = inject(ProposalsService);

  public getVote(id: string): ProposalVoteOption | undefined {
    return this.votes[id] || this.submittedVotes[id];
  }

  public setVote(id: string, option?: ProposalVoteOption | null): void {
    if (!option || this.submittedVotes[id] === option) {
      delete this.votes[id];

      return;
    }

    this.votes[id] = option;
  }
}
