'use client'

import { adminMenuItems } from './menuConfig'
import { userMenuItems } from './userMenuConfig'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/lib/utils'

interface SidebarNavProps {
  collapsed?: boolean
  mode?: 'admin' | 'user'
}

export function SidebarNav({ collapsed = false, mode = 'admin' }: SidebarNavProps) {
  const menuItems = mode === 'admin' ? adminMenuItems : userMenuItems
  
  return (
    <nav className={cn("sidebar-nav flex-1 overflow-y-auto py-4", collapsed ? "px-2" : "px-3")}>
      <ul className="list-unstyled space-y-1">
        {menuItems.map((item) => (
          <SidebarItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </ul>
    </nav>
  )
}
