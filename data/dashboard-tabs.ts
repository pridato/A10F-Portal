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
  Clock,
  UserCheck,
  Mail,
} from "lucide-react"
import type { DashboardCardItem, QuickStatItem } from "@/types/portal"

/** Vista Profesor en la página /dashboard (tabs) */
export const DASHBOARD_PROFESSOR_HEADER = {
  title: "Panel del Profesor",
  subtitle: "Gestiona tus clases, estudiantes y contenido educativo",
} as const

export const DASHBOARD_PROFESSOR_STATS: QuickStatItem[] = [
  { value: "3", label: "Clases de hoy", icon: Clock, iconBgClass: "bg-blue-50", iconColorClass: "text-blue-600" },
  { value: "47", label: "Alumnos activos", icon: UserCheck, iconBgClass: "bg-green-50", iconColorClass: "text-green-600" },
  { value: "5", label: "Mensajes sin leer", icon: Mail, iconBgClass: "bg-red-50", iconColorClass: "text-red-600" },
]

export const DASHBOARD_PROFESSOR_CARDS: DashboardCardItem[] = [
  { icon: ClipboardCheck, title: "Pasar Lista", description: "Registra la asistencia de tus estudiantes", href: "#" },
  { icon: BookOpen, title: "Cursos", description: "Gestiona tus cursos y contenido", href: "#" },
  { icon: Users, title: "Grupos", description: "Administra grupos de estudiantes", href: "#" },
  { icon: MessageSquare, title: "Comunicación", description: "Mensajes y notificaciones", href: "#" },
  { icon: Video, title: "Clases en Directo", description: "Inicia sesiones de Zoom", href: "#" },
  { icon: Calendar, title: "Horarios", description: "Consulta tu calendario de clases", href: "#" },
  { icon: FolderOpen, title: "Material Didáctico", description: "Sube y organiza recursos", href: "#" },
]

/** Vista Alumno en la página /dashboard (tabs) */
export const DASHBOARD_STUDENT_HEADER = {
  title: "Área del Alumno",
  subtitle: "Accede a tus cursos, materiales y recursos de aprendizaje",
} as const

export const DASHBOARD_STUDENT_BANNER = {
  subtitle: "Próxima clase",
  title: "Cálculo Universitario",
  schedule: "Hoy a las 17:00h",
  ctaText: "Unirse ahora",
} as const

export const DASHBOARD_STUDENT_CARDS: DashboardCardItem[] = [
  { icon: BookOpen, title: "Mis Cursos", description: "Accede a tus cursos matriculados", href: "#" },
  { icon: PlayCircle, title: "Clases Grabadas", description: "Visualiza sesiones anteriores", href: "#" },
  { icon: GraduationCap, title: "Plataforma E-learning", description: "Acceso a contenido interactivo", href: "#" },
  { icon: Calendar, title: "Horarios", description: "Consulta tu calendario académico", href: "#" },
  { icon: MessageCircle, title: "Comunicación", description: "Mensajes con profesores", href: "#" },
  { icon: Receipt, title: "Facturas y Pagos", description: "Gestiona tus pagos", href: "#" },
]
