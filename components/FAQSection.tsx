"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "¿Necesito agendar una llamada para comenzar?",
    a: "No. Todo el proceso ocurre después de tu compra: completas el Formulario Estratégico Atlas Discovery™ y recibes tu Informe Ejecutivo Atlas™. No hay llamadas de ventas ni reuniones previas.",
  },
  {
    q: "¿Qué es el Formulario Estratégico Atlas Discovery™?",
    a: "Es el formulario estructurado que traduce el estado real de tu empresa en información analizable para GPS Discovery™. Lo completas a tu ritmo, sin intervención humana previa.",
  },
  {
    q: "¿Qué es GPS Discovery™?",
    a: "Es el motor analítico de Atlas Discovery™. Analiza la información entregada, identifica la restricción dominante, prioriza las oportunidades y construye tu roadmap de 90 días.",
  },
  {
    q: "Mi empresa no tiene empleados, ¿igual me sirve?",
    a: "Sí. Atlas Discovery™ está diseñado para empresas con entre 0 y N trabajadores, siempre que exista participación activa del dueño, socio, gerente general o tomador de decisiones.",
  },
  {
    q: "¿Cuánto cuesta Atlas Discovery™?",
    a: `Atlas Discovery™ tiene un valor de ${siteConfig.price}, con pago único — sin suscripción.`,
  },
  {
    q: "¿Qué pasa si no logro resultados?",
    a: "Atlas acompaña al cliente hasta asegurar la correcta comprensión de las recomendaciones entregadas, siempre que las acciones sean implementadas conforme a la estrategia propuesta y no existan factores externos o exógenos que alteren significativamente las condiciones analizadas.",
  },
  {
    q: "¿Atlas Discovery™ reemplaza a una consultoría estratégica?",
    a: "No. Atlas Discovery™ identifica con precisión dónde debe concentrarse el esfuerzo estratégico antes de iniciar procesos de implementación o acompañamiento.",
  },
  {
    q: "¿Cómo se protege la información de mi empresa?",
    a: "La información entregada en el Formulario Estratégico Atlas Discovery™ se utiliza exclusivamente para elaborar tu diagnóstico y no se comparte con terceros.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="max-w-[560px]">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-5 text-balance font-display text-[30px] font-semibold leading-[1.15] tracking-tightest text-ink md:text-[36px]">
            Antes de comenzar
          </h2>
        </div>
      </Reveal>

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
