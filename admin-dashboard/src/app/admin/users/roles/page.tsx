'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Shield, Plus, Edit, Trash2 } from 'lucide-react'

const roles = [
  { id: '1', name: 'Super Admin', users: 2, permissions: 'All', color: 'bg-purple-500' },
  { id: '2', name: 'Admin', users: 5, permissions: 'Most', color: 'bg-blue-500' },
  { id: '3', name: 'Moderator', users: 12, permissions: 'Limited', color: 'bg-green-500' },
  { id: '4', name: 'User', users: 1250, permissions: 'Basic', color: 'bg-gray-500' },
]

export default function RolesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Roles & Permissions</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage user roles and access control</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${role.color} text-white`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle>{role.name}</CardTitle>
                    <p className="text-sm text-slate-500">{role.users} users</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Permission Level:</span>
                  <Badge variant="outline">{role.permissions}</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Trash2 className="w-3 h-3 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
