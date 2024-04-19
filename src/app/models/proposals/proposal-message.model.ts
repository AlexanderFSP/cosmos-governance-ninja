export interface IProposalMessage {
  '@type': '/cosmos.gov.v1.MsgExecLegacyContent';
  content: {
    '@type': string;
    title: string;
    description: string;
  };
  authority: string;
}
