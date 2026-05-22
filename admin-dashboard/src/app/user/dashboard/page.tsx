'use client'

import { UserSidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'

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
      <UserSidebar />
      
      <main 
        className={cn(
          "transition-all duration-300 ease-in-out",
          collapsed ? "ml-[70px]" : "ml-[260px]"
        )}
      >
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
          <h1 className="text-lg font-semibold">My Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
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
            <StatCard title="Total Links" value="1,234" change="+8.2%" icon="Link" trend="up" />
            <StatCard title="Total Clicks" value="45.6K" change="+15.3%" icon="MousePointerClick" trend="up" />
            <StatCard title="QR Codes" value="89" change="+5.1%" icon="QrCode" trend="up" />
            <StatCard title="Active Campaigns" value="12" change="+2.4%" icon="Campaign" trend="up" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Link Performance</CardTitle>
                <CardDescription>Your top performing links this month</CardDescription>
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
                <CardDescription>Your recently created short links</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="flex-1">short.link/abc{i}</span>
                      <span className="text-muted-foreground">{i * 123} clicks</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Create new content in seconds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Create Link', icon: 'Link' },
                  { label: 'Generate QR', icon: 'QrCode' },
                  { label: 'New Campaign', icon: 'Megaphone' },
                  { label: 'Bio Page', icon: 'User' },
                ].map((action) => {
                  const IconComponent = (LucideIcons as any)[action.icon] || LucideIcons.Circle
                  return (
                    <button
                      key={action.label}
                      className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors gap-2"
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </button>
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
