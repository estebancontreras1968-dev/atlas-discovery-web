import { siteConfig } from "@/lib/config";
import Reveal from "@/components/Reveal";

const trustPoints = [
  "Pago único",
  "Información 100% confidencial",
  "Sin reuniones",
  "Garantía de satisfacción",
];

export default function DeliverablesCTA() {
  return (
    <section className="section-shell border-t border-line py-16 md:py-20">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate"
              >
                <span className="h-[5px] w-[5px] flex-none rounded-full bg-atlas" />
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={siteConfig.checkoutUrl} className="btn-primary">
              Comenzar GPS Discovery™
            </a>
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate">
              {siteConfig.ctaSupportText}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
