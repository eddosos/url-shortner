'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { SidebarBrand } from './SidebarBrand'
import { UserSidebarNav } from './UserSidebarNav'
import { QuickActions } from './QuickActions'
import { SidebarToggle } from './SidebarToggle'
import { userQuickActions } from './userMenuConfig'

interface UserSidebarProps {
  className?: string
}

export function UserSidebar({ className }: UserSidebarProps) {
  const { collapsed } = useSidebarStore()

  return (
    <aside
      className={cn(
        "sidebar fixed left-0 top-0 z-40 h-screen bg-card border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[260px]",
        className
      )}
      role="navigation"
      aria-label="User navigation"
    >
      <div className="flex flex-col h-full">
        {/* Brand */}
        <div className="flex items-center justify-between px-3 py-3 border-b">
          <SidebarBrand collapsed={collapsed} variant="user" />
          {!collapsed && <SidebarToggle />}
        </div>

        {/* Navigation */}
        <UserSidebarNav collapsed={collapsed} />

        {/* Quick Actions */}
        <QuickActions collapsed={collapsed} actions={userQuickActions} />

        {/* Mobile Toggle */}
        {collapsed && (
          <div className="p-3 border-t">
            <SidebarToggle className="w-full" />
          </div>
        )}
      </div>
    </aside>
  )
}
