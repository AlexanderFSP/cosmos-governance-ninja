export enum ProposalVoteOption {
  VOTE_OPTION_YES = 1,
  VOTE_OPTION_ABSTAIN = 2,
  VOTE_OPTION_NO = 3,
  VOTE_OPTION_NO_WITH_VETO = 4
}

export const PROPOSAL_VOTE_OPTION_TITLE: Record<ProposalVoteOption, string> = {
  [ProposalVoteOption.VOTE_OPTION_YES]: 'Yes',
  [ProposalVoteOption.VOTE_OPTION_NO]: 'No',
  [ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO]: 'No with Veto',
  [ProposalVoteOption.VOTE_OPTION_ABSTAIN]: 'Abstain'
};
