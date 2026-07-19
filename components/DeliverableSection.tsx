import Reveal from "@/components/Reveal";

function DemoTag({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-[4px] border border-line bg-paper-dim px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-slate">
      {children}
    </span>
  );
}

function RestrictionMockup() {
  return (
    <div aria-hidden="true" className="rounded-[6px] bg-ink p-4">
      <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-signal">
        Restricción identificada
      </span>
      <p className="mt-2 font-display text-[15px] font-semibold leading-snug text-paper">
        Fragmentación del proceso comercial
      </p>
    </div>
  );
}

const scoreAreas = [
  { label: "Estrategia", value: 72 },
  { label: "Marketing", value: 58 },
  { label: "Ventas", value: 41 },
  { label: "Operaciones", value: 65 },
  { label: "Finanzas", value: 78 },
  { label: "Equipo", value: 54 },
];

function ScoreMockup() {
  return (
    <div aria-hidden="true" className="rounded-[6px] border border-line bg-paper-dim/40 p-4">
      <div className="flex flex-col gap-2">
        {scoreAreas.map((area) => (
          <div key={area.label}>
            <div className="mb-1 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.06em] text-slate">
              <span>{area.label}</span>
              <span>{area.value}</span>
            </div>
            <div className="h-[5px] w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-atlas"
                style={{ width: `${area.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const roadmapColumns = [
  { label: "Días 1–30", action: "Centralizar el registro comercial" },
  { label: "Días 31–60", action: "Estandarizar el seguimiento de oportunidades" },
  { label: "Días 61–90", action: "Medir impacto en previsibilidad de ingresos" },
];

function RoadmapMockup() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-2.5 rounded-[6px] border border-line bg-paper-dim/40 p-4">
      {roadmapColumns.map((col) => (
        <div key={col.label} className="flex flex-col gap-0.5">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-atlas">
            {col.label}
          </span>
          <span className="font-sans text-[11.5px] leading-snug text-ink">
            {col.action}
          </span>
        </div>
      ))}
    </div>
  );
}

function ReportMockup() {
  return (
    <div aria-hidden="true" className="relative pl-3 pt-3">
      <div className="absolute left-0 top-0 h-full w-full rounded-[6px] border border-line bg-paper-dim" />
      <div className="relative rounded-[6px] border border-line bg-paper p-4">
        <div className="rounded-[4px] bg-ink px-3 py-2">
          <span className="font-display text-[11px] font-semibold text-paper">
            Informe Ejecutivo GPS™
          </span>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div className="h-[6px] w-4/5 rounded-full bg-line" />
          <div className="h-[6px] w-full rounded-full bg-line" />
          <div className="h-[6px] w-3/5 rounded-full bg-line" />
        </div>
      </div>
    </div>
  );
}

const opportunityNodes = [
  { label: "Venta cruzada", x: 15, y: 12 },
  { label: "Nuevo canal", x: 85, y: 20 },
  { label: "Retención", x: 12, y: 78 },
  { label: "Alianza estratégica", x: 82, y: 82 },
];

function OpportunityMapMockup() {
  return (
    <div aria-hidden="true" className="rounded-[6px] border border-line bg-paper-dim/40 p-4">
      <svg viewBox="0 0 100 100" className="h-[120px] w-full">
        {opportunityNodes.map((node) => (
          <line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            className="stroke-line"
            strokeWidth={0.6}
          />
        ))}
        <circle cx="50" cy="50" r="7" className="fill-atlas" />
        <text x="50" y="52" textAnchor="middle" className="fill-paper" style={{ fontSize: 4.5 }}>
          Restricción
        </text>
        {opportunityNodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="4.5" className="fill-signal" />
            <text
              x={node.x}
              y={node.y + (node.y < 50 ? -8 : 11)}
              textAnchor="middle"
              className="fill-slate"
              style={{ fontSize: 4.2, letterSpacing: "0.02em" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const items = [
  {
    label: "Restricción Dominante™",
    desc: "El factor principal que limita el crecimiento o funcionamiento de tu empresa y que está generando otros problemas.",
    tag: "Ejemplo demostrativo",
    mockup: RestrictionMockup,
  },
  {
    label: "GPS Score™",
    desc: "Una medición estructurada del estado actual de las áreas críticas de tu empresa.",
    tag: "Datos ficticios para demostración",
    mockup: ScoreMockup,
  },
  {
    label: "GPS Roadmap™ de 90 días",
    desc: "Un plan priorizado para actuar sobre la restricción principal durante los próximos 90 días.",
    tag: "Ejemplo demostrativo",
    mockup: RoadmapMockup,
  },
  {
    label: "Informe Ejecutivo GPS™",
    desc: "Un documento ejecutivo que explica los hallazgos, las conexiones detectadas y las prioridades de actuación.",
    tag: "Ejemplo demostrativo",
    mockup: ReportMockup,
  },
  {
    label: "Mapa de Oportunidades™",
    desc: "Una representación de las oportunidades que pueden activarse al resolver la restricción principal.",
    tag: "Ejemplo demostrativo",
    mockup: OpportunityMapMockup,
  },
];

export default function DeliverableSection() {
  return (
    <section id="entregables" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="max-w-[600px]">
          <span className="eyebrow">Qué recibe el cliente</span>
          <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            Esto es lo que recibirás
          </h2>
          <p className="mt-5 font-sans text-[15.5px] leading-relaxed text-slate">
            Cinco entregables, consolidados en tu Informe Ejecutivo GPS™. Las
            vistas siguientes son ejemplos visuales construidos con datos
            ficticios para mostrar el formato real de cada entregable.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {items.map((item, i) => {
          const Mockup = item.mockup;
          return (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[6px] border border-line bg-paper p-4">
                <span className="font-mono text-[11px] text-slate-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 line-clamp-2 font-display text-[15px] font-semibold leading-snug text-ink md:text-[17px]">
                  {item.label}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-[12px] leading-relaxed text-slate md:text-[13px]">
                  {item.desc}
                </p>
                <div className="mt-3">
                  <DemoTag>{item.tag}</DemoTag>
                </div>

                <div className="mt-4">
                  <Mockup />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
