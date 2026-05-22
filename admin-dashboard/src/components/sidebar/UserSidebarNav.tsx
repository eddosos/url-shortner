'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { userMenuItems, userMenuSections } from './userMenuConfig'
import { SidebarItem } from './SidebarItem'
import { SidebarDropdown } from './SidebarDropdown'

interface UserSidebarNavProps {
  className?: string
  collapsed?: boolean
}

export function UserSidebarNav({ className, collapsed }: UserSidebarNavProps) {
  const { expandedSection, toggleSection } = useSidebarStore()

  // Build the complete menu with sections inserted at correct positions
  const buildMenu = () => {
    const result: Array<{ type: 'item'; item: any } | { type: 'section'; section: any }> = []
    
    // Add main items first
    userMenuItems.forEach(item => {
      result.push({ type: 'item', item })
    })

    // Add sections after their anchor items
    userMenuSections.forEach(section => {
      const anchorIndex = result.findIndex(
        r => r.type === 'item' && r.item.id === section.afterItem
      )
      
      if (anchorIndex !== -1) {
        result.splice(anchorIndex + 1, 0, { type: 'section', section })
      }
    })

    return result
  }

  const menu = buildMenu()

  return (
    <nav className={cn('flex-1 overflow-y-auto py-4', className)}>
      <div className="space-y-1 px-3">
        {menu.map((entry, index) => {
          if (entry.type === 'item') {
            return (
              <SidebarItem
                key={entry.item.id}
                item={entry.item}
                collapsed={collapsed}
                isActive={false}
              />
            )
          } else {
            const section = entry.section
            const isExpanded = expandedSection === section.label
            
            if (section.isCollapsible) {
              return (
                <SidebarDropdown
                  key={section.label}
                  label={section.label}
                  items={section.items}
                  isExpanded={isExpanded}
                  onToggle={() => toggleSection(section.label)}
                  collapsed={collapsed}
                />
              )
            } else {
              return (
                <div key={section.label} className="pt-4">
                  {!collapsed && (
                    <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.label}
                    </div>
                  )}
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <SidebarItem
                        key={item.id}
                        item={item}
                        collapsed={collapsed}
                        isActive={false}
                      />
                    ))}
                  </div>
                </div>
              )
            }
          }
        })}
      </div>
    </nav>
  )
}