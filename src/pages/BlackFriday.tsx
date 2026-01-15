import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira-bf.jpg";
const BlackFriday = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load WebinarJam script
    const script = document.createElement('script');
    script.src = "https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=3&buttonText=Register";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')"
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Badge Black Friday */}
          <div className="relative inline-block">
            <div className="relative">
              {/* Tag Superior */}
              <div className="inline-block mb-4">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-50 md:text-2xl">
                  Masterclass Sou Drop
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] text-9xl font-extrabold">INCRIÇÕES</span>
                <br />
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">ABERTAS</span>
              </h1>
              
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl leading-tight max-w-4xl mx-auto px-4 font-sans font-extrabold lg:text-5xl">
            A aula que vai mostrar como fazer parte do{" "}
            <span className="text-primary">1% das pessoas</span> que ganham dinheiro vendendo sem estoque, 
            com uma{" "}
            <span className="text-destructive">condição histórica</span>{" "}
            (a melhor já liberada) de acesso à SouDrop.
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 flex items-center justify-center gap-2">
            <span className="text-2xl">⏱</span>
            Clique no botão abaixo e escolha um horário
          </p>

          {/* CTA Button */}
          <div className="pt-4 text-center">
            <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{
            border: '2px solid rgba(0, 0, 0, 0.5)',
            background: 'rgba(34, 197, 94, 0.95)',
            color: 'rgb(255, 255, 255)',
            fontSize: '24px',
            padding: '18px 80px',
            boxShadow: 'none',
            borderRadius: '100px',
            whiteSpace: 'normal',
            fontWeight: '700',
            lineHeight: '1.3',
            cursor: 'pointer',
            fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            wordBreak: 'break-word',
            margin: 'auto'
          }}>
              GARANTIR VAGA
            </button>
          </div>
        </div>
      </section>

      {/* O que você vai ver Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            O que você vai ver nessa{" "}
            <span className="text-primary">MasterClass</span>
          </h2>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {["SouDrop 3.0 na prática: nada de teoria — tela aberta, mão na massa.", "Pesquisa de produtos em tempo real: do zero até a lista quente.", "Catálogo da SouDrop por dentro: o que vende e por que vende.", "Comparativos inteligentes: margem, volume, concorrência.", "Ferramentas de Lançamento por IA: Como lançar bons anúncios em poucos segundos por IA.", "Condição histórica: a melhor oportunidade já liberada pra você entrar na SouDrop."].map((item, index) => <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-950/20 to-transparent border-l-4 border-destructive rounded-lg hover:from-red-950/30 transition-all duration-300 group">
                <ArrowRight className="w-6 h-6 text-destructive flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <p className="text-lg text-gray-300 leading-relaxed">{item}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Quem deve participar Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Quem deve <span className="text-primary">participar</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: <TrendingUp className="w-12 h-12" />,
            text: "Se você já tentou vender online e não conseguiu resultado."
          }, {
            icon: <Target className="w-12 h-12" />,
            text: "Se você nunca vendeu, mas quer começar de forma simples e segura."
          }, {
            icon: <Users className="w-12 h-12" />,
            text: "Se você já foi membro da SouDrop, mas não renovou seu acesso."
          }].map((card, index) => <div key={index} className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary" />
                <div className="text-destructive mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  {card.text}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="relative py-8 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-2 bg-gradient-to-r from-primary to-destructive rounded-full">
            <div className="bg-black rounded-full p-3">
              <img alt="Renan Ferreira" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" src="/lovable-uploads/1f926195-0aa4-4cb4-ae07-1803732511ce.jpg" />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-primary">RENAN</span> FERREIRA
            </h3>
            <p className="text-xl text-gray-400 mb-2">
              Especialista em Importação e Operação Real de E-commerce
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Experiência prática com importação direta da China, negociação com fábricas, 
              containers, logística e operação real no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative py-8 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-black leading-tight lg:text-7xl">
            A melhor decisão que você pode tomar hoje não é comprar algo.
            <br />
            É construir um{" "}
            <span className="text-primary">NEGÓCIO</span>{" "}
            que vai sustentar seu futuro por anos.
          </h2>

          <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{
          border: '2px solid rgba(0, 0, 0, 0.5)',
          background: 'rgba(34, 197, 94, 0.95)',
          color: 'rgb(255, 255, 255)',
          fontSize: '24px',
          padding: '18px 80px',
          boxShadow: 'none',
          borderRadius: '100px',
          whiteSpace: 'normal',
          fontWeight: '700',
          lineHeight: '1.3',
          cursor: 'pointer',
          fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          wordBreak: 'break-word',
          margin: 'auto'
        }}>
            GARANTIR VAGA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-gray-500">
            Desenvolvido por <span className="text-primary font-semibold">SouDrop Digital</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Política de privacidade</a>
            <span>•</span>
            <span>Todos os direitos reservados SouDrop 2025.</span>
          </div>
        </div>
      </footer>
    </div>;
};
export default BlackFriday;