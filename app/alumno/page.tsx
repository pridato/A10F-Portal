import { PortalHeader } from "@/components/portal-header"
import { DashboardCard } from "@/components/dashboard-card"
import { BookOpen, Play, Receipt, Calendar, MessageSquare, GraduationCap } from "lucide-react"

export default function AlumnoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader role="Alumno" username="Alumno" />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-1 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">Área del Alumno</h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7 text-pretty">
            Accede a tus cursos, materiales y recursos de aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Cursos" icon={BookOpen} variant="accent" />
          <DashboardCard title="Clases Grabadas" icon={Play} variant="primary" />
          <DashboardCard title="Facturas" icon={Receipt} variant="default" />
          <DashboardCard title="Horarios" icon={Calendar} variant="default" />
          <DashboardCard title="Comunicación" icon={MessageSquare} variant="default" />
          <DashboardCard title="Plataforma E-learning" icon={GraduationCap} variant="primary" />
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Academia 10 Formación. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
