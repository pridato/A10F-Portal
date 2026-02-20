"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { AppHeader } from "@/components/app-header"
import { QuickStatCard } from "@/components/quick-stat-card"
import { ActionCard } from "@/components/action-card"
import { NextClassBanner } from "@/components/next-class-banner"
import { PageFooter } from "@/components/page-footer"
import {
  DASHBOARD_PROFESSOR_HEADER,
  DASHBOARD_PROFESSOR_STATS,
  DASHBOARD_PROFESSOR_CARDS,
  DASHBOARD_PROFESSOR_BANNER,
  DASHBOARD_STUDENT_HEADER,
  DASHBOARD_STUDENT_BANNER,
  DASHBOARD_STUDENT_CARDS,
} from "@/data/dashboard-tabs"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profesor")
  const [isLoading, setIsLoading] = useState(true)
  const userName = activeTab === "profesor" ? "Profesor" : "Alumno"

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader
        greeting={userName}
        avatarInitial={userName[0]}
        avatarClassName="bg-slate-900 text-white"
        onLogout={() => {}}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex h-12 items-center justify-center rounded-xl bg-white p-1 shadow-sm border border-slate-200">
              <TabsTrigger
                value="profesor"
                className="rounded-lg px-8 py-2 text-sm font-medium transition-all data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow"
              >
                Vista Profesor
              </TabsTrigger>
              <TabsTrigger
                value="alumno"
                className="rounded-lg px-8 py-2 text-sm font-medium transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow"
              >
                Vista Alumno
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profesor" className="mt-0 space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">{DASHBOARD_PROFESSOR_HEADER.title}</h1>
              <p className="text-slate-600 dark:text-slate-400">{DASHBOARD_PROFESSOR_HEADER.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {isLoading ? (
                <>
                  <Skeleton className="h-24 w-full rounded-xl" />
                  <Skeleton className="h-24 w-full rounded-xl" />
                  <Skeleton className="h-24 w-full rounded-xl" />
                </>
              ) : (
                DASHBOARD_PROFESSOR_STATS.map((stat, index) => (
                  <QuickStatCard
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    iconBgClass={stat.iconBgClass}
                    iconColorClass={stat.iconColorClass}
                  />
                ))
              )}
            </div>
            <NextClassBanner data={DASHBOARD_PROFESSOR_BANNER} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DASHBOARD_PROFESSOR_CARDS.map((card, index) => (
                <ActionCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  href={card.href}
                  iconBgClass="bg-slate-900"
                  showNotifyButton={card.title === "Grupos"}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumno" className="mt-0 space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">{DASHBOARD_STUDENT_HEADER.title}</h1>
              <p className="text-slate-600 dark:text-slate-400">{DASHBOARD_STUDENT_HEADER.subtitle}</p>
            </div>
            <NextClassBanner data={DASHBOARD_STUDENT_BANNER} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <>
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-48 w-full rounded-xl" />
                </>
              ) : (
                DASHBOARD_STUDENT_CARDS.map((card, index) => (
                  <ActionCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    href={card.href}
                    iconBgClass="bg-red-600"
                  />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        <PageFooter withTagline />
      </main>
    </div>
  )
}
