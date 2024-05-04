import { IChainInfoView } from '../../models/chain-info-view.model';

export const SAGA_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/saga.png',
  rpcUrl: 'https://saga-rpc.publicnode.com:443',
  restUrl: 'https://saga-rest.publicnode.com',
  description:
    'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or «Chainlets», that provide applications with infinite horizontal scalability.',
  startDate: new Date(2024, 3, 8),
  txExplorerLink: 'https://www.mintscan.io/saga/tx/',
  fee: 1.6,
  info: {
    chainId: 'ssc-1',
    chainName: 'Saga',
    rpc: 'https://rpc-saga.keplr.app',
    rest: 'https://lcd-saga.keplr.app',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png',
    bip44: {
      coinType: 118
    },
    walletUrlForStaking: 'https://wallet.keplr.app/chains/saga',
    bech32Config: {
      bech32PrefixAccAddr: 'saga',
      bech32PrefixAccPub: 'sagapub',
      bech32PrefixValAddr: 'sagavaloper',
      bech32PrefixValPub: 'sagavaloperpub',
      bech32PrefixConsAddr: 'sagavalcons',
      bech32PrefixConsPub: 'sagavalconspub'
    },
    currencies: [
      {
        coinDenom: 'SAGA',
        coinMinimalDenom: 'usaga',
        coinDecimals: 6,
        coinGeckoId: 'saga-2',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SAGA',
        coinMinimalDenom: 'usaga',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04
        },
        coinGeckoId: 'saga-2',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png'
      }
    ],
    stakeCurrency: {
      coinDenom: 'SAGA',
      coinMinimalDenom: 'usaga',
      coinDecimals: 6,
      coinGeckoId: 'saga-2',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png'
    }
  }
};
