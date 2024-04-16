import { IChainInfoView } from '../models/chain-info-view.model';
import { COSMOS_HUB_CHAIN_INFO, DYMENSION_CHAIN_INFO, NOLUS_CHAIN_INFO, OSMOSIS_CHAIN_INFO } from './chains';

/**
 * TODO: (AlexanderFSP) Add Kujira, Kava, dYdX, Juno, Evmos, Axelar, Saga, Akash, Stride, Stargaze, Passage, etc.
 *
 * @see https://publicnode.com/
 */
export const CHAIN_LIST: IChainInfoView[] = [
  COSMOS_HUB_CHAIN_INFO,
  OSMOSIS_CHAIN_INFO,
  DYMENSION_CHAIN_INFO,
  NOLUS_CHAIN_INFO
];
