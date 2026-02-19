import {
  ClipboardCheck,
  BookOpen,
  Video,
  FolderOpen,
  Clock,
  Mail,
} from "lucide-react"
import type { DashboardCardItem, QuickStatItem } from "@/types/portal"

export const TEACHER_HEADER: { title: string; subtitle: string } = {
  title: "Panel del Profesor",
  subtitle: "Gestiona tus clases y estudiantes",
}

export const TEACHER_QUICK_STATS: QuickStatItem[] = [
  {
    value: "3",
    label: "Clases de hoy",
    icon: Clock,
    iconBgClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
  },
  {
    value: "5",
    label: "Mensajes nuevos",
    icon: Mail,
    iconBgClass: "bg-red-50",
    iconColorClass: "text-red-600",
  },
]

export const TEACHER_CARDS: DashboardCardItem[] = [
  {
    icon: ClipboardCheck,
    title: "Acadesoft / Pasar Lista",
    description: "Registra la asistencia de estudiantes",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Cursos y Notas",
    description: "Gestiona calificaciones y contenido",
    href: "#",
  },
  {
    icon: Video,
    title: "Sala de Zoom",
    description: "Inicia clases en directo",
    href: "#",
  },
  {
    icon: FolderOpen,
    title: "Material Didáctico",
    description: "Sube y organiza recursos",
    href: "#",
  },
]
