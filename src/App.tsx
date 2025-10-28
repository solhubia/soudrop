import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", "1144631303730010"); // Substitua pelo seu ID de Pixel
    fbq("track", "PageView");

    // Fallback para o noScript
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=1144631303730010&ev=PageView&noscript=1";
    document.body.appendChild(img);
  }, []); // Array vazio garante que o efeito seja executado apenas uma vez após a renderização

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/links" element={<Links />} />
            <Route path="/importacao" element={<Importacao />} />
            <Route path="/cacador-produtos" element={<CacadorProdutos />} />
            <Route path="/cacador-produtos-china" element={<CacadorProdutosChina />} />
            <Route path="/obrigado" element={<Obrigado />} />
            <Route path="/obrigado-soudrop" element={<ObrigadoSoudrop />} />
            <Route path="/obrigado-cacador-china" element={<ObrigadoCacadorChina />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
