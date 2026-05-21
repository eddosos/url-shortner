'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SidebarBrandProps {
  collapsed?: boolean
}

export function SidebarBrand({ collapsed = false }: SidebarBrandProps) {
  return (
    <Link href="/admin/dashboard" className="sidebar-brand flex items-center gap-2 p-4">
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground transition-all",
        collapsed ? "mx-auto" : ""
      )}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight">URL Shortener</span>
          <span className="text-xs text-muted-foreground">Admin Panel</span>
        </div>
      )}
    </Link>
  )
}
