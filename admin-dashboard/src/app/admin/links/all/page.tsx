'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
import { MoreHorizontal, Search, Filter, Edit, Trash2, Eye, Copy, ExternalLink } from 'lucide-react'

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
}

const mockLinks: Link[] = [
  {
    id: '1',
    originalUrl: 'https://example.com/very-long-url-path',
    shortCode: 'abc123',
    shortUrl: 'https://short.ly/abc123',
    clicks: 1234,
    createdAt: '2024-01-15',
    status: 'active',
    userId: 'user1',
    user_email: 'john@example.com',
  },
  {
    id: '2',
    originalUrl: 'https://google.com/search?q=test',
    shortCode: 'xyz789',
    shortUrl: 'https://short.ly/xyz789',
    clicks: 567,
    createdAt: '2024-01-14',
    status: 'active',
    userId: 'user2',
    user_email: 'jane@example.com',
  },
]

export default function AllLinksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [links, setLinks] = useState<Link[]>(mockLinks)

  const filteredLinks = links.filter(
    (link) =>
      link.shortCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.user_email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'archived': return 'bg-gray-500'
      case 'reported': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">All Links</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage and moderate all shortened links</p>
        </div>
        <Button>
          <Edit className="w-4 h-4 mr-2" />
          Create Link
        </Button>
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
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
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
                      {link.status}
                    </Badge>
                  </TableCell>
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
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="w-4 h-4 mr-2" /> Copy URL
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
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
