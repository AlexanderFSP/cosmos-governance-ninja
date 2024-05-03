import { IChainInfoView } from '../../models/chain-info-view.model';

export const MARS_HUB_CHAIN_INFO: IChainInfoView = {
  logoSrc: '',
  rpcUrl: 'https://mars-rpc.publicnode.com:443',
  restUrl: 'https://mars-rest.publicnode.com',
  description: '',
  startDate: new Date(),
  txExplorerLink: '',
  info: {
    rpc: 'https://rpc-mars.keplr.app',
    rest: 'https://lcd-mars.keplr.app',
    chainId: 'mars-1',
    chainName: 'Mars Hub',
    stakeCurrency: {
      coinDenom: 'MARS',
      coinMinimalDenom: 'umars',
      coinDecimals: 6,
      coinGeckoId: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/mars-hub',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/mars-hub',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/chain.png',
    bip44: {
      coinType: 118
    },
    alternativeBIP44s: [
      {
        coinType: 330
      }
    ],
    bech32Config: {
      bech32PrefixAccAddr: 'mars',
      bech32PrefixAccPub: 'marspub',
      bech32PrefixValAddr: 'marsvaloper',
      bech32PrefixValPub: 'marsvaloperpub',
      bech32PrefixConsAddr: 'marsvalcons',
      bech32PrefixConsPub: 'marsvalconspub'
    },
    currencies: [
      {
        coinDenom: 'MARS',
        coinMinimalDenom: 'umars',
        coinDecimals: 6,
        coinGeckoId: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'MARS',
        coinMinimalDenom: 'umars',
        coinDecimals: 6,
        coinGeckoId: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png',
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.01
        }
      }
    ],
    features: ['authz-msg-revoke-fixed']
  }
};
