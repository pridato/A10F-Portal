import {
  BookOpen,
  Play,
  Receipt,
  Calendar,
  MessageSquare,
  GraduationCap,
  ClipboardCheck,
  Users,
  Video,
  FolderOpen,
  MessageCircle,
  Instagram,
  FileText,
  Mail,
  HardDrive,
  Briefcase,
} from "lucide-react"
import type { PortalCardItem } from "@/types/portal"

/** Cabecera y tarjetas para la página /alumno */
export const ALUMNO_PAGE_HEADER = {
  title: "Área del Alumno",
  subtitle: "Accede a tus cursos, materiales y recursos de aprendizaje",
} as const

export const ALUMNO_PAGE_CARDS: PortalCardItem[] = [
  { icon: BookOpen, title: "Cursos", variant: "accent", href: "#" },
  { icon: Play, title: "Clases Grabadas", variant: "primary", href: "#" },
  { icon: Receipt, title: "Facturas", variant: "default", href: "#" },
  { icon: Calendar, title: "Horarios", variant: "default", href: "#" },
  { icon: MessageSquare, title: "Comunicación", variant: "default", href: "#" },
  { icon: GraduationCap, title: "Plataforma E-learning", variant: "primary", href: "#" },
]

/** Cabecera y tarjetas para la página /profesor */
export const PROFESOR_PAGE_HEADER = {
  title: "Panel del Profesor",
  subtitle: "Gestiona tus clases, estudiantes y contenido educativo",
} as const

export const PROFESOR_PAGE_CARDS: PortalCardItem[] = [
  { icon: ClipboardCheck, title: "Pasar Lista", variant: "accent", href: "#" },
  { icon: BookOpen, title: "Cursos", variant: "default", href: "#" },
  { icon: Users, title: "Grupos", variant: "default", href: "#" },
  { icon: MessageSquare, title: "Comunicación", variant: "default", href: "#" },
  { icon: Video, title: "Zoom directamente!", variant: "primary", href: "https://zoom.us/" },
  { icon: Calendar, title: "Horarios", variant: "default", href: "#" },
  { icon: FolderOpen, title: "Material", variant: "default", href: "#" },
]

/** Cabecera y tarjetas para la página /administrador */
export const ADMINISTRADOR_PAGE_HEADER = {
  title: "Panel de Administración",
  subtitle: "Control total del sistema y gestión de la academia",
} as const

export const ADMINISTRADOR_PAGE_CARDS: PortalCardItem[] = [
  { icon: MessageCircle, title: "WhatsApp", variant: "accent", href: "#" },
  { icon: Instagram, title: "Instagram", variant: "accent", href: "#" },
  { icon: FileText, title: "Documentos", variant: "default", href: "#" },
  { icon: Mail, title: "Correo", variant: "default", href: "#" },
  { icon: HardDrive, title: "Drive", variant: "default", href: "#" },
  { icon: Briefcase, title: "Software Gestión", variant: "primary", href: "#" },
  { icon: Video, title: "Zoom directamente!", variant: "primary", href: "https://zoom.us/" },
  { icon: Users, title: "Usuarios", variant: "primary", href: "#" },
  { icon: Receipt, title: "Facturación", variant: "default", href: "#" },
]
