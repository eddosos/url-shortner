'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'

interface SidebarToggleProps {
  className?: string
}

export function SidebarToggle({ className }: SidebarToggleProps) {
  const { collapsed, toggleCollapsed } = useSidebarStore()

  return (
    <button
      onClick={toggleCollapsed}
      className={cn(
        "sidebar-toggle flex items-center justify-center w-8 h-8 rounded-lg transition-colors",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        className
      )}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      type="button"
    >
      <svg
        className={cn(
          "w-5 h-5 transition-transform duration-200",
          collapsed && "rotate-180"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </button>
  )
}
