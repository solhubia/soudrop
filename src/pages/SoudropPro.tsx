import { ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, FileText, Link2, Shield, Rocket, Target, Users, Activity, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import dashboardPreview from "@/assets/dashboard-preview.png";

const SoudropPro = () => {
  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/2vuuaJJ", "_blank");
  };

  const deliverables = [
    {
      icon: Rocket,
      title: "Lançador Automático de Produtos",
      description: "Ferramenta que automatiza o que antes era manual. Ideal para quem já tem mais de 3 operações rodando. Ajuda a lançar, organizar e distribuir produtos com muito mais velocidade."
    },
    {
      icon: BarChart3,
      title: "Plataforma Completa SouDrop",
      description: "Dashboards avançadas, relatórios de performance e visão clara de faturamento, pedidos, integrações e operação. Tudo aquilo que era básico no plano de 499, agora turbinado para escala."
    },
    {
      icon: FileText,
      title: "Gerador de Títulos e Descrições",
      description: "Gera títulos otimizados para marketplace e cria descrições pensadas para conversão. Ajuda a publicar mais rápido com mais qualidade."
    },
    {
      icon: TrendingUp,
      title: "Educação Avançada",
      description: "Conteúdo para quem já está jogando o jogo. Foco em escala, margem, mix de produtos, operação e processo. Não é 'curso para iniciante', é estruturação de operação."
    },
    {
      icon: Link2,
      title: "6 Integrações Liberadas",
      description: "Mais integrações do que o plano de entrada. Conexão com múltiplos marketplaces e canais. Base para escalar vendas em vários pontos ao mesmo tempo."
    },
    {
      icon: Shield,
      title: "120 dias de Garantia Operacional",
      description: "Tempo suficiente para testar, operar e sentir a diferença. Dá segurança para quem está em fase de profissionalização."
    }
  ];

  const benefits = [
    "Pare de depender de planilha improvisada e anotações soltas",
    "Tenha uma visão clara dos produtos que dão lucro e dos que drenam sua margem",
    "Publique anúncios com mais velocidade e qualidade",
    "Tire seu negócio do modo 'amador' e leve para o modo 'empresa de verdade'",
    "Use tecnologia e automação a seu favor, sem precisar ser programador"
  ];

  const bonuses = [
    { icon: Target, title: "Playbook de Escala em Marketplaces" },
    { icon: Sparkles, title: "Modelos prontos de títulos de alta performance" },
    { icon: FileText, title: "Modelos de descrições voltadas para conversão" },
    { icon: BarChart3, title: "Mini treinamento de leitura e interpretação dos relatórios" }
  ];

  const forWho = [
    "Você já fez pelo menos 3 operações de importação",
    "Já conhece um pouco do jogo e agora quer organizar e escalar",
    "Está cansado de fazer tudo na mão e sentir que não domina os números",
    "Quer tratar sua operação como empresa de verdade, não como 'rolezinho de vendas'",
    "Quer ter ferramenta, dados e processo para dar o próximo passo"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 opacity-60" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  🚀 PLANO AVANÇADO
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Escale sua operação com{" "}
                <span className="bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  automação e dados
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Agora não é mais só sobre começar. É sobre escalar com automação, dados e estrutura de verdade.
                Para quem já opera e quer profissionalizar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  QUERO ESCALAR MINHA OPERAÇÃO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">12x de R$ 97,90</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">120 dias de garantia</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <img
                src={dashboardPreview}
                alt="Dashboard SouDrop PRO"
                className="relative rounded-3xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Para quem é o <span className="text-green-600">SouDrop PRO</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esse plano é para você se:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {forWho.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O que você <span className="text-purple-600">recebe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia, automação e educação para profissionalizar sua operação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo START x PRO */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              START vs <span className="text-green-600">PRO</span>
            </h2>
            <p className="text-xl text-gray-600">
              O próximo passo natural para quem já validou o jogo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* START */}
            <Card className="border-2 border-gray-300">
              <CardHeader className="bg-gray-50 border-b-2 border-gray-200">
                <CardTitle className="text-3xl text-gray-900">SouDrop START</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-700">R$ 499,90</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">3 integrações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Dashboard limitada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Estrutura para começar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Educação para iniciantes</span>
                </div>
              </CardContent>
            </Card>

            {/* PRO */}
            <Card className="border-4 border-green-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                RECOMENDADO
              </div>
              <CardHeader className="bg-gradient-to-r from-green-50 to-purple-50 border-b-4 border-green-500">
                <CardTitle className="text-3xl bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                  SouDrop PRO
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-900">R$ 997,90</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">6 integrações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Lançador automático</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Dashboards + relatórios completos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Gerador de títulos e descrições</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Educação avançada focada em escala</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apresentação Renan */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
              <img
                src={renanPhoto}
                alt="Renan Ferreira"
                className="relative rounded-3xl shadow-2xl border-8 border-white w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Renan Ferreira</h3>
                <p className="text-xl text-green-600 font-semibold">
                  Especialista em Importação, Operação e Escala em Marketplaces
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Trabalho há anos com importação direta da China, lidando com fábricas, fornecedores, containers e toda a operação logística que existe por trás de trazer produtos do outro lado do mundo.
                </p>
                <p>
                  Além disso, tenho experiência real vendendo nos maiores marketplaces do Brasil: Mercado Livre, Shopee, Amazon e Magalu.
                </p>
                <p className="font-semibold text-gray-900">
                  Aqui no SouDrop PRO, meu objetivo não é só te ensinar a importar: é te ajudar a organizar, profissionalizar e escalar sua operação usando tecnologia, dados e processos que funcionam na prática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher o <span className="text-blue-600">SouDrop PRO</span>?
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bônus <span className="text-purple-600">Exclusivos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Além de tudo que você já recebe, ganhe mais:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                    <bonus.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-gray-900 font-semibold">{bonus.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">+500</div>
                <p className="text-gray-600">Vendedores ativos</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <Activity className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">+1000</div>
                <p className="text-gray-600">Operações rodando</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <Link2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">+3000</div>
                <p className="text-gray-600">Integrações ativas</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <p className="text-gray-600">Tecnologia própria</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Profissionalize sua operação agora
            </h2>
            
            <p className="text-2xl opacity-90">
              SouDrop PRO - Plano Completo
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
              <div className="space-y-4">
                <div className="text-5xl font-bold">R$ 997,90</div>
                <div className="text-2xl">ou 12x de R$ 97,90</div>
                <div className="flex items-center justify-center gap-2 text-green-200">
                  <Shield className="h-6 w-6" />
                  <span className="text-lg">120 dias de garantia operacional</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleCTA}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
              >
                QUERO MIGRAR PARA O SOUDROP PRO
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
            
            <p className="text-sm opacity-80 pt-4">
              ⚡ Próximas ativações com acompanhamento de onboarding personalizado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-4">
            SouDrop PRO - Escale sua operação com tecnologia e automação
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropPro;