import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Target, TrendingUp, Users, Briefcase, Calculator, GraduationCap, Award, Shield, ArrowRight, Package, Store } from "lucide-react";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownBanner } from "@/components/CountdownBanner";
const OFFER_END_DATE = new Date("2025-12-15T23:59:59");
const SoudropElite = () => {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.src = 'https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register';
    embedScript.async = true;
    document.body.appendChild(embedScript);
    return () => {
      if (document.body.contains(embedScript)) {
        document.body.removeChild(embedScript);
      }
    };
  }, []);
  const pilares = [{
    icon: TrendingUp,
    title: "Como encontrar produtos simples que vendem todo dia",
    description: "Você vai ver na prática como identificar produtos com demanda real, boa margem de lucro e baixo risco. Sem chute, com método."
  }, {
    icon: Target,
    title: "Onde e como anunciar para vender mais rápido",
    description: "Vou te mostrar como usar os principais marketplaces (Mercado Livre, Shopee, etc.) e montar anúncios que se destacam e convertem em vendas."
  }, {
    icon: Briefcase,
    title: "Gestão de pedidos sem ter estoque em casa",
    description: "Você vai entender, passo a passo, como funciona o modelo sem estoque e como organizar os pedidos do cliente até a entrega, sem bagunça."
  }, {
    icon: Calculator,
    title: "Precificação com lucro real, não no achismo",
    description: "Na tela, vamos calcular juntos custos, taxas, frete e comissões para você enxergar o lucro limpo de cada venda antes mesmo de anunciar."
  }, {
    icon: Shield,
    title: "Os erros que mais fazem iniciante perder dinheiro",
    description: "Produtos proibidos, fornecedores ruins, anúncios bloqueados e decisões erradas de preço – o que você NUNCA deve fazer se quiser economizar tempo e grana."
  }, {
    icon: GraduationCap,
    title: "Plano de ação, suporte e comunidade",
    description: "Você sai da MasterClass com um passo a passo claro para aplicar o que aprendeu e acesso a materiais de apoio e comunidade para não caminhar sozinho."
  }];
  const paraQuemE = ["Quer ter uma renda extra trabalhando de casa", "Busca uma fonte de renda principal sem sair de casa", "Não tem capital para investir em estoque", "Quer flexibilidade de horários para trabalhar quando puder", "Tem disposição para aprender algo novo e aplicar"];
  return <div className="min-h-screen bg-black overflow-x-hidden">
      <CountdownBanner offerName="Oferta Especial" endDate={OFFER_END_DATE} variant="gold" />
      {/* Spacer for fixed banner */}
      <div className="h-[72px] sm:h-[56px]" />
      {/* Hero Section - Background Image Layout */}
      <section 
        className="relative z-10 w-full min-h-[600px] sm:min-h-[650px] lg:min-h-[700px]"
        style={{
          backgroundImage: `url('/lovable-uploads/4c9983ef-7913-4025-8e00-1dccec71e708.png')`,
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 70%',
        }}
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0600] to-[#050300]" style={{ zIndex: -2 }} />
        
        {/* Gradient overlay for text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent lg:via-black/70 lg:to-transparent" style={{ zIndex: -1 }} />
        
        {/* Subtle radial glow from top-right (gold) */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-radial from-elite-gold/8 via-transparent to-transparent" />
        
        {/* Gold glow behind photo area */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-elite-gold/20 blur-[120px] pointer-events-none" />
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6">
              
              {/* Event Tag with decorative line */}
              <AnimatedSection delay={0}>
                <div className="space-y-2 lg:space-y-3">
                  <span className="inline-flex items-center gap-2 text-elite-gold text-[9px] sm:text-xs lg:text-sm font-semibold tracking-[0.12em] lg:tracking-[0.2em] uppercase">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    MÉTODO SEM ESTOQUE · AULA AO VIVO
                  </span>
                  {/* Decorative line */}
                  <div className="flex items-center gap-3 lg:max-w-[280px] justify-center lg:justify-start">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-elite-gold/60 via-elite-gold-light/40 to-transparent max-w-[200px]" />
                    <div className="w-1.5 h-1.5 bg-elite-gold rounded-full" />
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Headline - H1 */}
              <AnimatedSection delay={100}>
                {/* Mobile headline */}
                <h1 className="lg:hidden text-[1.5rem] sm:text-2xl font-black text-white leading-[1.15] tracking-tight">
                  <span className="block">Venda sem estoque e faça</span>
                  <span className="block">seus primeiros <span className="text-elite-gold drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]">R$ 10.000 por mês</span></span>
                </h1>
                {/* Desktop headline */}
                <h1 className="hidden lg:block text-[2.8rem] xl:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight">
                  <span className="block">Venda sem estoque e faça</span>
                  <span className="block">seus primeiros <span className="text-elite-gold drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">R$ 10.000 por mês</span></span>
                </h1>
              </AnimatedSection>
              
              {/* Subtitle */}
              <AnimatedSection delay={150}>
                <p className="text-[13px] sm:text-sm lg:text-lg text-gray-200 leading-relaxed lg:max-w-[90%] max-w-[320px] mx-auto lg:mx-0">
                  Masterclass gratuita onde eu te mostro como vender produtos físicos em marketplaces sem investir em estoque.
                </p>
              </AnimatedSection>
              

              {/* Benefits block */}
              <AnimatedSection delay={250}>
                <div className="pt-2 lg:pt-3">
                  <p className="text-[12px] sm:text-sm lg:text-base text-elite-gold font-semibold mb-2 lg:mb-3">
                    Nessa aula você vai ver:
                  </p>
                  <ul className="space-y-1.5 lg:space-y-2 text-[11px] sm:text-xs lg:text-sm text-gray-300 lg:max-w-[90%]">
                    <li className="flex items-start gap-2">
                      <Check className="w-3 h-3 lg:w-4 lg:h-4 text-elite-gold flex-shrink-0 mt-0.5" />
                      <span>Quais produtos escolher pra começar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3 h-3 lg:w-4 lg:h-4 text-elite-gold flex-shrink-0 mt-0.5" />
                      <span>Como vender em Shopee, Mercado Livre, Magalu etc. sem estoque próprio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3 h-3 lg:w-4 lg:h-4 text-elite-gold flex-shrink-0 mt-0.5" />
                      <span>Um plano simples pra chegar nos seus primeiros R$ 10.000 por mês.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              
              {/* CTA Button */}
              <AnimatedSection delay={400}>
                <div className="pt-2 lg:pt-4 flex flex-col items-center lg:items-start">
                  <div className="relative">
                    {/* Glow ring animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-green-400 to-green-500 rounded-full opacity-75 blur-lg animate-pulse" />
                    <div className="absolute -inset-2 bg-green-500/30 rounded-full animate-ping" style={{
                    animationDuration: '2s'
                  }} />
                    <button type="button" className="wj-embed-button w-full sm:w-auto group relative" data-webinarHash="8wgw0kty" style={{
                    border: "none",
                    background: "linear-gradient(135deg, hsl(142, 76%, 45%) 0%, hsl(142, 76%, 40%) 50%, hsl(142, 76%, 35%) 100%)",
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    padding: "16px 36px",
                    boxShadow: "0 0 60px rgba(34, 197, 94, 0.5), 0 0 100px rgba(34, 197, 94, 0.3), 0 8px 30px rgba(0, 0, 0, 0.4)",
                    borderRadius: "50px",
                    whiteSpace: "normal",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    cursor: "pointer",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    wordBreak: "break-word",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                  }}>
                      ​GARANTA A SUA VAGA EXCLUSIVA           <ArrowRight className="inline-block ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </button>
                  </div>
                  
                  {/* Urgency text */}
                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4 flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse" />
                      Método ao vivo
                    </span>
                    <span className="text-gray-600">·</span>
                    <span>Vagas limitadas</span>
                    <span className="text-gray-600">·</span>
                    <span>Não fica disponível depois</span>
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </section>

      {/* O que é a aula */}
      <section className="relative z-20 pt-10 pb-12 sm:pt-10 sm:pb-16 lg:pt-20 lg:pb-20 px-5 sm:px-6 md:px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              O que você vai <span className="text-elite-gold">aprender na aula</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Na aula ao vivo, vou te mostrar exatamente como transformar produtos simples em uma operação lucrativa.
              Sem enrolação, sem teoria — só o que funciona na prática.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A00]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
              Essa aula é para <span className="text-elite-gold">quem quer:</span>
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
                  Anos de experiência com <span className="text-elite-gold font-semibold">vendas em marketplaces</span> e 
                  operação prática nos principais canais: Mercado Livre, Shopee, Amazon e Magalu.
                </p>
                <p>
                  Também trabalho com <span className="text-elite-gold font-semibold">importação direta da China</span>, 
                  o que me dá uma visão completa de toda a cadeia.
                </p>
                <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                  Meu objetivo é ensinar você do jeito mais prático possível:
                </p>
                <p>
                  Sem enrolação, sem teoria demais. Foco em fazer você começar a vender de verdade, 
                  <span className="text-elite-gold font-semibold"> aplicando o que funciona na prática</span>.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-white">
              O que está acontecendo <span className="text-elite-gold">HOJE</span> na SouDrop
            </h2>
            
            {/* Prints de Resultados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30">
                <img alt="Print de resultado 1" className="w-full h-48 sm:h-56 lg:h-64 object-cover" src="/lovable-uploads/6362dee9-25a7-4708-a7ce-924ddbf16d89.jpg" />
              </div>
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30">
                <img alt="Print de resultado 2" src="/lovable-uploads/888fc9cb-6f97-41c8-b7e7-87dc12f0e926.jpg" className="w-full h-48 sm:h-56 lg:h-64 object-fill" />
              </div>
              <div className="border-2 border-elite-gold/40 rounded-xl overflow-hidden bg-black/30 md:col-span-2 lg:col-span-1 md:max-w-[50%] md:mx-auto lg:max-w-full">
                <img alt="Print de resultado 3" className="w-full h-48 sm:h-56 lg:h-64 object-cover" src="/lovable-uploads/3442ca16-45c6-4389-95df-18daca740672.jpg" />
              </div>
            </div>

            <p className="text-elite-gold font-semibold text-sm sm:text-base lg:text-xl mb-8 sm:mb-10">
              Aprenda com quem já vendeu e continua vendendo todos os dias
            </p>
            
            
          </AnimatedSection>
        </div>
      </section>

      {/* Posicionamento / Prova */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A00] to-black border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12 text-white">
              Por que confiar no <span className="text-elite-gold">Método</span>
            </h2>
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
                Garanta Sua Vaga <span className="text-elite-gold">Na Aula</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-gray-400">
                Aula gratuita e ao vivo — vagas limitadas
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Card className="bg-gradient-to-br from-[#0A0800]/90 to-[#0A0800]/60 border-2 border-elite-gold/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-elite-gold/10 border border-elite-gold/30 rounded-full mb-4 sm:mb-6">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-elite-gold" />
                    <span className="text-elite-gold font-bold text-xs sm:text-sm uppercase tracking-wider">Método Sem Estoque</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-white">
                    Descubra como faturar alto<br />
                    <span className="text-elite-gold">vendendo produtos simples</span>
                  </h3>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm sm:text-base">Aula 100% gratuita e ao vivo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm sm:text-base">Estratégia completa revelada</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm sm:text-base">Materiais bônus durante a aula</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm sm:text-base">Tire suas dúvidas em tempo real</p>
                    </div>
                  </div>

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
                      GARANTIR MINHA VAGA AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <p className="mt-5 sm:mt-6 text-gray-500 text-xs sm:text-sm">
                    • Método ao vivo · Vagas limitadas · Não fica disponível depois
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