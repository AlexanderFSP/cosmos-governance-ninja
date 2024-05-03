import { IChainInfoView } from '../../models/chain-info-view.model';

export const JUNO_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/juno.svg',
  rpcUrl: 'https://juno-rpc.publicnode.com:443',
  restUrl: 'https://juno-rest.publicnode.com',
  description:
    'Juno is an open source platform for interoperable smart contracts which automatically executes, controls or documents a procedure of relevant events and actions according to the terms of such contract or agreement to be valid & usable across multiple sovereign networks.',
  startDate: new Date(2021, 9, 1),
  txExplorerLink: 'https://www.mintscan.io/juno/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-juno.keplr.app',
    rest: 'https://lcd-juno.keplr.app',
    chainId: 'juno-1',
    chainName: 'Juno',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/chain.png',
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coinGeckoId: 'juno-network',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/juno',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/juno',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'juno',
      bech32PrefixAccPub: 'junopub',
      bech32PrefixValAddr: 'junovaloper',
      bech32PrefixValPub: 'junovaloperpub',
      bech32PrefixConsAddr: 'junovalcons',
      bech32PrefixConsPub: 'junovalconspub'
    },
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png',
        gasPriceStep: {
          low: 0.075,
          average: 0.075,
          high: 0.075
        }
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.003,
          average: 0.003,
          high: 0.003
        }
      }
    ],
    features: ['cosmwasm', 'authz-msg-revoke-fixed']
  }
};
