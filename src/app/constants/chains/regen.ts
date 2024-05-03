import { IChainInfoView } from '../../models/chain-info-view.model';

export const REGEN_CHAIN_INFO: IChainInfoView = {
  logoSrc: '', // TODO: (AlexanderFSP)
  rpcUrl: 'https://regen-rpc.publicnode.com:443',
  restUrl: 'https://regen-rest.publicnode.com',
  description: '', // TODO: (AlexanderFSP)
  startDate: new Date(), // TODO: (AlexanderFSP)
  txExplorerLink: '', // TODO: (AlexanderFSP)
  fee: 1.4,
  info: {
    rpc: 'https://rpc-regen.keplr.app',
    rest: 'https://lcd-regen.keplr.app',
    chainId: 'regen-1',
    chainName: 'Regen',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/chain.png',
    stakeCurrency: {
      coinDenom: 'REGEN',
      coinMinimalDenom: 'uregen',
      coinDecimals: 6,
      coinGeckoId: 'regen',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/regen',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/regen',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'regen',
      bech32PrefixAccPub: 'regenpub',
      bech32PrefixValAddr: 'regenvaloper',
      bech32PrefixValPub: 'regenvaloperpub',
      bech32PrefixConsAddr: 'regenvalcons',
      bech32PrefixConsPub: 'regenvalconspub'
    },
    currencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coinGeckoId: 'regen',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png'
      },
      {
        coinDenom: 'NCT',
        coinMinimalDenom: 'eco.uC.NCT',
        coinDecimals: 6,
        coinGeckoId: 'toucan-protocol-nature-carbon-tonne'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coinGeckoId: 'regen',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png',
        gasPriceStep: {
          low: 0.015,
          average: 0.025,
          high: 0.04
        }
      }
    ],
    features: ['authz-msg-revoke-fixed']
  }
};
