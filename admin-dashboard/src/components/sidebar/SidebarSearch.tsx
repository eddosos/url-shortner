'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { adminMenuItems, quickActions } from './menuConfig'

interface SidebarSearchProps {
  collapsed?: boolean
}

interface SearchResult {
  type: 'menu' | 'action'
  title: string
  href: string
  parent?: string
}

export function SidebarSearch({ collapsed = false }: SidebarSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const searchMenu = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      return
    }

    const term = searchTerm.toLowerCase()
    const found: SearchResult[] = []

    // Search main menu items
    adminMenuItems.forEach(item => {
      if (item.title.toLowerCase().includes(term)) {
        found.push({ type: 'menu', title: item.title, href: item.href })
      }
      if (item.children) {
        item.children.forEach(child => {
          if (child.title.toLowerCase().includes(term)) {
            found.push({ type: 'menu', title: child.title, href: child.href, parent: item.title })
          }
        })
      }
    })

    // Search quick actions
    quickActions.forEach(action => {
      if (action.title.toLowerCase().includes(term)) {
        found.push({ type: 'action', title: action.title, href: action.href })
      }
    })

    setResults(found.slice(0, 8))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    searchMenu(value)
  }

  if (collapsed) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-full p-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Search menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    )
  }

  return (
    <div className="sidebar-search px-3 py-2">
      <div className="relative">
        <svg 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search menu..."
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className={cn(
            "w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "placeholder:text-muted-foreground"
          )}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute left-3 right-3 mt-1 py-2 bg-popover border rounded-lg shadow-lg z-50 max-h-64 overflow-auto">
          {results.map((result, index) => (
            <a
              key={index}
              href={result.href}
              className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
            >
              <span className="font-medium">{result.title}</span>
              {result.parent && (
                <span className="ml-2 text-xs text-muted-foreground">in {result.parent}</span>
              )}
              {result.type === 'action' && (
                <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">Quick Action</span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
