import {
  Users,
  CreditCard,
  CalendarDays,
  Settings,
  DollarSign,
  UserCircle2,
  UserCheck,
} from "lucide-react"
import type { DashboardCardItem, QuickStatItem } from "@/types/portal"

export const ADMIN_HEADER: { title: string; subtitle: string } = {
  title: "Panel de Administración",
  subtitle: "Visión global de la academia",
}

export const ADMIN_QUICK_STATS: QuickStatItem[] = [
  {
    value: "€24,500",
    label: "Ingresos del mes",
    icon: DollarSign,
    iconBgClass: "bg-green-50",
    iconColorClass: "text-green-600",
  },
  {
    value: "247",
    label: "Total Alumnos",
    icon: UserCircle2,
    iconBgClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
  },
  {
    value: "18",
    label: "Profesores Activos",
    icon: UserCheck,
    iconBgClass: "bg-red-50",
    iconColorClass: "text-red-600",
  },
]

export const ADMIN_CARDS: DashboardCardItem[] = [
  {
    icon: Users,
    title: "Gestión de Usuarios",
    description: "Administra alumnos, profesores y personal",
    href: "#",
  },
  {
    icon: CreditCard,
    title: "Facturación Global",
    description: "Control de pagos e ingresos",
    href: "#",
  },
  {
    icon: CalendarDays,
    title: "Control de Horarios",
    description: "Gestiona calendarios y clases",
    href: "#",
  },
  {
    icon: Settings,
    title: "Configuración Acadesoft",
    description: "Ajustes del sistema",
    href: "https://academia10alcala.acadesoft.com/mant/php/login.php",
  },
]
