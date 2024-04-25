export enum ProposalVoteOption {
  VOTE_OPTION_YES = 'VOTE_OPTION_YES',
  VOTE_OPTION_ABSTAIN = 'VOTE_OPTION_ABSTAIN',
  VOTE_OPTION_NO = 'VOTE_OPTION_NO',
  VOTE_OPTION_NO_WITH_VETO = 'VOTE_OPTION_NO_WITH_VETO'
}

export const PROPOSAL_VOTE_OPTION_TITLE: Record<ProposalVoteOption, string> = {
  [ProposalVoteOption.VOTE_OPTION_YES]: 'Yes',
  [ProposalVoteOption.VOTE_OPTION_NO]: 'No',
  [ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO]: 'No with Veto',
  [ProposalVoteOption.VOTE_OPTION_ABSTAIN]: 'Abstain'
};
