"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ClipboardCheck, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Video, 
  Calendar, 
  FolderOpen,
  PlayCircle,
  GraduationCap,
  Receipt,
  MessageCircle,
  LogOut,
  Bell,
  Clock,
  UserCheck,
  Mail
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const professorCards = [
  { icon: ClipboardCheck, title: "Pasar Lista", description: "Registra la asistencia de tus estudiantes", href: "#" },
  { icon: BookOpen, title: "Cursos", description: "Gestiona tus cursos y contenido", href: "#" },
  { icon: Users, title: "Grupos", description: "Administra grupos de estudiantes", href: "#" },
  { icon: MessageSquare, title: "Comunicación", description: "Mensajes y notificaciones", href: "#" },
  { icon: Video, title: "Clases en Directo", description: "Inicia sesiones de Zoom", href: "#" },
  { icon: Calendar, title: "Horarios", description: "Consulta tu calendario de clases", href: "#" },
  { icon: FolderOpen, title: "Material Didáctico", description: "Sube y organiza recursos", href: "#" }
]

const studentCards = [
  { icon: BookOpen, title: "Mis Cursos", description: "Accede a tus cursos matriculados", href: "#" },
  { icon: PlayCircle, title: "Clases Grabadas", description: "Visualiza sesiones anteriores", href: "#" },
  { icon: GraduationCap, title: "Plataforma E-learning", description: "Acceso a contenido interactivo", href: "#" },
  { icon: Calendar, title: "Horarios", description: "Consulta tu calendario académico", href: "#" },
  { icon: MessageCircle, title: "Comunicación", description: "Mensajes con profesores", href: "#" },
  { icon: Receipt, title: "Facturas y Pagos", description: "Gestiona tus pagos", href: "#" }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profesor")
  const userName = activeTab === "profesor" ? "Profesor" : "Alumno"

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-slate-900">A10F</span>
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-700">Academia 10 Formación</span>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9 bg-slate-900 text-white">
                  <AvatarFallback className="bg-slate-900 text-white text-sm">{userName[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">Hola, {userName}</span>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs Navigation */}
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

          {/* Professor View */}
          <TabsContent value="profesor" className="mt-0 space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">Panel del Profesor</h1>
              <p className="text-slate-600">Gestiona tus clases, estudiantes y contenido educativo</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                    <p className="text-sm text-slate-600">Clases de hoy</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">47</p>
                    <p className="text-sm text-slate-600">Alumnos activos</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">5</p>
                    <p className="text-sm text-slate-600">Mensajes sin leer</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professorCards.map((card, index) => (
                <a key={index} href={card.href} className="group">
                  <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="h-14 w-14 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <card.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-600">{card.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Student View */}
          <TabsContent value="alumno" className="mt-0 space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">Área del Alumno</h1>
              <p className="text-slate-600">Accede a tus cursos, materiales y recursos de aprendizaje</p>
            </div>

            {/* Upcoming Event Banner */}
            <Card className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 border-0 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-90 mb-1">Próxima clase</p>
                  <h3 className="text-xl font-bold mb-1">Cálculo Universitario</h3>
                  <p className="text-sm opacity-90">Hoy a las 17:00h</p>
                </div>
                <Button className="bg-white text-red-600 hover:bg-slate-100 font-medium self-start md:self-center">
                  Unirse ahora
                </Button>
              </div>
            </Card>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentCards.map((card, index) => (
                <a key={index} href={card.href} className="group">
                  <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="h-14 w-14 rounded-xl bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <card.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-600">{card.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          © 2025 Academia 10 Formación. Todos los derechos reservados. Tu academia de confianza.
        </footer>
      </main>
    </div>
  )
}
