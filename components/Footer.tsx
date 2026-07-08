import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="section-shell flex flex-col gap-6 border-t border-white/10 pt-8 text-slate-light sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[14px] font-semibold text-paper">
            Atlas Discovery™
          </p>
          <p className="mt-1 font-sans text-[12.5px]">
            Un producto de {siteConfig.company}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[13px]">
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-paper">
            {siteConfig.contactEmail}
          </a>
          <a href="#faq" className="hover:text-paper">
            Preguntas frecuentes
          </a>
          <a href="#garantia" className="hover:text-paper">
            Garantía
          </a>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-light/70">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
