import { IProposal } from './proposal.model';
import { ProposalStatus } from './proposal-status.model';

export interface IPaginatedProposals {
  proposals: IProposal[];
  pagination: {
    /** string($byte) */
    next_key: string | null;
    /** string($uint64) */
    total: string;
  };
}

export interface IPaginatedProposalsQueryParams {
  proposal_status?: ProposalStatus;
  voter?: string;
  depositor?: string;
  /** string($byte) */
  'pagination.key'?: string;
  /** string($uint64) */
  'pagination.offset'?: string;
  /** string($uint64) */
  'pagination.limit'?: string;
  'pagination.count_total'?: boolean;
  'pagination.reverse'?: boolean;
}
