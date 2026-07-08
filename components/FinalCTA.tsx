import { siteConfig } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="border-t border-line bg-ink py-24 md:py-32">
      <div className="section-shell flex flex-col items-start">
        <span className="eyebrow [&::before]:bg-signal text-slate-light">
          Empieza hoy
        </span>
        <h2 className="mt-5 max-w-[640px] text-balance font-display text-[32px] font-semibold leading-[1.12] tracking-tightest text-paper md:text-[44px]">
          Descubre qué está frenando el crecimiento de tu empresa
        </h2>
        <p className="mt-5 max-w-[480px] font-sans text-[15.5px] leading-relaxed text-slate-light">
          Un pago único. Un cuestionario. Un informe con la restricción
          dominante y el plan de 90 días para resolverla — acompañado por
          la garantía Atlas.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={siteConfig.checkoutUrl}
            className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-paper px-8 py-4 font-sans text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-signal hover:text-paper"
          >
            Comenzar diagnóstico — {siteConfig.price.amount}
          </a>
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light">
            {siteConfig.price.note}
          </span>
        </div>
      </div>
    </section>
  );
}
