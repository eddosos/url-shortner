import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { adminMenuItems } from '@/components/sidebar/menuConfig'
import { 
  LayoutDashboard, Link as LinkIcon, Users, CreditCard, 
  BarChart3, FileText, Bell, Headphones, Settings, 
  Shield, DollarSign, ArrowRight 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin - URL Shortener',
  description: 'Admin dashboard for URL Shortener platform',
}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Link: LinkIcon,
  Users,
  CreditCard,
  BarChart3,
  FileText,
  Bell,
  Headphones,
  Settings,
  Shield,
  DollarSign,
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Admin Portal
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your URL shortener platform from one central location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminMenuItems.map((item) => {
            const Icon = iconMap[item.icon] || LayoutDashboard
            return (
              <Link key={item.id} href={item.href}>
                <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="space-y-1">
                      {item.children && item.children.length > 0 ? (
                        <ul className="text-sm">
                          {item.children.slice(0, 3).map((child) => (
                            <li key={child.id} className="text-slate-600 dark:text-slate-400">
                              • {child.title}
                            </li>
                          ))}
                          {item.children.length > 3 && (
                            <li className="text-slate-500 dark:text-slate-500 text-xs">
                              +{item.children.length - 3} more sections
                            </li>
                          )}
                        </ul>
                      ) : (
                        <p>Navigate to {item.title} management</p>
                      )}
                    </CardDescription>
                    {item.badge !== undefined && item.badge !== 0 && (
                      <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        {item.badge} pending
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Total Links</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="text-3xl font-bold text-green-600">0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Active Users</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="text-3xl font-bold text-blue-600">$0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Revenue (MTD)</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="text-3xl font-bold text-orange-600">0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Open Tickets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
