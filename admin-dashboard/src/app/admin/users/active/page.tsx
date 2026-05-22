import UsersPage from '@/components/pages/UsersPage'
import { Activity } from 'lucide-react'

export default function ActiveUsersPage() {
  return (
    <UsersPage 
      title="Active Users"
      description="Users currently active on the platform"
      filterStatus="active"
      icon={Activity}
    />
  )
}
