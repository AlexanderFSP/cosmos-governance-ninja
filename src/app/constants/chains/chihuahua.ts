import { IChainInfoView } from '../../models/chain-info-view.model';

export const CHIHUAHUA_CHAIN_INFO: IChainInfoView = {
  logoSrc: '',
  rpcUrl: 'https://chihuahua-rpc.publicnode.com:443',
  restUrl: 'https://chihuahua-rest.publicnode.com',
  description: '',
  startDate: new Date(),
  txExplorerLink: '',
  info: {
    chainId: 'chihuahua-1',
    chainName: 'Chihuahua',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png',
    rpc: 'https://rpc-chihuahua.keplr.app',
    rest: 'https://lcd-chihuahua.keplr.app',
    stakeCurrency: {
      coinDenom: 'HUAHUA',
      coinMinimalDenom: 'uhuahua',
      coinDecimals: 6,
      coinGeckoId: 'chihuahua-token',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'chihuahua',
      bech32PrefixAccPub: 'chihuahuapub',
      bech32PrefixValAddr: 'chihuahuavaloper',
      bech32PrefixValPub: 'chihuahuavaloperpub',
      bech32PrefixConsAddr: 'chihuahuavalcons',
      bech32PrefixConsPub: 'chihuahuavalconspub'
    },
    currencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6,
        coinGeckoId: 'chihuahua-token',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png'
      },
      {
        coinDenom: 'BADDOG',
        coinMinimalDenom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat.png'
      },
      {
        coinDenom: 'WOOF',
        coinMinimalDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/woof.png'
      },
      {
        coinDenom: 'TACOS',
        coinMinimalDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/tacos.png'
      },
      {
        coinDenom: 'WEED',
        coinMinimalDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/weed.png'
      },
      {
        coinDenom: 'BDOG',
        coinMinimalDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/bdog.png'
      },
      {
        coinDenom: 'CORSO',
        coinMinimalDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/corso.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6,
        coinGeckoId: 'chihuahua-token',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png',
        gasPriceStep: {
          low: 500,
          average: 1250,
          high: 2000
        }
      }
    ],
    features: ['cosmwasm'],
    walletUrlForStaking: 'https://wallet.keplr.app/chains/chihuahua'
  }
};
