const items = [
  {
    label: "Cuestionario de diagnóstico",
    desc: "Un formulario estructurado que traduce el estado real de tu negocio a datos analizables. 30–40 minutos, a tu ritmo.",
  },
  {
    label: "Informe Atlas Discovery™",
    desc: "Documento en PDF con la restricción dominante identificada, la evidencia detrás y su impacto directo en tu facturación.",
  },
  {
    label: "Plan de acción a 90 días",
    desc: "Hitos semanales priorizados — qué hacer primero, en qué orden, y qué ignorar deliberadamente durante el periodo.",
  },
  {
    label: "Video explicativo grabado",
    desc: "Un recorrido en video por tu informe y tu plan, para que no dependas de una llamada para entenderlo.",
  },
  {
    label: "Checklist de ejecución",
    desc: "Plantilla semanal para seguir el avance del plan y detectar desviaciones antes de que cuesten tiempo.",
  },
  {
    label: "Acompañamiento con garantía",
    desc: "Soporte por correo durante la ejecución del plan, cubierto por la garantía Atlas mientras sigas las recomendaciones.",
  },
];

export default function DeliverableSection() {
  return (
    <section className="section-shell border-t border-line py-20 md:py-28">
      <div className="max-w-[600px]">
        <span className="eyebrow">Qué recibes</span>
        <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Un diagnóstico completo, entregado sin fricción
        </h2>
        <p className="mt-5 font-sans text-[15.5px] leading-relaxed text-slate">
          Todo el proceso ocurre de forma asincrónica. Completas el
          cuestionario cuando puedes, nosotros analizamos, y recibes todo en
          tu correo — {" "}
          <span className="font-medium text-ink">
            sin agendar ni una sola reunión
          </span>
          .
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.label} className="bg-paper p-7 md:p-8">
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
        ))}
      </div>
    </section>
  );
}
