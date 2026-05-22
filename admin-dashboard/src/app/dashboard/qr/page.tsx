'use client'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'

export default function QRPage() {
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
          <h1 className="text-lg font-semibold">QR Codes</h1>
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
              <CardTitle>My QR Codes</CardTitle>
              <CardDescription>Generate and manage QR codes for your links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Product Launch', url: 'short.co/abc123', scans: 234 },
                  { name: 'Event Registration', url: 'short.co/event2024', scans: 567 },
                  { name: 'Contact Card', url: 'short.co/contact', scans: 123 },
                  { name: 'Menu QR', url: 'short.co/menu', scans: 890 },
                ].map((qr, i) => (
                  <div key={i} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                        <LucideIcons.QrCode className="w-10 h-10 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{qr.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{qr.url}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{qr.scans} scans</span>
                      <span className="flex items-center gap-1">
                        <LucideIcons.Clock className="w-3 h-3" />
                        Active
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 px-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        Download
                      </button>
                      <button className="py-2 px-3 border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
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
