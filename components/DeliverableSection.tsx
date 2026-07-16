import Reveal from "@/components/Reveal";

const items = [
  {
    label: "Restricción Dominante™",
    desc: "El factor único identificado como límite real del crecimiento de tu empresa en este momento.",
  },
  {
    label: "GPS Score™",
    desc: "Una medición estructurada del estado actual de tu empresa a través de sus áreas clave.",
  },
  {
    label: "GPS Roadmap™ de 90 días",
    desc: "El orden priorizado de acciones a seguir durante los próximos 90 días para atender la restricción.",
  },
  {
    label: "Informe Ejecutivo GPS™",
    desc: "El documento que consolida los hallazgos, la evidencia y las recomendaciones en un solo lugar.",
  },
  {
    label: "Mapa de Oportunidades™",
    desc: "Las oportunidades detectadas en tu empresa, ordenadas según su impacto potencial.",
  },
];

export default function DeliverableSection() {
  return (
    <section id="entregables" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="max-w-[600px]">
          <span className="eyebrow">Qué recibe el cliente</span>
          <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            Cinco entregables. Un solo informe.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <div className="h-full bg-paper p-7 md:p-8">
              <span className="font-mono text-[11px] text-slate-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[17px] font-semibold text-ink">
                {item.label}
              </h3>
              <p className="mt-2.5 font-sans text-[14.5px] leading-relaxed text-slate">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
