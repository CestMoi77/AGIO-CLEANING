import { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link?: string
  color?: 'blue' | 'teal' | 'sky'
}

const colorMap = {
  blue: 'bg-primary-50 text-primary-600',
  teal: 'bg-accent-50 text-accent-600',
  sky: 'bg-sky-50 text-sky-600',
}

export default function ServiceCard({ icon: Icon, title, description, link, color = 'blue' }: ServiceCardProps) {
  const content = (
    <div className="group card h-full flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      {link && (
        <div className="mt-auto">
          <span className="text-primary-600 text-sm font-medium group-hover:underline">
            Meer info →
          </span>
        </div>
      )}
    </div>
  )

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>
  }

  return content
}
