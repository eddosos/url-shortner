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
import { MoreHorizontal, Search, Filter, Edit, Trash2, Eye, Ban, CheckCircle } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: string
  plan: string
  links: number
  status: 'active' | 'banned' | 'pending'
  lastActive: string
}

interface UsersPageProps {
  title: string
  description: string
  filterStatus?: 'active' | 'banned' | 'pending'
  icon?: React.ElementType
}

const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', plan: 'Pro', links: 45, status: 'active', lastActive: '2024-01-16' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', plan: 'Enterprise', links: 120, status: 'active', lastActive: '2024-01-16' },
]

export default function UsersPage({ title, description, filterStatus, icon: Icon }: UsersPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus ? user.status === filterStatus : true
    
    return matchesSearch && matchesStatus
  })

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
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Links</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-slate-500">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">{user.role}</Badge></TableCell>
                  <TableCell>{user.plan}</TableCell>
                  <TableCell>{user.links}</TableCell>
                  <TableCell>
                    <Badge className={user.status === 'active' ? 'bg-green-500' : user.status === 'banned' ? 'bg-red-500' : 'bg-yellow-500'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <MoreHorizontal className="w-4 h-4 ml-auto cursor-pointer" />
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
