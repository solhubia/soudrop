import { ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, FileText, Link2, Shield, Rocket, Target, Users, Activity, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import dashboardPreview from "@/assets/dashboard-preview.png";
const SoudropPro = () => {
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
  const deliverables = [{
    icon: Rocket,
    title: "Lançador Automático",
    description: "Automatize publicações em múltiplos marketplaces com velocidade profissional."
  }, {
    icon: BarChart3,
    title: "Plataforma Completa",
    description: "Dashboards avançadas com visão clara de faturamento, pedidos e performance."
  }, {
    icon: FileText,
    title: "Gerador de Títulos IA",
    description: "Títulos e descrições otimizadas para conversão em segundos."
  }, {
    icon: TrendingUp,
    title: "Educação Avançada",
    description: "Conteúdo focado em escala, margem e estruturação operacional."
  }, {
    icon: Link2,
    title: "6 Integrações",
    description: "Conecte múltiplos marketplaces e canais de venda simultaneamente."
  }, {
    icon: Shield,
    title: "Garantia 120 dias",
    description: "Teste sem risco e sinta a diferença na sua operação."
  }];
  const benefits = ["Abandone planilhas e organize tudo em uma plataforma", "Veja claramente quais produtos dão lucro real", "Publique anúncios com velocidade profissional", "Transforme seu negócio em operação escalável", "Automatize processos sem precisar programar"];
  const bonuses = [{
    icon: Target,
    title: "Playbook de Escala em Marketplaces"
  }, {
    icon: Sparkles,
    title: "Modelos prontos de títulos de alta performance"
  }, {
    icon: FileText,
    title: "Modelos de descrições voltadas para conversão"
  }, {
    icon: BarChart3,
    title: "Mini treinamento de leitura e interpretação dos relatórios"
  }];
  const forWho = ["Já fez vendas e quer escalar", "Quer organizar e profissionalizar", "Cansou de trabalhar no manual", "Busca visão clara dos números", "Precisa de tecnologia para crescer"];
  return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 opacity-60" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  🚀 PLANO AVANÇADO
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fórmula mágica 10K em Vendas
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                O método simples para vender sem estoque
              </p>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Passo a passo prático para encontrar produtos certos, anunciar do jeito certo e vender todos os dias usando marketplaces — sem investir em estoque.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCTA} size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-base lg:text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Quero Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">120 dias de garantia</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Para quem é?
            </h2>
            <p className="text-lg text-gray-600">
              Esse plano é para você se:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {forWho.map((item, index) => <Card key={index} className="border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-50">{item}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              O que você <span className="text-purple-600">recebe</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tecnologia + Automação + Educação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => <Card key={index} className="border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Apresentação Renan */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
              <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-3xl shadow-2xl border-8 border-white w-full" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Renan Ferreira</h3>
                <p className="text-lg text-green-600 font-semibold">
                  Especialista em Importação e Marketplaces
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Anos de experiência com importação direta da China e vendas nos principais marketplaces: Mercado Livre, Shopee, Amazon e Magalu.
                </p>
                <p className="font-semibold text-gray-900">
                  Meu objetivo: ajudar você a organizar, profissionalizar e escalar sua operação com tecnologia e processos que funcionam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Por que escolher  <span className="text-blue-600">​</span>?
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-lg font-medium text-slate-50">{benefit}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Bônus <span className="text-purple-600">Exclusivos</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => <Card key={index} className="border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                    <bonus.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="font-semibold text-slate-50">{bonus.title}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">+500</div>
                <p className="text-sm text-gray-700">Vendedores ativos</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <Activity className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">+1000</div>
                <p className="text-sm text-gray-700">Operações rodando</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <Link2 className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">+3000</div>
                <p className="text-sm text-gray-700">Integrações ativas</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-pink-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <p className="text-sm text-gray-700">Tecnologia própria</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropPro;