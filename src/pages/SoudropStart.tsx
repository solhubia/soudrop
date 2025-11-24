import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Users, BookOpen, Trophy, Gift, TrendingUp, Target, BarChart3, Package, Snowflake, Mountain } from "lucide-react";
import renanFerreira from "@/assets/renan-ferreira.jpg";
import dashboardPreview from "@/assets/dashboard-preview.png";

const SoudropStart = () => {
  const handleCTA = () => {
    window.open('https://pay.kiwify.com.br/RIqama1', '_blank');
  };

  const entregaveis = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "3 Integrações Liberadas",
      description: "Conecte suas principais vendas nos marketplaces"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Home Personalizada",
      description: "Dashboard customizado para sua operação"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Limitada",
      description: "Ideal para iniciantes começarem com segurança"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "120 Dias de Garantia",
      description: "Garantia operacional completa"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Treinamento Prático",
      description: "Direto ao ponto, sem enrolação"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Exclusiva",
      description: "Acesso à rede de importadores ativos"
    }
  ];

  const beneficios = [
    "Comece do jeito certo sem perder dinheiro",
    "Evite erros que fazem iniciantes quebrarem",
    "Aprenda a escolher produtos com dados reais",
    "Evite produtos proibidos e de alto risco",
    "Aplique processos validados por quem opera no dia a dia",
    "Tenha suporte + tecnologia para acelerar resultados"
  ];

  const bonus = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Checklist Inteligente de Importação",
      description: "Passo a passo completo para não errar"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Lista de Fornecedores Reais",
      description: "Contatos validados de fábricas confiáveis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Framework de Validação",
      description: "Metodologia para escolher produtos vencedores"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Mini Treinamento de Margem",
      description: "Como calcular preço e lucro corretamente"
    }
  ];

  return (
    <div className="min-h-screen bg-ice-bg-main text-ice-text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-ice-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ice-blue-primary rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ice-cyan rounded-full blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ice-purple rounded-full blur-[200px] opacity-10" />
        </div>
        
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-ice-bg-card border border-ice-border rounded-full text-sm font-bold text-ice-cyan uppercase tracking-wider">
                  <Snowflake className="w-4 h-4 inline-block mr-2 -mt-1" />
                  Negócio Automatizado
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  Enquanto você se diverte, suas vendas não param
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-ice-text-primary font-semibold">
                Seu negócio continua rodando, mesmo quando você está longe de casa.
              </p>

              <p className="text-lg text-ice-text-secondary leading-relaxed">
                A proposta da SouDrop é simples: você monta sua operação uma vez e deixa a estrutura trabalhar por você. Com automações de anúncios, integração com marketplaces e logística organizada, você não precisa estar "no computador o dia inteiro" pra faturar. Seja esquiando, viajando ou descansando, sua loja continua online, recebendo pedidos e gerando resultados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={handleCTA} 
                  size="lg" 
                  className="bg-gradient-to-r from-ice-blue-primary to-ice-cyan hover:from-ice-blue-secondary hover:to-ice-blue-primary text-white font-bold text-lg px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300 shadow-ice-glow hover:shadow-ice-cyan"
                >
                  Começar minha operação automática
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-ice-blue-primary text-ice-blue-primary hover:bg-ice-blue-primary hover:text-white font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300"
                >
                  Ver como a SouDrop funciona
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-ice-cyan" />
                  <span className="text-sm text-ice-text-secondary">12x de R$ 49,90</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-ice-cyan" />
                  <span className="text-sm text-ice-text-secondary">120 dias de garantia</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-ice-blue-primary to-ice-cyan rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <img 
                src={dashboardPreview} 
                alt="Dashboard SouDrop" 
                className="relative rounded-3xl shadow-2xl border-4 border-ice-border" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                O QUE VOCÊ RECEBE
              </span>
            </h2>
            <p className="text-xl text-ice-text-secondary">
              Tudo que você precisa para começar do jeito certo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entregaveis.map((item, index) => (
              <Card 
                key={index} 
                className="bg-ice-bg-card border border-ice-border hover:border-ice-blue-primary transition-all duration-300 hover:scale-105 hover:shadow-ice-glow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ice-blue-primary/20 to-ice-cyan/10 flex items-center justify-center text-ice-blue-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ice-text-primary">{item.title}</h3>
                  <p className="text-ice-text-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Autoridade - Renan */}
      <section className="py-20 px-4 relative bg-ice-bg-card-alt">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ice-purple rounded-full blur-[150px] opacity-10" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ice-blue-primary to-ice-cyan rounded-3xl blur-2xl opacity-20" />
              <img 
                src={renanFerreira} 
                alt="Renan Ferreira" 
                className="relative rounded-3xl shadow-2xl w-full border-2 border-ice-border" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-ice-bg-card px-4 py-2 rounded-full border border-ice-blue-primary">
                  <Trophy className="w-5 h-5 text-ice-cyan" />
                  <span className="text-sm font-bold text-ice-text-primary">MENTOR & ESPECIALISTA</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black">
                <span className="text-ice-text-primary">RENAN</span>
                <br />
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  FERREIRA
                </span>
              </h2>
              
              <p className="text-lg text-ice-text-secondary leading-relaxed">
                Especialista em Importação e Operação Real de E-commerce. Há anos trabalho com importação direta da China, lidando diariamente com fábricas, fornecedores, containers e toda a operação logística necessária para trazer produtos do outro lado do mundo.
              </p>
              
              <p className="text-lg text-ice-text-secondary leading-relaxed">
                Também tenho experiência prática com vendas nos principais marketplaces do Brasil: <span className="text-ice-blue-primary font-semibold">Mercado Livre, Shopee, Amazon e Magalu</span>.
              </p>

              <div className="bg-ice-bg-card border border-ice-blue-primary rounded-2xl p-6">
                <p className="text-xl font-bold text-ice-text-primary mb-2">Meu Compromisso:</p>
                <p className="text-ice-text-secondary">
                  Não ensino teoria — ensino <span className="text-ice-cyan font-bold">prática. Processo. Método</span>. O que funciona na vida real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                POR QUE SOUDROP START?
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-ice-bg-card border border-ice-border rounded-2xl p-6 hover:border-ice-blue-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-ice-glow"
              >
                <CheckCircle2 className="w-7 h-7 text-ice-blue-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-ice-text-primary">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus Section */}
      <section className="py-20 px-4 bg-ice-bg-card-alt relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-cyan rounded-full blur-[150px] opacity-10" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-ice-bg-card px-6 py-3 rounded-full border border-ice-cyan">
                <Gift className="w-6 h-6 text-ice-cyan" />
                <span className="text-lg font-bold text-ice-text-primary">BÔNUS EXCLUSIVOS</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                VOCÊ AINDA LEVA ISSO
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonus.map((item, index) => (
              <Card 
                key={index} 
                className="bg-ice-bg-card border border-ice-cyan/30 hover:border-ice-cyan transition-all duration-300 hover:scale-105 hover:shadow-ice-cyan"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ice-cyan to-ice-blue-primary flex items-center justify-center text-ice-bg-main">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ice-text-primary">{item.title}</h3>
                  <p className="text-ice-text-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social / Números */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-ice-text-secondary font-medium">Vendedores Ativos</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-ice-text-secondary font-medium">Integrações Ativas</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-ice-text-secondary font-medium">Tecnologia Própria</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-ice-text-secondary font-medium">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-20 px-4 bg-ice-bg-card-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-ice-bg-card border-2 border-ice-blue-primary rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ice-blue-primary/5 to-ice-cyan/5" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ice-blue-primary to-ice-cyan flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  120 DIAS DE GARANTIA
                </span>
              </h2>
              
              <p className="text-xl text-ice-text-secondary max-w-2xl mx-auto">
                Se dentro de 120 dias você não conseguir resultados aplicando nosso método, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>

              <div className="pt-4">
                <p className="text-lg font-bold text-ice-text-primary">
                  Você não tem <span className="text-ice-blue-primary">NADA</span> a perder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Final + CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ice-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-ice-blue-primary rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ice-cyan rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-ice-bg-card px-6 py-3 rounded-full border border-ice-cyan">
                <Snowflake className="w-6 h-6 text-ice-cyan" />
                <span className="text-lg font-bold text-ice-text-primary">OFERTA ESPECIAL</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black">
              <span className="text-ice-text-primary">COMECE</span>{" "}
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                AGORA
              </span>
            </h2>

            <div className="bg-ice-bg-card border-2 border-ice-blue-primary rounded-3xl p-8 max-w-md mx-auto shadow-ice-glow">
              <div className="space-y-4">
                <p className="text-sm text-ice-text-secondary uppercase tracking-wider">Investimento</p>
                <div className="space-y-2">
                  <p className="text-5xl font-black text-ice-text-primary">R$ 499,90</p>
                  <p className="text-2xl font-semibold text-ice-cyan">ou 12x de R$ 49,90</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-ice-text-secondary pt-2">
                  <Shield className="w-5 h-5 text-ice-cyan" />
                  <span className="text-sm">120 dias de garantia operacional</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                onClick={handleCTA} 
                size="lg" 
                className="bg-gradient-to-r from-ice-blue-primary to-ice-cyan hover:from-ice-cyan hover:to-ice-blue-primary text-white font-bold text-xl px-12 py-8 rounded-2xl shadow-ice-cyan hover:shadow-ice-glow transition-all duration-300 transform hover:scale-105"
              >
                COMEÇAR MINHA OPERAÇÃO AUTOMÁTICA
              </Button>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-lg font-bold text-ice-text-primary">
                ✓ Acesso imediato após confirmação do pagamento
              </p>
              <p className="text-lg font-bold text-ice-text-primary">
                ✓ Suporte e comunidade exclusiva
              </p>
              <p className="text-lg font-bold text-ice-text-primary">
                ✓ 120 dias de garantia total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ice-bg-card border-t border-ice-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-ice-text-secondary">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ice-text-secondary mt-4">
            SouDrop START - Monte sua operação automática e venda enquanto descansa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropStart;
