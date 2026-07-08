const benefits = [
  {
    title: "Claridad en lugar de ruido",
    body: "Dejas de manejar diez hipótesis a la vez. Sabes exactamente cuál es la causa que estás resolviendo.",
  },
  {
    title: "Prioridad, no una lista interminable",
    body: "El plan de 90 días te dice qué hacer primero — y qué dejar deliberadamente para después.",
  },
  {
    title: "Funciona con el equipo que tienes",
    body: "Diseñado para operar con cero, uno o pocos colaboradores. No asume una estructura que no tienes.",
  },
  {
    title: "Decisiones basadas en evidencia",
    body: "El diagnóstico se construye sobre tus propios datos y respuestas, no sobre plantillas genéricas.",
  },
  {
    title: "Sin fricción de agenda",
    body: "Nada depende de coordinar horarios. Compras, respondes el cuestionario y avanzas a tu ritmo.",
  },
  {
    title: "Acompañamiento hasta el resultado",
    body: "La garantía Atlas te respalda durante la ejecución del plan, no solo en la entrega del informe.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-shell border-t border-line py-20 md:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">Beneficios</span>
          <h2 className="mt-5 max-w-[520px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            Diseñado para dueños que operan solos su negocio
          </h2>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="border-t border-line pt-6">
            <h3 className="font-display text-[17px] font-semibold text-ink">
              {b.title}
            </h3>
            <p className="mt-2.5 font-sans text-[14.5px] leading-relaxed text-slate">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
