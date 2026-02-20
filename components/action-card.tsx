"use client"

import type { LucideIcon } from "lucide-react"
import { Bell } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface ActionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  iconBgClass?: string
  className?: string
}

const DEFAULT_ICON_BG = "bg-primary"

export function ActionCard({
  title,
  description,
  icon: Icon,
  href,
  iconBgClass = DEFAULT_ICON_BG,
  className,
  showNotifyButton = false,
  onNotify,
}: ActionCardProps) {
  const handleNotify = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onNotify) {
      onNotify()
    } else {
      toast.success("Notificación enviada por WhatsApp a todos los miembros del grupo")
    }
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full relative">
      <Card
        className={cn(
          "bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full",
          className
        )}
      >
        {showNotifyButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNotify}
            className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            type="button"
          >
            <Bell className="h-4 w-4 text-accent" />
            <span className="sr-only">Avisar a todos</span>
          </Button>
        )}
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
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  )
}
