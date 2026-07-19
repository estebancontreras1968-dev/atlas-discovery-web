"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "¿Cómo puede GPS Discovery™ analizar mi empresa sin reuniones?",
    a: "Después de la compra completas un formulario estratégico estructurado. GPS Discovery™ organiza, clasifica y relaciona la información entregada para identificar patrones, causas y restricciones. No requiere entrevistas para iniciar el análisis.",
  },
  {
    q: "¿Qué es el Formulario Estratégico GPS Discovery™?",
    a: "Es el formulario estructurado que traduce el estado real de tu empresa en información analizable para el Sistema GPS Discovery™. Lo completas a tu ritmo, sin intervención humana previa.",
  },
  {
    q: "¿Por qué debo pagar antes de completar el formulario?",
    a: "El formulario estratégico forma parte del producto y contiene la estructura utilizada para recopilar la información empresarial necesaria. El acceso se habilita después de la compra, de la misma manera que ocurre con otros sistemas, plataformas y herramientas empresariales.",
  },
  {
    q: "¿Qué es GPS Discovery™?",
    a: "Es el sistema de inteligencia empresarial de Atlas Business Evolution™. Analiza la información entregada, identifica la restricción dominante, prioriza las oportunidades y construye tu GPS Roadmap™ de 90 días.",
  },
  {
    q: "¿Qué ocurre después de realizar el pago?",
    a: "Hotmart confirma la compra, habilita tu acceso y entrega las instrucciones para comenzar. Luego completas el formulario estratégico y, en cuanto lo envías, comienza el procesamiento: tus cinco entregables estarán disponibles tan pronto finalice.",
  },
  {
    q: "Mi empresa no tiene empleados, ¿igual me sirve?",
    a: "Sí. GPS Discovery™ está diseñado para empresas con entre 0 y N trabajadores, siempre que exista participación activa del dueño, socio, gerente general o tomador de decisiones.",
  },
  {
    q: "¿Cuánto cuesta GPS Discovery™?",
    a: `GPS Discovery™ tiene un valor Fundadores de ${siteConfig.price}, con pago único — sin suscripción. Precio de referencia futuro: ${siteConfig.priceReference}.`,
  },
  {
    q: "¿Qué pasa si no logro resultados?",
    a: "Atlas acompaña al cliente hasta asegurar la correcta comprensión de las recomendaciones entregadas, siempre que las acciones sean implementadas conforme a la estrategia propuesta y no existan factores externos o exógenos que alteren significativamente las condiciones analizadas.",
  },
  {
    q: "¿GPS Discovery™ reemplaza a un consultor?",
    a: "No. GPS Discovery™ entrega una evaluación estructurada y una ruta inicial de prioridades. La ejecución posterior puede ser realizada por el dueño, el equipo interno o los especialistas que la empresa determine.",
  },
  {
    q: "¿Por qué no publican testimonios?",
    a: "Porque protegemos la identidad, experiencia e información estratégica de las empresas que utilizan el sistema. En su lugar, mostramos ejemplos ficticios, mockups y una explicación transparente del proceso.",
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
