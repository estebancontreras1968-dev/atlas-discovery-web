import Reveal from "@/components/Reveal";

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="rounded-[6px] border border-line p-8 md:p-14">
          <span className="eyebrow">Garantía</span>
          <h2 className="mt-5 max-w-[640px] text-balance font-display text-[28px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[32px]">
            Acompañamiento hasta la correcta comprensión
          </h2>
          <p className="mt-6 max-w-[720px] font-sans text-[15.5px] leading-relaxed text-ink">
            Atlas acompañará al cliente hasta asegurar la correcta comprensión
            de las recomendaciones entregadas, siempre que las acciones sean
            implementadas conforme a la estrategia propuesta y no existan
            factores externos o exógenos que alteren significativamente las
            condiciones analizadas.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
