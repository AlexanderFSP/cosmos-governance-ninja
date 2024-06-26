import { IChainInfoView } from '../../models/chain-info-view.model';

export const TERITORI_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/teritori.png',
  rpcUrl: 'https://teritori-rpc.publicnode.com:443',
  restUrl: 'https://teritori-rest.publicnode.com',
  description:
    'Teritori is a web3 Super App powered by its own autonomous blockchain and TeritoriOS, the interchain Operating System.',
  startDate: new Date(2022, 9, 3),
  txExplorerLink: 'https://www.mintscan.io/teritori/tx/',
  fee: 1.6,
  info: {
    chainId: 'teritori-1',
    chainName: 'Teritori',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/chain.png',
    rpc: 'https://rpc.mainnet.teritori.com',
    rest: 'https://rest.mainnet.teritori.com',
    nodeProvider: {
      name: 'Teritori',
      email: 'support@teritori.com',
      website: 'https://app.teritori.com/'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'tori',
      bech32PrefixAccPub: 'toripub',
      bech32PrefixValAddr: 'torivaloper',
      bech32PrefixValPub: 'torivaloperpub',
      bech32PrefixConsAddr: 'torivalcons',
      bech32PrefixConsPub: 'torivalconspub'
    },
    currencies: [
      {
        coinDenom: 'TORI',
        coinMinimalDenom: 'utori',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png',
        coinGeckoId: 'teritori'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'TORI',
        coinMinimalDenom: 'utori',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png',
        coinDecimals: 6,
        coinGeckoId: 'teritori',
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04
        }
      }
    ],
    stakeCurrency: {
      coinDenom: 'TORI',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coinGeckoId: 'teritori',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png'
    },
    features: ['cosmwasm'],
    walletUrlForStaking: 'https://app.teritori.com/staking'
  }
};
