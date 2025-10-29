// src/lib/fbq.ts
declare global { interface Window { fbq: any } }

export function initPixel(pixelId: string) {
  if (window.fbq) return;
  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t,s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

// FUNÇÕES QUE ENVIAM EVENTOS COM O PARÂMETRO content_category
export function trackViewContent(category: "club" | "soudrop" | "courses", extra?: {
  content_name?: string, content_ids?: string[], value?: number, currency?: string
}) {
  window.fbq?.("track", "ViewContent", {
    content_category: category,
    content_name: extra?.content_name,
    content_ids: extra?.content_ids,
    value: extra?.value,
    currency: extra?.currency || "BRL",
  });
}

export function trackInitiateCheckout(category: "club" | "soudrop" | "courses", value?: number) {
  window.fbq?.("track", "InitiateCheckout", { content_category: category, value, currency: "BRL" });
}

export function trackAddToCart(category: "club" | "soudrop" | "courses", value?: number) {
  window.fbq?.("track", "AddToCart", { content_category: category, value, currency: "BRL" });
}

export function trackPurchase(category: "club" | "soudrop" | "courses", value: number) {
  window.fbq?.("track", "Purchase", { content_category: category, value, currency: "BRL" });
}

export function trackLead(category: "club" | "soudrop" | "courses") {
  window.fbq?.("track", "Lead", { content_category: category });
}

export function trackCompleteRegistration(category: "club" | "soudrop" | "courses") {
  window.fbq?.("track", "CompleteRegistration", { content_category: category });
}
