import { IChainInfoView } from '../../models/chain-info-view.model';

export const QUICKSILVER_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/quicksilver.png',
  rpcUrl: 'https://quicksilver-rpc.publicnode.com:443',
  restUrl: 'https://quicksilver-rest.publicnode.com',
  description:
    'Quicksilver is a liquid staking zone which leverages interchain accounts and interchain queries to create permissionless liquid staking qAssets for any Cosmos-SDK chains.',
  startDate: new Date(2022, 11, 16),
  txExplorerLink: 'https://www.mintscan.io/quicksilver/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-quicksilver.keplr.app',
    rest: 'https://lcd-quicksilver.keplr.app',
    chainId: 'quicksilver-2',
    chainName: 'Quicksilver',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png',
    stakeCurrency: {
      coinDenom: 'QCK',
      coinMinimalDenom: 'uqck',
      coinDecimals: 6,
      coinGeckoId: 'quicksilver',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png'
    },
    walletUrlForStaking: 'https://wallet.keplr.app/chains/quicksilver',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'quick',
      bech32PrefixAccPub: 'quickpub',
      bech32PrefixValAddr: 'quickvaloper',
      bech32PrefixValPub: 'quickvaloperpub',
      bech32PrefixConsAddr: 'quickvalcons',
      bech32PrefixConsPub: 'quickvalconspub'
    },
    currencies: [
      {
        coinDenom: 'QCK',
        coinMinimalDenom: 'uqck',
        coinDecimals: 6,
        coinGeckoId: 'quicksilver',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png'
      },
      {
        coinDenom: 'qSTARS',
        coinMinimalDenom: 'uqstars',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqstars.png'
      },
      {
        coinDenom: 'qATOM',
        coinMinimalDenom: 'uqatom',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqatom.png'
      },
      {
        coinDenom: 'qREGEN',
        coinMinimalDenom: 'uqregen',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqregen.png'
      },
      {
        coinDenom: 'qOSMO',
        coinMinimalDenom: 'uqosmo',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqosmo.png'
      },
      {
        coinDenom: 'qSOMM',
        coinMinimalDenom: 'uqsomm',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqsomm.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'QCK',
        coinMinimalDenom: 'uqck',
        coinDecimals: 6,
        coinGeckoId: 'quicksilver',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png',
        gasPriceStep: {
          low: 0.0001,
          average: 0.0001,
          high: 0.00025
        }
      }
    ],
    features: ['authz-msg-revoke-fixed']
  }
};
