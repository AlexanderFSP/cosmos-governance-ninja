import { IChainInfoView } from '../../models/chain-info-view.model';

export const COSMOS_HUB_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/cosmos-hub.svg',
  rpcUrl: 'https://cosmos-rpc.publicnode.com:443',
  restUrl: 'https://cosmos-rest.publicnode.com',
  description:
    'Cosmos Hub is the first of thousands of interconnected blockchains that will eventually comprise the Cosmos Network. The primary token of the Cosmos Hub is the ATOM, but the Hub will support many tokens in the future.',
  startDate: new Date(2019, 2, 13),
  fee: 1.6,
  info: {
    bech32Config: {
      bech32PrefixAccAddr: 'cosmos',
      bech32PrefixAccPub: 'cosmospub',
      bech32PrefixConsAddr: 'cosmosvalcons',
      bech32PrefixConsPub: 'cosmosvalconspub',
      bech32PrefixValAddr: 'cosmosvaloper',
      bech32PrefixValPub: 'cosmosvaloperpub'
    },
    bip44: {
      coinType: 118
    },
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos Hub',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png',
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: 'ATOM',
        coinGeckoId: 'cosmos',
        coinMinimalDenom: 'uatom',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png'
      }
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: 'ATOM',
        coinGeckoId: 'cosmos',
        coinMinimalDenom: 'uatom',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005
        }
      }
    ],
    rest: 'https://lcd-cosmoshub.keplr.app',
    rpc: 'https://rpc-cosmoshub.keplr.app',
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: 'ATOM',
      coinGeckoId: 'cosmos',
      coinMinimalDenom: 'uatom',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png'
    },
    walletUrlForStaking: 'https://wallet.keplr.app/chains/cosmos-hub'
  }
};
