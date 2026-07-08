import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="section-shell pb-16 pt-0 md:pb-20 md:pt-0">
      <span className="eyebrow">Sistema de inteligencia empresarial</span>

      <h1 className="mt-6 max-w-[820px] font-display text-[38px] font-semibold leading-[1.08] tracking-tightest text-ink md:text-[58px]">
        Tu empresa no tiene un problema de esfuerzo.
        <br />
        Tiene una restricción.
      </h1>

      <p className="mt-6 max-w-[560px] font-sans text-[17px] leading-relaxed text-slate md:text-[18px]">
        Atlas Discovery™ identifica la restricción dominante que frena el crecimiento de tu empresa y entrega un roadmap estratégico de 90 días.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a href={siteConfig.checkoutUrl} className="btn-primary">
          Comenzar diagnóstico
        </a>
        <a href="#proceso" className="btn-secondary">
          Ver cómo funciona
        </a>
      </div>
    </section>
  );
}
