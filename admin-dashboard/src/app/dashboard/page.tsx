'use client'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

function StatCard({ title, value, change, icon: iconName, trend }: any) {
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Circle
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <IconComponent className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn("text-xs", trend === 'up' ? 'text-green-600' : 'text-red-600')}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}

export default function UserDashboard() {
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
          <h1 className="text-lg font-semibold">Dashboard</h1>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Total Links" value="1,234" change="+15.3%" icon="Link" trend="up" />
            <StatCard title="Total Clicks" value="45,678" change="+22.1%" icon="MousePointerClick" trend="up" />
            <StatCard title="QR Codes" value="89" change="+8.5%" icon="QrCode" trend="up" />
            <StatCard title="Bio Pages" value="12" change="+2" icon="User" trend="up" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Link Performance</CardTitle>
                <CardDescription>Clicks and engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Chart placeholder - integrate Recharts here
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Links</CardTitle>
                <CardDescription>Your latest shortened URLs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { short: 'short.co/abc123', original: 'example.com/very-long-url', clicks: 234 },
                    { short: 'short.co/def456', original: 'mysite.com/page', clicks: 156 },
                    { short: 'short.co/ghi789', original: 'shop.com/product/123', clicks: 89 },
                    { short: 'short.co/jkl012', original: 'blog.com/article', clicks: 67 },
                    { short: 'short.co/mno345', original: 'docs.com/guide', clicks: 45 },
                  ].map((link, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="font-medium">{link.short}</p>
                        <p className="text-xs text-muted-foreground truncate">{link.original}</p>
                      </div>
                      <span className="text-muted-foreground">{link.clicks} clicks</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Create new content quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Shorten URL', icon: 'Link', href: '/dashboard/links/new' },
                  { label: 'Create QR Code', icon: 'QrCode', href: '/dashboard/qr/create' },
                  { label: 'Bio Page', icon: 'User', href: '/dashboard/bio/new' },
                  { label: 'New Campaign', icon: 'Target', href: '/dashboard/campaigns/new' },
                ].map((action) => {
                  const IconComponent = (LucideIcons as any)[action.icon] || LucideIcons.Circle
                  return (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors gap-2"
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
