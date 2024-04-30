import { ProposalVoteOption } from '../../../../../models/proposals/proposal-vote-option.model';

export interface IVoteDialogOption {
  value: ProposalVoteOption;
  className: string;
}

export const VOTE_OPTIONS: IVoteDialogOption[] = [
  {
    value: ProposalVoteOption.VOTE_OPTION_YES,
    className: 'yes'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_NO,
    className: 'no'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO,
    className: 'no-with-veto'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_ABSTAIN,
    className: 'abstain'
  }
];
