import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  icon: LucideIcon
  variant?: "default" | "accent" | "primary"
  href?: string
}

export function DashboardCard({ title, icon: Icon, variant = "default", href = "#" }: DashboardCardProps) {
  const variantStyles = {
    default: "bg-card hover:bg-secondary border-border hover:border-primary/30",
    accent: "bg-card hover:bg-accent/5 border-border hover:border-accent/50",
    primary: "bg-card hover:bg-primary/5 border-border hover:border-primary/50",
  }

  const iconVariants = {
    default: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10",
    primary: "text-primary bg-primary/10",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        variantStyles[variant],
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            iconVariants[variant],
          )}
        >
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold text-foreground text-balance">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  )
}
