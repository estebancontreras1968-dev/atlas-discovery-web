import { siteConfig } from "@/lib/config";
import ChainDiagram from "./ChainDiagram";

export default function Hero() {
  return (
    <section id="top" className="section-shell pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="fade-up">
        <span className="eyebrow">Diagnóstico de crecimiento · 100% online</span>
      </div>

      <h1 className="fade-up mt-6 max-w-[820px] text-balance font-display text-[38px] font-semibold leading-[1.08] tracking-tightest text-ink md:text-[58px]" style={{ animationDelay: "80ms" }}>
        Tu empresa no tiene un problema de esfuerzo.
        <br />
        Tiene una restricción.
      </h1>

      <p className="fade-up mt-6 max-w-[560px] text-balance font-sans text-[17px] leading-relaxed text-slate md:text-[18px]" style={{ animationDelay: "160ms" }}>
        Atlas Discovery™ identifica la restricción dominante que está frenando
        el crecimiento de tu empresa y entrega un plan de acción priorizado
        para los próximos 90 días. Sin reuniones. Sin llamadas. Sin
        intervención humana antes del pago.
      </p>

      <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
        <a href={siteConfig.checkoutUrl} className="btn-primary">
          Comenzar diagnóstico — {siteConfig.price.amount}
        </a>
        <a href="#proceso" className="btn-secondary">
          Ver cómo funciona
        </a>
      </div>

      <p className="fade-up mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-slate-light" style={{ animationDelay: "280ms" }}>
        {siteConfig.price.note} · Para empresas desde USD 3.000 de facturación mensual
      </p>

      <div className="fade-up mt-16 overflow-x-auto rounded-[6px] border border-line bg-paper-dim/60 px-6 py-10 md:mt-20 md:px-10" style={{ animationDelay: "360ms" }}>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
          Capacidad real de tu negocio, función por función
        </p>
        <ChainDiagram className="h-[210px] w-full min-w-[540px]" />
        <p className="mt-6 max-w-[520px] font-sans text-[13.5px] leading-relaxed text-slate">
          Una sola función limita cuánto puede crecer el resto, sin importar
          cuánto mejores las demás. Atlas Discovery™ la encuentra primero.
        </p>
      </div>
    </section>
  );
}
