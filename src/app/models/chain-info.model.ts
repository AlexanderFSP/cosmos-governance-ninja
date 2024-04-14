import { ChainInfo } from '@keplr-wallet/types';

export interface IChainInfo {
  id: string;
  logoSrc: string;
  rpcUrl: string;
  name: string;
  ticker: string;
  description: string;
  startDate: Date;
  info: ChainInfo;
}
