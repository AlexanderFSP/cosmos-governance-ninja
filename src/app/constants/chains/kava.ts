import { IChainInfoView } from '../../models/chain-info-view.model';

export const KAVA_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/kava.svg',
  rpcUrl: 'https://kava-rpc.publicnode.com:443',
  restUrl: 'https://kava-rest.publicnode.com',
  description:
    'Kava is a lightning-fast Layer-1 blockchain featuring a developer-optimized co-chain architecture that combines the two most used permissionless ecosystems - Ethereum and Cosmos - into a single, scalable, network.',
  startDate: new Date(2019, 10, 5),
  txExplorerLink: 'https://www.mintscan.io/kava/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-kava.keplr.app',
    rest: 'https://lcd-kava.keplr.app',
    chainId: 'kava_2222-10',
    chainName: 'Kava',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/chain.png',
    stakeCurrency: {
      coinDenom: 'KAVA',
      coinMinimalDenom: 'ukava',
      coinDecimals: 6,
      coinGeckoId: 'kava',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/kava',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/kava',
    bip44: {
      coinType: 459
    },
    alternativeBIP44s: [
      {
        coinType: 118
      }
    ],
    bech32Config: {
      bech32PrefixAccAddr: 'kava',
      bech32PrefixAccPub: 'kavapub',
      bech32PrefixValAddr: 'kavavaloper',
      bech32PrefixValPub: 'kavavaloperpub',
      bech32PrefixConsAddr: 'kavavalcons',
      bech32PrefixConsPub: 'kavavalconspub'
    },
    currencies: [
      {
        coinDenom: 'KAVA',
        coinMinimalDenom: 'ukava',
        coinDecimals: 6,
        coinGeckoId: 'kava',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png'
      },
      {
        coinDenom: 'SWP',
        coinMinimalDenom: 'swp',
        coinDecimals: 6,
        coinGeckoId: 'kava-swap'
      },
      {
        coinDenom: 'USDX',
        coinMinimalDenom: 'usdx',
        coinDecimals: 6,
        coinGeckoId: 'usdx'
      },
      {
        coinDenom: 'HARD',
        coinMinimalDenom: 'hard',
        coinDecimals: 6
      },
      {
        coinDenom: 'BNB',
        coinMinimalDenom: 'bnb',
        coinDecimals: 8
      },
      {
        coinDenom: 'BTCB',
        coinMinimalDenom: 'btcb',
        coinDecimals: 8
      },
      {
        coinDenom: 'BUSD',
        coinMinimalDenom: 'busd',
        coinDecimals: 8
      },
      {
        coinDenom: 'XRPB',
        coinMinimalDenom: 'xrpb',
        coinDecimals: 8
      },
      {
        coinDenom: 'USDt',
        coinMinimalDenom: 'erc20/tether/usdt',
        coinDecimals: 6,
        coinGeckoId: 'tether',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/uusdt.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'KAVA',
        coinMinimalDenom: 'ukava',
        coinDecimals: 6,
        coinGeckoId: 'kava',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png',
        gasPriceStep: {
          low: 0.05,
          average: 0.1,
          high: 0.25
        }
      }
    ],
    features: ['authz-msg-revoke-fixed']
  }
};
