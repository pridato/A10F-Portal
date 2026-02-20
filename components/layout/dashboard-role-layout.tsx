import type { ReactNode } from "react"
import { AppHeader } from "@/components/app-header"
import { PageFooter } from "@/components/page-footer"
import { ROLE_GREETING } from "@/constants/roles"
import type { Role } from "@/types/portal"

type LoggedInRole = Exclude<Role, "login">

interface DashboardRoleLayoutProps {
  role: LoggedInRole
  onLogout: () => void
  children: ReactNode
  /** Clase del avatar (ej. bg-primary para admin/profesor, bg-accent para alumno) */
  avatarClassName?: string
}

export function DashboardRoleLayout({
  role,
  onLogout,
  children,
  avatarClassName,
}: DashboardRoleLayoutProps) {
  const greeting = ROLE_GREETING[role]
  const initial = greeting.charAt(0)

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader
        greeting={greeting}
        avatarInitial={initial}
        avatarClassName={avatarClassName}
        onLogout={onLogout}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <PageFooter />
    </div>
  )
}
