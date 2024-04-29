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
   * Allnodes REST endpoint link
   */
  restUrl: string;
  /**
   * Short chain description for `ChainCardComponent`
   */
  description: string;
  /**
   * First block date for `ChainCardComponent`
   */
  startDate: Date;
  /**
   * Multiplier that will be applied to the simulated gas limit value.
   * Value 'auto' equals to `1.3` or `1.4` multiplier right now (depends on method, made PR to sync value @see https://github.com/cosmos/cosmjs/pull/1584)
   *
   * @see https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/signingstargateclient.ts#L311
   * @see https://github.com/cosmos/cosmos-sdk/issues/16020
   *
   * @default 'auto'
   */
  fee?: number | 'auto';
  /**
   * Complete information about the chain.
   * Implements the {@link ChainInfo} interface, which is required to add a new network using `window.keplr.experimentalSuggestChain`
   */
  info: ChainInfo;
}
