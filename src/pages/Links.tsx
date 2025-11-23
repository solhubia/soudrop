import { LinkCard } from "@/components/LinkCard";
import { useEffect } from "react";
import "../index.css"; 

const Index = () => {
  useEffect(() => {
    // Inicializar Facebook Pixel
    if (!window.fbq) {
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    
    window.fbq('init', '2423820908020503');
    window.fbq('track', 'PageView');
  }, []);

  const trackLinkClick = (linkType: string, linkTitle: string) => {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: linkTitle,
        content_category: linkType,
      });
    }
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

          {/* Links */}
          <div className="space-y-8 max-w-lg mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <LinkCard
                title="Importe da China"
                description="Clique aqui para fazer importação"
                url="https://4k384ufgv64.typeform.com/to/vTnWbUQI"
                variant="green"
                type="import"
                onTrack={() => trackLinkClick('import', 'Importe da China')}
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <LinkCard
                title="Vender sem estoque"
                description="Acesse o site da Soudrop"
                url="https://4k384ufgv64.typeform.com/to/rIQVeImj"
                variant="green"
                type="website"
                onTrack={() => trackLinkClick('soudrop', 'Vender sem estoque')}
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <LinkCard
                title="Aprender a vender no digital"
                description="Tudo que você precisa para aprender vender online está aqui"
                url="https://soudrop.com.br/black-friday"
                variant="green"
                type="course"
                onTrack={() => trackLinkClick('courses', 'Aprender a vender no digital')}
              />
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

export default Index;

