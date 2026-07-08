// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL — Atlas Discovery™
// Edita estos valores para actualizar precio, checkout y contacto
// en TODA la landing sin tocar los componentes.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: "Atlas Discovery™",
  company: "Academia Talento Activo",

  // URL de checkout: reemplaza por tu Stripe Payment Link
  // (Stripe Dashboard → Payment Links → Create link) o tu pasarela
  // de pago local (Flow, MercadoPago, etc.). El botón de compra
  // apunta directo aquí — sin pasos intermedios, sin agendamiento.
  checkoutUrl: "https://buy.stripe.com/REEMPLAZAR_CON_TU_PAYMENT_LINK",

  price: {
    amount: "USD 890",
    note: "Pago único · sin suscripción",
  },

  contactEmail: "hola@atlasdiscovery.com",

  // Tiempo de entrega del informe tras completar el cuestionario
  deliveryWindow: "5 a 7 días hábiles",
};
