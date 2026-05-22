import LinksPage from '@/components/pages/LinksPage'
import { Clock } from 'lucide-react'

export default function PendingLinksPage() {
  return (
    <LinksPage 
      title="Pending Review"
      description="Links awaiting admin approval before going live"
      filterStatus="pending"
      icon={Clock}
    />
  )
}
