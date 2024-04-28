import { ProposalVoteOption } from '../../../../../models/proposals/proposal-vote-option.model';

export interface IProposalVoteView {
  /**
   * Vote which the current user **has selected on the UI in the current session**
   */
  current: ProposalVoteOption | null;
  /**
   * Vote which the current user **has already submitted to the blockchain**
   */
  readonly submitted: ProposalVoteOption | null;
}
