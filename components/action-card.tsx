import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ActionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  iconBgClass?: string
  className?: string
}

const DEFAULT_ICON_BG = "bg-blue-950"

export function ActionCard({
  title,
  description,
  icon: Icon,
  href,
  iconBgClass = DEFAULT_ICON_BG,
  className,
}: ActionCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <Card
        className={cn(
          "bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full",
          className
        )}
      >
        <div className="flex flex-col items-start space-y-4">
          <div
            className={cn(
              "h-14 w-14 rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
              iconBgClass
            )}
          >
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  )
}
