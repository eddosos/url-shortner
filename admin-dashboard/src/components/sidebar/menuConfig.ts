import { MenuItem } from '@/types'

export const adminMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    id: 'links',
    title: 'Links',
    href: '/admin/links',
    icon: 'Link',
    badge: 0,
    children: [
      { id: 'all-links', title: 'All Links', href: '/admin/links/all', icon: 'List' },
      { id: 'pending', title: 'Pending Review', href: '/admin/links/pending', icon: 'Clock', badge: 0 },
      { id: 'reported', title: 'Reported Links', href: '/admin/links/reported', icon: 'Flag', badge: 0 },
      { id: 'archived', title: 'Archived', href: '/admin/links/archived', icon: 'Archive' },
    ],
  },
  {
    id: 'users',
    title: 'Users',
    href: '/admin/users',
    icon: 'Users',
    badge: 0,
    children: [
      { id: 'all-users', title: 'All Users', href: '/admin/users/all', icon: 'List' },
      { id: 'active-users', title: 'Active Now', href: '/admin/users/active', icon: 'Activity' },
      { id: 'banned', title: 'Banned Users', href: '/admin/users/banned', icon: 'Ban' },
      { id: 'roles', title: 'Roles & Permissions', href: '/admin/users/roles', icon: 'Shield' },
    ],
  },
  {
    id: 'memberships',
    title: 'Memberships',
    href: '/admin/memberships',
    icon: 'CreditCard',
    children: [
      { id: 'subscriptions', title: 'Subscriptions', href: '/admin/memberships/subscriptions', icon: 'Repeat' },
      { id: 'plans', title: 'Plans & Pricing', href: '/admin/memberships/plans', icon: 'Package' },
      { id: 'payments', title: 'Payments', href: '/admin/memberships/payments', icon: 'DollarSign' },
      { id: 'invoices', title: 'Invoices', href: '/admin/memberships/invoices', icon: 'FileText' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    href: '/admin/analytics',
    icon: 'BarChart3',
    children: [
      { id: 'overview', title: 'Overview', href: '/admin/analytics/overview', icon: 'PieChart' },
      { id: 'traffic', title: 'Traffic Sources', href: '/admin/analytics/traffic', icon: 'Globe' },
      { id: 'conversions', title: 'Conversions', href: '/admin/analytics/conversions', icon: 'TrendingUp' },
      { id: 'reports', title: 'Custom Reports', href: '/admin/analytics/reports', icon: 'FileBarChart' },
    ],
  },
  {
    id: 'content',
    title: 'Content',
    href: '/admin/content',
    icon: 'FileText',
    children: [
      { id: 'pages', title: 'Pages', href: '/admin/content/pages', icon: 'File' },
      { id: 'blog', title: 'Blog Posts', href: '/admin/content/blog', icon: 'BookOpen' },
      { id: 'categories', title: 'Categories', href: '/admin/content/categories', icon: 'Tags' },
      { id: 'media', title: 'Media Library', href: '/admin/content/media', icon: 'Image' },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    href: '/admin/notifications',
    icon: 'Bell',
    badge: 0,
    children: [
      { id: 'all-notifs', title: 'All Notifications', href: '/admin/notifications/all', icon: 'List' },
      { id: 'templates', title: 'Templates', href: '/admin/notifications/templates', icon: 'Mail' },
      { id: 'settings', title: 'Settings', href: '/admin/notifications/settings', icon: 'Settings' },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    href: '/admin/support',
    icon: 'Headphones',
    badge: 0,
    children: [
      { id: 'tickets', title: 'Tickets', href: '/admin/support/tickets', icon: 'Ticket', badge: 0 },
      { id: 'faq', title: 'FAQ Management', href: '/admin/support/faq', icon: 'HelpCircle' },
      { id: 'live-chat', title: 'Live Chat', href: '/admin/support/chat', icon: 'MessageSquare' },
    ],
  },
  {
    id: 'system',
    title: 'System',
    href: '/admin/system',
    icon: 'Settings',
    children: [
      { id: 'general', title: 'General Settings', href: '/admin/system/general', icon: 'Sliders' },
      { id: 'email', title: 'Email Settings', href: '/admin/system/email', icon: 'Mail' },
      { id: 'storage', title: 'Storage', href: '/admin/system/storage', icon: 'HardDrive' },
      { id: 'backup', title: 'Backup & Restore', href: '/admin/system/backup', icon: 'Download' },
      { id: 'logs', title: 'System Logs', href: '/admin/system/logs', icon: 'Terminal' },
      { id: 'api', title: 'API Keys', href: '/admin/system/api', icon: 'Key' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    href: '/admin/security',
    icon: 'Shield',
    children: [
      { id: 'audit', title: 'Audit Logs', href: '/admin/security/audit', icon: 'FileCheck' },
      { id: 'firewall', title: 'Firewall Rules', href: '/admin/security/firewall', icon: 'Lock' },
      { id: '2fa', title: '2FA Settings', href: '/admin/security/2fa', icon: 'Smartphone' },
    ],
  },
  {
    id: 'billing',
    title: 'Billing',
    href: '/admin/billing',
    icon: 'DollarSign',
    children: [
      { id: 'transactions', title: 'Transactions', href: '/admin/billing/transactions', icon: 'Exchange' },
      { id: 'refunds', title: 'Refunds', href: '/admin/billing/refunds', icon: 'Undo' },
      { id: 'taxes', title: 'Tax Settings', href: '/admin/billing/taxes', icon: 'Percent' },
    ],
  },
]

export const quickActions = [
  { id: 'new-user', title: 'Add User', icon: 'UserPlus', href: '/admin/users/new' },
  { id: 'new-link', title: 'Create Link', icon: 'Link', href: '/admin/links/new' },
  { id: 'new-plan', title: 'New Plan', icon: 'Package', href: '/admin/memberships/plans/new' },
  { id: 'broadcast', title: 'Send Broadcast', icon: 'Send', href: '/admin/notifications/broadcast' },
]
