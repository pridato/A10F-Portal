import type { Role, RoleOption } from "@/types/portal"

/** Opciones de rol para el selector del formulario de login */
export const ROLE_OPTIONS: RoleOption[] = [
  { value: "student", label: "Alumno" },
  { value: "teacher", label: "Profesor" },
  { value: "admin", label: "Administrador" },
]

type LoggedInRole = Exclude<Role, "login">

/** Etiquetas de saludo por rol (para la barra superior) */
export const ROLE_GREETING: Record<LoggedInRole, string> = {
  admin: "Administrador",
  teacher: "Profesor",
  student: "Alumno",
}
