module.exports = {
  aboutSidebar: [
    {
      type: 'doc',
      id: 'About/about-ankr',
      label: '⚓️ About Ankr',
    },
    ],
  buildSidebar: {
  'Build': [
    {
        type: 'category',
        label: 'Concepts',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Concepts/build-concepts'
        ]
    },
    {
        type: 'category',
        label: 'Get Started',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Get-Started/build-start',
          'Build/Get-Started/pricing',
        ],
      },
      {
          type: 'category',
          label: 'V2 Product Suite',
          link: {
            type: 'generated-index',
          },
          items: [
            'Build/1V2/protocol',
            'Build/1V2/public-rpc',
            'Build/1V2/premium-rpc',
            'Build/1V2/node-ops',
            'Build/1V2/scan'
          ],
        },
        {
          type: 'category',
          label: 'Chains V2',
          link: {
            type: 'generated-index',
          },
          items: [
            'Build/Chains/arbitrum',
            'Build/Chains/avalanche',
            'Build/Chains/binance-smart-chain',
            'Build/Chains/celo',
            'Build/Chains/ethereum',
            'Build/Chains/fantom',
            'Build/Chains/iotex',
            'Build/Chains/near',
            'Build/Chains/nervos',
            'Build/Chains/polygon',
            'Build/Chains/solana',
                ],
        },
      {
        type: 'category',
        label: 'V1 Products',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/2V1/about-api-services',
          'Build/2V1/node-services'
        ],
      },
      

      {
        type: 'category',
        label: '⛓ Chains V1',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Chains/arb-api',
          'Build/Chains/avax-api',
          'Build/Chains/bsc-api',
          'Build/Chains/clover-api',
          'Build/Chains/ethereum-api',
          'Build/Chains/fantom-api',
          'Build/Chains/huobi-api',
          'Build/Chains/kusama-api',
          'Build/Chains/oec-api',
          'Build/Chains/polkadot-api',
          'Build/Chains/polygon-api',
          'Build/Chains/terra-api',
          'Build/Chains/xdai-api',
              ],
      },

      {
        type: 'category',
        label: 'Guides',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Guides/json-methods',
          'Build/Guides/libraries',
          'Build/Guides/websocket-premium',
          'Build/Guides/rpcapi'
        ],
      },
    
    'Build/Support/get-support'
  ]
},
earnSidebar: {
  'Earn': [
    {
      type: 'category',
      label: 'Liquid Staking',
      link: {
        type: 'generated-index',
      },
      items: [
        'Earn/liquid-staking/liquid-staking-overview',
      {
      type: 'category',
      label: 'BNB',
      link: {
        type: 'generated-index',
      },
      items: [
        'Earn/liquid-staking/bnb/bnb-liquid-staking-mechanics',
        'Earn/liquid-staking/bnb/stake-bnb',

      ]
    },
      ]
    },
    {
      type: 'category',
      label: 'Liquid Crowdloan',
      link: {
        type: 'generated-index',
      },
      items: [
        'Earn/liquid-crowdloan/liquid-crowdloan',
      ]
    },
    {
      type: 'category',
      label: 'DeFi',
      link: {
        type: 'generated-index',
      },
      items: [
          'Earn/defi/yeld-farm',
          'Earn/defi/provide-liquidity-dex',
      ]
    },
    {
      type: 'category',
      label: 'Bridge',
      link: {
        type: 'generated-index',
      },
      items: [
          'Earn/bridge/bridge-overview',
      ]
    },
    {
      type: 'category',
      label: 'Switch',
      link: {
        type: 'generated-index',
      },
      items: [
          'Earn/switch/switch-overview',
      ]
    },
        {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
      },
      items: [
          'Earn/reference/reference-overview',
      ]
    },
      ],
    },       
  governanceSidebar: {
    'Tokens+Governance': [
      {
        type: 'category',
        label: '⚖️ Governance',
        link: {
            type: 'generated-index',
          },
        items: [
          'Tokens&Governance/about-ankr-tokens', 
          'Tokens&Governance/governance',
          'Tokens&Governance/tokenomics'
        ],
    },
  ],
}, 
  communitySidebar: {
  'Community': [
    {
      type: 'category',
      label: '👥 Community',
      link: {
        type: 'generated-index',
      },
      items: [
        'Community/channels'
      ],
  },
 ],
},
  tutorialSidebar: {
    'Tutorials': [
      {
        type: 'category',
        label: '🎓 Tutorials',
        link: {
            type: 'generated-index',
          },
        items: [
        'Tutorials/submit-tutorial',
        'Tutorials/create-voting-system/movie-voting-web3',
        'Tutorials/create-eth-app-tutorial/create-eth-app',
        'Tutorials/simple-truffle', 
        'Tutorials/connect-web3js',
        'Tutorials/connect-web3py'
      ],
    },
  ],
},
}

