import { IChainInfoView } from '../../models/chain-info-view.model';

export const CRONOS_POS_CHAIN_INFO: IChainInfoView = {
  logoSrc: 'assets/images/chains/cronos-pos.png',
  rpcUrl: 'https://cro-chain-rpc.publicnode.com:443',
  restUrl: 'https://cro-chain-rest.publicnode.com',
  description:
    'Cronos POS is a public, open-source and permissionless blockchain - a fully decentralized network with high speed and low fees, designed to be a public good that helps drive mass adoption of blockchain technology through use cases like Payments, DeFi and NFTs.',
  startDate: new Date(2021, 2, 25),
  txExplorerLink: 'https://www.mintscan.io/crypto-org/tx/',
  fee: 1.6,
  info: {
    rpc: 'https://rpc-crypto-org.keplr.app',
    rest: 'https://lcd-crypto-org.keplr.app',
    chainId: 'crypto-org-chain-mainnet-1',
    chainName: 'Cronos POS',
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/chain.png',
    stakeCurrency: {
      coinDenom: 'CRO',
      coinMinimalDenom: 'basecro',
      coinDecimals: 8,
      coinGeckoId: 'crypto-com-chain',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png'
    },
    walletUrl: 'https://wallet.keplr.app/chains/crypto-org',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/crypto-org',
    bip44: {
      coinType: 394
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cro',
      bech32PrefixAccPub: 'cropub',
      bech32PrefixValAddr: 'crocncl',
      bech32PrefixValPub: 'crocnclpub',
      bech32PrefixConsAddr: 'crocnclcons',
      bech32PrefixConsPub: 'crocnclconspub'
    },
    currencies: [
      {
        coinDenom: 'CRO',
        coinMinimalDenom: 'basecro',
        coinDecimals: 8,
        coinGeckoId: 'crypto-com-chain',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CRO',
        coinMinimalDenom: 'basecro',
        coinDecimals: 8,
        coinGeckoId: 'crypto-com-chain',
        coinImageUrl:
          'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png',
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04
        }
      }
    ],
    features: ['authz-msg-revoke-fixed'],
    alternativeBIP44s: [
      {
        coinType: 118
      }
    ]
  }
};
