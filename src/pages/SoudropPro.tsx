import { CheckCircle2, TrendingUp, BarChart3, Shield, Rocket, Users, Activity, Award, Package, Store, DollarSign, X, AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
const SoudropPro = () => {
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
  const deliverables = [{
    icon: TrendingUp,
    title: "O modelo de dropshipping real",
    description: "O que eu uso hoje para vender todos os dias — sem teoria, só prática."
  }, {
    icon: BarChart3,
    title: "Como escolher produtos certos",
    description: "Produtos com mais chance de girar, sem depender de viral ou sorte."
  }, {
    icon: Shield,
    title: "Fornecedores confiáveis",
    description: "Como encontrar bons fornecedores e fugir de roubada."
  }, {
    icon: Store,
    title: "Operação leve e funcional",
    description: "Como montar uma estrutura que você consegue tocar no dia a dia."
  }, {
    icon: DollarSign,
    title: "Começar com pouco",
    description: "Como iniciar com pouco dinheiro e ir escalando com segurança."
  }, {
    icon: Rocket,
    title: "Sistema de vendas diárias",
    description: "Como ativar o sistema que faz as vendas acontecerem todo dia."
  }];
  const forWho = ["Quer entender, de forma séria, como começar nesse mercado que eu mostro no anúncio", "Já tentou ganhar dinheiro online e está cansado de promessa vazia", "Prefere ouvir a verdade: que existe caminho, mas exige método e execução", "Quer um passo a passo aplicável, e não mais um vídeo motivacional"];
  const behindFormula = ["Como transformar esse método em uma operação que vende todos os dias", "O que você realmente precisa (e o que não precisa) para começar nesse mercado", "Os erros que fazem a maioria desistir antes de enxergar resultado"];
  const testimonials = [{
    name: "Felipe M.",
    text: "Achei que era mais uma promessa. Depois da aula entendi o passo a passo e fiz minhas primeiras vendas."
  }, {
    name: "Amanda S.",
    text: "O Renan mostra o que funciona na prática, sem enrolação. Foi a primeira vez que alguém explicou esse mercado de forma clara pra mim."
  }, {
    name: "Lucas T.",
    text: "Parecia impossível até entender o método. Hoje tenho minha operação rodando diariamente."
  }];
  return <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section - Two Column Layout */}
      <section className="relative w-full overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#030610] to-[#020408]" />
        
        {/* Subtle radial glow from top-right (blue) */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-blue-500/5 blur-[120px]" />
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-end">
            
            {/* LEFT COLUMN - Text Content */}
            <div className="order-1 lg:order-1 text-center lg:text-left space-y-4 lg:space-y-6 pb-8 lg:pb-16">
              
              {/* Event Tag with decorative line */}
              <AnimatedSection delay={0}>
                <div className="space-y-2 lg:space-y-3">
                  <span className="inline-flex items-center gap-2 text-blue-400 text-[9px] sm:text-xs lg:text-sm font-semibold tracking-[0.12em] lg:tracking-[0.2em] uppercase">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    AULA GRATUITA AO VIVO
                  </span>
                  {/* Decorative line */}
                  <div className="flex items-center gap-3 lg:max-w-[280px] justify-center lg:justify-start">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/60 via-blue-400/40 to-transparent max-w-[200px]" />
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Headline - Short, bold, impactful */}
              <AnimatedSection delay={100}>
                {/* Mobile headline */}
                <h1 className="lg:hidden text-[1.5rem] sm:text-[1.75rem] font-black text-white leading-[1.15] tracking-tight">
                  <span className="block"><span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Venda sem estoque</span> e lucre</span>
                  <span className="block">mais de <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">R$10.000 por mês</span></span>
                </h1>
                {/* Desktop headline */}
                <h1 className="hidden lg:block text-[2.75rem] xl:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
                  <span className="block"><span className="text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">Venda sem estoque</span> e lucre mais de</span>
                  <span className="block"><span className="text-green-400 drop-shadow-[0_0_25px_rgba(74,222,128,0.5)]">R$10.000 por mês</span></span>
                </h1>
              </AnimatedSection>
              
              {/* Support paragraph */}
              <AnimatedSection delay={200}>
                <p className="text-[13px] lg:text-lg text-gray-300 leading-relaxed lg:max-w-[85%] max-w-[300px] mx-auto lg:mx-0">
                  Aprenda o método simples que até iniciantes usam para vender online sem investir em estoque e construir uma renda recorrente.
                </p>
              </AnimatedSection>

              {/* Benefits - Only show on desktop */}
              <AnimatedSection delay={300} className="hidden lg:block">
                <div className="flex flex-row items-center gap-0 pt-2">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white font-semibold">Sem comprar estoque</span>
                  </div>
                  <span className="text-gray-600 mx-4">|</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white font-semibold">Passo a passo completo</span>
                  </div>
                  <span className="text-gray-600 mx-4">|</span>
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white font-semibold">Método validado</span>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* CTA Button */}
              <AnimatedSection delay={400}>
                <div className="pt-2 lg:pt-4 flex flex-col items-center lg:items-start">
                  <div className="relative">
                    {/* Glow ring animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full opacity-75 blur-lg animate-pulse" />
                    <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping" style={{
                    animationDuration: '2s'
                  }} />
                    <button type="button" className="wj-embed-button w-full sm:w-auto group relative" data-webinarHash="8wgw0kty" style={{
                    border: "none",
                    background: "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(217, 91%, 50%) 50%, hsl(217, 91%, 45%) 100%)",
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    padding: "16px 36px",
                    boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), 0 0 100px rgba(59, 130, 246, 0.3), 0 8px 30px rgba(0, 0, 0, 0.4)",
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
                      ACESSAR AGORA   <ArrowRight className="inline-block ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </button>
                  </div>
                  
                  {/* Urgency text */}
                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4 flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse" />
                      Aula ao vivo
                    </span>
                    <span className="text-gray-600">·</span>
                    <span>Vagas limitadas</span>
                    <span className="text-gray-600">·</span>
                    <span>Não fica gravada</span>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN - Photo */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end items-end relative">
              <AnimatedSection delay={100} className="relative">
                {/* Strong blue glow behind photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Main glow */}
                  <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/30 rounded-full blur-[100px] lg:blur-[120px]" />
                  {/* Secondary glow for depth */}
                  <div className="absolute w-[200px] h-[250px] sm:w-[280px] sm:h-[350px] lg:w-[350px] lg:h-[450px] bg-blue-400/25 rounded-full blur-[80px] lg:blur-[100px]" />
                </div>
                
                {/* Photo with bottom gradient fade */}
                <div className="relative">
                  <img alt="Renan Ferreira - Especialista em Vendas Online" className="relative z-10 w-[240px] sm:w-[300px] lg:w-[480px] xl:w-[550px] max-h-[300px] lg:max-h-none h-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] lg:drop-shadow-[0_0_60px_rgba(59,130,246,0.5)]" src="/lovable-uploads/674d5177-343a-4997-b33e-139eca71667c.png" />
                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-[#030610] via-[#030610]/60 to-transparent z-20 pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </section>

      {/* O que tem por trás da "fórmula" */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-black to-[#050A18]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                O que tem por trás desse <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">método de vender sem estoque</span>?
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Aqui não tem truque escondido. Por trás desse método existe um modelo de negócio em que você vende produtos pela internet sem precisar ter estoque em casa, usando fornecedores e uma estrutura simples. Na aula, eu vou te mostrar passo a passo COMO aplicar isso do jeito certo, sem ilusão e sem depender de sorte.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-6 sm:pt-8">
              {behindFormula.map((item, index) => <AnimatedSection key={index} delay={200 + index * 100}>
                  <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 transition-all h-full">
                    <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-950/80 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-800/50">
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="text-white text-sm sm:text-base leading-relaxed text-left">{item}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>)}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18]">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Essa aula é <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">pra você</span>?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Seja honesto consigo mesmo antes de entrar.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto mb-6 sm:mb-8">
            {forWho.map((item, index) => <AnimatedSection key={index} delay={100 + index * 100}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 transition-all h-full">
                  <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-700/40">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-white text-sm sm:text-base leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
          
          <AnimatedSection delay={500}>
            <Card className="bg-gradient-to-br from-red-950/40 to-red-950/20 border border-red-900/50 max-w-2xl mx-auto">
              <CardContent className="p-5 sm:p-6 flex items-center gap-4 justify-center">
                <div className="w-10 h-10 bg-red-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-800/50">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <p className="text-red-300 font-medium text-center text-sm sm:text-base">
                  Se você só quer dinheiro rápido e fácil, essa aula NÃO é pra você.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A18] to-black">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                O que você vai <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">aprender na aula</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                O passo a passo real, sem enrolação.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {deliverables.map((item, index) => <AnimatedSection key={index} delay={100 + index * 80}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 transition-all group h-full">
                  <CardHeader className="pb-3 p-5 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-700/50">
                      <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-white font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 sm:px-6 sm:pb-6">
                    <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                O que dizem os <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">alunos</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Resultados reais de pessoas comuns.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((testimonial, index) => <AnimatedSection key={index} delay={100 + index * 100}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-800/50 hover:border-blue-500/60 transition-all h-full">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-full flex items-center justify-center border border-blue-700/60">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-base sm:text-lg">{testimonial.name}</p>
                        <p className="text-blue-400 text-sm">Aluno</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic text-sm sm:text-base">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>

          {/* Escassez */}
          <AnimatedSection delay={400}>
            <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
              <Card className="bg-gradient-to-r from-yellow-950/30 via-yellow-900/20 to-yellow-950/30 border border-yellow-700/40 max-w-2xl mx-auto">
                <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
                  <div className="w-10 h-10 bg-yellow-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-700/50">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
                    Para manter a qualidade, as vagas dessa aula são limitadas. <span className="text-yellow-400 font-medium">As aulas não ficam gravadas.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Autoridade - Renan */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A18] to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-2xl blur-xl opacity-50" />
                <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-2xl shadow-2xl border border-blue-800/50 w-full max-w-[300px] sm:max-w-sm mx-auto lg:max-w-full" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="order-1 lg:order-2">
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Quem vai te ensinar?</h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-400 font-semibold">Renan Ferreira</p>
                </div>
                
                <div className="space-y-4 sm:space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  <p>
                    Testei dezenas de produtos, estratégias e fornecedores. Demorei anos para descobrir o que realmente funciona nesse mercado.
                  </p>
                  <p>
                    Hoje ajudo pessoas comuns a montar operações reais, lucrativas e consistentes.
                  </p>
                  <p className="text-white font-semibold border-l-4 border-blue-500 pl-5 py-2 text-left bg-blue-950/20 rounded-r-lg">
                    Na aula, eu vou te mostrar exatamente o caminho que aplico na prática — sem teorias, sem atalhos falsos e sem fórmulas mágicas.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prova Social - Números */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18]">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[{
              icon: Users,
              value: "+500",
              label: "Alunos ativos"
            }, {
              icon: Activity,
              value: "+1000",
              label: "Operações rodando"
            }, {
              icon: Package,
              value: "+50K",
              label: "Produtos validados"
            }, {
              icon: Award,
              value: "100%",
              label: "Método prático"
            }].map((stat, index) => <Card key={index} className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 transition-all group">
                  <CardContent className="p-4 sm:p-5 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-700/50 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-[#0A1124]/60 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[200px] opacity-10" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Pronto pra ver, de verdade, o que está por trás dessa <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">"fórmula"</span>?
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Clique no botão abaixo, garanta sua vaga e eu vou te mostrar ao vivo como funciona esse mercado e como você pode dar os primeiros passos com segurança.
              </p>

              <div className="pt-4 sm:pt-6 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full opacity-75 blur-lg animate-pulse" />
                  <button type="button" className="wj-embed-button w-full sm:w-auto group relative" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  padding: "18px 40px",
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)",
                  borderRadius: "50px",
                  whiteSpace: "normal",
                  fontWeight: "700",
                  lineHeight: "1.4",
                  cursor: "pointer",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  wordBreak: "break-word",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.02em"
                }}>
                    ACESSAR AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5 flex items-center justify-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Aula ao vivo
                  </span>
                  <span className="text-gray-600">·</span>
                  <span>Vagas limitadas</span>
                  <span className="text-gray-600">·</span>
                  <span>Não fica gravada</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-900/30 text-gray-600 py-6 sm:py-8 lg:py-10 px-5 sm:px-6 md:px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropPro;