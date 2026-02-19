import { PortalHeader } from "@/components/portal-header"
import { DashboardCard } from "@/components/dashboard-card"
import { ClipboardCheck, BookOpen, Users, MessageSquare, Video, Calendar, FolderOpen } from "lucide-react"

export default function ProfesorPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader role="Profesor" username="Profesor" />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-1 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">Panel del Profesor</h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7 text-pretty">
            Gestiona tus clases, estudiantes y contenido educativo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <DashboardCard title="Pasar Lista" icon={ClipboardCheck} variant="accent" />
          <DashboardCard title="Cursos" icon={BookOpen} variant="default" />
          <DashboardCard title="Grupos" icon={Users} variant="default" />
          <DashboardCard title="Comunicación" icon={MessageSquare} variant="default" />
          <DashboardCard title="Zoom" icon={Video} variant="primary" />
          <DashboardCard title="Horarios" icon={Calendar} variant="default" />
          <DashboardCard title="Material" icon={FolderOpen} variant="default" />
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
