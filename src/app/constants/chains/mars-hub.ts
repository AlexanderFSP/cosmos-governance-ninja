import { IChainInfoView } from '../../models/chain-info-view.model';

export const MARS_HUB_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/mars-hub.png',
  rpcUrl: 'https://mars-rpc.publicnode.com:443',
  restUrl: 'https://mars-rest.publicnode.com',
  description:
    'Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.',
  startDate: new Date(2023, 0, 31),
  txExplorerLink: 'https://www.mintscan.io/mars-protocol/tx/',
  fee: 1.6,
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
