'use client'

import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { quickActions } from './menuConfig'
import { cn } from '@/lib/utils'

interface QuickActionItem {
  id: string
  title: string
  icon: string
  href: string
}

interface QuickActionsProps {
  collapsed?: boolean
  actions?: QuickActionItem[]
}

export function QuickActions({ collapsed = false, actions }: QuickActionsProps) {
  const quickActionsList = actions || quickActions
  
  if (collapsed) {
    return (
      <div className="p-3 border-t">
        {quickActionsList.slice(0, 2).map((action) => {
          const IconComponent = (LucideIcons as any)[action.icon] || LucideIcons.Circle
          return (
            <Link
              key={action.id}
              href={action.href}
              className="flex items-center justify-center w-full p-2 mb-1 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors last:mb-0"
              title={action.title}
            >
              <IconComponent className="w-5 h-5" />
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className="p-3 border-t">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-1">
        {quickActionsList.map((action) => {
          const IconComponent = (LucideIcons as any)[action.icon] || LucideIcons.Circle
          return (
            <Link
              key={action.id}
              href={action.href}
              className="flex flex-col items-center justify-center p-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors gap-1"
            >
              <IconComponent className="w-4 h-4" />
              <span className="truncate w-full text-center">{action.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
