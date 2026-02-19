import { PortalHeader } from "@/components/portal-header"
import { DashboardCard } from "@/components/dashboard-card"
import { MessageCircle, Instagram, FileText, Mail, HardDrive, Briefcase, Video, Users, Receipt } from "lucide-react"

export default function AdministradorPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader role="Administrador" username="Administrador" />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-1 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">Panel de Administración</h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7 text-pretty">
            Control total del sistema y gestión de la academia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <DashboardCard title="WhatsApp" icon={MessageCircle} variant="accent" />
          <DashboardCard title="Instagram" icon={Instagram} variant="accent" />
          <DashboardCard title="Documentos" icon={FileText} variant="default" />
          <DashboardCard title="Correo" icon={Mail} variant="default" />
          <DashboardCard title="Drive" icon={HardDrive} variant="default" />
          <DashboardCard title="Software Gestión" icon={Briefcase} variant="primary" />
          <DashboardCard title="Zoom" icon={Video} variant="primary" />
          <DashboardCard title="Usuarios" icon={Users} variant="primary" />
          <DashboardCard title="Facturación" icon={Receipt} variant="default" />
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
