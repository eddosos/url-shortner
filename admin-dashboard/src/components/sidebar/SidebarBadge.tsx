'use client'

import { cn } from '@/lib/utils'

interface SidebarBadgeProps {
  count?: number | string
  variant?: 'default' | 'danger' | 'warning' | 'success'
  className?: string
}

export function SidebarBadge({ count, variant = 'default', className }: SidebarBadgeProps) {
  if (!count) return null

  const variants = {
    default: 'bg-muted text-muted-foreground',
    danger: 'bg-destructive text-destructive-foreground',
    warning: 'bg-yellow-500 text-yellow-50-foreground',
    success: 'bg-green-500 text-green-50-foreground',
  }

  return (
    <span className={cn(
      "inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full min-w-[1.25rem] h-5",
      variants[variant],
      className
    )}>
      {typeof count === 'number' && count > 99 ? '99+' : count}
    </span>
  )
}
