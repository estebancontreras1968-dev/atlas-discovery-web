import RestrictionDiagram from "@/components/RestrictionDiagram";
import Reveal from "@/components/Reveal";

const gpsSteps = [
  "Analiza la información entregada sobre tu empresa",
  "Identifica la restricción dominante del sistema",
  "Prioriza las oportunidades según su impacto",
  "Construye el roadmap de 90 días",
];

export default function WhatIsSection() {
  return (
    <section id="que-es" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <span className="eyebrow">Qué es GPS Discovery™</span>
        <h2 className="mt-5 max-w-[680px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Un sistema de inteligencia empresarial, no una consultoría
        </h2>
        <p className="mt-5 max-w-[620px] font-sans text-[15.5px] leading-relaxed text-slate">
          GPS Discovery™ no depende de opiniones ni de horas de reunión.
          Es un sistema que procesa la información real de tu empresa para
          localizar, con precisión, el punto que limita su crecimiento.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:items-start md:gap-16">
        <Reveal delay={0.05}>
          <div className="rounded-[6px] border border-line bg-paper p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
              ¿Por qué una sola restricción puede generar tantos síntomas?
            </p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink">
              Las organizaciones funcionan como sistemas: un componente limita
              la capacidad del conjunto, sin importar cuánto mejoren los
              demás. GPS Discovery™ identifica ese punto antes de que
              inviertas en resolver síntomas secundarios que no cambiarán el
              resultado.
            </p>
          </div>

          <div className="mt-8">
            <RestrictionDiagram compact className="w-full max-w-[420px]" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[6px] border border-line p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
              El motor analítico
            </span>
            <h3 className="mt-3 font-display text-[22px] font-semibold text-ink">
              Sistema GPS Discovery™
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {gpsSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-[12px] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[14.5px] leading-relaxed text-ink">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
