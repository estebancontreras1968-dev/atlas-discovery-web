import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Pago confirmado",
    body: "Hotmart procesa el pago y habilita tu acceso.",
  },
  {
    n: "02",
    title: "Acceso inmediato",
    body: "Recibes las instrucciones para comenzar GPS Discovery™.",
  },
  {
    n: "03",
    title: "Formulario estratégico",
    body: "Entregas la información necesaria sobre el funcionamiento real de tu empresa.",
  },
  {
    n: "04",
    title: "Procesamiento",
    body: "El sistema organiza y relaciona tus respuestas.",
  },
  {
    n: "05",
    title: "Identificación de patrones",
    body: "Se analizan las causas, consecuencias y conexiones entre las distintas áreas.",
  },
  {
    n: "06",
    title: "Generación de resultados",
    body: "GPS Discovery™ construye una evaluación específica para tu empresa.",
  },
  {
    n: "07",
    title: "Entregables",
    body: "Accedes a la Restricción Dominante™, el GPS Score™, el GPS Roadmap™ de 90 días, el Informe Ejecutivo GPS™ y el Mapa de Oportunidades™.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="border-t border-line bg-paper-dim/60 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="mt-5 max-w-[600px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            ¿Qué ocurre después del pago?
          </h2>
          <p className="mt-4 max-w-[600px] font-sans text-[14.5px] leading-relaxed text-slate">
            Ya viste cómo GPS Discovery™ interpreta la información de tu
            empresa. Esto es lo que ocurre en la práctica, paso a paso, desde
            el momento en que pagas.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04}>
              <div
                className={`grid grid-cols-[56px_1fr] gap-6 py-6 md:gap-10 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="font-mono text-[13px] text-signal">{step.n}</span>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-ink md:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[600px] font-sans text-[14.5px] leading-relaxed text-slate">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[600px] font-sans text-[14px] leading-relaxed text-slate-light">
            No debes coordinar reuniones, llamadas telefónicas ni entrevistas
            para iniciar el proceso.
          </p>
          <p className="mt-3 max-w-[600px] font-sans text-[14px] leading-relaxed text-slate-light">
            El procesamiento comienza en cuanto envías el formulario
            estratégico. Tus cinco entregables se generan de forma automática
            y estarán disponibles tan pronto finalice el procesamiento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
