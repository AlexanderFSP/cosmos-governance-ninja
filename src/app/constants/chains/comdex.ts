import { IChainInfoView } from '../../models/chain-info-view.model';

export const COMDEX_CHAIN_INFO: IChainInfoView = {
  logoSrc: '', // TODO: (AlexanderFSP)
  rpcUrl: 'https://comdex-rpc.publicnode.com:443',
  restUrl: 'https://comdex-rest.publicnode.com',
  description: '', // TODO: (AlexanderFSP)
  startDate: new Date(), // TODO: (AlexanderFSP)
  txExplorerLink: '', // TODO: (AlexanderFSP)
  info: {
    rpc: 'https://rpc.comdex.one',
    rest: 'https://rest.comdex.one',
    chainId: 'comdex-1',
    chainName: 'Comdex',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex/chain.png',
    nodeProvider: {
      name: 'Comdex Node',
      email: 'info@comdex.one',
      website: 'https://comdex.one'
    },
    stakeCurrency: {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6,
      coinGeckoId: 'comdex'
    },
    walletUrl: 'https://app.harborprotocol.one',
    walletUrlForStaking: 'https://comdex.omniflix.co/stake',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'comdex',
      bech32PrefixAccPub: 'comdexpub',
      bech32PrefixValAddr: 'comdexvaloper',
      bech32PrefixValPub: 'comdexvaloperpub',
      bech32PrefixConsAddr: 'comdexvalcons',
      bech32PrefixConsPub: 'comdexvalconspub'
    },
    currencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coinGeckoId: 'comdex',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex/chain.png'
      },
      {
        coinDenom: 'CMST',
        coinMinimalDenom: 'ucmst',
        coinDecimals: 6
      },
      {
        coinDenom: 'HARBOR',
        coinMinimalDenom: 'uharbor',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coinGeckoId: 'comdex',
        gasPriceStep: {
          low: 2,
          average: 3,
          high: 4
        }
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'ibc/961FA3E54F5DCCA639F37A7C45F7BBE41815579EF1513B5AFBEFCFEB8F256352',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01
        }
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'ibc/D031367F58DFD5EED54A49ADCB4EFB44AD9ECCAE383708BFDCCACF3CF463B77C',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
        gasPriceStep: {
          low: 0.0002,
          average: 0.0005,
          high: 0.0008
        }
      }
    ],
    features: ['cosmwasm']
  }
};
