"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { LogIn, Receipt, UserPlus, UserCog, CreditCard, Activity, type LucideIcon } from "lucide-react"
import { format } from "date-fns"
import type { ActivityLog } from "@/data/dashboard-admin"
import { cn } from "@/lib/utils"

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

export function ActivityCard({ logs, maxItems = 5, className }: ActivityCardProps) {
  const [open, setOpen] = useState(false)
  const previewLogs = logs.slice(0, maxItems)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group block h-full w-full text-left">
          <Card className={cn(
            "bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer",
            className
          )}>
            <div className="flex flex-col items-start space-y-4">
              <div className="h-14 w-14 rounded-xl text-white flex items-center justify-center bg-primary group-hover:scale-110 transition-transform duration-300">
                <Activity className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">Actividad Reciente</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Últimas actividades del sistema</p>
              </div>
              {previewLogs.length > 0 && (
                <div className="w-full pt-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="space-y-2">
                    {previewLogs.slice(0, 3).map((log) => {
                      const Icon = getActivityIcon(log.type)
                      return (
                        <div key={log.id} className="flex items-center gap-2 text-sm">
                          <Icon className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400 truncate">{log.message}</span>
                        </div>
                      )
                    })}
                    {logs.length > 3 && (
                      <p className="text-xs text-muted-foreground pt-1">
                        +{logs.length - 3} actividades más
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Actividad Reciente</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-2">
          <ItemGroup>
            {logs.map((log) => {
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
      </DialogContent>
    </Dialog>
  )
}
