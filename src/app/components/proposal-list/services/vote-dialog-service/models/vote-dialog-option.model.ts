import { ProposalVoteOption } from 'src/app/models/proposals/proposal-vote-option.model';

export interface IVoteDialogOption {
  value: ProposalVoteOption;
  title: string;
  className?: string;
}

export const VOTE_OPTIONS: IVoteDialogOption[] = [
  {
    value: ProposalVoteOption.VOTE_OPTION_YES,
    title: 'Yes',
    className: 'yes'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_NO,
    title: 'No',
    className: 'no'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_NO_WITH_VETO,
    title: 'No with Veto',
    className: 'no-with-veto'
  },
  {
    value: ProposalVoteOption.VOTE_OPTION_ABSTAIN,
    title: 'Abstain',
    className: 'abstain'
  }
];
