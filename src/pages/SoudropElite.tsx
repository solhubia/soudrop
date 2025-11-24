import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Target, TrendingUp, Users, Briefcase, Calculator, GraduationCap, Award, Shield } from "lucide-react";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import soudropLogo from "@/assets/soudrop-logo-oficial.png";

const SoudropElite = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://event.webinarjam.com/register/8wgw0kty/embed-bar?buttonText=Register&buttonBgColor=%23000000&buttonBgOpacity=0.5&barBgColor=%2329b6f6&barBgOpacity=0.95&formTemplate=2&formColor=1';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCTA = () => {
    window.open('https://event.webinarjam.com/register/8wgw0kty', '_blank');
  };
  const pilares = [{
    icon: TrendingUp,
    title: "Como encontrar produtos para vender",
    description: "Aprenda a identificar produtos com demanda, que vendem bem e têm margem de lucro interessante. Sem chute, com método."
  }, {
    icon: Target,
    title: "Onde e como anunciar",
    description: "Domine os principais marketplaces (Mercado Livre, Shopee, etc) e aprenda a criar anúncios que convertem em vendas."
  }, {
    icon: Briefcase,
    title: "Gestão de pedidos sem estoque",
    description: "Entenda como funciona o dropshipping e como gerenciar pedidos sem precisar ter produtos em casa."
  }, {
    icon: Calculator,
    title: "Precificação e lucro real",
    description: "Calcule corretamente seus custos, defina preços competitivos e garanta que você está lucrando de verdade."
  }, {
    icon: Shield,
    title: "Evite os erros mais comuns",
    description: "Produtos proibidos, fornecedores ruins, anúncios bloqueados - aprenda o que NÃO fazer para economizar tempo e dinheiro."
  }, {
    icon: GraduationCap,
    title: "Suporte e comunidade",
    description: "Acesso a materiais de apoio, tirando dúvidas e uma comunidade de pessoas que estão no mesmo caminho que você."
  }];
  const paraQuemE = ["Quer ter uma renda extra trabalhando de casa", "Busca uma fonte de renda principal sem sair de casa", "Não tem capital para investir em estoque", "Quer flexibilidade de horários para trabalhar quando puder", "Tem disposição para aprender algo novo e aplicar"];
  const bonus = [{
    icon: Target,
    title: "Lista de produtos validados",
    description: "Produtos com boa demanda para você começar"
  }, {
    icon: Calculator,
    title: "Planilha de controle financeiro",
    description: "Organize suas vendas e lucros facilmente"
  }, {
    icon: TrendingUp,
    title: "Modelos de anúncios prontos",
    description: "Copie e adapte para seus produtos"
  }, {
    icon: Crown,
    title: "Checklist do iniciante",
    description: "Passo a passo do zero até a primeira venda"
  }];
  return <div className="min-h-screen bg-elite-black text-elite-white">
      {/* Hero Premium */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-elite-bg px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(45_100%_51%_/_0.1),_transparent_50%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            
          </div>
          
          <div className="mb-6 inline-flex items-center gap-2 px-6 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
            <Crown className="w-5 h-5 text-elite-gold" />
            <span className="text-elite-gold text-sm font-medium uppercase tracking-wider">Trabalhe de Casa</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Venda <span className="text-elite-gold">de casa</span>,<br />sem estoque
          </h1>

          <p className="text-xl md:text-2xl text-elite-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aprenda a vender online usando marketplaces
          </p>

          <div className="mb-12">
            <img src={renanPhoto} alt="Renan Ferreira" className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-elite-gold shadow-elite-gold-strong" />
            <p className="mt-4 text-elite-white/60 text-sm">Com Renan Ferreira</p>
          </div>

          <Button onClick={handleCTA} className="bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-lg px-12 py-7 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105">
            COMEÇAR AGORA
          </Button>

          <p className="mt-6 text-elite-white/50 text-sm">
            Renda extra ou principal
          </p>
        </div>
      </section>

      {/* O que é o programa */}
      <section className="py-20 px-6 bg-elite-black border-t border-elite-gold/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Como você vai <span className="text-elite-gold">começar a vender</span>
          </h2>
          <p className="text-xl text-elite-white/70 leading-relaxed max-w-3xl mx-auto">
            Com o método SouDrop, você aprende tudo que precisa para montar sua operação de vendas online,
            mesmo começando do zero. É prático, direto e funciona.
          </p>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-6 bg-gradient-elite-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            É ideal para <span className="text-elite-gold">quem quer:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {paraQuemE.map((item, index) => <div key={index} className="flex items-start gap-4 p-6 bg-elite-black/50 border border-elite-gold/20 rounded-xl hover:border-elite-gold/40 transition-all">
                <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                <p className="text-elite-white/90 text-lg">{item}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pilares do Programa */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            O que você vai <span className="text-elite-gold">aprender</span>
          </h2>
          <p className="text-center text-elite-white/60 mb-16 text-lg">
            Tudo que você precisa para começar a vender online
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return <Card key={index} className="bg-elite-black border-2 border-elite-gold/20 hover:border-elite-gold/50 transition-all hover:shadow-elite-gold">
                  <CardContent className="p-8">
                    <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-elite-gold flex items-center justify-center">
                      <Icon className="w-8 h-8 text-elite-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-elite-white mb-4">{pilar.title}</h3>
                    <p className="text-elite-white/70 leading-relaxed">{pilar.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-16 h-16 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Veja como você pode transformar sua realidade
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-elite-black/50 border border-red-500/30 rounded-xl">
              <p className="text-red-400 font-bold mb-4 text-lg">❌ ANTES</p>
              <ul className="space-y-3 text-elite-white/70">
                <li>• Sem renda extra</li>
                <li>• Preso ao escritório ou emprego</li>
                <li>• Sem flexibilidade de horários</li>
                <li>• Dependendo de um salário fixo</li>
                <li>• Sem controle da própria agenda</li>
              </ul>
            </div>
            <div className="p-8 bg-elite-gold/10 border border-elite-gold/50 rounded-xl">
              <p className="text-elite-gold font-bold mb-4 text-lg">✓ DEPOIS</p>
              <ul className="space-y-3 text-elite-white/90">
                <li>• Vendendo de casa</li>
                <li>• Trabalhando no seu horário</li>
                <li>• Renda extra ou principal</li>
                <li>• Sem precisar de estoque</li>
                <li>• Mais liberdade e flexibilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção do Mentor */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={renanPhoto} alt="Renan Ferreira" className="w-full rounded-2xl border-4 border-elite-gold/30 shadow-elite-gold" />
            </div>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
                <Crown className="w-4 h-4 text-elite-gold" />
                <span className="text-elite-gold text-sm font-medium uppercase tracking-wider">Seu Instrutor</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Renan Ferreira
              </h2>
              <p className="text-xl text-elite-gold mb-6 font-semibold">
                Especialista em Vendas Online e Marketplaces
              </p>
              
              <div className="space-y-4 text-elite-white/80 leading-relaxed">
                <p>
                  Anos de experiência com <span className="text-elite-gold font-semibold">vendas em marketplaces</span> e 
                  operação prática nos principais canais: Mercado Livre, Shopee, Amazon e Magalu.
                </p>
                <p>
                  Também trabalho com <span className="text-elite-gold font-semibold">importação direta da China</span>, 
                  o que me dá uma visão completa de toda a cadeia.
                </p>
                <p className="text-elite-white font-semibold text-lg">
                  Meu objetivo é ensinar você do jeito mais prático possível:
                </p>
                <p>
                  Sem enrolação, sem teoria demais. Foco em fazer você começar a vender de verdade, 
                  <span className="text-elite-gold font-semibold"> aplicando o que funciona na prática</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso Exclusivo */}
      <section className="py-20 px-6 bg-gradient-elite-bg">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Método <span className="text-elite-gold">Validado</span>
          </h2>
          <div className="space-y-4 text-xl text-elite-white/70 leading-relaxed">
            <p>Método testado e comprovado</p>
            <p>Foco em resultados práticos</p>
            <p className="text-elite-gold font-semibold">
              Aprenda com quem já vendeu e continua vendendo todos os dias
            </p>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-elite-gold/10 border-2 border-elite-gold rounded-xl">
            <Crown className="w-8 h-8 text-elite-gold" />
            <span className="text-elite-gold font-bold text-xl uppercase tracking-wide">Acesso Completo</span>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Bônus <span className="text-elite-gold">Inclusos</span>
          </h2>
          <p className="text-center text-elite-white/60 mb-16 text-lg">
            Materiais práticos para você começar mais rápido
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonus.map((item, index) => {
            const Icon = item.icon;
            return <Card key={index} className="bg-gradient-elite-gold border-0 text-elite-black hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 w-14 h-14 rounded-full bg-elite-black/10 flex items-center justify-center mx-auto">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-elite-black/70">{item.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Posicionamento / Prova */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Por que confiar no <span className="text-elite-gold">Método</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <Users className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">500+</p>
              <p className="text-elite-white/60">Alunos Ativos</p>
            </div>
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <TrendingUp className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">5+ Anos</p>
              <p className="text-elite-white/60">de Experiência Prática</p>
            </div>
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <Award className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">100%</p>
              <p className="text-elite-white/60">Foco em Prática</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comece Seu <span className="text-elite-gold">Negócio Online</span>
            </h2>
            <p className="text-xl text-elite-white/60">
              Tudo que você precisa para vender de casa
            </p>
          </div>

          <Card className="bg-gradient-elite-bg border-4 border-elite-gold/50 shadow-elite-gold-strong">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-elite-gold/10 border border-elite-gold/30 rounded-full mb-6">
                  <Crown className="w-5 h-5 text-elite-gold" />
                  <span className="text-elite-gold font-bold uppercase tracking-wider">Trabalhe de Casa</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-8">
                  Aprenda a vender online<br />
                  <span className="text-elite-gold">sem estoque e sem complicação</span>
                </h3>

                <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Método completo para iniciantes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">6 módulos de conteúdo prático</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Bônus e materiais inclusos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Suporte e comunidade exclusiva</p>
                  </div>
                </div>

                <Button onClick={handleCTA} className="w-full bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-xl px-12 py-8 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105">
                  COMEÇAR AGORA
                </Button>

                <p className="mt-6 text-elite-white/50 text-sm">
                  🔒 Pagamento 100% Seguro
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-t border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-20 h-20 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Está Pronto para Começar?
          </h2>
          <p className="text-2xl text-elite-white/80 mb-8 leading-relaxed">
            Comece hoje a construir sua <span className="text-elite-gold font-bold">renda extra ou principal</span>
          </p>
          <p className="text-xl text-elite-white/60 mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que estão aprendendo a vender online de casa,
            sem estoque e com método validado.
          </p>
          
          <Button onClick={handleCTA} className="bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-xl px-16 py-8 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105">
            COMEÇAR AGORA
          </Button>

          <p className="mt-8 text-elite-gold font-semibold text-lg">
            ⚡ Comece hoje mesmo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-elite-black border-t border-elite-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-elite-white/40 text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropElite;