import { IChainInfoView } from '../../models/chain-info-view.model';

export const COREUM_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/coreum.svg',
  rpcUrl: 'https://coreum-rpc.publicnode.com:443',
  restUrl: 'https://coreum-rest.publicnode.com',
  description:
    'Coreum is an enterprise-grade blockchain designed to meet the critical scalability, security, and interoperability needs of large enterprises.',
  startDate: new Date(2023, 2, 24),
  txExplorerLink: 'https://www.mintscan.io/coreum/tx/',
  fee: 1.6,
  info: {
    chainId: 'coreum-mainnet-1',
    chainName: 'Coreum',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png',
    rpc: 'https://full-node.mainnet-1.coreum.dev:26657',
    rest: 'https://full-node.mainnet-1.coreum.dev:1317',
    nodeProvider: {
      name: 'Coreum Full Node',
      website: 'https://www.coreum.com/',
      email: 'hello@coreum.com'
    },
    bip44: {
      coinType: 990
    },
    bech32Config: {
      bech32PrefixAccAddr: 'core',
      bech32PrefixAccPub: 'corepub',
      bech32PrefixValAddr: 'corevaloper',
      bech32PrefixValPub: 'corevaloperpub',
      bech32PrefixConsAddr: 'corevalcons',
      bech32PrefixConsPub: 'corevalconspub'
    },
    currencies: [
      {
        coinDenom: 'CORE',
        coinMinimalDenom: 'ucore',
        coinDecimals: 6,
        coinGeckoId: 'coreum'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CORE',
        coinMinimalDenom: 'ucore',
        coinDecimals: 6,
        coinGeckoId: 'coreum',
        gasPriceStep: {
          low: 0.0625,
          average: 0.0625,
          high: 0.0625
        }
      }
    ],
    stakeCurrency: {
      coinDenom: 'CORE',
      coinMinimalDenom: 'ucore',
      coinDecimals: 6,
      coinGeckoId: 'coreum'
    },
    features: ['cosmwasm']
  }
};
