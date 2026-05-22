'use client'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

export default function CampaignsPage() {
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
          <h1 className="text-lg font-semibold">Campaigns</h1>
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
              <CardTitle>Marketing Campaigns</CardTitle>
              <CardDescription>Organize and track your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Summer Sale 2024', links: 25, clicks: 12453, status: 'active' },
                  { name: 'Product Launch Q1', links: 18, clicks: 8934, status: 'active' },
                  { name: 'Holiday Promotion', links: 32, clicks: 23456, status: 'completed' },
                  { name: 'Email Newsletter', links: 12, clicks: 5678, status: 'active' },
                ].map((campaign, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <LucideIcons.Target className="w-4 h-4 text-muted-foreground" />
                        <p className="font-medium">{campaign.name}</p>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-medium",
                          campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        )}>
                          {campaign.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <LucideIcons.Link className="w-4 h-4 text-muted-foreground" />
                        <span>{campaign.links} links</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LucideIcons.MousePointerClick className="w-4 h-4 text-muted-foreground" />
                        <span>{campaign.clicks.toLocaleString()} clicks</span>
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
