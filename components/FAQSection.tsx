"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

const faqs = [
  {
    q: "¿Necesito agendar una llamada para comenzar?",
    a: "No. Todo el proceso ocurre después de tu compra: completas un cuestionario online y recibes tu informe por correo. No hay llamadas de ventas ni reuniones de diagnóstico previas.",
  },
  {
    q: "Mi empresa no tiene empleados, ¿igual me sirve?",
    a: "Sí. Atlas Discovery™ está diseñado específicamente para empresas donde el dueño opera gran parte del negocio, con o sin equipo. El plan de 90 días se ajusta a la capacidad real que tienes disponible.",
  },
  {
    q: `¿Cuánto tiempo toma recibir el informe?`,
    a: `Una vez que completas el cuestionario, el informe y el plan de acción llegan a tu correo en ${siteConfig.deliveryWindow}.`,
  },
  {
    q: "¿Qué pasa si no logro los resultados propuestos?",
    a: "Si ejecutaste el plan según lo recomendado y reportaste tu avance semanal, mantenemos el acompañamiento por correo sin costo adicional hasta que se alcance el resultado, salvo que existan variables externas fuera de nuestro control.",
  },
  {
    q: "¿Sirve para cualquier industria?",
    a: "El framework Atlas se basa en principios de operación y crecimiento aplicables a la mayoría de los negocios de servicios, comercio y producción a pequeña y mediana escala. Si tienes dudas sobre tu caso particular, escríbenos antes de comprar.",
  },
  {
    q: "¿Qué necesito preparar antes de comprar?",
    a: "Nada. El cuestionario está diseñado para completarse con la información que ya tienes: cifras generales de facturación, costos y operación de los últimos meses.",
  },
  {
    q: "¿Cómo se protege la información de mi negocio?",
    a: "Tus respuestas y datos se usan exclusivamente para elaborar tu diagnóstico y no se comparten con terceros.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell border-t border-line py-20 md:py-28">
      <div className="max-w-[560px]">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
          Antes de comenzar
        </h2>
      </div>

      <div className="mt-12 border-t border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[16px] font-medium text-ink md:text-[17px]">
                  {item.q}
                </span>
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line font-mono text-[14px] text-slate transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="max-w-[600px] font-sans text-[14.5px] leading-relaxed text-slate">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
