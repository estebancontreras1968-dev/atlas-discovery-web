import Reveal from "@/components/Reveal";

export default function ConfidentialitySection() {
  return (
    <section className="border-t border-line bg-ink py-20 md:py-28">
      <div className="section-shell flex flex-col items-center text-center">
        <Reveal>
          <div className="mx-auto max-w-[720px]">
            <span className="eyebrow justify-center [&::before]:bg-signal text-slate-light">
              Confidencialidad
            </span>
            <h2 className="mt-5 text-balance font-display text-[28px] font-semibold leading-[1.15] tracking-tightest text-paper md:text-[36px]">
              Nuestra mejor referencia es la información que decidimos no
              mostrar.
            </h2>

            <div className="mt-6 space-y-4 font-sans text-[15.5px] leading-relaxed text-slate-light">
              <p>
                Podríamos publicar nombres, logos y testimonios. Elegimos no
                hacerlo.
              </p>
              <p>
                GPS Discovery™ no trabaja con opiniones. Trabaja con
                información estratégica real de empresas reales —
                crecimiento, rentabilidad, restricciones operacionales,
                decisiones de negocio.
              </p>
              <p>
                Entendemos que la misma confidencialidad que un empresario
                espera de su abogado, su contador o su directorio, debe
                existir también en un sistema de inteligencia empresarial.
              </p>
              <p>
                La confidencialidad no es una cláusula. Es parte del producto
                — alineada además con los principios de la Ley N° 21.719
                sobre Protección y Tratamiento de Datos Personales en Chile.
              </p>
            </div>

            <p className="mt-8 font-display text-[20px] font-semibold text-paper md:text-[22px]">
              La confianza también se demuestra guardando silencio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
