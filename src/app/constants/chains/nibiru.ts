import { IChainInfoView } from '../../models/chain-info-view.model';

export const NIBIRU_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/nibiru.svg',
  rpcUrl: 'https://nibiru-rpc.publicnode.com:443',
  restUrl: 'https://nibiru-rest.publicnode.com',
  description:
    'Nibiru Chain is a breakthrough L1 blockchain and smart contract ecosystem sporting superior throughput and unparalleled security. Nibiru aims to be the most developer-friendly and user-friendly smart contract ecosystem, leading the charge toward mainstream Web3 adoption by innovating at each layer of the stack.',
  startDate: new Date(2024, 2, 12),
  txExplorerLink: 'https://explorer.nibiru.fi/cataclysm-1/tx/',
  fee: 1.4,
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
