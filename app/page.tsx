"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import {
  Users,
  CreditCard,
  CalendarDays,
  Settings,
  ClipboardCheck,
  BookOpen,
  Video,
  FolderOpen,
  GraduationCap,
  PlayCircle,
  Receipt,
  LogOut,
  Bell,
  Clock,
  UserCheck,
  Mail,
  DollarSign,
  UserCircle2
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Role = "login" | "admin" | "teacher" | "student"

export default function App() {
  const [currentRole, setCurrentRole] = useState<Role>("login")
  const [selectedRole, setSelectedRole] = useState<Role>("student")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentRole(selectedRole)
  }

  const handleLogout = () => {
    setCurrentRole("login")
  }

  // Vista Login
  if (currentRole === "login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-sm rounded-xl p-8 border border-slate-200">
            <div className="flex flex-col items-center mb-8">
              <div className="mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">A10F</span>
                  <span className="mx-2 text-slate-300">|</span>
                  <span className="text-sm font-medium text-slate-700">Academia 10 Formación</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 text-center">Portal de Acceso</h1>
              <p className="text-slate-600 text-center mt-2">
                Introduce tus credenciales para continuar
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@academia10.com"
                  className="h-11 bg-slate-50 border-slate-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-900">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-11 bg-slate-50 border-slate-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-slate-900">
                  Entrar como
                </Label>
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as Role)}
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                >
                  <option value="student">Alumno</option>
                  <option value="teacher">Profesor</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-950 hover:bg-blue-900 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                Iniciar Sesión
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                ¿Has olvidado tu contraseña?{" "}
                <button className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  Contacta con secretaría
                </button>
              </p>
            </div>
          </div>

          <footer className="mt-8 text-center text-sm text-slate-500">
            © 2025 Academia 10 Formación. Todos los derechos reservados.
          </footer>
        </div>
      </div>
    )
  }

  // Vista Admin
  if (currentRole === "admin") {
    const adminCards = [
      { icon: Users, title: "Gestión de Usuarios", description: "Administra alumnos, profesores y personal", href: "#" },
      { icon: CreditCard, title: "Facturación Global", description: "Control de pagos e ingresos", href: "#" },
      { icon: CalendarDays, title: "Control de Horarios", description: "Gestiona calendarios y clases", href: "#" },
      { icon: Settings, title: "Configuración Acadesoft", description: "Ajustes del sistema", href: "#" }
    ]

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-slate-900">A10F</span>
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-700">Academia 10 Formación</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
                </Button>
                <Avatar className="h-9 w-9 bg-blue-950 text-white">
                  <AvatarFallback className="bg-blue-950 text-white text-sm">A</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">Hola, Administrador</span>
                <Button onClick={handleLogout} variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Panel de Administración</h1>
            <p className="text-slate-600">Visión global de la academia</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">€24,500</p>
                  <p className="text-sm text-slate-600">Ingresos del mes</p>
                </div>
              </div>
            </Card>
            <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <UserCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">247</p>
                  <p className="text-sm text-slate-600">Total Alumnos</p>
                </div>
              </div>
            </Card>
            <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">18</p>
                  <p className="text-sm text-slate-600">Profesores Activos</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminCards.map((card, index) => (
              <a key={index} href={card.href} className="group">
                <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="h-14 w-14 rounded-xl bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

          <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
            © 2025 Academia 10 Formación. Todos los derechos reservados.
          </footer>
        </main>
      </div>
    )
  }

  // Vista Teacher
  if (currentRole === "teacher") {
    const teacherCards = [
      { icon: ClipboardCheck, title: "Acadesoft / Pasar Lista", description: "Registra la asistencia de estudiantes", href: "#" },
      { icon: BookOpen, title: "Cursos y Notas", description: "Gestiona calificaciones y contenido", href: "#" },
      { icon: Video, title: "Sala de Zoom", description: "Inicia clases en directo", href: "#" },
      { icon: FolderOpen, title: "Material Didáctico", description: "Sube y organiza recursos", href: "#" }
    ]

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-slate-900">A10F</span>
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-700">Academia 10 Formación</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
                </Button>
                <Avatar className="h-9 w-9 bg-blue-950 text-white">
                  <AvatarFallback className="bg-blue-950 text-white text-sm">P</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">Hola, Profesor</span>
                <Button onClick={handleLogout} variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Panel del Profesor</h1>
            <p className="text-slate-600">Gestiona tus clases y estudiantes</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                <div className="h-12 w-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5</p>
                  <p className="text-sm text-slate-600">Mensajes nuevos</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherCards.map((card, index) => (
              <a key={index} href={card.href} className="group">
                <Card className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="h-14 w-14 rounded-xl bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

          <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
            © 2025 Academia 10 Formación. Todos los derechos reservados.
          </footer>
        </main>
      </div>
    )
  }

  // Vista Student
  if (currentRole === "student") {
    const studentCards = [
      { icon: GraduationCap, title: "Mis Cursos / E-learning", description: "Accede a contenido interactivo", href: "#" },
      { icon: Video, title: "Clases en Directo / Zoom", description: "Únete a sesiones en vivo", href: "#" },
      { icon: PlayCircle, title: "Clases Grabadas", description: "Visualiza sesiones anteriores", href: "#" },
      { icon: Receipt, title: "Facturas", description: "Gestiona tus pagos", href: "#" }
    ]

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-slate-900">A10F</span>
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-700">Academia 10 Formación</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
                </Button>
                <Avatar className="h-9 w-9 bg-red-600 text-white">
                  <AvatarFallback className="bg-red-600 text-white text-sm">A</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">Hola, Alumno</span>
                <Button onClick={handleLogout} variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Área del Alumno</h1>
            <p className="text-slate-600">Tus recursos de aprendizaje</p>
          </div>

          {/* Banner destacado */}
          <Card className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 border-0 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-white">
                <p className="text-sm font-medium opacity-90 mb-1">Próxima clase en directo</p>
                <h3 className="text-xl font-bold mb-1">Cálculo Universitario</h3>
                <p className="text-sm opacity-90">Hoy a las 17:00h - Unirse ahora</p>
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

          <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
            © 2025 Academia 10 Formación. Todos los derechos reservados.
          </footer>
        </main>
      </div>
    )
  }

  return null
}
