import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { NextClassBannerData } from "@/types/portal"

interface NextClassBannerProps {
  data: NextClassBannerData
  className?: string
}

export function NextClassBanner({ data, className }: NextClassBannerProps) {
  return (
    <Card className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 border-0 shadow-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-white">
          <p className="text-sm font-medium opacity-90 mb-1">{data.subtitle}</p>
          <h3 className="text-xl font-bold mb-1">{data.title}</h3>
          <p className="text-sm opacity-90">{data.schedule}</p>
        </div>
        <Button className="bg-white text-red-600 hover:bg-slate-100 font-medium self-start md:self-center">
          {data.ctaText}
        </Button>
      </div>
    </Card>
  )
}
