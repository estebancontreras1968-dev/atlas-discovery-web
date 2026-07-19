import Reveal from "@/components/Reveal";

const stages = [
  {
    n: "01",
    title: "Captura estructurada",
    body: "Después de la compra completas un formulario estratégico diseñado para recopilar información relevante sobre tu empresa.",
  },
  {
    n: "02",
    title: "Clasificación de información",
    body: "El sistema organiza tus respuestas por áreas, relaciones, síntomas, capacidades y restricciones.",
  },
  {
    n: "03",
    title: "Análisis de patrones",
    body: "GPS Discovery™ analiza las conexiones entre los problemas reportados para distinguir las causas de sus consecuencias.",
  },
  {
    n: "04",
    title: "Resultado personalizado",
    body: "Recibes un resultado construido exclusivamente a partir de la información de tu empresa.",
  },
];

const points = [
  "Tus respuestas determinan el análisis.",
  "Las relaciones entre las áreas modifican el resultado.",
  "Cada GPS Roadmap™ de 90 días responde a una situación empresarial particular.",
];

export default function HowItUnderstandsSection() {
  return (
    <section id="como-entiende" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <span className="eyebrow">Cómo funciona el análisis</span>
        <h2 className="mt-5 max-w-[680px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          ¿Cómo puede comprender tu empresa sin reuniones?
        </h2>
        <p className="mt-5 max-w-[640px] font-sans text-[15.5px] leading-relaxed text-slate">
          GPS Discovery™ no intenta adivinar lo que ocurre en tu empresa. El
          sistema recopila información estructurada sobre su funcionamiento,
          clasifica las respuestas, identifica patrones y analiza cómo se
          relacionan las distintas áreas del negocio.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, i) => (
          <Reveal key={stage.n} delay={i * 0.05}>
            <div className="relative h-full rounded-[6px] border border-line bg-paper p-6">
              <span className="font-mono text-[12px] text-signal">{stage.n}</span>
              <h3 className="mt-3 font-display text-[16.5px] font-semibold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-slate">
                {stage.body}
              </p>
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-17px] top-1/2 hidden -translate-y-1/2 font-mono text-[16px] text-slate-light lg:block"
                >
                  →
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 rounded-[6px] border border-line p-8 md:p-10">
          <span className="eyebrow">Sin plantillas</span>
          <h3 className="mt-4 max-w-[560px] text-balance font-display text-[22px] font-semibold leading-[1.2] tracking-tightest text-ink md:text-[26px]">
            No recibirás un informe genérico
          </h3>
          <p className="mt-4 max-w-[640px] font-sans text-[15px] leading-relaxed text-slate">
            Cada resultado se construye a partir de la información específica
            entregada por la empresa. Dos empresas pueden presentar síntomas
            similares, pero recibir conclusiones, prioridades y hojas de ruta
            diferentes.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 font-sans text-[14.5px] leading-relaxed text-ink">
                <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-atlas" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-display text-[16.5px] font-medium leading-snug text-ink">
            GPS Discovery™ no selecciona un informe prediseñado: construye una
            evaluación específica a partir de la realidad declarada de tu
            empresa.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
