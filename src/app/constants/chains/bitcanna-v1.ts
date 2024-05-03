import { IChainInfoView } from '../../models/chain-info-view.model';

export const BITCANNA_V1_CHAIN_INFO: IChainInfoView = {
  logoSrc: '', // TODO: (AlexanderFSP)
  rpcUrl: 'https://bitcanna-rpc.publicnode.com:443',
  restUrl: 'https://bitcanna-rest.publicnode.com',
  description: '', // TODO: (AlexanderFSP)
  startDate: new Date(), // TODO: (AlexanderFSP)
  txExplorerLink: '', // TODO: (AlexanderFSP)
  info: {
    chainId: 'bitcanna-1',
    chainName: 'BitCanna v1',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bitcanna/chain.png',
    rpc: 'https://rpc.bitcanna.io/',
    rest: 'https://lcd.bitcanna.io/',
    nodeProvider: {
      name: 'BitCanna Node',
      email: 'dev@bitcanna.io',
      website: 'https://www.bitcanna.io'
    },
    stakeCurrency: {
      coinDenom: 'BCNA',
      coinMinimalDenom: 'ubcna',
      coinDecimals: 6,
      coinGeckoId: 'bitcanna'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'bcna',
      bech32PrefixAccPub: 'bcnapub',
      bech32PrefixValAddr: 'bcnavaloper',
      bech32PrefixValPub: 'bcnavaloperpub',
      bech32PrefixConsAddr: 'bcnavalcons',
      bech32PrefixConsPub: 'bcnavalconspub'
    },
    currencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'ubcna',
        coinDecimals: 6,
        coinGeckoId: 'bitcanna',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bitcanna/chain.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'ubcna',
        coinDecimals: 6,
        coinGeckoId: 'bitcanna',
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.01
        }
      }
    ],
    features: [],
    walletUrlForStaking: 'https://wallet.bitcanna.io'
  }
};
