module.exports = {
  buildSidebar: [
    {
      type: 'category',
      label: '🔨 Build',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'blockchain-build/concepts/build-overview',
        'blockchain-build/get-started/pricing',
        {
          type: 'category',
          label: 'V2 Product Suite',
          link: {
            type: 'generated-index',
          },
          items: [
            'blockchain-build/v2/protocol',
            'blockchain-build/v2/public-rpc',
            {
              type: 'category',
              label: 'Premium Plan',
              link: {
                type: 'generated-index',
              },
              items: [
                'blockchain-build/v2/premium-plan',
                'blockchain-build/v2/hybrid-infra',
                'blockchain-build/v2/advanced-apis',
              ],
            },
            'blockchain-build/v2/node-ops',
            'blockchain-build/v2/scan',
          ],
        },
        {
          type: 'category',
          label: 'Chains V2',
          link: {
            type: 'generated-index',
          },
          items: [
            'blockchain-build/chains/arbitrum',
            'blockchain-build/chains/avalanche',
            'blockchain-build/chains/binance-smart-chain',
            'blockchain-build/chains/celo',
            'blockchain-build/chains/ethereum',
            'blockchain-build/chains/fantom',
            'blockchain-build/chains/iotex',
            'blockchain-build/chains/near',
            'blockchain-build/chains/nervos',
            'blockchain-build/chains/polygon',
            'blockchain-build/chains/solana',
          ],
        },
        {
          type: 'category',
          label: 'BSC Application Sidechain',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'blockchain-build/Bas/about-bas',
          },
          items: [
            {
              type: 'category',
              label: 'Architecture',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'blockchain-build/Bas/architecture/bas-architecture',
              },
              items: [
                'blockchain-build/Bas/architecture/bas-modules',
                'blockchain-build/Bas/architecture/bas-circ-model-native-bridge',
                'blockchain-build/Bas/architecture/bas-native-bridge',
                'blockchain-build/Bas/architecture/bas-fast-finality-bls-crypto',
                'blockchain-build/Bas/architecture/bas-sys-smart-contracts',
                'blockchain-build/Bas/architecture/bas-governance',
                'blockchain-build/Bas/architecture/bas-runtime-upgrades',
              ],
            },
            'blockchain-build/Bas/bas-how-to-launch',
            'blockchain-build/Bas/bas-demo',
            'blockchain-build/Bas/bas-faq',
            'blockchain-build/Bas/bas-glossary',
          ],
        },
        {
          type: 'category',
          label: 'V1 Products',
          link: {
            type: 'generated-index',
          },
          items: ['blockchain-build/v1/about-api-services', 'blockchain-build/v1/node-services'],
        },

        {
          type: 'category',
          label: '⛓ Chains V1',
          link: {
            type: 'generated-index',
          },
          items: [
            'blockchain-build/chains/arb-api',
            'blockchain-build/chains/avax-api',
            'blockchain-build/chains/bsc-api',
            'blockchain-build/chains/clover-api',
            'blockchain-build/chains/ethereum-api',
            'blockchain-build/chains/fantom-api',
            'blockchain-build/chains/huobi-api',
            'blockchain-build/chains/kusama-api',
            'blockchain-build/chains/oec-api',
            'blockchain-build/chains/polkadot-api',
            'blockchain-build/chains/polygon-api',
            'blockchain-build/chains/terra-api',
            'blockchain-build/chains/xdai-api',
          ],
        },

        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index',
          },
          items: [
            'blockchain-build/guides/json-methods',
            'blockchain-build/guides/libraries',
            'blockchain-build/guides/websocket-premium',
            'blockchain-build/guides/rpcapi',
          ],
        },

        'blockchain-build/Support/get-support',
      ],
    },
  ],
  earnSidebar: [
    {
      type: 'category',
      label: '💰 Earn',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'Earn/earn-introduction',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Liquid Staking',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Earn/liquid-staking/liquid-staking',
          },
          items: [
            {
              type: 'category',
              label: 'AVAX',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/avax/avax-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/avax/avax-liquid-staking-mechanics',
                'Earn/liquid-staking/avax/stake-avax',
                'Earn/liquid-staking/avax/unstake-avax',
                'Earn/liquid-staking/avax/avax-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'BNB',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/bnb/bnb-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/bnb/bnb-liquid-staking-mechanics',
                'Earn/liquid-staking/bnb/stake-bnb',
                'Earn/liquid-staking/bnb/unstake-bnb',
                'Earn/liquid-staking/bnb/bnb-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'DOT',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/dot/dot-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/dot/dot-liquid-staking-mechanics',
                'Earn/liquid-staking/dot/stake-dot',
                'Earn/liquid-staking/dot/unstake-dot',
                'Earn/liquid-staking/dot/dot-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'ETH',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/eth/eth-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/eth/eth-liquid-staking-mechanics',
                'Earn/liquid-staking/eth/stake-eth',
                'Earn/liquid-staking/eth/unstake-eth',
                'Earn/liquid-staking/eth/eth-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'FTM',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/ftm/ftm-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/ftm/ftm-liquid-staking-mechanics',
                'Earn/liquid-staking/ftm/stake-ftm',
                'Earn/liquid-staking/ftm/unstake-ftm',
                'Earn/liquid-staking/ftm/ftm-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'KSM',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/ksm/ksm-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/ksm/ksm-liquid-staking-mechanics',
                'Earn/liquid-staking/ksm/stake-ksm',
                'Earn/liquid-staking/ksm/unstake-ksm',
                'Earn/liquid-staking/ksm/ksm-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'MATIC',
              link: {
                type: 'doc',
                id: 'Earn/liquid-staking/matic/matic-liquid-staking-introduction',
              },
              items: [
                'Earn/liquid-staking/matic/matic-liquid-staking-mechanics',
                'Earn/liquid-staking/matic/stake-matic',
                'Earn/liquid-staking/matic/unstake-matic',
                'Earn/liquid-staking/matic/matic-liquid-staking-faq',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Liquid Crowdloan',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Earn/liquid-crowdloan/liquid-crowdloan',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'DeFi',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Earn/defi/defi-introduction',
          },
          items: ['Earn/defi/yield-farm', 'Earn/defi/provide-liquidity-to-dex'],
        },
        {
          type: 'category',
          label: 'Bridge',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Earn/bridge/bridge-introduction',
          },
          items: ['Earn/bridge/bridge-mechanics', 'Earn/bridge/bridge-tokens'],
        },
        {
          type: 'category',
          label: 'Switch',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Earn/switch/switch-introduction',
          },
          items: ['Earn/switch/switch-mechanics'],
        },
        {
          type: 'category',
          label: 'Reference',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'generated-index',
            keywords: [
              'reference, wallets, token, addresses, tokens, micropools, makers, sdk, principles',
            ],
          },
          items: [
            'Earn/reference/earn-glossary',
            'Earn/reference/earn-compatible-wallets',
            'Earn/reference/earn-principles',
            'Earn/reference/ls-smart-contract-addresses-mn',
            'Earn/reference/ls-smart-contract-addresses-tn',
            'Earn/reference/micropools',
            'Earn/reference/liquid-crowdloan-market-makers',
            'Earn/reference/parachain-sdk',
            'Earn/reference/brand-assets',
          ],
        },
      ],
    },
  ],
  gameSidebar: {
    'Game': [
      'Game/ankr-game',
      {
        type: 'category',
        label: 'Ankr Unity SDK',
        link: {
            type: 'generated-index',
          },
        items: [
          'Game/Unity/about-unity',
          'Game/Unity/setting-up',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'Game/Unity/getting-started/game-00',
              'Game/Unity/getting-started/game-01',
              'Game/Unity/getting-started/game-02',
              'Game/Unity/getting-started/game-03',
              'Game/Unity/getting-started/game-04',
            ],
          },
          {
            type: 'category',
            label: 'How to...',
            link: {
              type: 'generated-index',
            },
            items: ['Game/Unity/how-tos/wallet-game'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Ankr Unreal SDK',
        link: {
          type: 'generated-index',
        },
        items: [
          'Game/Unreal/about-unreal',
          'Game/Unreal/setting-up-unreal',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'Game/Unreal/getting-started/unreal-before',
              'Game/Unreal/getting-started/unreal-connect-wallet',
              'Game/Unreal/getting-started/unreal-send-retrieve',
              'Game/Unreal/getting-started/unreal-update-nft',
              'Game/Unreal/getting-started/unreal-mint-nft',
            ],
          },
        ],
      },
            {
              type: 'category',
              label: 'Reference',
              link: {
                type: 'generated-index',
              },
              items: ['Game/reference/game-reference'],
          },
        ],
      },
  governanceSidebar: [
    {
      type: 'category',
      label: '⚖️ Tokens+Governance',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Governance',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: [
            'Tokens&Governance/about-ankr-tokens',
            'Tokens&Governance/governance',
            'Tokens&Governance/tokenomics',
          ],
        },
      ],
    },
  ],
  communitySidebar: [
    {
      type: 'category',
      label: '👥 Community',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Community',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: ['Community/channels'],
        },
      ],
    },
  ],
  tutorialSidebar: [
    {
      type: 'category',
      label: '📚 Tutorials',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: [
            'Tutorials/submit-tutorial',
            'Tutorials/create-voting-system/movie-voting-web3',
            'Tutorials/create-eth-app-tutorial/create-eth-app',
            'Tutorials/simple-truffle',
            'Tutorials/connect-web3js',
            'Tutorials/erigon-bsc-tutorial/erigon-bsc',
            'Tutorials/connect-web3py',
          ],
        },
      ],
    },
  ],
}
