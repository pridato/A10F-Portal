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
    iconBgClass: "bg-primary/10",
    iconColorClass: "text-primary",
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

export interface ActivityLog {
  id: string
  type: "login" | "invoice" | "user_created" | "user_updated" | "payment"
  message: string
  timestamp: string
  user: string
}

export const ADMIN_ACTIVITY_LOGS: ActivityLog[] = [
  {
    id: "log-001",
    type: "login",
    message: "Inicio de sesión",
    timestamp: "2025-02-20T10:30:00",
    user: "Profesor Juan Pérez",
  },
  {
    id: "log-002",
    type: "invoice",
    message: "Factura generada",
    timestamp: "2025-02-20T09:15:00",
    user: "Sistema",
  },
  {
    id: "log-003",
    type: "user_created",
    message: "Nuevo alumno registrado",
    timestamp: "2025-02-19T16:45:00",
    user: "Administrador",
  },
  {
    id: "log-004",
    type: "payment",
    message: "Pago recibido",
    timestamp: "2025-02-19T14:20:00",
    user: "Alumno María García",
  },
  {
    id: "log-005",
    type: "login",
    message: "Inicio de sesión",
    timestamp: "2025-02-19T11:00:00",
    user: "Profesor Ana López",
  },
  {
    id: "log-006",
    type: "invoice",
    message: "Factura generada",
    timestamp: "2025-02-18T15:30:00",
    user: "Sistema",
  },
  {
    id: "log-007",
    type: "user_updated",
    message: "Datos de usuario actualizados",
    timestamp: "2025-02-18T13:10:00",
    user: "Administrador",
  },
  {
    id: "log-008",
    type: "payment",
    message: "Pago recibido",
    timestamp: "2025-02-17T10:00:00",
    user: "Alumno Carlos Ruiz",
  },
]
