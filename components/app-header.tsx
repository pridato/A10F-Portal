"use client"

import { Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SITE_BRAND } from "@/constants/site"

interface AppHeaderProps {
  greeting: string
  avatarInitial: string
  avatarClassName?: string
  onLogout: () => void
  showNotifications?: boolean
}

export function AppHeader({
  greeting,
  avatarInitial,
  avatarClassName = "bg-primary text-primary-foreground",
  onLogout,
  showNotifications = true,
}: AppHeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/a10f-logo.png" 
              alt="Academia 10 Formación" 
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            {showNotifications && (
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full" aria-hidden />
              </Button>
            )}
            <Avatar className={`h-9 w-9 ${avatarClassName}`}>
              <AvatarFallback className={`${avatarClassName} text-sm`}>{avatarInitial}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:block">Hola, {greeting}</span>
            <Button
              onClick={onLogout}
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              type="button"
            >
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
