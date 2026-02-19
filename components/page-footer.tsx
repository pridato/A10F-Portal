import { FOOTER_COPY } from "@/constants/site"

interface PageFooterProps {
  withTagline?: boolean
  className?: string
}

export function PageFooter({ withTagline = false, className = "" }: PageFooterProps) {
  return (
    <footer
      className={
        className ||
        "mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8"
      }
    >
      {FOOTER_COPY.copyright}
      {withTagline && ` ${FOOTER_COPY.tagline}`}
    </footer>
  )
}
