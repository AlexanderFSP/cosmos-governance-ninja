import { IChainInfo } from '../models/chain-info.model';

export const CHAIN_LIST: IChainInfo[] = [
  {
    id: 'cosmoshub-4',
    logoSrc: 'assets/images/chains/cosmos-hub.svg',
    rpcUrl: 'https://cosmos-rpc.publicnode.com:443',
    name: 'Cosmos Hub',
    ticker: 'ATOM',
    description:
      'Cosmos Hub is the first of thousands of interconnected blockchains that will eventually comprise the Cosmos Network. The primary token of the Cosmos Hub is the ATOM, but the Hub will support many tokens in the future.',
    startDate: new Date(2019, 2, 13),
  },
  {
    id: 'osmosis-1',
    logoSrc: 'assets/images/chains/osmosis.svg',
    rpcUrl: 'https://cosmos-rpc.publicnode.com:443',
    name: 'Osmosis',
    ticker: 'OSMO',
    description:
      'Osmosis is an advanced automated market maker (AMM) protocol that allows developers to build customized AMMs with sovereign liquidity pools. Built using the Cosmos SDK, Osmosis utilizes Inter-Blockchain Communication (IBC) to enable cross-chain transactions.',
    startDate: new Date(2021, 5, 18),
  },
];
