const conditions = [
  "Ejecutas las acciones del plan en el orden y la forma recomendada.",
  "Reportas tu avance semanal a través del checklist de ejecución.",
  "No existen variables externas fuera de tu control que afecten el resultado (cambios regulatorios, crisis de mercado, fuerza mayor, entre otras).",
];

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="section-shell border-t border-line py-20 md:py-28">
      <div className="grid gap-12 rounded-[6px] border border-line p-8 md:grid-cols-[1fr_1px_1fr] md:gap-0 md:p-0">
        <div className="md:p-12">
          <span className="eyebrow">Garantía de acompañamiento</span>
          <h2 className="mt-5 text-balance font-display text-[28px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[32px]">
            Te acompañamos hasta que llegues al resultado
          </h2>
          <p className="mt-5 font-sans text-[15px] leading-relaxed text-slate">
            No vendemos un informe y desaparecemos. Si ejecutas el plan de
            90 días según lo recomendado, mantenemos el acompañamiento por
            correo hasta que alcances los resultados propuestos en tu
            diagnóstico — sin costo adicional.
          </p>
        </div>

        <div className="hidden bg-line md:block" />

        <div className="border-t border-line p-8 md:border-t-0 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
            La garantía aplica cuando
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            {conditions.map((c) => (
              <li key={c} className="flex gap-3 font-sans text-[14.5px] leading-relaxed text-ink">
                <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-signal" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-sans text-[13px] leading-relaxed text-slate-light">
            El objetivo de esta garantía es alinear el incentivo: si el plan
            no funciona por una causa dentro de nuestro control, seguimos
            trabajando contigo hasta corregirlo.
          </p>
        </div>
      </div>
    </section>
  );
}
