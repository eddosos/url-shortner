import UsersPage from '@/components/pages/UsersPage'
import { Ban } from 'lucide-react'

export default function BannedUsersPage() {
  return (
    <UsersPage 
      title="Banned Users"
      description="Suspended and banned user accounts"
      filterStatus="banned"
      icon={Ban}
    />
  )
}
