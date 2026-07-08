# Atlas Discovery™ — Landing Page

Landing page premium, minimalista y orientada 100% a conversión directa
(compra sin llamadas ni reuniones), construida con Next.js 14 (App Router),
TypeScript, TailwindCSS y lista para desplegar en Vercel.

## Estructura del proyecto

```
atlas-discovery/
├── app/
│   ├── layout.tsx        # Layout raíz, fuentes (Space Grotesk, Inter, JetBrains Mono), metadata SEO
│   ├── page.tsx           # Ensambla todas las secciones de la landing
│   └── globals.css        # Estilos base, tokens y utilidades Tailwind
├── components/
│   ├── Header.tsx          # Header fijo con navegación y CTA
│   ├── Hero.tsx             # 1. Hero principal
│   ├── ProblemSection.tsx   # 2. Problema del mercado
│   ├── DeliverableSection.tsx # 3. Qué recibe el cliente
│   ├── BenefitsSection.tsx  # 4. Beneficios
│   ├── ProcessSection.tsx   # 5. Cómo funciona el proceso
│   ├── GuaranteeSection.tsx # 6. Garantía de acompañamiento
│   ├── FAQSection.tsx       # 7. Preguntas frecuentes (acordeón)
│   ├── FinalCTA.tsx         # 8. CTA final de compra
│   ├── Footer.tsx
│   └── ChainDiagram.tsx     # Diagrama de firma: la restricción dominante
├── lib/
│   └── config.ts            # Precio, link de checkout, email — edita aquí
├── tailwind.config.ts        # Paleta de marca y tipografía
├── package.json
└── ...archivos de configuración estándar de Next.js
```

## Antes de publicar

1. **Conecta el pago.** Abre `lib/config.ts` y reemplaza `checkoutUrl` por
   tu Payment Link real (Stripe Dashboard → Payment Links, o tu pasarela
   local: Flow, MercadoPago, etc.). Todos los botones de compra de la
   landing apuntan a esa única variable — no hay que tocar los componentes.
2. **Ajusta el precio.** Cambia `price.amount` en el mismo archivo.
3. **Conecta el cuestionario de diagnóstico.** El paso 2 del proceso
   ("Completas el cuestionario") asume un formulario post-compra (Typeform,
   Tally, Google Forms o uno propio). Actualmente el flujo de compra es
   externo (checkout de Stripe); agrega el link al formulario en tu página
   de confirmación de pago o en el correo de bienvenida automático.
4. **Revisa el copy de la garantía** (`GuaranteeSection.tsx`) con tu equipo
   legal antes de publicar — describe condiciones de servicio.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

**Opción A — CLI**

```bash
npm install -g vercel
vercel
```

**Opción B — Dashboard**

1. Sube esta carpeta a un repositorio de GitHub/GitLab/Bitbucket.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se requiere configuración
   adicional. Deploy.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript**
- **TailwindCSS** con tokens de marca personalizados (`tailwind.config.ts`)
- **next/font** con Space Grotesk (display), Inter (texto) y JetBrains Mono
  (datos/etiquetas) — auto-hospedadas, sin llamadas externas a Google Fonts
  en producción.
- Sin dependencias de UI adicionales — 100% componentes propios.

## Notas de diseño

- Paleta: `ink` (#0B0E14), `paper` (#FAFAFA), `atlas` (#263186, acento de
  marca) y `signal` (#B91C3C, usado exclusivamente para marcar la
  "restricción" — nunca como color decorativo).
- El elemento de firma es `ChainDiagram.tsx`: visualiza el negocio como una
  cadena de funciones donde una sola determina la capacidad de crecimiento
  del conjunto — la idea central del producto, no una decoración.
- Todo el copy evita afirmaciones de resultados garantizados no
  condicionados; la sección de garantía declara sus condiciones de forma
  explícita.
