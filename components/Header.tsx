import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-sm">
      <div className="section-shell flex h-[68px] items-center justify-between">
        <a href="#top" className="font-display text-[17px] font-semibold tracking-tight text-ink">
          Atlas Discovery<span className="align-super text-[10px] font-medium">™</span>
        </a>

        <nav className="hidden items-center gap-8 font-sans text-[14px] text-slate md:flex">
          <a href="#que-es" className="transition-colors hover:text-ink">
            Qué es
          </a>
          <a href="#proceso" className="transition-colors hover:text-ink">
            Cómo funciona
          </a>
          <a href="#garantia" className="transition-colors hover:text-ink">
            Garantía
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            Preguntas
          </a>
        </nav>

        <a
          href={siteConfig.checkoutUrl}
          className="inline-flex items-center justify-center rounded-[4px] bg-ink px-5 py-2.5 font-sans text-[13.5px] font-medium text-paper transition-colors hover:bg-atlas"
        >
          Comenzar Atlas Discovery™
        </a>
      </div>
    </header>
  );
}
