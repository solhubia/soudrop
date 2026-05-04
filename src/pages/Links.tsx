import { useEffect } from "react";
import { LayoutDashboard, MessageCircle, ExternalLink } from "lucide-react";
import "../index.css";

const SYSTEM_URL = "https://soudrop.com.br/";
const WHATSAPP_URL = "https://wa.me/5515992564207";

const Links = () => {
  useEffect(() => {
    if (!window.fbq) {
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
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
    }

    window.fbq("init", "2423820908020503");
    window.fbq("track", "PageView");
  }, []);

  const trackLinkClick = (linkType: string, linkTitle: string) => {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: linkTitle,
        content_category: linkType,
      });
    }
  };

  const handleClick = (url: string, type: string, title: string) => {
    trackLinkClick(type, title);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen theme-links bg-gradient-links-background font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black bg-gradient-soudrop bg-clip-text text-transparent mb-6 tracking-tight">
              Links Soudrop
            </h1>
            <p className="text-muted-foreground text-xl font-medium">
              Seus links essenciais em um só lugar
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <button
                onClick={() => handleClick(SYSTEM_URL, "system", "Acessar sistema SouDrop")}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 sm:p-6 text-white shadow-xl border border-blue-500/20 hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white/15 rounded-xl backdrop-blur-sm flex-shrink-0">
                      <LayoutDashboard className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-tight">
                        Acessar sistema SouDrop
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 font-medium mt-1">
                        Entre na plataforma da SouDrop
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </button>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <button
                onClick={() => handleClick(WHATSAPP_URL, "whatsapp", "Comprar no atacado pelo WhatsApp")}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-5 sm:p-6 text-white shadow-xl border border-green-500/20 hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white/15 rounded-xl backdrop-blur-sm flex-shrink-0">
                      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-tight">
                        Comprar no atacado pelo WhatsApp
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 font-medium mt-1">
                        Fale com nosso time no WhatsApp
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20">
            <p className="text-muted-foreground text-sm font-medium">
              © 2025 Soudrop. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
