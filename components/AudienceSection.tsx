import Reveal from "@/components/Reveal";

const fits = [
  "Facturación desde ~USD 3.000/mes, sin techo",
  "Negocios con o sin trabajadores",
  "Participación activa del dueño, socio, gerente general o tomador de decisiones",
  "Quiere crecer",
  "Está dispuesto a implementar cambios",
];

const doesNotFit = [
  "No desea crecer",
  "Busca soluciones mágicas",
  "No implementará cambios",
  "No tiene un decision-maker involucrado",
  "Busca delegar todo lo estratégico",
  "Espera resultados sin ejecución",
];

export default function AudienceSection() {
  return (
    <section id="para-quien" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <span className="eyebrow">Para quién es</span>
        <h2 className="mt-5 max-w-[620px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Atlas Discovery™ no es para todos
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-paper p-8 md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-atlas">
              Es para ti si
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              {fits.map((f) => (
                <li key={f} className="flex gap-3 font-sans text-[15px] leading-relaxed text-ink">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-atlas" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="h-full bg-paper p-8 md:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
              No es para ti si
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              {doesNotFit.map((f) => (
                <li key={f} className="flex gap-3 font-sans text-[15px] leading-relaxed text-slate">
                  <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-signal" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
