import { ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, FileText, Link2, Shield, Rocket, Target, Users, Activity, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import dashboardPreview from "@/assets/dashboard-preview.png";
const SoudropPro = () => {
  useEffect(() => {
    // Script do botão embed
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
  const handleCTA = () => {
    window.open('https://event.webinarjam.com/register/8wgw0kty', '_blank');
  };
  const deliverables = [{
    icon: Rocket,
    title: "O Produto Certo",
    description: "Como encontrar produtos que vendem sem precisar de sorte ou achismo."
  }, {
    icon: BarChart3,
    title: "O Anúncio Magnético",
    description: "A estrutura exata que faz o cliente comprar na hora (sem enrolação)."
  }, {
    icon: FileText,
    title: "O Marketplace Certo",
    description: "Onde publicar pra vender rápido e escalar sem travar no caminho."
  }, {
    icon: TrendingUp,
    title: "O Preço Ideal",
    description: "Como precificar pra vender todo dia E ter margem de verdade."
  }, {
    icon: Link2,
    title: "A Operação Enxuta",
    description: "Como fazer isso tudo sem equipe, sem estoque, sem complicação."
  }, {
    icon: Shield,
    title: "Os Erros Fatais",
    description: "O que NÃO fazer se você quer vender com consistência."
  }];
  const benefits = ["Sem enrolação: direto ao ponto, sem blá blá blá", "Sem pegadinhas: você vê tudo funcionando ao vivo", "Sem promessas impossíveis: só o que realmente funciona", "Sem complicação: até quem nunca vendeu online consegue aplicar", "Sem risco: se não gostar, é só sair — mas garanto que você vai ficar"];
  const bonuses = [{
    icon: Target,
    title: "Checklist de validação de produto"
  }, {
    icon: Sparkles,
    title: "Template de anúncio que converte"
  }, {
    icon: FileText,
    title: "Passo a passo visual de publicação"
  }, {
    icon: BarChart3,
    title: "Planilha de controle simples e eficaz"
  }];
  const forWho = ["Quer vender online mas não sabe por onde começar", "Já tentou mas travou no meio do caminho", "Tá cansado de gastar dinheiro com curso que não funciona", "Quer um método simples que funcione de verdade", "Precisa de resultado rápido sem enrolação"];
  return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 opacity-60" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                🚀 PLANO AVANÇADO
              </span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
              ATENÇÃO: existe uma fórmula simples (quase injusta) que está fazendo pessoas comuns baterem 10K/mês — e ninguém quer que você saiba.
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed px-4">
              Enquanto os "especialistas" complicam, quem aprende isso aqui… vende todos os dias.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed px-4">
              É simples. É direto. É lucrativo. E você vai aprender AO VIVO.
            </p>

            <p className="text-base lg:text-lg text-gray-700 font-semibold leading-relaxed px-4">
              👉 Participe da aula e veja você mesmo essa "fórmula mágica" funcionando.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div style={{textAlign:"center"}}>
                <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "2px solid rgba(0, 0, 0, 0.5)", background: "rgba(41, 182, 246, 0.95)", color: "rgb(255, 255, 255)", fontSize: "24px", padding: "18px 80px", boxShadow: "none", borderRadius: "4px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", wordBreak: "break-word", margin: "auto"}}>Quero Participar da Aula</button>
                <script src="https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register"></script>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">120 dias de garantia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Isso é pra você?
            </h2>
            <p className="text-lg text-gray-600">
              Se você se identifica com pelo menos 1 desses pontos, essa aula foi feita pra você:
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
              O que você vai <span className="text-purple-600">descobrir</span> na aula
            </h2>
            <p className="text-lg text-gray-600">
              A fórmula completa revelada em detalhes
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
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Quem vai ensinar isso pra você?</h3>
                <p className="text-lg text-green-600 font-semibold">
                  Renan Ferreira
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Eu vendo online há anos. Testei tudo. Errei muito. Acertei depois.
                </p>
                <p>
                  Hoje, ajudo centenas de pessoas a venderem usando essa mesma fórmula que funciona comigo desde o começo.
                </p>
                <p className="font-semibold text-gray-900">
                  E nessa aula, vou te mostrar exatamente como você pode aplicar isso — do zero ou pra escalar o que já faz.
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
              Por que essa aula <span className="text-blue-600">não é mais uma promessa vazia</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Porque não é teoria. É o que funciona de verdade.
            </p>
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
              E ainda tem <span className="text-purple-600">bônus</span>
            </h2>
            <p className="text-lg text-gray-600">
              Pra você sair da aula pronto pra aplicar
            </p>
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

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Pronto pra começar a <span className="text-green-600">vender de verdade</span>?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Participe da aula gratuita e descubra a fórmula simples que está fazendo pessoas comuns faturarem 10K/mês
          </p>

          <div style={{textAlign:"center"}}>
            <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "2px solid rgba(0, 0, 0, 0.5)", background: "rgba(41, 182, 246, 0.95)", color: "rgb(255, 255, 255)", fontSize: "24px", padding: "18px 80px", boxShadow: "none", borderRadius: "4px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", wordBreak: "break-word", margin: "auto"}}>Quero Participar da Aula</button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">Vagas limitadas • Aula 100% gratuita</span>
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