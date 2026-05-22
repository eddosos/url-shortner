import { MenuItem } from '@/types'

export const userMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    id: 'links',
    title: 'Links',
    href: '/dashboard/links',
    icon: 'Link',
    children: [
      { id: 'all-links', title: 'All Links', href: '/dashboard/links', icon: 'List' },
      { id: 'archived', title: 'Archived Links', href: '/dashboard/links/archived', icon: 'Archive' },
      { id: 'expired', title: 'Expired Links', href: '/dashboard/links/expired', icon: 'Clock' },
    ],
  },
  {
    id: 'bio',
    title: 'Bio Pages',
    href: '/dashboard/bio',
    icon: 'User',
    children: [
      { id: 'my-bio', title: 'My Bio Page', href: '/dashboard/bio', icon: 'File' },
      { id: 'templates', title: 'Templates', href: '/dashboard/bio/templates', icon: 'LayoutTemplate' },
      { id: 'customize', title: 'Customize', href: '/dashboard/bio/customize', icon: 'Palette' },
    ],
  },
  {
    id: 'qr',
    title: 'QR Codes',
    href: '/dashboard/qr',
    icon: 'QrCode',
    children: [
      { id: 'create-qr', title: 'Create QR', href: '/dashboard/qr/create', icon: 'Plus' },
      { id: 'my-qr', title: 'My QR Codes', href: '/dashboard/qr', icon: 'List' },
    ],
  },
  {
    id: 'campaigns',
    title: 'Campaigns',
    href: '/dashboard/campaigns',
    icon: 'Target',
    children: [
      { id: 'all-campaigns', title: 'All Campaigns', href: '/dashboard/campaigns', icon: 'List' },
      { id: 'create-campaign', title: 'Create Campaign', href: '/dashboard/campaigns/new', icon: 'Plus' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: 'BarChart3',
  },
  {
    id: 'domains',
    title: 'Domains',
    href: '/dashboard/domains',
    icon: 'Globe',
    children: [
      { id: 'my-domains', title: 'My Domains', href: '/dashboard/domains', icon: 'List' },
      { id: 'add-domain', title: 'Add Domain', href: '/dashboard/domains/new', icon: 'Plus' },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    href: '/dashboard/settings',
    icon: 'Settings',
    children: [
      { id: 'profile', title: 'Profile', href: '/dashboard/settings/profile', icon: 'User' },
      { id: 'account', title: 'Account', href: '/dashboard/settings/account', icon: 'CreditCard' },
      { id: 'notifications', title: 'Notifications', href: '/dashboard/settings/notifications', icon: 'Bell' },
      { id: 'api', title: 'API Keys', href: '/dashboard/settings/api', icon: 'Key' },
    ],
  },
]

export const userQuickActions = [
  { id: 'new-link', title: 'Create Link', icon: 'Link', href: '/dashboard/links/new' },
  { id: 'new-bio', title: 'New Bio Page', icon: 'User', href: '/dashboard/bio/new' },
  { id: 'new-qr', title: 'Generate QR', icon: 'QrCode', href: '/dashboard/qr/create' },
  { id: 'new-campaign', title: 'New Campaign', icon: 'Target', href: '/dashboard/campaigns/new' },
]
