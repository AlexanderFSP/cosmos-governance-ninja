export interface IPaginatedProposals {
  proposals: IProposal[];
  pagination: {
    next_key: string;
    /**
     * string($uint64)
     */
    total: '196';
  };
}

export interface IProposal {
  /**
   * string($uint64)
   */
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
  /**
   * string($date-time)
   */
  submit_time: string;
  /**
   * string($date-time)
   */
  deposit_end_time: string;
  total_deposit: [
    {
      denom: string;
      amount: string;
    }
  ];
  /**
   * string($date-time)
   */
  voting_start_time: string;
  /**
   * string($date-time)
   */
  voting_end_time: string;
}

export enum ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = 'PROPOSAL_STATUS_UNSPECIFIED',
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 'PROPOSAL_STATUS_DEPOSIT_PERIOD',
  PROPOSAL_STATUS_VOTING_PERIOD = 'PROPOSAL_STATUS_VOTING_PERIOD',
  PROPOSAL_STATUS_PASSED = 'PROPOSAL_STATUS_PASSED',
  PROPOSAL_STATUS_REJECTED = 'PROPOSAL_STATUS_REJECTED',
  PROPOSAL_STATUS_FAILED = 'PROPOSAL_STATUS_FAILED'
}
