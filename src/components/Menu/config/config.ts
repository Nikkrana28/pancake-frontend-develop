import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
 
  {
    label: t('Social Media Handles'),
    icon: '',
    href: '#',
    showItemsOnMobile: false,
    items: [
      // {
      //   label: t('Info'),
      //   href: '/info',
      // },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      {
        label: t('Telegram'),
        href: 'https://telegram.org/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/?lang=en',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('WhitePage'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  // {
  //   label: t('Docs'),
  //    href: 'https://docs.pancakeswap.finance',
  //    type: DropdownMenuItemType.EXTERNAL_LINK,
  //    items: []
  //  },
  
  // {
  //   label: t('Twitter'),
  //   href: 'www.twitter.com',
  //   icon: '',
  //   items: [
  //     {
  //       label: t('Farms'),
  //       href: '/www.google.com',
  //     },
  //     {
  //       label: t('Pools'),
  //       href: '/pools',
  //     },
  //   ],
  // },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //   ],
  // },
  // {
  //   label: '',
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
  //     {
  //       label: t('IFO'),
  //       href: '/ifo',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://pancakeswap.medium.com',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
]

export default config
