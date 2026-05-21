'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import { SidebarBadge } from './SidebarBadge'
import { MenuItem } from '@/types'

interface SidebarDropdownProps {
  items: MenuItem[]
  collapsed?: boolean
}

export function SidebarDropdown({ items, collapsed = false }: SidebarDropdownProps) {
  const pathname = usePathname()

  return (
    <ul className="sidebar-dropdown list-unstyled mt-1 space-y-0.5">
      {items.map((item) => {
        const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Circle
        const isActive = pathname === item.href
        
        return (
          <li key={item.id} className="sidebar-item">
            <Link
              href={item.href}
              className={cn(
                "sidebar-link flex items-center gap-3 px-3 py-2 pl-9 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              <IconComponent className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="flex-1">{item.title}</span>
              {item.badge !== undefined && (
                <SidebarBadge 
                  count={item.badge} 
                  variant={item.id.includes('pending') || item.id.includes('ticket') ? 'danger' : 'default'}
                />
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
