import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

// Eager load only the most critical pages (homepage)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages to reduce initial bundle size (~220KB savings)
const Links = lazy(() => import("./pages/Links"));
const Importacao = lazy(() => import("./pages/Importacao"));
const CacadorProdutos = lazy(() => import("./pages/CacadorProdutos"));
const CacadorProdutosChina = lazy(() => import("./pages/CacadorProdutosChina"));
const FontesSecretas = lazy(() => import("./pages/FontesSecretas"));
const FontesSecretasDetalhes = lazy(() => import("./pages/FontesSecretasDetalhes"));
const LiveImportacao = lazy(() => import("./pages/LiveImportacao"));
const Obrigado = lazy(() => import("./pages/Obrigado"));
const ObrigadoSoudrop = lazy(() => import("./pages/ObrigadoSoudrop"));
const ObrigadoClubeImportacao = lazy(() => import("./pages/ObrigadoClubeImportacao"));
const ObrigadoCacadorChina = lazy(() => import("./pages/ObrigadoCacadorChina"));
const OperacaoTiktok = lazy(() => import("./pages/OperacaoTiktok"));
const ChecklistImportador = lazy(() => import("./pages/ChecklistImportador"));
const CacadorProdutosEntrada = lazy(() => import("./pages/CacadorProdutosEntrada"));
const SoudropStart = lazy(() => import("./pages/SoudropStart"));
const SoudropPro = lazy(() => import("./pages/SoudropPro"));
const SoudropElite = lazy(() => import("./pages/SoudropElite"));
const BlackFriday = lazy(() => import("./pages/BlackFriday"));
const DashboardGiroEstoque = lazy(() => import("./pages/DashboardGiroEstoque"));
const ObrigadoTiktokLucrativo = lazy(() => import("./pages/ObrigadoTiktokLucrativo"));
const JornadaCreators = lazy(() => import("./pages/JornadaCreators"));

// Minimal loading fallback - prevents CLS with fixed height
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
  </div>
);

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
        import("@/lib/fbq").then(({ trackViewContent }) => {
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
    (function (
      f: any,
      b: Document,
      e: string,
      v: string,
      n?: any,
      t?: HTMLScriptElement,
      s?: HTMLScriptElement
    ) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n!.callMethod
          ? n!.callMethod.apply(n, arguments)
          : n!.queue.push(arguments);
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
    })(
      window as any,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq?.("init", "1144631303730010");

    // Fallback para noScript (pode manter)
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src =
      "https://www.facebook.com/tr?id=1144631303730010&ev=PageView&noscript=1";
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

          <Suspense fallback={<PageLoader />}>
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
              <Route path="/obrigado-clube-importacao" element={<ObrigadoClubeImportacao />} />
              <Route path="/obrigado-cacador-china" element={<ObrigadoCacadorChina />} />
              <Route path="/soudrop-start" element={<SoudropStart />} />
              <Route path="/soudrop-pro" element={<SoudropPro />} />
              <Route path="/soudrop-elite" element={<SoudropElite />} />
              <Route path="/black-friday" element={<BlackFriday />} />
              <Route path="/operacao-tiktok-de-lucro" element={<OperacaoTiktok />} />
              <Route path="/dashboard-giro-estoque" element={<DashboardGiroEstoque />} />
              <Route path="/obrigado-tiktok-lucrativo" element={<ObrigadoTiktokLucrativo />} />
              <Route path="/jornada-creators" element={<JornadaCreators />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
