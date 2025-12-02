import { CheckCircle2, Zap, TrendingUp, BarChart3, Shield, Rocket, Users, Activity, Award, Package, Store, DollarSign, X, PlayCircle } from "lucide-react";
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
      title: "O Modelo Real de 2025",
      description: "O dropshipping que funciona hoje — sem táticas ultrapassadas ou promessas vazias."
    },
    {
      icon: BarChart3,
      title: "Validação com Dados",
      description: "Como validar produtos com dados reais, não achismo ou \"feeling\"."
    },
    {
      icon: Shield,
      title: "Fornecedores Confiáveis",
      description: "Como encontrar fornecedores sérios e evitar golpes que quebram iniciantes."
    },
    {
      icon: Store,
      title: "Operação Simples e Lucrativa",
      description: "Como montar uma estrutura leve, organizada e com margem de verdade."
    },
    {
      icon: DollarSign,
      title: "Começar com Pouco",
      description: "Como iniciar mesmo com capital reduzido e estruturar o crescimento."
    },
    {
      icon: Rocket,
      title: "Sistema de Vendas Diárias",
      description: "Como ativar o sistema que gera vendas consistentes todos os dias."
    }
  ];

  const forWho = [
    "Você quer montar uma operação de dropshipping séria e vender todos os dias",
    "Já tentou vender online, mas não conseguiu consistência",
    "Não aguenta mais conteúdo raso, desatualizado e sem prática",
    "Busca método direto, aplicável e sem papo furado",
    "Quer parar de depender de \"produto viral\" e aprender estratégia de verdade"
  ];

  const testimonials = [
    {
      name: "Felipe M.",
      text: "Eu já tinha tentado de tudo. Depois dessa aula finalmente aprendi dropshipping de verdade e validei meu primeiro produto."
    },
    {
      name: "Amanda S.",
      text: "Conteúdo direto, zero enrolação. Fiz minhas primeiras vendas na mesma semana."
    },
    {
      name: "Lucas T.",
      text: "Parecia impossível até entender o método. Hoje tenho minha operação rodando diariamente."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A1124] to-black" />
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-8" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-10">
            <div className="inline-block">
              <span className="px-6 py-3 bg-blue-950/70 text-blue-400 rounded-full text-sm font-semibold border border-blue-800/60 tracking-wider uppercase">
                Aula Gratuita de Dropshipping
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.2] tracking-tight max-w-4xl mx-auto">
              Aprenda a montar uma operação de dropshipping que{" "}
              <span className="text-blue-400">realmente vende</span> — sem promessas, sem mágica e sem enrolação.
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Se você quer um método real, atualizado e direto ao ponto para validar produtos, encontrar fornecedores e vender todos os dias, essa aula é pra você.{" "}
              <span className="text-gray-500 font-medium">Se busca fórmula mágica, nem perca tempo.</span>
            </p>
            
            <div className="pt-6">
              <div style={{textAlign:"center"}}>
                <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "18px", padding: "22px 56px", boxShadow: "0 12px 40px rgba(59, 130, 246, 0.35)", borderRadius: "14px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "system-ui, -apple-system, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease", letterSpacing: "0.01em"}}>Quero aprender dropshipping do jeito certo</button>
                <script src="https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register"></script>
              </div>
              <p className="text-sm text-gray-500 mt-5 tracking-wide">Aula gratuita • Vagas limitadas • Não fica gravada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <p className="text-blue-400 font-semibold text-lg tracking-wide">
              ⚠️ Assista antes de entrar: isso aqui NÃO é sobre ficar rico rápido. É sobre estruturar um negócio real.
            </p>
            
            <div className="aspect-video bg-[#0A1124] rounded-2xl border border-blue-900/50 flex items-center justify-center overflow-hidden relative group cursor-pointer hover:border-blue-700/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/40 group-hover:scale-110 group-hover:bg-blue-600/30 transition-all duration-300">
                  <PlayCircle className="h-10 w-10 text-blue-400" />
                </div>
                <p className="text-gray-400 text-sm">Clique para assistir</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Esse vídeo resume o método que ensino na aula — simples, direto e focado em quem quer resultado de verdade no dropshipping.
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem É - Filtragem Agressiva */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              Essa aula é <span className="text-blue-400">pra você</span>?
            </h2>
            <p className="text-gray-400 text-lg">
              Seja honesto consigo mesmo antes de entrar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
            {forWho.map((item, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-900/40 hover:border-blue-600/60 transition-all duration-300">
                <CardContent className="p-7 flex items-start gap-5">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-base leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-red-950/30 border border-red-900/40 max-w-2xl mx-auto">
            <CardContent className="p-7 flex items-center gap-5 justify-center">
              <X className="h-6 w-6 text-red-400 flex-shrink-0" />
              <p className="text-red-300 font-medium text-center">
                Se você quer ganhar dinheiro rápido ou fórmula mágica, essa aula NÃO é pra você.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              O que você vai <span className="text-blue-400">aprender</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Conteúdo direto, sem enrolação. Só o que funciona.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-900/40 hover:border-blue-600/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-blue-950/70 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-blue-800/50">
                    <item.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              O que dizem os <span className="text-blue-400">alunos</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Resultados reais de pessoas comuns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#0A1124]/80 border border-blue-800/50 hover:border-blue-600/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 bg-blue-950/80 rounded-full flex items-center justify-center border border-blue-700/60">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-blue-400 text-sm">Aluno</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic text-[15px]">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade - Renan */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-[60px] opacity-15" />
              <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-2xl shadow-2xl border border-blue-900/50 w-full" />
            </div>
            
            <div className="space-y-7 order-1 lg:order-2">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">Quem vai te ensinar?</h3>
                <p className="text-xl text-blue-400 font-semibold">Renan Ferreira</p>
              </div>
              
              <div className="space-y-5 text-gray-300 leading-relaxed text-[16px]">
                <p>
                  Testei dezenas de produtos, estratégias e fornecedores. Demorei anos para descobrir o que realmente funciona no dropshipping.
                </p>
                <p>
                  Hoje ajudo pessoas comuns a montar operações reais, lucrativas e consistentes.
                </p>
                <p className="text-white font-semibold border-l-2 border-blue-500 pl-5 py-1">
                  Na aula, eu vou te mostrar exatamente o caminho que aplico na prática — sem teorias, sem atalhos falsos e sem fórmulas mágicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social - Números */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A1124]/50 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-7 text-center">
                <Users className="h-9 w-9 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-1">+500</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Alunos ativos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-7 text-center">
                <Activity className="h-9 w-9 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-1">+1000</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Operações rodando</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-7 text-center">
                <Package className="h-9 w-9 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-1">+50K</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Produtos validados</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1124]/80 border border-blue-900/40">
              <CardContent className="p-7 text-center">
                <Award className="h-9 w-9 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Método prático</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0A1124]/50">
        <div className="container mx-auto max-w-3xl text-center space-y-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Pronto para aprender <span className="text-blue-400">dropshipping de verdade</span>?
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Participe da aula gratuita e descubra o método real para montar sua operação e vender todos os dias.
          </p>

          <div className="pt-4">
            <div style={{textAlign:"center"}}>
              <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "18px", padding: "22px 56px", boxShadow: "0 12px 40px rgba(59, 130, 246, 0.35)", borderRadius: "14px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "system-ui, -apple-system, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease", letterSpacing: "0.01em"}}>Quero aprender dropshipping do jeito certo</button>
            </div>
            <p className="text-sm text-gray-500 mt-5 tracking-wide">Aula gratuita • Vagas limitadas • Não fica gravada</p>
          </div>
        </div>
      </section>

      {/* Escassez */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            ⚠️ <span className="text-gray-400">Vagas realmente limitadas:</span> para manter a qualidade, só aceito um número reduzido de alunos por aula. A aula NÃO fica gravada.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-950/60 text-gray-600 py-10 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm">
            © 2025 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropPro;
