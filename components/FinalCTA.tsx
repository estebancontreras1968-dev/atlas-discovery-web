import { siteConfig } from "@/lib/config";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="border-t border-line bg-ink py-24 md:py-32">
      <div className="section-shell flex flex-col items-start">
        <Reveal>
          <span className="eyebrow [&::before]:bg-signal text-slate-light">
            Empieza hoy
          </span>
          <h2 className="mt-5 max-w-[640px] text-balance font-display text-[32px] font-semibold leading-[1.12] tracking-tightest text-paper md:text-[44px]">
            Tu empresa no tiene muchos problemas. Tiene una restricción dominante.
          </h2>
          <p className="mt-5 max-w-[480px] font-sans text-[15.5px] leading-relaxed text-slate-light">
            Atlas Discovery™ la identifica antes de que sigas invirtiendo en
            síntomas secundarios.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={siteConfig.checkoutUrl}
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-paper px-8 py-4 font-sans text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-signal hover:text-paper"
            >
              Comenzar Atlas Discovery™
            </a>
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light">
              {siteConfig.price} · Pago único
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
