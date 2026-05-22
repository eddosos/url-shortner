'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Save, X } from 'lucide-react'
import Link from 'next/link'

export default function NewLinkPage() {
  const [formData, setFormData] = useState({
    originalUrl: '',
    shortCode: '',
    customDomain: '',
    description: '',
    isActive: true,
    requireReview: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating link:', formData)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/links/all">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create New Link</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Manually create a shortened URL</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Link Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="originalUrl">Original URL *</Label>
                <Input
                  id="originalUrl"
                  placeholder="https://example.com/very-long-url"
                  value={formData.originalUrl}
                  onChange={(e) => setFormData({ ...formData, originalUrl: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shortCode">Custom Short Code</Label>
                  <Input
                    id="shortCode"
                    placeholder="abc123"
                    value={formData.shortCode}
                    onChange={(e) => setFormData({ ...formData, shortCode: e.target.value })}
                  />
                  <p className="text-xs text-slate-500">Leave empty for auto-generation</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="domain">Custom Domain</Label>
                  <Select value={formData.customDomain}>
                    <SelectTrigger>
                      <SelectValue placeholder="Default domain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">short.ly (Default)</SelectItem>
                      <SelectItem value="custom1">brand.co</SelectItem>
                      <SelectItem value="custom2">go.site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Internal Notes)</Label>
                <Textarea
                  id="description"
                  placeholder="Add notes about this link for internal reference..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border bg-slate-50 dark:bg-slate-900">
                <div className="space-y-0.5">
                  <Label>Require Review</Label>
                  <p className="text-sm text-slate-500">Link will need admin approval before going live</p>
                </div>
                <Switch
                  checked={formData.requireReview}
                  onCheckedChange={(checked) => setFormData({ ...formData, requireReview: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border bg-slate-50 dark:bg-slate-900">
                <div className="space-y-0.5">
                  <Label>Status</Label>
                  <p className="text-sm text-slate-500">Enable or disable this link</p>
                </div>
                <Switch
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  Create Link
                </Button>
                <Link href="/admin/links/all">
                  <Button type="button" variant="outline">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Short URL</div>
              <code className="text-lg font-mono text-primary break-all">
                https://{formData.customDomain || 'short.ly'}/{formData.shortCode || 'xxxxxx'}
              </code>
            </div>

            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Redirects to</div>
              <a 
                href={formData.originalUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all text-sm"
              >
                {formData.originalUrl || 'Enter original URL...'}
              </a>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-2">Settings Summary</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Status:</span>
                  <Badge variant={formData.isActive ? 'default' : 'secondary'}>
                    {formData.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Review Required:</span>
                  <Badge variant={formData.requireReview ? 'default' : 'secondary'}>
                    {formData.requireReview ? 'Yes' : 'No'}
                  </Badge>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
