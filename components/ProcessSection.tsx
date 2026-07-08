import { siteConfig } from "@/lib/config";

const steps = [
  {
    n: "01",
    title: "Compras Atlas Discovery™",
    body: "Pago único y seguro en línea. Sin llamada de ventas, sin formulario de calificación previo.",
    time: "2 min",
  },
  {
    n: "02",
    title: "Completas el cuestionario",
    body: "Respondes un diagnóstico estructurado sobre tu operación, tus números y tus cuellos de botella.",
    time: "30–40 min",
  },
  {
    n: "03",
    title: "Analizamos tu negocio",
    body: "Aplicamos el framework Atlas sobre tus respuestas para aislar la restricción dominante y su causa raíz.",
    time: siteConfig.deliveryWindow,
  },
  {
    n: "04",
    title: "Recibes informe y plan",
    body: "Informe en PDF, video explicativo y plan de acción de 90 días, directo a tu correo.",
    time: "1 entrega",
  },
  {
    n: "05",
    title: "Ejecutas con acompañamiento",
    body: "Avanzas con el checklist semanal. El soporte por correo queda activo bajo la garantía Atlas.",
    time: "90 días",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="border-t border-line bg-paper-dim/60 py-20 md:py-28">
      <div className="section-shell">
        <span className="eyebrow">Cómo funciona</span>
        <h2 className="mt-5 max-w-[560px] text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Cinco pasos. Cero reuniones.
        </h2>

        <div className="mt-14 flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`grid grid-cols-[56px_1fr] gap-6 py-7 md:grid-cols-[80px_1fr_140px] md:gap-10 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="font-mono text-[13px] text-signal">{step.n}</span>
              <div>
                <h3 className="font-display text-[18px] font-semibold text-ink md:text-[19px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[540px] font-sans text-[14.5px] leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
              <span className="hidden font-mono text-[12px] uppercase tracking-[0.08em] text-slate-light md:block md:text-right">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
