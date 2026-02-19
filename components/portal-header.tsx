import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortalHeaderProps {
  role: string
  username: string
}

export function PortalHeader({ role, username }: PortalHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/whatsapp-20image-202025-11-23-20at-2000.jpeg" alt="A10F" className="h-10" />
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-foreground">Portal {role}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-foreground">Hola, {username}</p>
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent hover:bg-accent/10">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Salir</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
