import type { LucideIcon } from "lucide-react"

/** Rol de usuario en el portal (login, admin, teacher, student) */
export type Role = "login" | "admin" | "teacher" | "student"

/** Opción de rol para el selector del formulario de login */
export interface RoleOption {
  value: Role
  label: string
}

/** Elemento de tarjeta de acción del dashboard (icono, título, descripción, enlace) */
export interface DashboardCardItem {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

/** Estadística rápida mostrada en el dashboard (valor, etiqueta, icono) */
export interface QuickStatItem {
  value: string
  label: string
  icon: LucideIcon
  iconBgClass?: string
  iconColorClass?: string
}

/** Datos del banner de próxima clase (alumno) */
export interface NextClassBannerData {
  subtitle: string
  title: string
  schedule: string
  ctaText: string
}

/** Contenido de cabecera de una vista de dashboard */
export interface DashboardHeaderData {
  title: string
  subtitle: string
}

/** Variante visual de tarjeta (para DashboardCard en páginas de rol) */
export type CardVariant = "default" | "accent" | "primary"

/** Elemento de tarjeta para páginas de rol (sin descripción, con variante) */
export interface PortalCardItem {
  icon: LucideIcon
  title: string
  variant?: CardVariant
  href?: string
}

/** Estado de pago de una factura */
export type InvoiceStatus = "paid" | "pending"

/** Elemento de factura del alumno */
export interface InvoiceItem {
  id: string
  title: string
  amount: number
  date: string
  status: InvoiceStatus
}

/** Tipo de archivo en el repositorio */
export type FileType = "pdf" | "video" | "image" | "document" | "other"

/** Elemento de archivo en el repositorio */
export interface FileItem {
  id: string
  name: string
  date: string
  type: FileType
  downloadUrl: string
}
