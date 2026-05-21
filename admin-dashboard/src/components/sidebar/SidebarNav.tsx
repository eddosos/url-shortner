'use client'

import { adminMenuItems } from './menuConfig'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/lib/utils'

interface SidebarNavProps {
  collapsed?: boolean
}

export function SidebarNav({ collapsed = false }: SidebarNavProps) {
  return (
    <nav className={cn("sidebar-nav flex-1 overflow-y-auto py-4", collapsed ? "px-2" : "px-3")}>
      <ul className="list-unstyled space-y-1">
        {adminMenuItems.map((item) => (
          <SidebarItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </ul>
    </nav>
  )
}
