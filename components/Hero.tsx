import { siteConfig } from "@/lib/config";
import RestrictionDiagram from "@/components/RestrictionDiagram";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="section-shell pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-10">
        <div>
          <span className="eyebrow">Sistema de inteligencia empresarial</span>

          <h1 className="mt-6 max-w-[560px] text-balance font-display text-[36px] font-semibold leading-[1.1] tracking-tightest text-ink md:text-[52px]">
            Tu empresa no tiene muchos problemas. Tiene una restricción dominante.
          </h1>

          <p className="mt-6 max-w-[480px] font-sans text-[17px] leading-relaxed text-slate md:text-[18px]">
            Atlas Discovery™ identifica el factor único que limita el crecimiento
            de tu empresa — sin llamadas, sin reuniones, sin intervención humana
            antes del pago.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={siteConfig.checkoutUrl} className="btn-primary">
              Comenzar Atlas Discovery™
            </a>
          </div>

          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light">
            {siteConfig.price} · Pago único
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[6px] border border-line bg-paper p-6 md:p-8">
            <RestrictionDiagram className="w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
