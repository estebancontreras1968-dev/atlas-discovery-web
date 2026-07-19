import Reveal from "@/components/Reveal";

export default function AutomationSupportSection() {
  return (
    <section className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="rounded-[6px] border border-line p-8 md:p-14">
          <span className="eyebrow">Automatización y soporte</span>
          <h2 className="mt-5 max-w-[640px] text-balance font-display text-[28px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[32px]">
            Análisis automatizado. Soporte cuando lo necesites.
          </h2>
          <p className="mt-6 max-w-[720px] font-sans text-[15.5px] leading-relaxed text-ink">
            El análisis inicial y la generación de los resultados se realizan
            mediante GPS Discovery™, sin reuniones, llamadas telefónicas ni
            intervención humana durante el procesamiento.
          </p>
          <p className="mt-4 max-w-[720px] font-sans text-[15.5px] leading-relaxed text-slate">
            Después de recibir tus resultados, podrás utilizar los canales de
            soporte definidos para resolver dudas operativas o solicitar
            aclaraciones sobre el proceso de acceso y entrega.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
