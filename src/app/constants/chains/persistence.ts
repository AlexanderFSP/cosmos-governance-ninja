import { IChainInfoView } from '../../models/chain-info-view.model';

export const PERSISTENCE_CHAIN_INFO: IChainInfoView = {
  logoSrc: '',
  rpcUrl: 'https://persistence-rpc.publicnode.com:443',
  restUrl: 'https://persistence-rest.publicnode.com',
  description: '',
  startDate: new Date(),
  txExplorerLink: '',
  info: {
    rpc: 'https://rpc-persistence.keplr.app',
    rest: 'https://lcd-persistence.keplr.app',
    chainId: 'core-1',
    chainName: 'Persistence',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/chain.png',
    stakeCurrency: {
      coinDenom: 'XPRT',
      coinMinimalDenom: 'uxprt',
      coinDecimals: 6,
      coinGeckoId: 'persistence',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/persistence',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/persistence',
    bip44: {
      coinType: 118
    },
    alternativeBIP44s: [
      {
        coinType: 750
      }
    ],
    bech32Config: {
      bech32PrefixAccAddr: 'persistence',
      bech32PrefixAccPub: 'persistencepub',
      bech32PrefixValAddr: 'persistencevaloper',
      bech32PrefixValPub: 'persistencevaloperpub',
      bech32PrefixConsAddr: 'persistencevalcons',
      bech32PrefixConsPub: 'persistencevalconspub'
    },
    currencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coinGeckoId: 'persistence',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png'
      },
      {
        coinDenom: 'stkATOM',
        coinMinimalDenom: 'stk/uatom',
        coinDecimals: 6,
        coinGeckoId: 'stkatom',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkatom.png'
      },
      {
        coinDenom: 'stkOSMO',
        coinMinimalDenom: 'stk/uosmo',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkosmo.png'
      },
      {
        coinDenom: 'stkDYDX',
        coinMinimalDenom: 'stk/adydx',
        coinDecimals: 18,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkdydx.png'
      },
      {
        coinDenom: 'stkSTARS',
        coinMinimalDenom: 'stk/ustars',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkstars.png'
      },
      {
        coinDenom: 'stkHUAHUA',
        coinMinimalDenom: 'stk/uhuahua',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkhuahua.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coinGeckoId: 'persistence',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png',
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04
        }
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01
        }
      },
      {
        coinDenom: 'stkATOM',
        coinMinimalDenom: 'stk/uatom',
        coinDecimals: 6,
        coinGeckoId: 'stkatom',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkatom.png',
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01
        }
      },
      {
        coinDenom: 'PSTAKE',
        coinMinimalDenom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
        coinDecimals: 18,
        coinGeckoId: 'pstake-finance',
        gasPriceStep: {
          low: 100000000,
          average: 1000000000,
          high: 10000000000
        }
      },
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01
        }
      },
      {
        coinDenom: 'stkOSMO',
        coinMinimalDenom: 'stk/uosmo',
        coinDecimals: 6,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkosmo.png',
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01
        }
      },
      {
        coinDenom: 'DYDX',
        coinMinimalDenom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
        coinDecimals: 18,
        coinGeckoId: 'dydx-chain',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/adydx.png',
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000
        }
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uusdc.png',
        gasPriceStep: {
          low: 0.01,
          average: 0.05,
          high: 0.1
        }
      },
      {
        coinDenom: 'stkDYDX',
        coinMinimalDenom: 'stk/adydx',
        coinDecimals: 18,
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkdydx.png',
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000
        }
      }
    ],
    features: ['cosmwasm']
  }
};
