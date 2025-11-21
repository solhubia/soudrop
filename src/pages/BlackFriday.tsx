import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const BlackFriday = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    window.open("https://checkout.soudrop.com.br/", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Tag Superior */}
          <div className="inline-block">
            <span className="text-sm md:text-base font-bold tracking-widest text-destructive uppercase">
              MASTERCLASS DE ANIVERSÁRIO
            </span>
          </div>

          {/* Logo/Badge Black Friday */}
          <div className="relative inline-block">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                  BLACK
                </span>
                <br />
                <span className="bg-gradient-to-r from-destructive via-red-600 to-destructive bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                  FRIDAY
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 md:-right-8 bg-primary text-black px-4 py-2 rounded-lg rotate-12 shadow-glow">
                <span className="text-xs md:text-sm font-black">SOUDROP</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl mx-auto px-4">
            A aula que vai mostrar como fazer parte do{" "}
            <span className="text-primary">1% das pessoas</span> que ganham dinheiro na Black Friday, 
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
          <div className="pt-4">
            <Button 
              size="xl"
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary-glow text-black font-black text-xl px-12 py-8 rounded-xl shadow-glow hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105"
            >
              GARANTIR VAGA
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
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
            {[
              "SouDrop 3.0 na prática: nada de teoria — tela aberta, mão na massa.",
              "Pesquisa de produtos em tempo real: do zero até a lista quente.",
              "Catálogo da SouDrop por dentro: o que vende e por que vende.",
              "Comparativos inteligentes: margem, volume, concorrência.",
              "Ferramenta de IA Precificadora: como definir preços em segundos sem destruir sua margem.",
              "Condição histórica: a melhor oportunidade já liberada pra você entrar na SouDrop."
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-950/20 to-transparent border-l-4 border-destructive rounded-lg hover:from-red-950/30 transition-all duration-300 group"
              >
                <ArrowRight className="w-6 h-6 text-destructive flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <p className="text-lg text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
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
            {[
              {
                icon: <TrendingUp className="w-12 h-12" />,
                text: "Se você já tentou vender online e não conseguiu resultado."
              },
              {
                icon: <Target className="w-12 h-12" />,
                text: "Se você nunca vendeu, mas quer começar de forma simples e segura."
              },
              {
                icon: <Users className="w-12 h-12" />,
                text: "Se você já foi membro da SouDrop, mas não renovou seu acesso."
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-primary" />
                <div className="text-destructive mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provas Sociais Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            O que está acontecendo{" "}
            <span className="text-primary">HOJE</span>{" "}
            dentro da SouDrop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { text: "R$ 150.023,97", subtitle: "em vendas hoje", color: "from-primary/20" },
              { text: "Primeiro mês", subtitle: "e já estou escalando!", color: "from-green-500/20" },
              { text: "R$ 507,55", subtitle: "Tendência de vendas hoje", color: "from-yellow-500/20" },
              { text: "Muita aprendizagem", subtitle: "resultados aparecendo!", color: "from-blue-500/20" },
              { text: "Bati meu recorde!", subtitle: "De R$ 1.500 para muito mais", color: "from-purple-500/20" },
              { text: "10k em meio mês", subtitle: "Com apenas 15 anos", color: "from-pink-500/20" },
              { text: "15 dias de SouDrop", subtitle: "Obrigado por todo suporte!", color: "from-cyan-500/20" },
              { text: "Meu primeiro mês", subtitle: "vendendo com a SouDrop ❤️", color: "from-red-500/20" },
              { text: "2 mil de lucro", subtitle: "Melhor decisão que tomei!", color: "from-primary/20" }
            ].map((proof, index) => (
              <div 
                key={index}
                className={`relative p-6 bg-gradient-to-br ${proof.color} to-black border border-gray-800 rounded-xl hover:border-primary/50 transition-all duration-300 group overflow-hidden min-h-[160px] flex flex-col justify-center`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-2xl font-bold mb-2 text-white">{proof.text}</p>
                  <p className="text-sm text-gray-400">{proof.subtitle}</p>
                  <CheckCircle className="absolute bottom-2 right-2 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-1 bg-gradient-to-r from-primary to-destructive rounded-full">
            <div className="bg-black rounded-full p-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-4xl font-black">
                RF
              </div>
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
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
            Sua melhor compra de Black Friday é um{" "}
            <span className="text-primary">NEGÓCIO</span>{" "}
            que vai pagar todas as suas próximas Blacks!
          </h2>

          <Button 
            size="xl"
            onClick={handleCTAClick}
            className="bg-primary hover:bg-primary-glow text-black font-black text-2xl px-16 py-10 rounded-2xl shadow-glow hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all duration-300 hover:scale-105"
          >
            GARANTIR VAGA
            <ArrowRight className="w-8 h-8 ml-3" />
          </Button>
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
    </div>
  );
};

export default BlackFriday;
