'use client'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

export default function LinksPage() {
  const { collapsed } = useSidebarStore()

  return (
    <div className="min-h-screen bg-background">
      <Sidebar mode="user" />
      
      <main 
        className={cn(
          "transition-all duration-300 ease-in-out",
          collapsed ? "ml-[70px]" : "ml-[260px]"
        )}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
          <h1 className="text-lg font-semibold">Links Management</h1>
          <div className="ml-auto flex items-center gap-4">
            <Link 
              href="/admin/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <LucideIcons.Shield className="w-4 h-4" />
              Admin Panel
            </Link>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <LucideIcons.Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              U
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Links</CardTitle>
              <CardDescription>Manage and track your shortened URLs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { short: 'short.co/abc123', original: 'example.com/very-long-url-path', clicks: 1234, created: '2024-01-15' },
                  { short: 'short.co/def456', original: 'mysite.com/products/item-123', clicks: 567, created: '2024-01-14' },
                  { short: 'short.co/ghi789', original: 'shop.com/category/electronics', clicks: 890, created: '2024-01-13' },
                  { short: 'short.co/jkl012', original: 'blog.com/article/how-to-guide', clicks: 345, created: '2024-01-12' },
                  { short: 'short.co/mno345', original: 'docs.com/api/reference', clicks: 234, created: '2024-01-11' },
                ].map((link, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <LucideIcons.Link className="w-4 h-4 text-muted-foreground" />
                        <p className="font-medium truncate">{link.short}</p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-1">{link.original}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <LucideIcons.MousePointerClick className="w-4 h-4 text-muted-foreground" />
                        <span>{link.clicks} clicks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LucideIcons.Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{link.created}</span>
                      </div>
                      <button className="p-2 hover:bg-accent rounded-lg">
                        <LucideIcons.MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
