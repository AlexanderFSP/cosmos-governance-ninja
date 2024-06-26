import { IChainInfoView } from '../../models/chain-info-view.model';

export const STARGAZE_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/stargaze.svg',
  rpcUrl: 'https://stargaze-rpc.publicnode.com:443',
  restUrl: 'https://stargaze-rest.publicnode.com',
  description: 'Community-owned app chain for NFTs with CosmWasm smart contracts. 100% carbon neutral.',
  startDate: new Date(2021, 9, 29),
  txExplorerLink: 'https://www.mintscan.io/stargaze/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-stargaze.keplr.app',
    rest: 'https://lcd-stargaze.keplr.app',
    chainId: 'stargaze-1',
    chainName: 'Stargaze',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png',
    stakeCurrency: {
      coinDenom: 'STARS',
      coinMinimalDenom: 'ustars',
      coinDecimals: 6,
      coinGeckoId: 'stargaze',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/stargaze',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/stargaze',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'stars',
      bech32PrefixAccPub: 'starspub',
      bech32PrefixValAddr: 'starsvaloper',
      bech32PrefixValPub: 'starsvaloperpub',
      bech32PrefixConsAddr: 'starsvalcons',
      bech32PrefixConsPub: 'starsvalconspub'
    },
    currencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coinGeckoId: 'stargaze',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png'
      },
      {
        coinDenom: 'STRDST',
        coinMinimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/dust.png'
      },
      {
        coinDenom: 'GAZE',
        coinMinimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/gaze.png'
      },
      {
        coinDenom: 'OHH',
        coinMinimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ohh.png'
      },
      {
        coinDenom: 'BRNCH',
        coinMinimalDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/brnch.png'
      },
      {
        coinDenom: 'SNEAKY',
        coinMinimalDenom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/sneaky.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coinGeckoId: 'stargaze',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png',
        gasPriceStep: {
          low: 1,
          average: 1.1,
          high: 1.2
        }
      }
    ],
    features: []
  }
};
