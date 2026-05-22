import LinksPage from '@/components/pages/LinksPage'
import { Archive } from 'lucide-react'

export default function ArchivedLinksPage() {
  return (
    <LinksPage 
      title="Archived Links"
      description="Links that have been archived and are no longer active"
      filterStatus="archived"
      icon={Archive}
    />
  )
}
