import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import renanPhoto from "@/assets/renan-ferreira-bf.jpg";

// Optimized hero images - mobile 720w q60 (~80KB), desktop 1920w q75
// Unsplash auto-serves WebP/AVIF based on browser support
const HERO_MOBILE = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=720&q=60";
const HERO_DESKTOP = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=75";

const BlackFriday = () => {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [heroCTAVisible, setHeroCTAVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scriptLoaded = useRef(false);
  const heroCTARef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Detect mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // Preload hero image based on viewport
    const heroUrl = window.innerWidth < 768 ? HERO_MOBILE : HERO_DESKTOP;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/webp';
    link.href = heroUrl;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Defer WebinarJam script until user interaction or 4s
    const loadWebinarScript = () => {
      if (scriptLoaded.current) return;
      scriptLoaded.current = true;
      
      const script = document.createElement('script');
      script.src = "https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=3&buttonText=Register";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    const interactionEvents = ['scroll', 'click', 'touchstart', 'keydown'];
    const timeout = setTimeout(loadWebinarScript, 4000);
    
    interactionEvents.forEach(event => {
      document.addEventListener(event, loadWebinarScript, { once: true, passive: true });
    });

    // Intersection Observer for hero CTA visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCTAVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroCTARef.current) {
      observer.observe(heroCTARef.current);
    }

    // Sticky button logic for mobile - show only between 15% and 85% scroll
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setShowStickyButton(false);
        return;
      }
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const isInRange = scrollPercent > 15 && scrollPercent < 85;
      setShowStickyButton(isInRange);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeout);
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', checkMobile);
      interactionEvents.forEach(event => {
        document.removeEventListener(event, loadWebinarScript);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Hero Section - Solid fallback renders text immediately */}
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center px-4 md:px-4 py-8 md:py-20 bg-gray-950">
        {/* Background Image - No filters for performance */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${isMobile ? HERO_MOBILE : HERO_DESKTOP}')`
          }}
        />
        {/* Single simple overlay - no gradient for mobile performance */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/70" />

        {/* Mobile: full width content, Desktop: centered max-width */}
        <div className="relative z-10 w-full px-4 md:px-0 md:max-w-5xl mx-auto text-center space-y-5 md:space-y-8">
          {/* Logo/Badge Black Friday */}
          <div className="relative inline-block w-full">
            <div className="relative">
              {/* Tag Superior */}
              <div className="inline-block mb-3 md:mb-4">
                <span className="text-sm md:text-2xl font-bold tracking-widest uppercase text-slate-50">
                  Masterclass Sou Drop
                </span>
              </div>
              
              {/* Mobile: 38-42px filling screen, Desktop: unchanged */}
              <h1 className="text-[40px] leading-[1.05] md:text-8xl lg:text-9xl font-black tracking-tight md:tracking-tighter md:leading-normal">
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] md:text-9xl font-extrabold">INSCRIÇÕES</span>
                <br />
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">ABERTAS</span>
              </h1>
            </div>
          </div>

          {/* Headline - Mobile: larger, full width */}
          <h2 className="text-[18px] leading-[1.35] md:max-w-4xl mx-auto font-sans font-extrabold md:text-3xl lg:text-5xl md:leading-tight">
            A aula que vai mostrar como fazer parte do{" "}
            <span className="text-primary">1% das pessoas</span> que ganham dinheiro vendendo sem estoque, 
            com uma{" "}
            <span className="text-destructive">condição histórica</span>{" "}
            (a melhor já liberada) de acesso à SouDrop.
          </h2>

          {/* Subheadline - Mobile: 17px */}
          <p className="text-[17px] md:text-xl text-gray-300 flex items-center justify-center gap-2">
            <span className="text-xl md:text-2xl">⏱</span>
            Clique no botão abaixo e escolha um horário
          </p>

          {/* CTA Button - Mobile: 90% width, dominant */}
          <div ref={heroCTARef} className="pt-3 md:pt-4 w-full">
            <button 
              type="button" 
              className="wj-embed-button w-[90%] md:w-auto" 
              data-webinarHash="8wgw0kty" 
              style={{
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(22, 163, 74, 1) 100%)',
                color: 'rgb(255, 255, 255)',
                fontSize: '18px',
                padding: '18px 32px',
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
                borderRadius: '14px',
                whiteSpace: 'normal',
                fontWeight: '700',
                lineHeight: '1.3',
                cursor: 'pointer',
                fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                wordBreak: 'break-word',
                minHeight: '56px'
              }}
            >
              GARANTIR MINHA VAGA
            </button>
          </div>
        </div>
      </section>

      {/* O que você vai ver Section */}
      <section className="relative py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] leading-tight md:text-5xl font-black text-center mb-6 md:mb-16">
            O que você vai ver nessa{" "}
            <span className="text-primary">MasterClass</span>
          </h2>

          {/* Mobile: stacked cards, full width */}
          <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "SouDrop 3.0 na prática: nada de teoria — tela aberta, mão na massa.",
              "Pesquisa de produtos em tempo real: do zero até a lista quente.",
              "Catálogo da SouDrop por dentro: o que vende e por que vende.",
              "Comparativos inteligentes: margem, volume, concorrência.",
              "Ferramentas de Lançamento por IA: Como lançar bons anúncios em poucos segundos por IA.",
              "Condição histórica: a melhor oportunidade já liberada pra você entrar na SouDrop."
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-red-950/20 to-transparent border-l-4 border-destructive rounded-lg hover:from-red-950/30 transition-all duration-300 group w-full"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <p className="text-[15px] leading-relaxed md:text-lg text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem deve participar Section */}
      <section className="relative py-10 md:py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] leading-tight md:text-5xl font-black text-center mb-6 md:mb-16">
            Quem deve <span className="text-primary">participar</span>
          </h2>

          {/* Mobile: 1 card per row, full width, larger text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
                text: "Se você já tentou vender online e não conseguiu resultado."
              },
              {
                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                text: "Se você nunca vendeu, mas quer começar de forma simples e segura."
              },
              {
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                text: "Se você já foi membro da SouDrop, mas não renovou seu acesso."
              }
            ].map((card, index) => (
              <div 
                key={index} 
                className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 group overflow-hidden text-center md:text-left"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary" />
                <div className="text-destructive mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  {card.icon}
                </div>
                <p className="text-[17px] md:text-lg leading-relaxed text-gray-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="relative py-10 md:py-12 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-8">
          {/* Photo - proportional on mobile */}
          <div className="inline-block p-1.5 md:p-2 bg-gradient-to-r from-primary to-destructive rounded-full">
            <div className="bg-black rounded-full p-2 md:p-3">
              <img 
                alt="Renan Ferreira" 
                className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover" 
                src="/lovable-uploads/1f926195-0aa4-4cb4-ae07-1803732511ce.jpg" 
              />
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-4xl font-black">
              <span className="text-primary">RENAN</span> FERREIRA
            </h3>
            <p className="text-[17px] md:text-xl text-gray-400">
              Especialista em Importação e E-commerce
            </p>
            <p className="text-[15px] md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Experiência prática com importação direta da China, negociação com fábricas e operação real no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative py-10 md:py-12 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-16">
          <h2 className="text-[24px] leading-[1.25] md:text-5xl font-black md:leading-tight lg:text-7xl">
            Sua melhor compra de agora é um{" "}
            <span className="text-primary">NEGÓCIO</span>{" "}
            que vai garantir seu sucesso
          </h2>

          <div className="w-full">
            <button 
              type="button" 
              className="wj-embed-button w-[90%] md:w-auto" 
              data-webinarHash="8wgw0kty" 
              style={{
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(22, 163, 74, 1) 100%)',
                color: 'rgb(255, 255, 255)',
                fontSize: '18px',
                padding: '18px 32px',
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
                borderRadius: '14px',
                whiteSpace: 'normal',
                fontWeight: '700',
                lineHeight: '1.3',
                cursor: 'pointer',
                fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                wordBreak: 'break-word',
                minHeight: '56px'
              }}
            >
              GARANTIR MINHA VAGA
            </button>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button - Mobile Only: hidden when hero CTA visible */}
      {showStickyButton && !heroCTAVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black/98 to-transparent md:hidden">
          <button 
            type="button" 
            className="wj-embed-button w-full" 
            data-webinarHash="8wgw0kty" 
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(22, 163, 74, 1) 100%)',
              color: 'rgb(255, 255, 255)',
              fontSize: '17px',
              padding: '16px 24px',
              boxShadow: '0 -4px 24px rgba(34, 197, 94, 0.5)',
              borderRadius: '14px',
              whiteSpace: 'normal',
              fontWeight: '700',
              lineHeight: '1.3',
              cursor: 'pointer',
              fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              wordBreak: 'break-word',
              width: '100%',
              minHeight: '56px'
            }}
          >
            GARANTIR MINHA VAGA
          </button>
        </div>
      )}

      {/* Footer - Add padding bottom for sticky button on mobile */}
      <footer className="relative border-t border-gray-900 py-8 px-4 pb-28 md:pb-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-gray-500 text-[15px] md:text-base">
            Desenvolvido por <span className="text-primary font-semibold">SouDrop Digital</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Política de privacidade</a>
            <span>•</span>
            <span>Todos os direitos reservados SouDrop 2025.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlackFriday;
