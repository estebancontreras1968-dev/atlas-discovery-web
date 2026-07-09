import Reveal from "@/components/Reveal";

const costs = [
  "Crecimiento lento",
  "Dependencia total del dueño",
  "Baja rentabilidad",
  "Desorden operacional",
  "Dificultad para escalar",
  "Decisiones tomadas por intuición",
  "Oportunidades perdidas",
];

export default function CostSection() {
  return (
    <section id="costo" className="border-t border-line bg-ink py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow [&::before]:bg-signal text-slate-light">
            El costo de no resolverlo
          </span>
          <h2 className="mt-5 max-w-[620px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-paper md:text-[36px]">
            La restricción no desaparece porque se ignore. Se acumula.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {costs.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-signal" />
                <span className="font-display text-[17px] font-medium leading-snug text-paper">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
