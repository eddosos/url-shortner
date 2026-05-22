'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  MoreHorizontal, Search, Filter, Edit, Trash2, Eye, Copy, 
  ExternalLink, Clock, Flag, Archive, CheckCircle, XCircle 
} from 'lucide-react'

interface Link {
  id: string
  originalUrl: string
  shortCode: string
  shortUrl: string
  clicks: number
  createdAt: string
  status: 'active' | 'pending' | 'archived' | 'reported'
  userId: string
  user_email: string
  reportReason?: string
}

interface LinksPageProps {
  title: string
  description: string
  filterStatus?: 'pending' | 'reported' | 'archived'
  icon?: React.ElementType
}

const mockLinks: Link[] = [
  {
    id: '1',
    originalUrl: 'https://example.com/suspicious-link',
    shortCode: 'abc123',
    shortUrl: 'https://short.ly/abc123',
    clicks: 45,
    createdAt: '2024-01-15',
    status: 'reported',
    userId: 'user1',
    user_email: 'john@example.com',
    reportReason: 'Spam content',
  },
  {
    id: '2',
    originalUrl: 'https://newsite.com/landing',
    shortCode: 'xyz789',
    shortUrl: 'https://short.ly/xyz789',
    clicks: 0,
    createdAt: '2024-01-16',
    status: 'pending',
    userId: 'user2',
    user_email: 'jane@example.com',
  },
]

export default function LinksPage({ title, description, filterStatus, icon: Icon }: LinksPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredLinks = mockLinks.filter((link) => {
    const matchesSearch = 
      link.shortCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.user_email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus ? link.status === filterStatus : true
    
    return matchesSearch && matchesStatus
  })

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white'
      case 'pending': return 'bg-yellow-500 text-white'
      case 'archived': return 'bg-gray-500 text-white'
      case 'reported': return 'bg-red-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-3 h-3 mr-1" />
      case 'reported': return <Flag className="w-3 h-3 mr-1" />
      case 'archived': return <Archive className="w-3 h-3 mr-1" />
      case 'active': return <CheckCircle className="w-3 h-3 mr-1" />
      default: return null
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {Icon && <div className="p-2 rounded-lg bg-primary/10"><Icon className="w-6 h-6 text-primary" /></div>}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button>
            <Eye className="w-4 h-4 mr-2" />
            Review Queue
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{filteredLinks.length}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Links</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">
              {mockLinks.filter(l => l.status === 'pending').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Pending Review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">
              {mockLinks.filter(l => l.status === 'reported').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Reported</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-600">
              {mockLinks.filter(l => l.status === 'archived').length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Archived</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by short code, URL, or user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Links ({filteredLinks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Short Code</TableHead>
                <TableHead>Original URL</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Status</TableHead>
                {filterStatus === 'reported' && <TableHead>Report Reason</TableHead>}
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLinks.map((link) => (
                <TableRow key={link.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{link.shortCode}</code>
                      <Button variant="ghost" size="icon" onClick={() => handleCopy(link.shortUrl)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    <a href={link.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                      {link.originalUrl}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </TableCell>
                  <TableCell>{link.user_email}</TableCell>
                  <TableCell>{link.clicks.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(link.status)}>
                      {getStatusIcon(link.status)}
                      {link.status}
                    </Badge>
                  </TableCell>
                  {filterStatus === 'reported' && (
                    <TableCell className="text-red-600">{link.reportReason || 'N/A'}</TableCell>
                  )}
                  <TableCell>{link.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" /> View Details
                        </DropdownMenuItem>
                        {filterStatus === 'pending' && (
                          <>
                            <DropdownMenuItem>
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="w-4 h-4 mr-2" /> Reject
                            </DropdownMenuItem>
                          </>
                        )}
                        {filterStatus === 'reported' && (
                          <>
                            <DropdownMenuItem>
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Mark as Safe
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Archive className="w-4 h-4 mr-2" /> Archive Link
                            </DropdownMenuItem>
                          </>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
