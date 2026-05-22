'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { SidebarBrand } from './SidebarBrand'
import { SidebarNav } from './SidebarNav'
import { SidebarSearch } from './SidebarSearch'
import { QuickActions } from './QuickActions'
import { SidebarToggle } from './SidebarToggle'

interface SidebarProps {
  className?: string
  mode?: 'admin' | 'user'
}

export function Sidebar({ className, mode = 'admin' }: SidebarProps) {
  const { collapsed } = useSidebarStore()

  return (
    <aside
      className={cn(
        "sidebar fixed left-0 top-0 z-40 h-screen bg-card border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[260px]",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col h-full">
        {/* Brand */}
        <div className="flex items-center justify-between px-3 py-3 border-b">
          <SidebarBrand collapsed={collapsed} mode={mode} />
          {!collapsed && <SidebarToggle />}
        </div>

        {/* Search */}
        <SidebarSearch collapsed={collapsed} />

        {/* Navigation */}
        <SidebarNav collapsed={collapsed} mode={mode} />

        {/* Quick Actions */}
        <QuickActions collapsed={collapsed} mode={mode} />

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
