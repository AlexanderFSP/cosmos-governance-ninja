import { IChainInfoView } from '../../models/chain-info-view.model';

export const OSMOSIS_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/osmosis.svg',
  rpcUrl: 'https://osmosis-rpc.publicnode.com:443',
  restUrl: 'https://osmosis-rest.publicnode.com',
  description:
    'Osmosis is an advanced automated market maker (AMM) protocol that allows developers to build customized AMMs with sovereign liquidity pools. Built using the Cosmos SDK, Osmosis utilizes Inter-Blockchain Communication (IBC) to enable cross-chain transactions.',
  startDate: new Date(2021, 5, 18),
  txExplorerLink: 'https://www.mintscan.io/osmosis/tx/',
  fee: 1.4,
  info: {
    rpc: 'https://rpc-osmosis.keplr.app',
    rest: 'https://lcd-osmosis.keplr.app',
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png',
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png'
    },
    walletUrl: 'https://app.osmosis.zone',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/osmosis',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'osmo',
      bech32PrefixAccPub: 'osmopub',
      bech32PrefixValAddr: 'osmovaloper',
      bech32PrefixValPub: 'osmovaloperpub',
      bech32PrefixConsAddr: 'osmovalcons',
      bech32PrefixConsPub: 'osmovalconspub'
    },
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png'
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coinGeckoId: 'ion',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uion.png'
      },
      {
        coinDenom: 'IBCX',
        coinMinimalDenom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx.png'
      },
      {
        coinDenom: 'stIBCX',
        coinMinimalDenom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx.png'
      },
      {
        coinDenom: 'LVN',
        coinMinimalDenom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn.png',
        coinGeckoId: 'levana-protocol'
      },
      {
        coinDenom: 'MBRN',
        coinMinimalDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn.png'
      },
      {
        coinDenom: 'CDT',
        coinMinimalDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
        coinDecimals: 6,
        coinGeckoId: 'collateralized-debt-token',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt.png'
      },
      {
        coinDenom: 'milkTIA',
        coinMinimalDenom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
        coinDecimals: 6,
        coinGeckoId: 'milkyway-staked-tia',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png'
      },
      {
        coinDenom: 'WOSMO',
        coinMinimalDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO.png'
      },
      {
        coinDenom: 'SAIL',
        coinMinimalDenom: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail.png'
      },
      {
        coinDenom: 'BADKID',
        coinMinimalDenom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/badkid.png'
      },
      {
        coinDenom: 'WBTC',
        coinMinimalDenom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
        coinDecimals: 8,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc.png'
      },
      {
        coinDenom: 'YMOS',
        coinMinimalDenom: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos.png'
      },
      {
        coinDenom: 'bOSMO',
        coinMinimalDenom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/bOSMO.png'
      },
      {
        coinDenom: 'LAB',
        coinMinimalDenom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB.png'
      },
      {
        coinDenom: 'TORO',
        coinMinimalDenom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
        coinDecimals: 6,
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04
        }
      }
    ],
    features: ['cosmwasm', 'osmosis-txfees', 'osmosis-base-fee-beta']
  }
};
