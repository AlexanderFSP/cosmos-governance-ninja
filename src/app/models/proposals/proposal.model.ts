import { IProposalMessage } from './proposal-message.model';
import { ProposalStatus } from './proposal-status.model';

export interface IProposal {
  /** string($uint64) */
  id: string;
  messages: IProposalMessage[];
  status: ProposalStatus;
  final_tally_result: {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
  };
  /** string($date-time) */
  submit_time: string;
  /** string($date-time) */
  deposit_end_time: string;
  total_deposit: [
    {
      denom: string;
      amount: string;
    }
  ];
  /** string($date-time) */
  voting_start_time: string;
  /** string($date-time) */
  voting_end_time: string;
  metadata: string;
  title?: string;
  summary?: string;
  proposer: string;
}
