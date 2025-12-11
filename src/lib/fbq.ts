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
  window.fbq("track", "AddToWishlist", { content_category: category });
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

// Scroll Depth tracking - fires when user scrolls to a certain percentage
export function trackScrollDepth(category: "club" | "soudrop" | "courses", percentage: number) {
  if (!ensureFbq()) return;
  window.fbq("trackCustom", "ScrollDepth", { 
    content_category: category, 
    scroll_percentage: percentage 
  });
}

// Time on Page tracking - fires when user spends a certain amount of time on page
export function trackTimeOnPage(category: "club" | "soudrop" | "courses", seconds: number) {
  if (!ensureFbq()) return;
  window.fbq("trackCustom", "TimeOnPage", { 
    content_category: category, 
    time_seconds: seconds 
  });
}
