import { ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, FileText, Link2, Shield, Rocket, Target, Users, Activity, Award, Sparkles, Package, Store, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      icon: Package,
      title: "Dropshipping de Verdade em 2025",
      description: "Como funciona o modelo de dropshipping atualizado e o que realmente dá resultado hoje."
    },
    {
      icon: Users,
      title: "Fornecedores Confiáveis",
      description: "Como encontrar e validar fornecedores que entregam rápido e com qualidade."
    },
    {
      icon: Target,
      title: "Produtos com Alta Chance de Venda",
      description: "Como validar produtos antes de investir e identificar os que realmente vendem."
    },
    {
      icon: Store,
      title: "Operação Leve e Lucrativa",
      description: "Como montar sua estrutura de dropshipping sem complicação e com margem real."
    },
    {
      icon: DollarSign,
      title: "Começar com Pouco Dinheiro",
      description: "Como iniciar sua operação mesmo com capital reduzido e escalar aos poucos."
    },
    {
      icon: Rocket,
      title: "Sistema que Vende Todo Dia",
      description: "Como ativar uma operação consistente que gera vendas diárias no piloto automático."
    }
  ];

  const benefits = [
    "Método real: sem promessas milagrosas ou atalhos falsos",
    "Passo a passo prático: aprenda fazendo, não só assistindo",
    "Operação estruturada: tudo organizado para você replicar",
    "Fornecedores validados: acesso a fontes confiáveis",
    "Suporte contínuo: tire dúvidas e evolua com acompanhamento"
  ];

  const forWho = [
    "Quer começar no dropshipping mas não sabe por onde iniciar",
    "Já tentou vender online mas não conseguiu ter consistência",
    "Está cansado de táticas antigas que não funcionam mais",
    "Busca um método claro, aplicável e realista",
    "Quer montar uma operação de verdade e vender todos os dias"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A1A3A] to-black opacity-90" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold border border-blue-700/50">
                🚀 AULA GRATUITA DE DROPSHIPPING
              </span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
              Aprenda o método real para montar sua operação de dropshipping e vender todos os dias — mesmo começando do zero.
            </h1>
            
            <div className="space-y-4 text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
              <p className="font-medium">
                Na aula gratuita, vou te mostrar como encontrar produtos certos, criar estrutura, ativar a operação e começar a vender no dropshipping de forma simples e realista.
              </p>

              <p className="text-base lg:text-lg text-gray-400">
                Sem promessas milagrosas. Método testado e aplicável para quem quer resultados de verdade.
              </p>

              <p className="text-base lg:text-lg font-bold text-white">
                👉 Participe da aula gratuita e aprenda a montar sua operação de dropshipping.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div style={{textAlign:"center"}}>
                <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "24px", padding: "18px 80px", boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)", borderRadius: "8px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease"}}>Quero Participar da Aula</button>
                <script src="https://event.webinarjam.com/register/8wgw0kty/embed-button?formTemplate=2&formColor=1&buttonText=Register"></script>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">Aula 100% gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0A1A3A]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Essa aula é pra você?
            </h2>
            <p className="text-lg text-gray-400">
              Se você se identifica com pelo menos 1 desses pontos, você precisa participar:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {forWho.map((item, index) => (
              <Card key={index} className="bg-[#0A1A3A]/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-white">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0A1A3A]/30 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              O que você vai <span className="text-blue-400">aprender</span> na aula
            </h2>
            <p className="text-lg text-gray-400">
              Conteúdo prático e direto ao ponto sobre dropshipping
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-[#0A1A3A]/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apresentação Renan */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0A1A3A]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-2xl opacity-20" />
              <img src={renanPhoto} alt="Renan Ferreira" className="relative rounded-3xl shadow-2xl border-4 border-blue-900/50 w-full" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Quem vai te ensinar?</h3>
                <p className="text-lg text-blue-400 font-semibold">
                  Renan Ferreira
                </p>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Trabalho com dropshipping há anos. Testei dezenas de produtos, fornecedores e estratégias. Errei muito no começo, mas encontrei o método que funciona.
                </p>
                <p>
                  Hoje, ajudo centenas de pessoas a montarem suas operações de dropshipping de forma estruturada e realista.
                </p>
                <p className="font-semibold text-white">
                  Nessa aula, vou te mostrar exatamente como você pode aplicar esse método — do zero ou para melhorar o que já faz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0A1A3A]/30 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Por que esse método <span className="text-blue-400">é diferente</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Porque não é teoria. É o que aplico na prática e vou te mostrar ao vivo.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-[#0A1A3A]/50 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-lg font-medium text-white">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0A1A3A]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="bg-[#0A1A3A]/50 border border-blue-900/30">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">+500</div>
                <p className="text-sm text-gray-400">Alunos ativos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1A3A]/50 border border-blue-900/30">
              <CardContent className="p-6">
                <Activity className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">+1000</div>
                <p className="text-sm text-gray-400">Operações rodando</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1A3A]/50 border border-blue-900/30">
              <CardContent className="p-6">
                <Package className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">+50K</div>
                <p className="text-sm text-gray-400">Produtos validados</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0A1A3A]/50 border border-blue-900/30">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <p className="text-sm text-gray-400">Método prático</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0A1A3A]/30 to-black">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Pronto para montar sua <span className="text-blue-400">operação de dropshipping</span>?
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Participe da aula gratuita e aprenda o método real para começar a vender todos os dias
          </p>

          <div style={{textAlign:"center"}}>
            <button type="button" className="wj-embed-button" data-webinarHash="8wgw0kty" style={{border: "none", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", color: "rgb(255, 255, 255)", fontSize: "24px", padding: "18px 80px", boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)", borderRadius: "8px", whiteSpace: "normal", fontWeight: "700", lineHeight: "1.3", cursor: "pointer", fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", wordBreak: "break-word", margin: "auto", transition: "all 0.3s ease"}}>Quero Participar da Aula</button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <CheckCircle2 className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-gray-400">Vagas limitadas • Aula 100% gratuita</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-900/30 text-gray-500 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2025 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropPro;
