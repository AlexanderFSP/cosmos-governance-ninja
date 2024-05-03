import { IChainInfoView } from '../../models/chain-info-view.model';

export const NIBIRU_CHAIN_INFO: IChainInfoView = {
  logoSrc: '',
  rpcUrl: 'https://nibiru-rpc.publicnode.com:443',
  restUrl: 'https://nibiru-rest.publicnode.com',
  description: '',
  startDate: new Date(),
  txExplorerLink: '',
  info: {
    chainId: 'cataclysm-1',
    chainName: 'Nibiru',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png',
    rpc: 'https://rpc.nibiru.fi/',
    rest: 'https://lcd.nibiru.fi/',
    nodeProvider: {
      name: 'Nibiru Team',
      email: 'dev@nibiru.org',
      website: 'https://nibiru.fi'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'nibi',
      bech32PrefixAccPub: 'nibipub',
      bech32PrefixValAddr: 'nibivaloper',
      bech32PrefixValPub: 'nibivaloperpub',
      bech32PrefixConsAddr: 'nibivalcons',
      bech32PrefixConsPub: 'nibivalconspub'
    },
    currencies: [
      {
        coinDenom: 'NIBI',
        coinMinimalDenom: 'unibi',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'NIBI',
        coinMinimalDenom: 'unibi',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png',
        gasPriceStep: {
          low: 0.025,
          average: 0.05,
          high: 0.1
        }
      }
    ],
    stakeCurrency: {
      coinDenom: 'NIBI',
      coinMinimalDenom: 'unibi',
      coinDecimals: 6,
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png'
    },
    features: ['cosmwasm']
  }
};
