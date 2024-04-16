import { IChainInfoView } from '../../models/chain-info-view.model';

export const DYMENSION_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/dymension.svg',
  rpcUrl: 'https://dymension-rpc.publicnode.com:443',
  restUrl: 'https://dymension-rest.publicnode.com',
  description:
    'Dymension is a modular blockchain designed to secure and interconnect rollups using the Inter-Blockchain Communication (IBC) standard.',
  startDate: new Date(2024, 1, 6),
  info: {
    chainId: 'dymension_1100-1',
    chainName: 'Dymension',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png',
    rpc: 'https://rpc-dymension.keplr.app',
    rest: 'https://lcd-dymension.keplr.app',
    currencies: [
      {
        coinMinimalDenom: 'adym',
        coinDenom: 'DYM',
        coinDecimals: 18,
        coinGeckoId: 'dymension',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png'
      }
    ],
    bip44: {
      coinType: 60
    },
    bech32Config: {
      bech32PrefixAccAddr: 'dym',
      bech32PrefixAccPub: 'dympub',
      bech32PrefixValAddr: 'dymvaloper',
      bech32PrefixValPub: 'dymvaloperpub',
      bech32PrefixConsAddr: 'dymvalcons',
      bech32PrefixConsPub: 'dymvalconspub'
    },
    stakeCurrency: {
      coinMinimalDenom: 'adym',
      coinDenom: 'DYM',
      coinDecimals: 18,
      coinGeckoId: 'dymension',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png'
    },
    feeCurrencies: [
      {
        coinMinimalDenom: 'adym',
        coinDenom: 'DYM',
        coinDecimals: 18,
        coinGeckoId: 'dymension',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png',
        gasPriceStep: {
          average: 20000000000,
          high: 20000000000,
          low: 20000000000
        }
      }
    ],
    walletUrlForStaking: 'https://wallet.keplr.app/chains/dymension',
    features: ['eth-address-gen', 'eth-key-sign']
  }
};
