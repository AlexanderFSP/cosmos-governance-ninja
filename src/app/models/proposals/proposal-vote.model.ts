import { ProposalVoteOption } from './proposal-vote-option.model';

export interface IProposalVote {
  vote: {
    /** string($uint64) */
    proposal_id: string;
    voter: string;
    options: [
      {
        option: ProposalVoteOption;
        weight: string;
      }
    ];
    metadata: string;
  };
}

export interface IProposalVoteQueryParams {
  /** string($uint64) */
  proposal_id: string;
  voter: string;
}
