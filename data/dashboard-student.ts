import {
  GraduationCap,
  Video,
  PlayCircle,
  Receipt,
} from "lucide-react"
import type { DashboardCardItem, NextClassBannerData } from "@/types/portal"

export const STUDENT_HEADER: { title: string; subtitle: string } = {
  title: "Área del Alumno",
  subtitle: "Tus recursos de aprendizaje",
}

export const STUDENT_NEXT_CLASS_BANNER: NextClassBannerData = {
  subtitle: "Próxima clase en directo",
  title: "Cálculo Universitario",
  schedule: "Hoy a las 17:00h - Unirse ahora",
  ctaText: "Unirse ahora",
}

export const STUDENT_CARDS: DashboardCardItem[] = [
  {
    icon: GraduationCap,
    title: "Mis Cursos / E-learning",
    description: "Accede a contenido interactivo",
    href: "#",
  },
  {
    icon: Video,
    title: "Zoom",
    description: "Únete a sesiones en vivo",
    href: "https://zoom.us/",
  },
  {
    icon: PlayCircle,
    title: "Clases Grabadas",
    description: "Visualiza sesiones anteriores",
    href: "#",
  },
  {
    icon: Receipt,
    title: "Facturas",
    description: "Gestiona tus pagos",
    href: "#",
  },
]
