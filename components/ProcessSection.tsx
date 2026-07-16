import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Compra directa online",
    body: "Sin llamada de ventas. Pagas y accedes de inmediato al siguiente paso.",
  },
  {
    n: "02",
    title: "Completas el Formulario Estratégico GPS Discovery™",
    body: "Un formulario estructurado que traduce el estado real de tu empresa a información analizable.",
  },
  {
    n: "03",
    title: "GPS Discovery™ procesa la información",
    body: "El motor analítico identifica la restricción dominante y prioriza las oportunidades detectadas.",
  },
  {
    n: "04",
    title: "Recibes los 5 entregables",
    body: "Consolidados en tu Informe Ejecutivo GPS™.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="border-t border-line bg-paper-dim/60 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="mt-5 max-w-[560px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            Cuatro pasos. Cero reuniones.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div
                className={`grid grid-cols-[56px_1fr] gap-6 py-7 md:gap-10 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="font-mono text-[13px] text-signal">{step.n}</span>
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-ink md:text-[19px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[560px] font-sans text-[14.5px] leading-relaxed text-slate">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
