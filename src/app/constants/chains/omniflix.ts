import { IChainInfoView } from '../../models/chain-info-view.model';

export const OMNIFLIX_CHAIN_INFO: IChainInfoView = {
  logoSrc: '',
  rpcUrl: 'https://omniflix-rpc.publicnode.com:443',
  restUrl: 'https://omniflix-rest.publicnode.com',
  description: '',
  startDate: new Date(),
  txExplorerLink: '',
  info: {
    rpc: 'https://rpc-omniflixhub.keplr.app',
    rest: 'https://lcd-omniflixhub.keplr.app',
    chainId: 'omniflixhub-1',
    chainName: 'OmniFlix',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/chain.png',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/omniflix',
    stakeCurrency: {
      coinDenom: 'FLIX',
      coinMinimalDenom: 'uflix',
      coinDecimals: 6,
      coinGeckoId: 'omniflix-network',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'omniflix',
      bech32PrefixAccPub: 'omniflixpub',
      bech32PrefixValAddr: 'omniflixvaloper',
      bech32PrefixValPub: 'omniflixvaloperpub',
      bech32PrefixConsAddr: 'omniflixvalcons',
      bech32PrefixConsPub: 'omniflixvalconspub'
    },
    currencies: [
      {
        coinDenom: 'FLIX',
        coinMinimalDenom: 'uflix',
        coinDecimals: 6,
        coinGeckoId: 'omniflix-network',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'FLIX',
        coinMinimalDenom: 'uflix',
        coinDecimals: 6,
        coinGeckoId: 'omniflix-network',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png',
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.025
        }
      }
    ],
    features: []
  }
};
