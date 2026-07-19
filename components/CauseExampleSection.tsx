import Reveal from "@/components/Reveal";

const symptoms = [
  "Ventas inestables",
  "Baja conversión",
  "Dependencia del dueño",
  "Retrasos operativos",
  "Falta de seguimiento",
  "Poca claridad financiera",
];

const consequences = [
  "Oportunidades sin seguimiento",
  "Decisiones comerciales tardías",
  "Baja previsibilidad de ingresos",
  "Sobrecarga del fundador",
  "Coordinación deficiente entre ventas y operaciones",
];

export default function CauseExampleSection() {
  return (
    <section className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <span className="eyebrow">Ejemplo ficticio con fines demostrativos</span>
        <h2 className="mt-5 max-w-[680px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Una empresa puede tener diez problemas, pero no diez causas
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-paper p-7 md:p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
              Síntomas observados
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {symptoms.map((s) => (
                <li key={s} className="flex gap-3 font-sans text-[14.5px] leading-relaxed text-ink">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-slate-light" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="h-full bg-paper p-7 md:p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
              Consecuencias relacionadas
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {consequences.map((c) => (
                <li key={c} className="flex gap-3 font-sans text-[14.5px] leading-relaxed text-ink">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-signal" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-[6px] border border-line bg-paper-dim/60 p-7 md:p-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-atlas">
            Posible restricción dominante identificada
          </span>
          <p className="mt-3 font-display text-[19px] font-semibold text-ink md:text-[21px]">
            Proceso comercial fragmentado y sin gestión centralizada
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-[680px] font-sans text-[15px] leading-relaxed text-slate">
          GPS Discovery™ busca distinguir el problema que origina otros
          problemas, para evitar que la empresa intente corregir cada síntoma
          por separado.
        </p>
      </Reveal>
    </section>
  );
}
