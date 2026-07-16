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
            GPS Discovery™ identifica el factor único que limita el
            crecimiento de tu empresa, sin reuniones, sin llamadas
            telefónicas, sin intervención humana y con resultado inmediato.
          </h2>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={siteConfig.checkoutUrl}
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-paper px-8 py-4 font-sans text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-signal hover:text-paper"
            >
              Comenzar GPS Discovery™
            </a>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light line-through opacity-60">
                Antes {siteConfig.priceReference}
              </span>
              <span className="font-display text-[28px] font-semibold leading-none text-paper md:text-[32px]">
                {siteConfig.price}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light">
                Pago único
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
