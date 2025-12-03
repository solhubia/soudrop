import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Users, BookOpen, Trophy, TrendingUp, Target, BarChart3, Store, DollarSign, Rocket, ArrowRight, X, AlertTriangle } from "lucide-react";
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
  const forWho = ["Quer entender, de forma séria, como começar nesse mercado", "Já tentou ganhar dinheiro online e está cansado de promessa vazia", "Prefere ouvir a verdade: que existe caminho, mas exige método", "Quer um passo a passo aplicável, e não mais um vídeo motivacional"];
  const behindMethod = ["Como transformar esse método em uma operação que vende todos os dias", "O que você realmente precisa (e o que não precisa) para começar", "Os erros que fazem a maioria desistir antes de ver resultado"];
  return <div className="min-h-screen bg-forest-bg-main overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-forest-hero" />
        <div className="absolute top-20 left-10 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-forest-green-primary rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-pulse" style={{
        animationDuration: '4s'
      }} />
        <div className="absolute bottom-20 right-10 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-forest-lime rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{
        animationDuration: '6s'
      }} />
        
        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <AnimatedSection delay={0}>
            <Card className="bg-forest-bg-card/80 backdrop-blur-md border border-forest-border/50 shadow-2xl shadow-forest-green-primary/10 rounded-2xl">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 text-center space-y-5 sm:space-y-6">
                <div className="inline-block">
                  <span className="px-4 md:px-6 py-2 md:py-2.5 bg-forest-bg-main/50 text-forest-green-primary rounded-full text-xs md:text-sm font-semibold border border-forest-green-primary/30 tracking-wider uppercase backdrop-blur-sm">
                    🔴 Aula Gratuita Ao Vivo
                  </span>
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-forest-text-primary leading-[1.25] tracking-tight">
                  descubra como <span className="bg-gradient-forest-text bg-clip-text text-transparent">vender sem estoque</span> no método que fazem até iniciantes{" "}
                  <span className="text-forest-lime">ganharem mais de 10 mil reais por mês</span>{" "}
                  e viajar onde quiser com uma operação que trabalha sozinha{" "}
                  <span className="bg-gradient-forest-text bg-clip-text text-transparent">sem investir em estoque</span>
                </h1>
                
                

                <p className="text-xs sm:text-sm md:text-base text-forest-text-secondary/80 max-w-xl mx-auto">Descubra o método simples que revela a estratégia usada por iniciantes para vender online sem investir em estoque e 1er um lucro de mais de R$10.000 Por mês.</p>
                
                <div className="pt-2 sm:pt-4">
                  <div style={{
                  textAlign: "center"
                }}>
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
                    margin: "auto",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                    maxWidth: "100%"
                  }}>
                      GARANTIR VAGA <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-forest-text-secondary mt-4 tracking-wide flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-forest-green-primary rounded-full animate-pulse"></span>Ao vivo</span>
                    <span>·</span>
                    <span>Vagas limitadas</span>
                    <span>·</span>
                    <span>Não fica gravada</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* O que tem por trás do método */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-forest-bg-main via-forest-bg-card to-forest-bg-main">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-5 sm:space-y-6 md:space-y-8">
            <AnimatedSection>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-forest-text-primary">
                O que tem por trás desse <span className="bg-gradient-forest-text bg-clip-text text-transparent">método de vender sem estoque</span>?
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-sm sm:text-base md:text-lg text-forest-text-secondary max-w-2xl mx-auto leading-relaxed">
                Aqui não tem truque escondido. Por trás desse método existe um modelo de negócio em que você vende produtos pela internet sem precisar ter estoque em casa. Na aula, eu vou te mostrar passo a passo COMO aplicar isso do jeito certo.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {behindMethod.map((item, index) => <AnimatedSection key={index} delay={200 + index * 100}>
                  <Card className="bg-forest-bg-card border border-forest-border hover:border-forest-green-primary/50 hover:shadow-forest-glow transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-5 flex items-start gap-3">
                      <div className="w-8 h-8 bg-forest-green-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-green-primary/30">
                        <CheckCircle2 className="h-4 w-4 text-forest-green-primary" />
                      </div>
                      <p className="text-forest-text-primary text-sm sm:text-base leading-relaxed text-left">{item}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>)}
            </div>
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
                O que você vai <span className="bg-gradient-forest-text bg-clip-text text-transparent">aprender na aula</span>
              </h2>
              <p className="text-forest-text-secondary text-sm sm:text-base">
                O passo a passo real, sem enrolação.
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
        </div>
      </section>

      {/* Seção Renan */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-4 bg-forest-bg-card-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-forest-primary rounded-2xl blur-xl opacity-20" />
                <img src={renanFerreira} alt="Renan Ferreira" className="relative rounded-xl shadow-2xl w-full border border-forest-border" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="space-y-4 order-1 md:order-2">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-forest-bg-card px-3 py-1.5 rounded-full border border-forest-green-primary/30">
                  <Trophy className="w-4 h-4 text-forest-lime" />
                  <span className="text-xs font-bold text-forest-text-primary">MENTOR & ESPECIALISTA</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-forest-text-primary">RENAN</span>
                <br />
                <span className="bg-gradient-forest-text bg-clip-text text-transparent">FERREIRA</span>
              </h2>
              
              <p className="text-sm sm:text-base text-forest-text-secondary leading-relaxed">
                Anos importando da China e vendendo nos principais marketplaces: <span className="text-forest-green-primary font-semibold">Mercado Livre, Shopee, Amazon e Magalu</span>.
              </p>

              <div className="bg-forest-bg-card border border-forest-green-primary/30 rounded-xl p-4">
                <p className="text-sm sm:text-base font-bold text-forest-text-primary mb-1">Compromisso:</p>
                <p className="text-xs sm:text-sm text-forest-text-secondary">
                  Zero teoria. <span className="text-forest-lime font-bold">100% prática validada</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
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
                  GARANTIR VAGA <ArrowRight className="inline-block ml-2 h-5 w-5" />
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
            SouDrop START - Monte sua operação e venda enquanto descansa
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropStart;