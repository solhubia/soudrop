// src/lib/fbq.ts
declare global { 
  interface Window { 
    fbq: any;
    fbqInitialized?: boolean;
  } 
}

function ensureFbq() {
  if (!window.fbq) {
    console.warn('Facebook Pixel not loaded yet');
    return false;
  }
  return true;
}

// FUNÇÕES QUE ENVIAM EVENTOS COM O PARÂMETRO content_category
export function trackViewContent(category: "club" | "soudrop" | "courses", extra?: {
  content_name?: string, content_ids?: string[], value?: number, currency?: string
}) {
  if (!ensureFbq()) return;
  
  window.fbq("track", "ViewContent", {
    content_category: category,
    content_name: extra?.content_name,
    content_ids: extra?.content_ids,
    value: extra?.value,
    currency: extra?.currency || "BRL",
  });
}

export function trackWishCheckout(category: "club" | "soudrop" | "courses" ) {
  if (!ensureFbq()) return;
  window.fbq("track", "WishCheckout", { content_category: category });
}

export function trackInitiateCheckout(category: "club" | "soudrop" | "courses", value?: number) {
  if (!ensureFbq()) return;
  window.fbq("track", "InitiateCheckout", { content_category: category, value, currency: "BRL" });
}

export function trackAddToCart(category: "club" | "soudrop" | "courses", value?: number) {
  if (!ensureFbq()) return;
  window.fbq("track", "AddToCart", { content_category: category, value, currency: "BRL" });
}

export function trackPurchase(category: "club" | "soudrop" | "courses", value: number) {
  if (!ensureFbq()) return;
  window.fbq("track", "Purchase", { content_category: category, value, currency: "BRL" });
}

export function trackLead(category: "club" | "soudrop" | "courses") {
  if (!ensureFbq()) return;
  window.fbq("track", "Lead", { content_category: category });
}

export function trackCompleteRegistration(category: "club" | "soudrop" | "courses") {
  if (!ensureFbq()) return;
  window.fbq("track", "CompleteRegistration", { content_category: category });
}
