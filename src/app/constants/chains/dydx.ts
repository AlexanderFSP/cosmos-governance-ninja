import { IChainInfoView } from '../../models/chain-info-view.model';

export const DYDX_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/dydx.svg',
  rpcUrl: 'https://dydx-rpc.publicnode.com:443',
  restUrl: 'https://dydx-rest.publicnode.com',
  description:
    'dYdX is a decentralized exchange (DEX) that allows users to trade perpetual futures contracts for over 35+ cryptocurrencies, including BTC, ETH, and SOL.',
  startDate: new Date(2023, 9, 26),
  txExplorerLink: 'https://www.mintscan.io/dydx/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-dydx.keplr.app',
    rest: 'https://lcd-dydx.keplr.app',
    chainId: 'dydx-mainnet-1',
    chainName: 'dYdX',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png',
    stakeCurrency: {
      coinDenom: 'DYDX',
      coinDecimals: 18,
      coinMinimalDenom: 'adydx',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png',
      coinGeckoId: 'dydx-chain'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'dydx',
      bech32PrefixAccPub: 'dydxpub',
      bech32PrefixValAddr: 'dydxvaloper',
      bech32PrefixValPub: 'dydxvaloperpub',
      bech32PrefixConsAddr: 'dydxvalcons',
      bech32PrefixConsPub: 'dydxvalconspub'
    },
    currencies: [
      {
        coinDenom: 'DYDX',
        coinDecimals: 18,
        coinMinimalDenom: 'adydx',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png',
        coinGeckoId: 'dydx-chain'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DYDX',
        coinDecimals: 18,
        coinMinimalDenom: 'adydx',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png',
        coinGeckoId: 'dydx-chain',
        gasPriceStep: {
          low: 12500000000,
          average: 12500000000,
          high: 20000000000
        }
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.03
        }
      }
    ],
    walletUrlForStaking: 'https://wallet.keplr.app/chains/dydx',
    features: []
  }
};
