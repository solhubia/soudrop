import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Links from "./pages/Links";
import Importacao from "./pages/Importacao";
import CacadorProdutos from "./pages/CacadorProdutos";
import CacadorProdutosChina from "./pages/CacadorProdutosChina";
import Obrigado from "./pages/Obrigado";
import ObrigadoSoudrop from "./pages/ObrigadoSoudrop";
import ObrigadoCacadorChina from "./pages/ObrigadoCacadorChina";
import { useEffect } from "react";

// -----------------------------
// Tipagem fbq (TypeScript safe)
// -----------------------------
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Helpers de rastreamento com content_category
function trackViewContent(category: "club" | "courses" | "soudrop", extra?: {
  content_name?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
}) {
  window.fbq?.("track", "ViewContent", {
    content_category: category,
    content_name: extra?.content_name,
    content_ids: extra?.content_ids,
    value: extra?.value,
    currency: extra?.currency || "BRL",
  });
}

export function trackInitiateCheckout(category: "club" | "courses" | "soudrop", value?: number) {
  window.fbq?.("track", "InitiateCheckout", { content_category: category, value, currency: "BRL" });
}

export function trackAddToCart(category: "club" | "courses" | "soudrop", value?: number) {
  window.fbq?.("track", "AddToCart", { content_category: category, value, currency: "BRL" });
}

export function trackPurchase(category: "club" | "courses" | "soudrop", value: number) {
  window.fbq?.("track", "Purchase", { content_category: category, value, currency: "BRL" });
}

export function trackLead(category: "club" | "courses" | "soudrop") {
  window.fbq?.("track", "Lead", { content_category: category });
}

export function trackCompleteRegistration(category: "club" | "courses" | "soudrop") {
  window.fbq?.("track", "CompleteRegistration", { content_category: category });
}

// -------------------------------------------
// Componente que envia ViewContent por rota
// -------------------------------------------
function RouteListener() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    // Regras simples: ajuste conforme suas rotas reais
    let category: "club" | "courses" | "soudrop" = "soudrop";
    if (path.startsWith("/clube") || path.includes("importacao")) {
      category = "club";
    } else if (path.startsWith("/cursos") || path.includes("/curso/")) {
      category = "courses";
    }

    // Dispara ViewContent contextualizado
    trackViewContent(category, { content_name: document.title });
  }, [location]);

  return null;
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Meta Pixel Code (base)
    (function (f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: HTMLScriptElement) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n!.callMethod ? n!.callMethod.apply(n, arguments) : n!.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
      s.parentNode!.insertBefore(t, s);
    })(window as any, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq?.("init", "1144631303730010"); // SEU Pixel
    window.fbq?.("track", "PageView");

    // Fallback para noScript (ok manter)
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=1144631303730010&ev=PageView&noscript=1";
    document.body.appendChild(img);

    return () => {
      // opcional: remover o fallback ao desmontar
      if (img && img.parentNode) img.parentNode.removeChild(img);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteListener />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/links" element={<Links />} />
            <Route path="/importacao" element={<Importacao />} />
            <Route path="/cacador-produtos" element={<CacadorProdutos />} />
            <Route path="/cacador-produtos-china" element={<CacadorProdutosChina />} />
            <Route path="/obrigado" element={<Obrigado />} />
            <Route path="/obrigado-soudrop" element={<ObrigadoSoudrop />} />
            <Route path="/obrigado-cacador-china" element={<ObrigadoCacadorChina />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
