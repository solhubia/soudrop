import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Users, BookOpen, Trophy, TrendingUp, Target, BarChart3, Store, DollarSign, Rocket, ArrowRight, X, AlertTriangle, Package, ShoppingCart, Calculator, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import renanFerreira from "@/assets/renan-ferreira.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
const SoudropStart = () => {
  const navigate = useNavigate();
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
    icon: Target,
    title: "Produtos de alto giro",
    description: "Como escolher produtos de alto giro pra dropshipping, sem depender de achismo ou produto da moda que morre rápido."
  }, {
    icon: Package,
    title: "Fornecedores China e Brasil",
    description: "O passo a passo pra fechar parceria com fornecedores (China e Brasil) de um jeito que você não fique refém de um só."
  }, {
    icon: TrendingUp,
    title: "Estrutura de anúncios",
    description: "Como montar uma estrutura simples de anúncios pra atrair clientes todos os dias, mesmo que você nunca tenha feito tráfego pago."
  }, {
    icon: Calculator,
    title: "Cálculo de preço correto",
    description: "O jeito certo de calcular preço de venda no drop: produto, frete, taxa do gateway/marketplace, imposto e margem — sem descobrir depois que vendeu e tomou prejuízo."
  }, {
    icon: Calendar,
    title: "Primeiros 90 dias",
    description: "Como planejar seus primeiros 90 dias de operação, saindo do zero até caminhar para seus primeiros R$5.000 a R$10.000/mês com dropshipping sem estoque."
  }];
  const forWho = ["Quer entender, de forma séria, como começar nesse mercado", "Já tentou ganhar dinheiro online e está cansado de promessa vazia", "Prefere ouvir a verdade: que existe caminho, mas exige método", "Quer um passo a passo aplicável, e não mais um vídeo motivacional"];
  const heroBenefits = ["Sem comprar estoque antes", "Passo a passo pra iniciantes", "Funciona em marketplaces e loja própria"];
  return <div className="min-h-screen bg-forest-bg-main overflow-x-hidden">
      {/* Hero Section - G4 Style */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020805] via-[#051310] to-[#030907]" />
        
        {/* Subtle radial glow from top-right */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-radial from-forest-green-primary/8 via-transparent to-transparent" />
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-forest-lime/5 blur-[120px]" />
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[90vh]">
            
            {/* LEFT COLUMN - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
              
              {/* Event Tag */}
              <AnimatedSection delay={0}>
                <span className="inline-block text-forest-green-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                  MASTERCLASS GRATUITA • OPERAÇÃO SEM ESTOQUE
                </span>
              </AnimatedSection>
              
              {/* Headline */}
              <AnimatedSection delay={100}>
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-forest-text-primary leading-[1.1] tracking-tight uppercase">
                  <span className="block">Descubra como</span>
                  <span className="block text-forest-text-primary/90">vender todos os dias</span>
                  <span className="block">em dropshipping</span>
                  <span className="block"><span className="text-forest-green-primary">sem estoque</span> e com</span>
                  <span className="block text-forest-lime">margem de verdade</span>
                </h1>
              </AnimatedSection>
              
              {/* Subheadline */}
              <AnimatedSection delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-forest-text-secondary/80 leading-relaxed lg:max-w-[90%]">
                  Uma aula 100% online onde eu vou abrir a <span className="text-forest-green-primary font-medium">Operação Sem Estoque</span>, o método que uso pra montar operações de dropshipping lucrativas com fornecedores da China e do Brasil.
                </p>
              </AnimatedSection>

              {/* Benefits - Horizontal style like G4 */}
              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-0 pt-2">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-forest-green-primary" />
                    <span className="text-sm text-forest-text-primary">Sem comprar estoque antes</span>
                  </div>
                  <span className="hidden sm:block text-forest-text-secondary/30 mx-4">|</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-forest-green-primary" />
                    <span className="text-sm text-forest-text-primary">Passo a passo pra iniciantes</span>
                  </div>
                  <span className="hidden sm:block text-forest-text-secondary/30 mx-4">|</span>
                  <div className="flex items-center gap-2">
                    <Store className="w-5 h-5 text-forest-green-primary" />
                    <span className="text-sm text-forest-text-primary">Funciona em marketplaces e loja própria</span>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* CTA Button */}
              <AnimatedSection delay={400}>
                <div className="pt-4 flex flex-col items-center lg:items-start">
                  <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, hsl(152, 76%, 42%) 0%, hsl(155, 80%, 35%) 100%)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "15px",
                  padding: "18px 48px",
                  boxShadow: "0 0 60px rgba(34, 197, 94, 0.3), 0 8px 30px rgba(0, 0, 0, 0.4)",
                  borderRadius: "50px",
                  whiteSpace: "normal",
                  fontWeight: "600",
                  lineHeight: "1.4",
                  cursor: "pointer",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  wordBreak: "break-word",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.02em"
                }}>
                    Garantir minha vaga gratuita <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                  
                  {/* Urgency text */}
                  <p className="text-xs sm:text-sm text-forest-text-secondary/60 mt-4 flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                      Vagas limitadas
                    </span>
                    <span className="text-forest-text-secondary/40">•</span>
                    <span>A aula pode sair do ar a qualquer momento</span>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN - Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative">
              <AnimatedSection delay={100} className="relative">
                {/* Subtle glow behind photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[400px] h-[550px] sm:w-[500px] sm:h-[680px] lg:w-[550px] lg:h-[720px] bg-gradient-to-t from-forest-green-primary/30 via-forest-green-primary/10 to-transparent rounded-[50%] blur-[100px] transform translate-y-8" />
                </div>
                
                {/* Photo - Large and integrated */}
                <img alt="Renan Ferreira - Especialista em Dropshipping" className="relative z-10 w-[340px] sm:w-[420px] lg:w-[480px] xl:w-[550px] h-auto object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]" src="/lovable-uploads/1385e5eb-b807-4e48-a7ca-fe36bb206c45.jpg" />
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-forest-bg-main via-forest-bg-card to-forest-bg-main">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-forest-primary rounded-2xl blur-xl opacity-20" />
                <img src={renanFerreira} alt="Renan Ferreira" className="relative rounded-xl shadow-2xl w-full border border-forest-border" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="space-y-4 order-1 md:order-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-forest-text-primary">
                Quem está por trás da <span className="bg-gradient-forest-text bg-clip-text text-transparent">Operação Sem Estoque</span>
              </h2>
              
              <p className="text-sm sm:text-base text-forest-text-secondary leading-relaxed">
                Meu nome é <span className="text-forest-green-primary font-semibold">Renan Ferreira</span> e há anos eu vivo de vender produtos sem estoque, usando fornecedores da China e do Brasil. Já quebrei cabeça com frete, taxas, NCM, fornecedores furados e anúncios que não vendiam. Depois de muitos erros, criei uma estrutura clara pra quem quer fazer dropshipping do jeito certo, com margem, fluxo de caixa saudável e operação enxuta.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-green-primary/30">
                    <CheckCircle2 className="h-3 w-3 text-forest-green-primary" />
                  </div>
                  <p className="text-forest-text-primary text-sm">Mais de centenas de produtos testados em dropshipping e importação</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-green-primary/30">
                    <CheckCircle2 className="h-3 w-3 text-forest-green-primary" />
                  </div>
                  <p className="text-forest-text-primary text-sm">Operações rodando em marketplaces e loja própria, sem estoque parado</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-green-primary/30">
                    <CheckCircle2 className="h-3 w-3 text-forest-green-primary" />
                  </div>
                  <p className="text-forest-text-primary text-sm">Já ajudei centenas de pessoas a montarem sua primeira operação de vendas sem estoque</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 bg-forest-bg-card-alt">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-forest-text-primary mb-3">
                Essa aula é <span className="bg-gradient-forest-text bg-clip-text text-transparent">pra você</span>?
              </h2>
              <p className="text-forest-text-secondary text-sm sm:text-base">
                Seja honesto consigo mesmo antes de entrar.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8">
            {forWho.map((item, index) => <AnimatedSection key={index} delay={100 + index * 100}>
                <Card className="bg-forest-bg-card border border-forest-border hover:border-forest-green-primary/50 hover:shadow-forest-glow transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-5 flex items-start gap-3">
                    <div className="w-8 h-8 bg-forest-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-lime/30">
                      <CheckCircle2 className="h-4 w-4 text-forest-lime" />
                    </div>
                    <p className="text-forest-text-primary text-sm sm:text-base leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
          
          <AnimatedSection delay={500}>
            <Card className="bg-red-950/30 border border-red-900/50 max-w-xl mx-auto">
              <CardContent className="p-4 sm:p-5 flex items-center gap-3 justify-center">
                <div className="w-8 h-8 bg-red-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-800/50">
                  <X className="h-4 w-4 text-red-400" />
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
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 bg-forest-bg-main">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-forest-text-primary mb-3">
                O que você vai <span className="bg-gradient-forest-text bg-clip-text text-transparent">aprender nessa masterclass</span>
              </h2>
              <p className="text-forest-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
                Nada de aula motivacional. Você vai sair com um plano claro pra montar ou ajustar sua operação de dropshipping sem estoque.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {deliverables.map((item, index) => <AnimatedSection key={index} delay={100 + index * 80}>
                <Card className="bg-forest-bg-card border border-forest-border hover:border-forest-green-primary/50 hover:shadow-forest-glow transition-all duration-300 group h-full">
                  <CardHeader className="pb-2 p-4 sm:p-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-forest-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <CardTitle className="text-sm sm:text-base text-forest-text-primary font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-4 pb-4 sm:px-5 sm:pb-5">
                    <CardDescription className="text-forest-text-secondary text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>

          {/* CTA after deliverables */}
          <AnimatedSection delay={500}>
            <div className="text-center mt-8 sm:mt-10">
              <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
              border: "none",
              background: "linear-gradient(135deg, hsl(152, 76%, 42%) 0%, hsl(160, 84%, 39%) 100%)",
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              padding: "14px 28px",
              boxShadow: "0 15px 50px rgba(34, 197, 94, 0.35)",
              borderRadius: "12px",
              whiteSpace: "normal",
              fontWeight: "700",
              lineHeight: "1.4",
              cursor: "pointer",
              fontFamily: "system-ui, -apple-system, sans-serif",
              wordBreak: "break-word",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
              maxWidth: "100%"
            }}>
                QUERO PARTICIPAR DA MASTERCLASS <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Escassez + CTA Final */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest-hero" />
        <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-forest-green-primary rounded-full blur-[120px] opacity-15 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-forest-lime rounded-full blur-[120px] opacity-10 animate-pulse" style={{
        animationDelay: '1s'
      }} />

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <AnimatedSection>
              <Card className="bg-yellow-950/30 border border-yellow-700/40 max-w-xl mx-auto mb-6">
                <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-yellow-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-700/50">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                    Para manter a qualidade, as vagas são limitadas. <span className="text-yellow-400 font-medium">As aulas não ficam gravadas.</span>
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-forest-text-primary">GARANTA SUA</span>{" "}
                <span className="bg-gradient-forest-text bg-clip-text text-transparent">VAGA AGORA</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div style={{
              textAlign: "center"
            }}>
                <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
                border: "none",
                background: "linear-gradient(135deg, hsl(152, 76%, 42%) 0%, hsl(160, 84%, 39%) 100%)",
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                padding: "16px 40px",
                boxShadow: "0 15px 50px rgba(34, 197, 94, 0.4)",
                borderRadius: "12px",
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
                  GARANTIR MINHA VAGA GRATUITA <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-2 max-w-md mx-auto">
                <p className="text-xs sm:text-sm text-forest-text-primary flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-green-primary flex-shrink-0" />
                  Aula 100% online e gratuita
                </p>
                <p className="text-xs sm:text-sm text-forest-text-primary flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-green-primary flex-shrink-0" />
                  Conteúdo prático e aplicável
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-bg-card border-t border-forest-border py-6 sm:py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xs text-forest-text-secondary">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
          <p className="text-xs text-forest-text-secondary/70 mt-2">
            Masterclass Operação Sem Estoque - Aprenda a vender sem investir em estoque
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropStart;