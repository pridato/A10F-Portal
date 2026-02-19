import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative">
        <div className="bg-card border border-border shadow-2xl rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/images/whatsapp-20image-202025-11-23-20at-2000.jpeg"
              alt="Academia 10 Formación"
              className="h-16 mb-6"
            />
            <h1 className="text-2xl font-bold text-foreground text-balance text-center">Portal de Acceso</h1>
            <p className="text-muted-foreground text-center mt-2 text-pretty">
              Introduce tus credenciales para continuar
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Usuario
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Ej: alumno, profe, admin"
                className="h-11 bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground text-pretty">
              ¿Has olvidado tu contraseña?{" "}
              <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                Contacta con secretaría
              </button>
            </p>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          © 2025 Academia 10 Formación. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  )
}
