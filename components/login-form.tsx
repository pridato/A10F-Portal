"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { LOGIN_COPY } from "@/constants/site"
import { ROLE_OPTIONS } from "@/constants/roles"
import type { Role } from "@/types/portal"

type LoggedInRole = Exclude<Role, "login">

interface LoginFormProps {
  onSubmit: (role: LoggedInRole) => void
  /** Si true, muestra selector "Entrar como" (Alumno/Profesor/Administrador) */
  showRoleSelector?: boolean
}

export function LoginForm({ onSubmit, showRoleSelector = true }: LoginFormProps) {
  const [selectedRole, setSelectedRole] = useState<LoggedInRole>("student")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular delay de autenticación
    setTimeout(() => {
      onSubmit(selectedRole)
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-8 border border-slate-200">
      <div className="flex flex-col items-center mb-8">
        <div className="mb-6">
          <div className="flex items-center justify-center">
            <img 
              src="/images/a10f-logo.png" 
              alt="Academia 10 Formación" 
              className="h-16 w-auto"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 text-center">{LOGIN_COPY.pageTitle}</h1>
        <p className="text-slate-600 text-center mt-2">{LOGIN_COPY.pageSubtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="usuario" className="text-sm font-medium text-slate-900">
            {LOGIN_COPY.usuarioLabel}
          </Label>
          <Input
            id="usuario"
            type="text"
            placeholder={LOGIN_COPY.usuarioPlaceholder}
            className="h-11 bg-slate-50 border-slate-200"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-slate-900">
            {LOGIN_COPY.passwordLabel}
          </Label>
          <Input
            id="password"
            type="password"
            placeholder={LOGIN_COPY.passwordPlaceholder}
            className="h-11 bg-slate-50 border-slate-200"
            required
          />
        </div>

        {showRoleSelector && (
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium text-slate-900">
              {LOGIN_COPY.roleLabel}
            </Label>
            <select
              id="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as LoggedInRole)}
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 h-4 w-4" />
              Entrando...
            </>
          ) : (
            LOGIN_COPY.submitButton
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-600">
          {LOGIN_COPY.forgotPassword}{" "}
          <button type="button" className="text-red-600 hover:text-red-700 font-medium transition-colors">
            {LOGIN_COPY.contactSecretary}
          </button>
        </p>
      </div>
    </div>
  )
}
