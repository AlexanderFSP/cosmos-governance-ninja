import { ChainInfo } from '@keplr-wallet/types';

export interface IChainInfoView {
  logoSrc: string;
  /**
   * Allnodes RPC endpoint link
   *
   * @see https://publicnode.com/
   */
  rpcUrl: string;
  /**
   * Short chain description for `ChainCardComponent`
   */
  description: string;
  /**
   * First block date for `ChainCardComponent`
   */
  startDate: Date;
  /**
   * Complete information about the chain.
   * Implements the {@link ChainInfo} interface, which is required to add a new network using `window.keplr.experimentalSuggestChain`
   */
  info: ChainInfo;
}
