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
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24 md:pb-36 px-5 sm:px-6 md:px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A1124] to-black" />
        <div className="absolute top-20 left-10 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse" style={{
        animationDuration: '4s'
      }} />
        <div className="absolute bottom-20 right-10 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-400 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" style={{
        animationDuration: '6s'
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500 rounded-full mix-blend-screen filter blur-[200px] opacity-5" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-12">
            <AnimatedSection delay={0}>
              <div className="inline-block">
                <span className="px-5 md:px-7 py-2.5 md:py-3 bg-blue-950/80 text-blue-400 rounded-full text-xs md:text-sm font-semibold border border-blue-700/50 tracking-wider uppercase backdrop-blur-sm shadow-lg shadow-blue-900/20">
                  🔴 Aula Gratuita Ao Vivo
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-white leading-[1.25] sm:leading-[1.2] tracking-tight max-w-4xl mx-auto">
                Descubra como <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">vender sem estoque</span> no método que fazem até iniciantes{" "}
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">lucrarem mais de 10 mil reais por mês</span>{" "}
                sem <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">investir em estoque</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Descubra o método simples que revela a estratégia usada por iniciantes para vender online sem investir em estoque e ter um lucro de mais de R$10.000 por mês.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-sm md:text-base max-w-2xl mx-auto text-primary-foreground">
                Se você quer entender na prática como esse método funciona, dá o próximo passo.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="pt-4 sm:pt-6 md:pt-8">
                <div style={{
                textAlign: "center"
              }}>
                  <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  padding: "18px 32px",
                  boxShadow: "0 15px 50px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)",
                  borderRadius: "16px",
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
                }}>ACESSAR AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" /></button>
                  <script src="https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register"></script>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-5 md:mt-6 tracking-wide flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Aula ao vivo</span>
                  <span>·</span>
                  <span className="text-primary-foreground">Vagas limitadas</span>
                  <span>·</span>
                  <span>Não fica gravada</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O que tem por trás da "fórmula" */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-black via-[#050A18] to-[#0A1124]/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 sm:mb-5 md:mb-6">
                O que tem por trás desse <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">método de vender sem estoque</span>?
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Aqui não tem truque escondido. Por trás desse método existe um modelo de negócio em que você vende produtos pela internet sem precisar ter estoque em casa, usando fornecedores e uma estrutura simples. Na aula, eu vou te mostrar passo a passo COMO aplicar isso do jeito certo, sem ilusão e sem depender de sorte.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-6 sm:pt-8 md:pt-10">
              {behindFormula.map((item, index) => <AnimatedSection key={index} delay={200 + index * 100}>
                  <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 h-full backdrop-blur-sm">
                    <CardContent className="p-5 sm:p-6 md:p-8 flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-950/80 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-800/50">
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="text-white text-[15px] sm:text-base md:text-lg leading-relaxed text-left">{item}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>)}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É - Filtragem Agressiva */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#0A1124]/50 via-black to-[#0A1124]/30">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 sm:mb-5 md:mb-6">
                Essa aula é <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">pra você</span>?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                Seja honesto consigo mesmo antes de entrar.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-14">
            {forWho.map((item, index) => <AnimatedSection key={index} delay={100 + index * 100}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-5 sm:p-6 md:p-8 flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 bg-green-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-700/40">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-white text-[15px] sm:text-base md:text-lg leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
          
          <AnimatedSection delay={500}>
            <Card className="bg-gradient-to-br from-red-950/40 to-red-950/20 border border-red-900/50 max-w-2xl mx-auto backdrop-blur-sm">
              <CardContent className="p-5 sm:p-6 md:p-8 flex items-center gap-4 md:gap-5 justify-center">
                <div className="w-10 h-10 bg-red-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-800/50">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <p className="text-red-300 font-medium text-center text-[15px] sm:text-base md:text-lg">
                  Se você só quer dinheiro rápido e fácil, essa aula NÃO é pra você.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#0A1124]/30 via-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 sm:mb-5 md:mb-6">
                O que você vai <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">aprender na aula</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                O passo a passo real, sem enrolação.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {deliverables.map((item, index) => <AnimatedSection key={index} delay={100 + index * 80}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group h-full backdrop-blur-sm">
                  <CardHeader className="pb-3 md:pb-4 p-5 sm:p-6 md:p-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300 border border-blue-700/50 shadow-lg shadow-blue-900/30">
                      <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-white font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 sm:px-6 sm:pb-6 md:px-7 md:pb-7">
                    <CardDescription className="text-gray-400 text-sm sm:text-[15px] md:text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#0A1124]/50 via-black to-[#0A1124]/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 sm:mb-5 md:mb-6">
                O que dizem os <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">alunos</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                Resultados reais de pessoas comuns.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => <AnimatedSection key={index} delay={100 + index * 100}>
                <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-800/50 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-center gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-full flex items-center justify-center border border-blue-700/60 shadow-lg shadow-blue-900/30">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-base sm:text-lg md:text-xl">{testimonial.name}</p>
                        <p className="text-blue-400 text-sm md:text-base">Aluno</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic text-[15px] sm:text-base md:text-lg">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>

          {/* Escassez */}
          <AnimatedSection delay={400}>
            <div className="mt-10 sm:mt-12 md:mt-16 text-center">
              <Card className="bg-gradient-to-r from-yellow-950/30 via-yellow-900/20 to-yellow-950/30 border border-yellow-700/40 max-w-2xl mx-auto backdrop-blur-sm">
                <CardContent className="p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row items-center gap-4 md:gap-5 justify-center">
                  <div className="w-10 h-10 bg-yellow-950/60 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-700/50">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-[15px] md:text-base text-center sm:text-left">
                    Para manter a qualidade, as vagas dessa aula são limitadas. <span className="text-yellow-400 font-medium">As aulas não ficam gravadas.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Autoridade - Renan */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#0A1124]/30 via-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-[80px] opacity-20" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-2xl blur-xl opacity-50" />
                <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-2xl shadow-2xl border border-blue-800/50 w-full max-w-[300px] sm:max-w-sm mx-auto lg:max-w-full" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="order-1 lg:order-2">
              <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Quem vai te ensinar?</h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-semibold">Renan Ferreira</p>
                </div>
                
                <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
                  <p>
                    Testei dezenas de produtos, estratégias e fornecedores. Demorei anos para descobrir o que realmente funciona nesse mercado.
                  </p>
                  <p>
                    Hoje ajudo pessoas comuns a montar operações reais, lucrativas e consistentes.
                  </p>
                  <p className="text-white font-semibold border-l-4 border-blue-500 pl-5 md:pl-6 py-2 text-left bg-blue-950/20 rounded-r-lg">
                    Na aula, eu vou te mostrar exatamente o caminho que aplico na prática — sem teorias, sem atalhos falsos e sem fórmulas mágicas.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prova Social - Números */}
      <section className="py-14 sm:py-16 md:py-24 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#0A1124]/50 via-black to-[#0A1124]/30">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
            }].map((stat, index) => <Card key={index} className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-blue-900/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 backdrop-blur-sm group">
                  <CardContent className="p-4 sm:p-5 md:p-8 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-950/80 to-blue-900/60 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 border border-blue-700/50 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 sm:py-24 md:py-32 px-5 sm:px-6 md:px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1124]/30 via-[#0A1124]/60 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600 rounded-full mix-blend-screen filter blur-[200px] opacity-10" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedSection>
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
                Pronto pra ver, de verdade, o que está por trás dessa <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">"fórmula"</span>?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Clique no botão abaixo, garanta sua vaga e eu vou te mostrar ao vivo como funciona esse mercado e como você pode dar os primeiros passos com segurança.
              </p>

              <div className="pt-4 sm:pt-6 md:pt-8">
                <div style={{
                textAlign: "center"
              }}>
                  <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "17px",
                  padding: "20px 40px",
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)",
                  borderRadius: "16px",
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
                }}>ACESSAR AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" /></button>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-5 md:mt-6 tracking-wide flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Aula ao vivo</span>
                  <span>·</span>
                  <span>Vagas limitadas</span>
                  <span>·</span>
                  <span>Não fica gravada</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-900/30 text-gray-600 py-8 sm:py-10 md:py-12 px-5 sm:px-6 md:px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm md:text-base text-gray-500">
            © 2025 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropPro;