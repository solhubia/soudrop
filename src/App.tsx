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
import FontesSecretas from "./pages/FontesSecretas";
import FontesSecretasDetalhes from "./pages/FontesSecretasDetalhes";
import LiveImportacao from "./pages/LiveImportacao";
import Obrigado from "./pages/Obrigado";
import ObrigadoSoudrop from "./pages/ObrigadoSoudrop";
import ObrigadoCacadorChina from "./pages/ObrigadoCacadorChina";
import ChecklistImportador from "./pages/ChecklistImportador.tsx";
import CacadorProdutosEntrada from "./pages/CacadorProdutosEntrada";
import SoudropStart from "./pages/SoudropStart";
import SoudropPro from "./pages/SoudropPro";
import SoudropElite from "./pages/SoudropElite";
import { useEffect } from "react";
import { trackViewContent } from "./lib/fbq";


// -------------------------------------------
// Componente que envia ViewContent por rota
// -------------------------------------------
function RouteListener() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const path = location.pathname.toLowerCase();

      let category: "club" | "courses" | "soudrop" = "soudrop";
      if (path.startsWith("/clube") || path.includes("importacao")) {
        category = "club";
      } else if (path.startsWith("/cursos") || path.includes("/curso/")) {
        category = "courses";
      }

      // Dispara ViewContent contextualizado APENAS se não for a página inicial
      if (path !== "/") {
        // AGORA IMPORTE da lib correta
        import('@/lib/fbq').then(({ trackViewContent }) => {
          trackViewContent(category, { content_name: document.title });
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Verifica se o Pixel já foi carregado
    if (window.fbq) return;

    // Carrega o script do Pixel apenas uma vez
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

    window.fbq?.("init", "1144631303730010");

    // Fallback para noScript (pode manter)
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=1144631303730010&ev=PageView&noscript=1";
    document.body.appendChild(img);

    return () => {
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
            <Route path="/checklist-importador" element={<ChecklistImportador />} />
            <Route path="/cacador-produtos-entrada" element={<CacadorProdutosEntrada />} />
            <Route path="/fontes-secretas" element={<FontesSecretas />} />
            <Route path="/fontes-secretas-detalhes" element={<FontesSecretasDetalhes />} />
            <Route path="/live-importacao" element={<LiveImportacao />} />
            <Route path="/obrigado" element={<Obrigado />} />
            <Route path="/obrigado-soudrop" element={<ObrigadoSoudrop />} />
            <Route path="/obrigado-cacador-china" element={<ObrigadoCacadorChina />} />
            <Route path="/soudrop-start" element={<SoudropStart />} />
            <Route path="/soudrop-pro" element={<SoudropPro />} />
            <Route path="/soudrop-elite" element={<SoudropElite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
