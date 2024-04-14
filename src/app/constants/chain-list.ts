import { IChainInfo } from '../models/chain-info.model';

export const CHAIN_LIST: IChainInfo[] = [
  {
    id: 'cosmoshub-4',
    logoSrc: 'assets/images/chains/cosmos-hub.svg',
    rpcUrl: 'https://cosmos-rpc.publicnode.com:443',
    name: 'Cosmos Hub',
    ticker: 'ATOM',
    description:
      'Cosmos Hub is the first of thousands of interconnected blockchains that will eventually comprise the Cosmos Network. The primary token of the Cosmos Hub is the ATOM, but the Hub will support many tokens in the future.',
    startDate: new Date(2019, 2, 13),
    info: {
      bech32Config: {
        bech32PrefixAccAddr: 'cosmos',
        bech32PrefixAccPub: 'cosmospub',
        bech32PrefixConsAddr: 'cosmosvalcons',
        bech32PrefixConsPub: 'cosmosvalconspub',
        bech32PrefixValAddr: 'cosmosvaloper',
        bech32PrefixValPub: 'cosmosvaloperpub',
      },
      bip44: {
        coinType: 118,
      },
      chainId: 'cosmoshub-4',
      chainName: 'Cosmos Hub',
      chainSymbolImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png',
      currencies: [
        {
          coinDecimals: 6,
          coinDenom: 'ATOM',
          coinGeckoId: 'cosmos',
          coinMinimalDenom: 'uatom',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
        },
      ],
      features: [],
      feeCurrencies: [
        {
          coinDecimals: 6,
          coinDenom: 'ATOM',
          coinGeckoId: 'cosmos',
          coinMinimalDenom: 'uatom',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
          gasPriceStep: {
            average: 0.025,
            high: 0.03,
            low: 0.005,
          },
        },
      ],
      rest: 'https://lcd-cosmoshub.keplr.app',
      rpc: 'https://rpc-cosmoshub.keplr.app',
      stakeCurrency: {
        coinDecimals: 6,
        coinDenom: 'ATOM',
        coinGeckoId: 'cosmos',
        coinMinimalDenom: 'uatom',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png',
      },
      walletUrlForStaking: 'https://wallet.keplr.app/chains/cosmos-hub',
    },
  },
  {
    id: 'osmosis-1',
    logoSrc: 'assets/images/chains/osmosis.svg',
    rpcUrl: 'https://cosmos-rpc.publicnode.com:443',
    name: 'Osmosis',
    ticker: 'OSMO',
    description:
      'Osmosis is an advanced automated market maker (AMM) protocol that allows developers to build customized AMMs with sovereign liquidity pools. Built using the Cosmos SDK, Osmosis utilizes Inter-Blockchain Communication (IBC) to enable cross-chain transactions.',
    startDate: new Date(2021, 5, 18),
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
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
      },
      walletUrl: 'https://app.osmosis.zone',
      walletUrlForStaking: 'https://wallet.keplr.app/chains/osmosis',
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'osmo',
        bech32PrefixAccPub: 'osmopub',
        bech32PrefixValAddr: 'osmovaloper',
        bech32PrefixValPub: 'osmovaloperpub',
        bech32PrefixConsAddr: 'osmovalcons',
        bech32PrefixConsPub: 'osmovalconspub',
      },
      currencies: [
        {
          coinDenom: 'OSMO',
          coinMinimalDenom: 'uosmo',
          coinDecimals: 6,
          coinGeckoId: 'osmosis',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
        },
        {
          coinDenom: 'ION',
          coinMinimalDenom: 'uion',
          coinDecimals: 6,
          coinGeckoId: 'ion',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uion.png',
        },
        {
          coinDenom: 'IBCX',
          coinMinimalDenom:
            'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx.png',
        },
        {
          coinDenom: 'stIBCX',
          coinMinimalDenom:
            'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx.png',
        },
        {
          coinDenom: 'LVN',
          coinMinimalDenom:
            'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn.png',
          coinGeckoId: 'levana-protocol',
        },
        {
          coinDenom: 'MBRN',
          coinMinimalDenom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn.png',
        },
        {
          coinDenom: 'CDT',
          coinMinimalDenom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          coinDecimals: 6,
          coinGeckoId: 'collateralized-debt-token',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt.png',
        },
        {
          coinDenom: 'milkTIA',
          coinMinimalDenom:
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          coinDecimals: 6,
          coinGeckoId: 'milkyway-staked-tia',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png',
        },
        {
          coinDenom: 'WOSMO',
          coinMinimalDenom:
            'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO.png',
        },
        {
          coinDenom: 'SAIL',
          coinMinimalDenom:
            'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail.png',
        },
        {
          coinDenom: 'BADKID',
          coinMinimalDenom:
            'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/badkid.png',
        },
        {
          coinDenom: 'WBTC',
          coinMinimalDenom:
            'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          coinDecimals: 8,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc.png',
        },
        {
          coinDenom: 'YMOS',
          coinMinimalDenom:
            'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos.png',
        },
        {
          coinDenom: 'bOSMO',
          coinMinimalDenom:
            'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/bOSMO.png',
        },
        {
          coinDenom: 'LAB',
          coinMinimalDenom:
            'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB.png',
        },
        {
          coinDenom: 'TORO',
          coinMinimalDenom:
            'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
          coinDecimals: 6,
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro.png',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'OSMO',
          coinMinimalDenom: 'uosmo',
          coinDecimals: 6,
          coinGeckoId: 'osmosis',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png',
          gasPriceStep: {
            low: 0.0025,
            average: 0.025,
            high: 0.04,
          },
        },
      ],
      features: ['cosmwasm', 'osmosis-txfees', 'osmosis-base-fee-beta'],
    },
  },
  {
    id: 'dymension_1100-1',
    logoSrc: 'assets/images/chains/dymension.svg',
    rpcUrl: 'https://dymension-rpc.publicnode.com:443',
    name: 'Dymension',
    ticker: 'DYM',
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
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png',
        },
      ],
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'dym',
        bech32PrefixAccPub: 'dympub',
        bech32PrefixValAddr: 'dymvaloper',
        bech32PrefixValPub: 'dymvaloperpub',
        bech32PrefixConsAddr: 'dymvalcons',
        bech32PrefixConsPub: 'dymvalconspub',
      },
      stakeCurrency: {
        coinMinimalDenom: 'adym',
        coinDenom: 'DYM',
        coinDecimals: 18,
        coinGeckoId: 'dymension',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png',
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
            low: 20000000000,
          },
        },
      ],
      walletUrlForStaking: 'https://wallet.keplr.app/chains/dymension',
      features: ['eth-address-gen', 'eth-key-sign'],
    },
  },
  {
    id: 'pirin-1',
    logoSrc: 'assets/images/chains/nolus-logo.svg',
    rpcUrl: 'https://nolus-rpc.publicnode.com:443',
    name: 'Nolus',
    ticker: 'NLS',
    description:
      "Nolus is revolutionizing the realm of crypto borrowing, inspired by the traditional finance leasing model. In conventional leasing, customers can secure assets by paying just a part of their total value upfront, utilize them for the lease's duration, and eventually acquire full ownership after settling the loan.",
    startDate: new Date(2023, 5, 23),
    info: {
      rpc: 'https://nolus-rpc.lavenderfive.com:443',
      rest: 'https://nolus-api.lavenderfive.com:443',
      nodeProvider: {
        name: 'Nolus',
        email: 'register@nolus.io',
        website: 'https://nolus.io/',
      },
      chainId: 'pirin-1',
      chainName: 'Nolus',
      chainSymbolImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
      stakeCurrency: {
        coinDenom: 'NLS',
        coinMinimalDenom: 'unls',
        coinDecimals: 6,
        coinGeckoId: 'nolus',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
      },
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'nolus',
        bech32PrefixAccPub: 'noluspub',
        bech32PrefixValAddr: 'nolusvaloper',
        bech32PrefixValPub: 'nolusvaloperpub',
        bech32PrefixConsAddr: 'nolusvalcons',
        bech32PrefixConsPub: 'nolusvalconspub',
      },
      currencies: [
        {
          coinDenom: 'NLS',
          coinMinimalDenom: 'unls',
          coinDecimals: 6,
          coinGeckoId: 'nolus',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'NLS',
          coinMinimalDenom: 'unls',
          coinDecimals: 6,
          coinGeckoId: 'nolus',
          coinImageUrl:
            'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png',
          gasPriceStep: {
            low: 0.01,
            average: 0.025,
            high: 0.05,
          },
        },
      ],
      features: ['cosmwasm'],
    },
  },
];
