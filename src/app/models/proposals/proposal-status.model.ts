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
