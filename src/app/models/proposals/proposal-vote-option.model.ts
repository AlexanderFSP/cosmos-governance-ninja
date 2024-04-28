export enum ProposalVoteOption {
  VOTE_OPTION_YES = 'VOTE_OPTION_YES',
  VOTE_OPTION_ABSTAIN = 'VOTE_OPTION_ABSTAIN',
  VOTE_OPTION_NO = 'VOTE_OPTION_NO',
  VOTE_OPTION_NO_WITH_VETO = 'VOTE_OPTION_NO_WITH_VETO'
}

export const PROPOSAL_VOTE_OPTION_TITLE: Record<ProposalVoteOption, string> = {
  [ProposalVoteOption.VOTE_OPTION_YES]: 'Yes',
  [ProposalVoteOption.VOTE_OPTION_ABSTAIN]: 'Abstain',
  [ProposalVoteOption.VOTE_OPTION_NO]: 'No',
  [ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO]: 'No with Veto'
};

export const PROPOSAL_VOTE_OPTION_NUMBER: Record<ProposalVoteOption, number> = {
  [ProposalVoteOption.VOTE_OPTION_YES]: 1,
  [ProposalVoteOption.VOTE_OPTION_ABSTAIN]: 2,
  [ProposalVoteOption.VOTE_OPTION_NO]: 3,
  [ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO]: 4
};
