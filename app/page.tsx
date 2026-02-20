"use client"

import { useState } from "react"
import type { Role } from "@/types/portal"
import { LoginForm } from "@/components/login-form"
import { DashboardRoleLayout } from "@/components/layout/dashboard-role-layout"
import { QuickStatCard } from "@/components/quick-stat-card"
import { ActionCard } from "@/components/action-card"
import { NextClassBanner } from "@/components/next-class-banner"
import { FOOTER_COPY } from "@/constants/site"
import { ADMIN_HEADER, ADMIN_QUICK_STATS, ADMIN_CARDS, ADMIN_ACTIVITY_LOGS } from "@/data/dashboard-admin"
import { ActivityCard } from "@/components/activity-card"
import { TEACHER_HEADER, TEACHER_QUICK_STATS, TEACHER_CARDS } from "@/data/dashboard-teacher"
import { STUDENT_HEADER, STUDENT_CARDS, STUDENT_NEXT_CLASS_BANNER } from "@/data/dashboard-student"

type LoggedInRole = Exclude<Role, "login">

export default function App() {
  const [currentRole, setCurrentRole] = useState<Role>("login")

  const handleLogin = (role: LoggedInRole) => {
    setCurrentRole(role)
  }

  const handleLogout = () => {
    setCurrentRole("login")
  }

  if (currentRole === "login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md">
          <LoginForm onSubmit={handleLogin} />
          <footer className="mt-8 text-center text-sm text-slate-500">
            {FOOTER_COPY.copyright}
          </footer>
        </div>
      </div>
    )
  }

  if (currentRole === "admin") {
    return (
      <DashboardRoleLayout role="admin" onLogout={handleLogout}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">{ADMIN_HEADER.title}</h1>
          <p className="text-slate-600 dark:text-slate-400">{ADMIN_HEADER.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ADMIN_QUICK_STATS.map((stat, index) => (
            <QuickStatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              iconBgClass={stat.iconBgClass}
              iconColorClass={stat.iconColorClass}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityCard logs={ADMIN_ACTIVITY_LOGS} maxItems={8} />
          {ADMIN_CARDS.map((card, index) => (
            <ActionCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
            />
          ))}
        </div>
      </DashboardRoleLayout>
    )
  }

  if (currentRole === "teacher") {
    return (
      <DashboardRoleLayout role="teacher" onLogout={handleLogout}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">{TEACHER_HEADER.title}</h1>
          <p className="text-slate-600">{TEACHER_HEADER.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {TEACHER_QUICK_STATS.map((stat, index) => (
            <QuickStatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              iconBgClass={stat.iconBgClass}
              iconColorClass={stat.iconColorClass}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEACHER_CARDS.map((card, index) => (
            <ActionCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
            />
          ))}
        </div>
      </DashboardRoleLayout>
    )
  }

  if (currentRole === "student") {
    return (
      <DashboardRoleLayout
        role="student"
        onLogout={handleLogout}
        avatarClassName="bg-red-600 text-white"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">{STUDENT_HEADER.title}</h1>
          <p className="text-slate-600">{STUDENT_HEADER.subtitle}</p>
        </div>
        <NextClassBanner data={STUDENT_NEXT_CLASS_BANNER} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_CARDS.map((card, index) => (
            <ActionCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
              iconBgClass="bg-red-600"
            />
          ))}
        </div>
      </DashboardRoleLayout>
    )
  }

  return null
}
