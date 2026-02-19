import { PortalHeader } from "@/components/portal-header"
import { DashboardCard } from "@/components/dashboard-card"
import { PROFESOR_PAGE_HEADER, PROFESOR_PAGE_CARDS } from "@/data/portal-cards"
import { FOOTER_COPY } from "@/constants/site"

export default function ProfesorPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader role="Profesor" username="Profesor" />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-1 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">{PROFESOR_PAGE_HEADER.title}</h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7 text-pretty">
            {PROFESOR_PAGE_HEADER.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROFESOR_PAGE_CARDS.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              icon={card.icon}
              variant={card.variant}
              href={card.href}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">{FOOTER_COPY.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
