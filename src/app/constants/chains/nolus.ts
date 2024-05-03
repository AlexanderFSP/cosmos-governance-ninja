import { IChainInfoView } from '../../models/chain-info-view.model';

export const NOLUS_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/nolus.svg',
  rpcUrl: 'https://nolus-rpc.publicnode.com:443',
  restUrl: 'https://nolus-rest.publicnode.com',
  description:
    "Nolus is revolutionizing the realm of crypto borrowing, inspired by the traditional finance leasing model. In conventional leasing, customers can secure assets by paying just a part of their total value upfront, utilize them for the lease's duration, and eventually acquire full ownership after settling the loan.",
  startDate: new Date(2023, 5, 23),
  txExplorerLink: 'https://nolus.explorers.guru/transaction/',
  info: {
    rpc: 'https://nolus-rpc.lavenderfive.com:443',
    rest: 'https://nolus-api.lavenderfive.com:443',
    nodeProvider: {
      name: 'Nolus',
      email: 'register@nolus.io',
      website: 'https://nolus.io/'
    },
    chainId: 'pirin-1',
    chainName: 'Nolus',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
    stakeCurrency: {
      coinDenom: 'NLS',
      coinMinimalDenom: 'unls',
      coinDecimals: 6,
      coinGeckoId: 'nolus',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'nolus',
      bech32PrefixAccPub: 'noluspub',
      bech32PrefixValAddr: 'nolusvaloper',
      bech32PrefixValPub: 'nolusvaloperpub',
      bech32PrefixConsAddr: 'nolusvalcons',
      bech32PrefixConsPub: 'nolusvalconspub'
    },
    currencies: [
      {
        coinDenom: 'NLS',
        coinMinimalDenom: 'unls',
        coinDecimals: 6,
        coinGeckoId: 'nolus',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'NLS',
        coinMinimalDenom: 'unls',
        coinDecimals: 6,
        coinGeckoId: 'nolus',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.05
        }
      }
    ],
    features: ['cosmwasm']
  }
};
