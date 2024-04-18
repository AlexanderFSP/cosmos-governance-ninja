export interface IPaginatedProposals {
  proposals: IProposal[];
  pagination: {
    /** string($byte) */
    next_key: string | null;
    /** string($uint64) */
    total: string;
  };
}

export interface IProposal {
  /** string($uint64) */
  proposal_id: string;
  content: {
    '@type': '/cosmos.gov.v1beta1.TextProposal';
    title: string;
    description: string;
  };
  status: ProposalStatus;
  final_tally_result: {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
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
}

export enum ProposalStatus {
  /**
   * Defines the default propopsal status
   */
  PROPOSAL_STATUS_UNSPECIFIED = 'PROPOSAL_STATUS_UNSPECIFIED',
  /**
   * Defines a proposal status during the deposit period
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 'PROPOSAL_STATUS_DEPOSIT_PERIOD',
  /**
   * Defines a proposal status during the voting period
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 'PROPOSAL_STATUS_VOTING_PERIOD',
  /**
   * Defines a proposal status of a proposal that has passed
   */
  PROPOSAL_STATUS_PASSED = 'PROPOSAL_STATUS_PASSED',
  /**
   * Defines a proposal status of a proposal that has been rejected
   */
  PROPOSAL_STATUS_REJECTED = 'PROPOSAL_STATUS_REJECTED',
  /**
   * Defines a proposal status of a proposal that has failed
   */
  PROPOSAL_STATUS_FAILED = 'PROPOSAL_STATUS_FAILED'
}

export interface IPaginatedProposalsQueryParams {
  proposal_status?: string;
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
