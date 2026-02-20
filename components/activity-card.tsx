"use client"

import { Card } from "@/components/ui/card"
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"
import { LogIn, Receipt, UserPlus, UserCog, CreditCard, Activity, type LucideIcon } from "lucide-react"
import { format } from "date-fns"
import type { ActivityLog } from "@/data/dashboard-admin"

interface ActivityCardProps {
  logs: ActivityLog[]
  maxItems?: number
  className?: string
}

const getActivityIcon = (type: ActivityLog["type"]): LucideIcon => {
  switch (type) {
    case "login":
      return LogIn
    case "invoice":
      return Receipt
    case "user_created":
      return UserPlus
    case "user_updated":
      return UserCog
    case "payment":
      return CreditCard
    default:
      return LogIn
  }
}

export function ActivityCard({ logs, maxItems = 8, className }: ActivityCardProps) {
  const displayLogs = logs.slice(0, maxItems)

  return (
    <Card className={`bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-full ${className || ""}`}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-start space-y-4 mb-4">
          <div className="h-14 w-14 rounded-xl text-white flex items-center justify-center bg-primary">
            <Activity className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">Actividad Reciente</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Últimas actividades del sistema</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ItemGroup>
            {displayLogs.map((log) => {
              const Icon = getActivityIcon(log.type)
              return (
                <Item key={log.id} variant="outline" className="mb-2 last:mb-0">
                  <ItemMedia variant="icon">
                    <Icon className="h-4 w-4" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{log.message}</ItemTitle>
                    <ItemDescription>
                      {log.user} • {format(new Date(log.timestamp), "dd MMM yyyy 'a las' HH:mm")}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              )
            })}
          </ItemGroup>
        </div>
      </div>
    </Card>
  )
}
