import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Target, TrendingUp, Users, Briefcase, Calculator, GraduationCap, Award, Shield, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import soudropCreatorsBrasil from "@/assets/soudrop-creators-brasil.png";
import { AnimatedSection } from "@/components/AnimatedSection";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/fbq";
const SoudropElite = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [hasTrackedScroll25, setHasTrackedScroll25] = useState(false);
  const [hasTrackedTime30, setHasTrackedTime30] = useState(false);

  // WebinarJam form injection
  useEffect(() => {
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'wj-embed-wrapper';
      wrapper.setAttribute('data-webinar-hash', '8wgw0kty');
      const script = document.createElement('script');
      script.src = 'https://event.webinarjam.com/register/8wgw0kty/embed-form?formButtonText=Register&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1';
      script.async = true;
      wrapper.appendChild(script);
      formContainerRef.current.appendChild(wrapper);
    }
  }, []);

  // Scroll Depth tracking - 25%
  useEffect(() => {
    const handleScroll = () => {
      if (hasTrackedScroll25) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight * 100;
      if (scrollPercent >= 25) {
        trackScrollDepth("soudrop", 25);
        setHasTrackedScroll25(true);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTrackedScroll25]);

  // Time on Page tracking - 30 seconds
  useEffect(() => {
    if (hasTrackedTime30) return;
    const timer = setTimeout(() => {
      trackTimeOnPage("soudrop", 30);
      setHasTrackedTime30(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, [hasTrackedTime30]);
  const pilares = [{
    icon: TrendingUp,
    title: "Produtos simples que vendem todo dia: como encontrar e validar",
    description: "Você vai aprender na prática como identificar produtos com demanda real, boa margem de lucro e baixo risco — com método, sem achismo."
  }, {
    icon: Target,
    title: "Anúncios que saem do zero: onde anunciar e como montar anúncios que convertem",
    description: "Vou te mostrar como usar os principais marketplaces (Mercado Livre, Shopee, Magalu) e montar anúncios que se destacam e geram vendas."
  }, {
    icon: Briefcase,
    title: "Como organizar pedidos e entregas sem ter estoque em casa, sem virar bagunça",
    description: "Você vai entender passo a passo como funciona o modelo sem estoque e como organizar os pedidos do cliente até a entrega, sem complicação."
  }, {
    icon: Calculator,
    title: "Precificação com lucro real: como montar preços sem trabalhar no prejuízo",
    description: "Na tela, vamos calcular juntos custos, taxas, frete e comissões para você enxergar o lucro limpo de cada venda antes de anunciar."
  }, {
    icon: Shield,
    title: "Os erros que fazem iniciante perder dinheiro e como evitar cada um deles",
    description: "Produtos proibidos, fornecedores ruins, anúncios bloqueados e decisões erradas de preço — o que você nunca deve fazer se quiser economizar tempo e dinheiro."
  }, {
    icon: GraduationCap,
    title: "Plano de ação, suporte e comunidade pra você não caminhar sozinho",
    description: "Você sai da MasterClass com um passo a passo claro para aplicar o que aprendeu e acesso a materiais de apoio para não caminhar sozinho."
  }];
  const paraQuemE = ["Trabalha registrado ou como autônomo e quer montar uma renda extra pela internet.", "Já pensou em vender na Shopee, Mercado Livre ou Magalu, mas não sabe por onde começar.", "Não tem dinheiro pra comprar estoque e tem medo de ficar com produto parado.", "Quer trabalhar de casa, usando apenas celular ou computador.", "Está disposto a aprender algo novo e aplicar ainda esse mês."];
  const bulletPoints = ["Como escolher produtos simples que têm demanda real e não ficam encalhados.", "Como anunciar nos marketplaces mesmo sem ter experiência com tráfego hoje.", "O passo a passo do modelo sem estoque que usamos todos os dias na SouDrop."];
  return <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section - Two Column Layout */}
      <section className="hero-soudrop-elite relative z-10 w-full overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0600] to-[#050300]" />
        
        {/* Subtle radial glow from top-right (gold) */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-radial from-elite-gold/8 via-transparent to-transparent" />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-[#050A00] to-transparent z-20 pointer-events-none" />
        
        {/* Content container */}
        <div className="hero-content-wrapper relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          
          {/* LEFT COLUMN - Text + Form in Dark Card */}
          <div className="hero-left">
            <AnimatedSection delay={0}>
              <div className="hero-card-desktop">
                <div className="hero-copy">
                  {/* Logo/Title */}
                  <div className="mb-5 lg:mb-6">
                    <span className="inline-block px-3 py-1 bg-elite-gold/20 border border-elite-gold/40 rounded-md text-elite-gold text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                      MASTERCLASS
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                      A FÓRMULA DA<br className="hidden sm:block" /> LIBERDADE
                    </h2>
                  </div>
                  
                  {/* Headline - H1 */}
                  <h1 className="text-xl sm:text-2xl lg:text-[1.75rem] xl:text-[2rem] font-black leading-[1.15] tracking-tight mb-4 lg:mb-5">
                    <span className="text-white block">Comece a vender em marketplaces</span>
                    <span className="text-white block">sem estoque e busque seus primeiros</span>
                    <span className="text-elite-gold drop-shadow-[0_0_25px_rgba(251,191,36,0.5)] block">R$ 10.000 por mês</span>
                  </h1>
                  
                  {/* Supporting text */}
                  <p className="text-gray-300 text-sm sm:text-base mb-0 lg:mb-0">
                    Aula 100% online e gratuita. Escolha o melhor horário e receba o link no seu e-mail e WhatsApp.
                  </p>
                </div>
                
                {/* WebinarJam Form */}
                <div className="hero-form-wrapper">
                  <div ref={formContainerRef} className="min-h-[200px]" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN - Renan Photo */}
          <div className="hero-right">
            <AnimatedSection delay={100} className="relative flex items-center lg:items-end lg:h-full w-full">
              {/* Soft gold glow behind photo - more natural gradient */}
              <div className="absolute inset-0 flex items-center lg:items-end justify-center pointer-events-none lg:pb-20">
                <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[550px] lg:h-[550px] bg-elite-gold/20 rounded-full blur-[100px] lg:blur-[150px]" />
                <div className="absolute w-[180px] h-[240px] sm:w-[260px] sm:h-[340px] lg:w-[400px] lg:h-[500px] bg-yellow-400/15 rounded-full blur-[80px] lg:blur-[120px]" />
              </div>
              
              <div className="renan-hero-wrapper">
                <img alt="Renan Ferreira - Especialista em Vendas Online" className="block relative z-10 h-auto object-contain drop-shadow-[0_0_40px_rgba(251,191,36,0.35)]" src="/lovable-uploads/4c9983ef-7913-4025-8e00-1dccec71e708.png" loading="eager" />
              </div>
            </AnimatedSection>
          </div>
            
        </div>
        
        {/* Logo Creators SouDrop Brasil - Top Right */}
        <img 
          src={soudropCreatorsBrasil} 
          alt="Creators SouDrop Brasil" 
          className="absolute top-4 right-4 lg:top-6 lg:right-6 w-[140px] lg:w-[220px] max-w-[260px] opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] pointer-events-none z-30"
        />
      </section>

      {/* O que você vai ver neste evento - NEW SECTION */}
      

      {/* O que é a aula */}
      <section className="second-section-soudrop relative z-20 px-5 sm:px-6 md:px-4 bg-[#050A00]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs sm:text-sm text-elite-gold/80 mb-3 sm:mb-4">
              Você vai receber o link do evento no seu e-mail e WhatsApp.
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              O que você vai <span className="text-elite-gold">aprender?  </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Na aula ao vivo, vou te mostrar como sair do zero e montar uma operação simples de vendas em marketplaces, mesmo que hoje você não saiba por onde começar, tenha medo de investir em estoque ou já tenha tentado vender online e travou em produto, anúncio ou frete.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A00]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
              Esse evento é <span className="text-elite-gold">pra você que:</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {paraQuemE.map((item, index) => <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-black/50 border border-elite-gold/20 rounded-xl hover:border-elite-gold/40 transition-all">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg">{item}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Conteúdo da Aula */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A00] to-black">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center text-white">
              O que você vai ver <span className="text-elite-gold">nessa MasterClass:</span>
            </h2>
            <p className="text-center text-gray-400 mb-10 sm:mb-14 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              A estratégia completa para faturar todos os dias com produtos simples nos marketplaces.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return <AnimatedSection key={index} delay={index * 100}>
                  <Card className="bg-gradient-to-br from-[#0A0800]/90 to-[#0A0800]/60 border border-elite-gold/20 hover:border-elite-gold/50 transition-all h-full">
                    <CardContent className="p-5 sm:p-6 lg:p-8">
                      <div className="mb-4 sm:mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-elite-gold to-yellow-600 flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">{pilar.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{pilar.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>;
          })}
          </div>
        </div>
      </section>

      {/* Transformação */}
      

      {/* Seção do Mentor */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-elite-gold/30 to-yellow-600/20 rounded-2xl blur-xl opacity-50" />
                <img src={renanPhoto} alt="Renan Ferreira" className="relative w-full rounded-2xl border-4 border-elite-gold/30 shadow-[0_0_40px_rgba(251,191,36,0.2)]" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="order-1 md:order-2">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-4 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
                <Crown className="w-4 h-4 text-elite-gold" />
                <span className="text-elite-gold text-xs sm:text-sm font-medium uppercase tracking-wider">Seu Instrutor</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Renan Ferreira
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-elite-gold mb-4 sm:mb-6 font-semibold">
                Especialista em Vendas Online e Marketplaces
              </p>
              
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Anos de experiência vendendo em <span className="text-elite-gold font-semibold">Mercado Livre, Shopee, Amazon e Magalu</span>, além de operação com importação direta da China.
                </p>
                <p>
                  Meu foco é te ensinar de forma prática, <span className="text-elite-gold font-semibold">sem promessas milagrosas</span>, mostrando o que realmente funciona na vida real.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Acesso Exclusivo */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A00]">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              O que está acontecendo <span className="text-elite-gold">HOJE</span> na SouDrop
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10">
              Resultados reais de operações que aplicam o mesmo método que você vai conhecer na aula.
            </p>
            
            {/* Prints de Resultados com Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
              {/* Card 1 - Imagem + Depoimento */}
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30">
                <img alt="Print de resultado 1" className="w-full h-48 sm:h-56 lg:h-64 object-cover" src="/lovable-uploads/6362dee9-25a7-4708-a7ce-924ddbf16d89.jpg" />
                <div className="p-4 sm:p-5 text-left">
                  <p className="text-gray-300 text-sm sm:text-base italic mb-3">"Eu não tinha dinheiro pra estoque. Comecei com o método sem estoque e em 3 meses bati mais de R$ 7.000 em vendas."</p>
                  <p className="text-elite-gold font-semibold text-sm">— João P.</p>
                </div>
              </div>
              
              {/* Card 2 - Imagem + Depoimento */}
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30">
                <img alt="Print de resultado 2" src="/lovable-uploads/888fc9cb-6f97-41c8-b7e7-87dc12f0e926.jpg" className="w-full h-48 sm:h-56 lg:h-64 object-fill" />
                <div className="p-4 sm:p-5 text-left">
                  <p className="text-gray-300 text-sm sm:text-base italic mb-3">"Já tinha tentado vender sozinho e nada andava. Depois da aula e do método, tive meus primeiros pedidos em menos de 30 dias."</p>
                  <p className="text-elite-gold font-semibold text-sm">— Mariana S.</p>
                </div>
              </div>
              
              {/* Card 3 - Imagem + Depoimento */}
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30 md:col-span-2 lg:col-span-1 md:max-w-[50%] md:mx-auto lg:max-w-full">
                <img alt="Print de resultado 3" className="w-full h-48 sm:h-56 lg:h-64 object-cover" src="/lovable-uploads/3442ca16-45c6-4389-95df-18daca740672.jpg" />
                <div className="p-4 sm:p-5 text-left">
                  <p className="text-gray-300 text-sm sm:text-base italic mb-3">"O passo a passo é direto ao ponto. Consegui aplicar tudo e hoje já tenho uma renda extra todo mês."</p>
                  <p className="text-elite-gold font-semibold text-sm">— Carlos M.</p>
                </div>
              </div>
            </div>

            <p className="text-elite-gold font-semibold text-sm sm:text-base lg:text-xl mb-8 sm:mb-10">
              Aprenda com quem já vende e continua vendendo todos os dias em marketplaces, usando produtos simples e o modelo sem estoque.
            </p>
            
          </AnimatedSection>
        </div>
      </section>

      {/* Posicionamento / Prova */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A00] to-black border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">
              Por que confiar no <span className="text-elite-gold">Método</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              Por trás desse método existe uma operação real em marketplaces, com mais de 5 anos de jogo e centenas de alunos aplicando no dia a dia. Não é teoria de quem só vive de curso, é o mesmo modelo que usamos na SouDrop pra vender produtos simples todos os dias.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
            <AnimatedSection delay={100}>
              <div className="p-5 sm:p-6 lg:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
                <Users className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-elite-gold mb-2">500+</p>
                <p className="text-gray-400 text-sm sm:text-base">Alunos Ativos</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-5 sm:p-6 lg:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
                <TrendingUp className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-elite-gold mb-2">5+ Anos</p>
                <p className="text-gray-400 text-sm sm:text-base">de Experiência Prática</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="p-5 sm:p-6 lg:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
                <Award className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-elite-gold mb-2">100%</p>
                <p className="text-gray-400 text-sm sm:text-base">Foco em Prática</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                Se você leu até aqui, <span className="text-elite-gold">o próximo passo é simples:</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
                Clique no botão abaixo, escolha o melhor horário e receba o link da aula no seu e-mail e WhatsApp. A aula é 100% online, gratuita e não fica disponível depois. É a oportunidade de ver o método completo e decidir se faz sentido pra você.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Card className="bg-gradient-to-br from-[#0A0800]/90 to-[#0A0800]/60 border-2 border-elite-gold/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">
                    Complete sua inscrição em menos de 30 segundos
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
                    Escolha a data, confirme seus dados e clique no botão para garantir seu acesso à aula gratuita. Se você mora no Brasil, pode deixar o fuso horário como está.
                  </p>

                  <div style={{
                  textAlign: 'center'
                }}>
                    <button type="button" className="wj-embed-button w-full sm:w-auto" data-webinarHash="8wgw0kty" style={{
                    border: "none",
                    background: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
                    color: "rgb(0, 0, 0)",
                    fontSize: "16px",
                    padding: "18px 32px",
                    boxShadow: "0 15px 50px rgba(251, 191, 36, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.2)",
                    borderRadius: "50px",
                    whiteSpace: "normal",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    cursor: "pointer",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    wordBreak: "break-word",
                    margin: "auto",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                    maxWidth: "100%"
                  }}>
                      QUERO PARTICIPAR DA AULA GRATUITA <ArrowRight className="inline-block ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <p className="mt-4 sm:mt-5 text-gray-500 text-xs sm:text-sm">
                    Leva menos de 30 segundos pra fazer a inscrição.
                  </p>
                  <p className="mt-3 text-gray-600 text-[10px] sm:text-xs">
                    🔒 Seus dados estão seguros. Nada de spam – você pode sair da lista quando quiser.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 lg:py-12 px-5 sm:px-6 md:px-4 bg-black border-t border-elite-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropElite;