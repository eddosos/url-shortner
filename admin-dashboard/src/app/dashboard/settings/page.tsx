'use client'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
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
          <h1 className="text-lg font-semibold">Settings</h1>
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
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="john@example.com"
                  />
                </div>
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Save Changes
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <LucideIcons.Bell className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Email Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive updates via email</p>
                    </div>
                  </div>
                  <button className="relative w-10 h-5 bg-primary rounded-full">
                    <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <LucideIcons.Shield className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Two-Factor Auth</p>
                      <p className="text-xs text-muted-foreground">Extra security layer</p>
                    </div>
                  </div>
                  <button className="relative w-10 h-5 bg-muted rounded-full">
                    <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
                  </button>
                </div>
                <button className="w-full py-2 px-4 border rounded-lg font-medium hover:bg-accent transition-colors">
                  Change Password
                </button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage your API access tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Production Key</p>
                      <p className="text-sm text-muted-foreground font-mono">sk_live_••••••••••••1234</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="py-2 px-3 border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                        Copy
                      </button>
                      <button className="py-2 px-3 border rounded-lg text-sm font-medium hover:bg-red-50 text-red-600 transition-colors">
                        Revoke
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    <LucideIcons.Plus className="w-4 h-4" />
                    Generate New Key
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
