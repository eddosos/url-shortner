import LinksPage from '@/components/pages/LinksPage'
import { Flag } from 'lucide-react'

export default function ReportedLinksPage() {
  return (
    <LinksPage 
      title="Reported Links"
      description="Links that have been flagged by users for review"
      filterStatus="reported"
      icon={Flag}
    />
  )
}
