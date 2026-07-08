const symptoms = [
  {
    n: "01",
    title: "Más esfuerzo, misma facturación",
    body: "Trabajas más horas, lanzas más campañas, contratas más gente — y el ingreso mensual se mueve apenas. El esfuerzo dejó de traducirse en resultado.",
  },
  {
    n: "02",
    title: "Decisiones por intuición, no por evidencia",
    body: "Sabes que algo frena a la empresa, pero no puedes nombrarlo con precisión. Cada semana se prueba una teoría distinta.",
  },
  {
    n: "03",
    title: "Demasiadas prioridades, ninguna real",
    body: "Marketing, ventas, procesos, equipo — todo parece urgente al mismo tiempo. Sin un orden claro, la energía se reparte y el crecimiento se diluye.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="section-shell border-t border-line py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <div>
          <span className="eyebrow">El problema</span>
          <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            El crecimiento no se detiene por falta de esfuerzo
          </h2>
          <p className="mt-5 font-sans text-[15.5px] leading-relaxed text-slate">
            Toda empresa que dejó de crecer, o crece más lento de lo
            esperado, tiene una causa dominante — no diez. El problema es que
            desde adentro es casi imposible verla con claridad.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-1">
          {symptoms.map((s) => (
            <div key={s.n} className="bg-paper p-7 md:p-8">
              <span className="font-mono text-[12px] text-signal">{s.n}</span>
              <h3 className="mt-3 font-display text-[19px] font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 max-w-[520px] font-sans text-[15px] leading-relaxed text-slate">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
