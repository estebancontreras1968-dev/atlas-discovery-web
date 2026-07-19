import Reveal from "@/components/Reveal";

const notThis = [
  "Una consultoría tradicional.",
  "Una reunión de descubrimiento.",
  "Una auditoría.",
  "Un curso empresarial.",
  "Un informe estándar descargable.",
];

export default function NotThisSection() {
  return (
    <section className="border-t border-line bg-ink py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow [&::before]:bg-signal text-slate-light">
            Para evitar confusiones
          </span>
          <h2 className="mt-5 max-w-[560px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-paper md:text-[36px]">
            GPS Discovery™ no es…
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {notThis.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-signal" />
                <span className="font-display text-[16px] font-medium leading-snug text-paper">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 max-w-[680px] font-sans text-[15.5px] leading-relaxed text-slate-light">
            Es un sistema estructurado de inteligencia empresarial diseñado
            para identificar el factor que limita el desempeño de una empresa
            y organizar una ruta inicial de actuación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
