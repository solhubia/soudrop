import { CheckCircle2, TrendingUp, BarChart3, Shield, Rocket, Users, Activity, Award, Package, Store, DollarSign, X, PlayCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";

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

  const deliverables = [
    {
      icon: TrendingUp,
      title: "O modelo de dropshipping real",
      description: "O que eu uso hoje para vender todos os dias — sem teoria, só prática."
    },
    {
      icon: BarChart3,
      title: "Como escolher produtos certos",
      description: "Produtos com mais chance de girar, sem depender de viral ou sorte."
    },
    {
      icon: Shield,
      title: "Fornecedores confiáveis",
      description: "Como encontrar bons fornecedores e fugir de roubada."
    },
    {
      icon: Store,
      title: "Operação leve e funcional",
      description: "Como montar uma estrutura que você consegue tocar no dia a dia."
    },
    {
      icon: DollarSign,
      title: "Começar com pouco",
      description: "Como iniciar com pouco dinheiro e ir escalando com segurança."
    },
    {
      icon: Rocket,
      title: "Sistema de vendas diárias",
      description: "Como ativar o sistema que faz as vendas acontecerem todo dia."
    }
  ];

  const forWho = [
    "Quer entender, de forma séria, como começar nesse mercado que eu mostro no anúncio",
    "Já tentou ganhar dinheiro online e está cansado de promessa vazia",
    "Prefere ouvir a verdade: que existe caminho, mas exige método e execução",
    "Quer um passo a passo aplicável, e não mais um vídeo motivacional"
  ];

  const behindFormula = [
    "Como transformar esse método em uma operação que vende todos os dias",
    "O que você realmente precisa (e o que não precisa) para começar nesse mercado",
    "Os erros que fazem a maioria desistir antes de enxergar resultado"
  ];

  const testimonials = [
    {
      name: "Felipe M.",
      text: "Achei que era mais uma promessa. Depois da aula entendi o passo a passo e fiz minhas primeiras vendas."
    },
    {
      name: "Amanda S.",
      text: "O Renan mostra o que funciona na prática, sem enrolação. Foi a primeira vez que alguém explicou esse mercado de forma clara pra mim."
    },
    {
      name: "Lucas T.",
      text: "Parecia impossível até entender o método. Hoje tenho minha operação rodando diariamente."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A1124] to-black" />
        <div className="absolute top-20 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-8" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-6 md:space-y-10">
            <div className="inline-block">
              <span className="px-4 md:px-6 py-2 md:py-3 bg-blue-950/70 text-blue-400 rounded-full text-xs md:text-sm font-semibold border border-blue-800/60 tracking-wider uppercase">
                Aula Gratuita
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.2] tracking-tight max-w-4xl mx-auto px-2">
              Descubra como vender sem estoque no método que fazem até iniciantes{" "}
              <span className="text-blue-400">lucrarem mais de 10 mil reais por mês</span>{" "}
              sem investir em estoque
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Descubra o método simples que revela a estratégia usada por iniciantes para vender online sem investir em estoque e ter um lucro de mais de R$10.000 por mês.
            </p>

            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-2">
              Se você quer entender na prática como esse método funciona, dá o próximo passo.
            </p>
            
            <div className="pt-4 md:pt-6 px-2">
              <div style={{textAlign:"center"}}>
                <button type="button" className="wj-embed-button w-full sm:w-auto" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "16px", padding: "18px 24px", boxShadow: "0 12px 40px rgba(59, 130, 246, 0.35)", borderRadius: "14px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "system-ui, -apple-system, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease", letterSpacing: "0.01em", maxWidth: "100%"}}>Quero participar da aula gratuita sobre vendas sem estoque</button>
                <script src="https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register"></script>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-5 tracking-wide">Aula online gratuita · Vagas limitadas · Não fica gravada</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que tem por trás da "fórmula" */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-5 px-2">
              O que tem por trás desse <span className="text-blue-400">método de vender sem estoque</span>?
            </h2>
            
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Aqui não tem truque escondido. Por trás desse método existe um modelo de negócio em que você vende produtos pela internet sem precisar ter estoque em casa, usando fornecedores e uma estrutura simples. Na aula, eu vou te mostrar passo a passo COMO aplicar isso do jeito certo, sem ilusão e sem depender de sorte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 pt-6 md:pt-8">
              {behindFormula.map((item, index) => (
                <Card key={index} className="bg-[#0A1124]/80 border border-blue-900/40 hover:border-blue-600/60 transition-all duration-300">
                  <CardContent className="p-5 md:p-7 flex items-start gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white text-sm md:text-base leading-relaxed text-left">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É - Filtragem Agressiva */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-5">
              Essa aula é <span className="text-blue-400">pra você</span>?
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Seja honesto consigo mesmo antes de entrar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto mb-8 md:mb-12">
            {forWho.map((item, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-900/40 hover:border-blue-600/60 transition-all duration-300">
                <CardContent className="p-5 md:p-7 flex items-start gap-4 md:gap-5">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-sm md:text-base leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-red-950/30 border border-red-900/40 max-w-2xl mx-auto">
            <CardContent className="p-5 md:p-7 flex items-center gap-4 md:gap-5 justify-center">
              <X className="h-5 w-5 md:h-6 md:w-6 text-red-400 flex-shrink-0" />
              <p className="text-red-300 font-medium text-center text-sm md:text-base">
                Se você só quer dinheiro rápido e fácil, essa aula NÃO é pra você.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-5">
              O que você vai <span className="text-blue-400">aprender na aula</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              O passo a passo real, sem enrolação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-900/40 hover:border-blue-600/70 transition-all duration-300 group">
                <CardHeader className="pb-3 md:pb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-950/70 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-105 transition-transform duration-300 border border-blue-800/50">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-5">
              O que dizem os <span className="text-blue-400">alunos</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Resultados reais de pessoas comuns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-800/50 hover:border-blue-600/70 transition-all duration-300">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-7">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-950/80 rounded-full flex items-center justify-center border border-blue-700/60">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-blue-400 text-xs md:text-sm">Aluno</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic text-sm md:text-[15px]">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Escassez */}
          <div className="mt-10 md:mt-16 text-center">
            <Card className="bg-[#0A1124]/60 border border-blue-900/40 max-w-2xl mx-auto">
              <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300 text-xs md:text-sm text-center sm:text-left">
                  Para manter a qualidade, as vagas dessa aula são limitadas. <span className="text-white font-medium">As aulas não ficam gravadas.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Autoridade - Renan */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-[60px] opacity-15" />
              <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-2xl shadow-2xl border border-blue-900/50 w-full max-w-sm mx-auto lg:max-w-full" />
            </div>
            
            <div className="space-y-5 md:space-y-7 order-1 lg:order-2 text-center lg:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Quem vai te ensinar?</h3>
                <p className="text-lg md:text-xl text-blue-400 font-semibold">Renan Ferreira</p>
              </div>
              
              <div className="space-y-4 md:space-y-5 text-gray-300 leading-relaxed text-sm md:text-[16px]">
                <p>
                  Testei dezenas de produtos, estratégias e fornecedores. Demorei anos para descobrir o que realmente funciona nesse mercado.
                </p>
                <p>
                  Hoje ajudo pessoas comuns a montar operações reais, lucrativas e consistentes.
                </p>
                <p className="text-white font-semibold border-l-2 border-blue-500 pl-4 md:pl-5 py-1 text-left">
                  Na aula, eu vou te mostrar exatamente o caminho que aplico na prática — sem teorias, sem atalhos falsos e sem fórmulas mágicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social - Números */}
      <section className="py-14 md:py-20 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-4 md:p-7 text-center">
                <Users className="h-7 w-7 md:h-9 md:w-9 text-blue-400 mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">+500</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Alunos ativos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-4 md:p-7 text-center">
                <Activity className="h-7 w-7 md:h-9 md:w-9 text-blue-400 mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">+1000</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Operações rodando</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-4 md:p-7 text-center">
                <Package className="h-7 w-7 md:h-9 md:w-9 text-blue-400 mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">+50K</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Produtos validados</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-4 md:p-7 text-center">
                <Award className="h-7 w-7 md:h-9 md:w-9 text-blue-400 mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Método prático</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-3xl text-center space-y-6 md:space-y-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-2">
            Pronto pra ver, de verdade, o que está por trás dessa <span className="text-blue-400">"fórmula"</span>?
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Clique no botão abaixo, garanta sua vaga e eu vou te mostrar ao vivo como funciona esse mercado e como você pode dar os primeiros passos com segurança.
          </p>

          <div className="pt-2 md:pt-4 px-2">
            <div style={{textAlign:"center"}}>
              <button type="button" className="wj-embed-button w-full sm:w-auto" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "16px", padding: "18px 24px", boxShadow: "0 12px 40px rgba(59, 130, 246, 0.35)", borderRadius: "14px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "system-ui, -apple-system, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease", letterSpacing: "0.01em", maxWidth: "100%"}}>Quero participar da aula e entender esse mercado</button>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-5 tracking-wide">Aula gratuita • Vagas limitadas • Não fica gravada</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-950/60 text-gray-600 py-8 md:py-10 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm">
            © 2025 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropPro;
