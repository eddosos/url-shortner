import { MenuItem, MenuSection } from '@/types'

export const userMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/user',
    icon: 'Sliders',
  },
  {
    id: 'bio-pages',
    title: 'Bio Pages',
    href: '/user/bio',
    icon: 'Layout',
  },
  {
    id: 'qr-codes',
    title: 'QR Codes',
    href: '/user/qr',
    icon: 'Aperture',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    href: '/user/statistics',
    icon: 'BarChart3',
  },
]

export const userMenuSections: MenuSection[] = [
  {
    label: 'Channels',
    afterItem: 'statistics',
    items: [
      {
        id: 'my-channels',
        title: 'My Channels',
        href: '/user/channels',
        icon: 'Package',
      },
    ],
  },
  {
    label: 'Link Management',
    afterItem: 'my-channels',
    items: [
      {
        id: 'links',
        title: 'Links',
        href: '/user/links',
        icon: 'Link',
      },
      {
        id: 'archived-links',
        title: 'Archived Links',
        href: '/user/links/archived',
        icon: 'Briefcase',
      },
      {
        id: 'expired-links',
        title: 'Expired Links',
        href: '/user/links/expired',
        icon: 'Calendar',
      },
      {
        id: 'campaigns',
        title: 'Campaigns',
        href: '/user/campaigns',
        icon: 'Crosshair',
      },
      {
        id: 'custom-splash',
        title: 'Custom Splash',
        href: '/user/splash',
        icon: 'Loader',
      },
      {
        id: 'cta-overlay',
        title: 'CTA Overlay',
        href: '/user/overlay',
        icon: 'Layers',
      },
      {
        id: 'tracking-pixels',
        title: 'Tracking Pixels',
        href: '/user/pixels',
        icon: 'Compass',
      },
      {
        id: 'branded-domains',
        title: 'Branded Domains',
        href: '/user/domains',
        icon: 'Globe',
      },
      {
        id: 'teams',
        title: 'Teams',
        href: '/user/teams',
        icon: 'Users',
      },
      {
        id: 'integrations',
        title: 'Integrations',
        href: '/user/integrations',
        icon: 'GitBranch',
      },
    ],
  },
  {
    label: 'Tools',
    afterItem: 'integrations',
    isCollapsible: true,
    items: [
      {
        id: 'tools',
        title: 'Tools',
        href: '/user/tools',
        icon: 'Zap',
      },
      {
        id: 'import-links',
        title: 'Import Links',
        href: '/user/import/links',
        icon: 'Download',
      },
      {
        id: 'developer-api',
        title: 'Developer API',
        href: '/developers',
        icon: 'Code',
      },
    ],
  },
]

export const userQuickActions = [
  { id: 'new-link', title: 'Create New Link', icon: 'Plus', href: '/user/links/new' },
  { id: 'new-qr', title: 'Create QR Code', icon: 'Aperture', href: '/user/qr/new' },
  { id: 'new-campaign', title: 'New Campaign', icon: 'Crosshair', href: '/user/campaigns/new' },
]
