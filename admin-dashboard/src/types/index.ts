export interface MenuItem {
  id: string
  title: string
  href: string
  icon: string
  badge?: number | string
  children?: MenuItem[]
  roles?: string[]
}

export interface MenuSection {
  label: string
  afterItem: string
  items: MenuItem[]
  isCollapsible?: boolean
}

export interface SidebarState {
  collapsed: boolean
  activeItem: string
  expandedItems: string[]
  toggleCollapsed: () => void
  setActiveItem: (id: string) => void
  toggleExpanded: (id: string) => void
}

export interface BadgeCount {
  links?: number
  users?: number
  reports?: number
  tickets?: number
}

export interface UserPreferences {
  sidebarCollapsed: boolean
  theme: 'light' | 'dark'
  language: string
}
