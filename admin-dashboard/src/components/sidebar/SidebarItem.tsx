'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import { SidebarBadge } from './SidebarBadge'
import { SidebarDropdown } from './SidebarDropdown'
import { useSidebarStore } from '@/store/useSidebarStore'
import { MenuItem } from '@/types'

interface SidebarItemProps {
  item: MenuItem
  collapsed?: boolean
}

export function SidebarItem({ item, collapsed = false }: SidebarItemProps) {
  const pathname = usePathname()
  const { activeItem, setActiveItem, expandedItems, toggleExpanded } = useSidebarStore()
  
  const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Circle
  const hasChildren = item.children && item.children.length > 0
  const isActive = pathname === item.href || activeItem === item.id
  const isExpanded = expandedItems.includes(item.id)

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      toggleExpanded(item.id)
    } else {
      setActiveItem(item.id)
    }
  }

  const getBadgeVariant = () => {
    if (item.id === 'support' || item.id === 'notifications') return 'danger'
    if (item.id === 'links') return 'warning'
    return 'default'
  }

  if (collapsed && hasChildren) {
    return (
      <div className="sidebar-item group relative">
        <Link
          href={item.href}
          className={cn(
            "sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            isActive 
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
          title={item.title}
        >
          <IconComponent className="w-5 h-5 flex-shrink-0" />
        </Link>
        {/* Tooltip on hover */}
        <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 whitespace-nowrap">
          {item.title}
          {item.children?.map(child => (
            <div key={child.id} className="block pl-4 text-muted-foreground">{child.title}</div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <li className="sidebar-item">
      <button
        onClick={handleClick}
        className={cn(
          "sidebar-link w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
          isActive && !hasChildren
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        )}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        <div className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 flex-shrink-0" />
          <span>{item.title}</span>
        </div>
        <div className="flex items-center gap-2">
          {item.badge !== undefined && (
            <SidebarBadge count={item.badge} variant={getBadgeVariant()} />
          )}
          {hasChildren && (
            <svg
              className={cn(
                "w-4 h-4 transition-transform",
                isExpanded && "rotate-90"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </button>
      
      {hasChildren && isExpanded && (
        <SidebarDropdown items={item.children!} collapsed={collapsed} />
      )}
    </li>
  )
}
