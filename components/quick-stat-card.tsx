import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface QuickStatCardProps {
  value: string
  label: string
  icon: LucideIcon
  iconBgClass?: string
  iconColorClass?: string
  className?: string
}

const DEFAULT_ICON_BG = "bg-slate-100"
const DEFAULT_ICON_COLOR = "text-slate-600"

export function QuickStatCard({
  value,
  label,
  icon: Icon,
  iconBgClass = DEFAULT_ICON_BG,
  iconColorClass = DEFAULT_ICON_COLOR,
  className,
}: QuickStatCardProps) {
  return (
    <Card
      className={cn(
        "bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            iconBgClass,
            iconColorClass
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          <p className="text-sm text-slate-600">{label}</p>
        </div>
      </div>
    </Card>
  )
}
