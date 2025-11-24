import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Users, BookOpen, Trophy, Gift, Clock, TrendingUp, Target, BarChart3, Package } from "lucide-react";
import renanFerreira from "@/assets/renan-ferreira.jpg";
import soudropLogo from "@/assets/soudrop-logo-oficial.png";
const SoudropStart = () => {
  const handleCTA = () => {
    window.open('https://pay.kiwify.com.br/RIqama1', '_blank');
  };
  const entregaveis = [{
    icon: <Zap className="w-8 h-8" />,
    title: "3 Integrações Liberadas",
    description: "Conecte suas principais vendas nos marketplaces"
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Home Personalizada",
    description: "Dashboard customizado para sua operação"
  }, {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Dashboard Limitada",
    description: "Ideal para iniciantes começarem com segurança"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "120 Dias de Garantia",
    description: "Garantia operacional completa"
  }, {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Treinamento Prático",
    description: "Direto ao ponto, sem enrolação"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Comunidade Exclusiva",
    description: "Acesso à rede de importadores ativos"
  }];
  const beneficios = ["Comece do jeito certo sem perder dinheiro", "Evite erros que fazem iniciantes quebrarem", "Aprenda a escolher produtos com dados reais", "Evite produtos proibidos e de alto risco", "Aplique processos validados por quem opera no dia a dia", "Tenha suporte + tecnologia para acelerar resultados"];
  const bonus = [{
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Checklist Inteligente de Importação",
    description: "Passo a passo completo para não errar"
  }, {
    icon: <Package className="w-6 h-6" />,
    title: "Lista de Fornecedores Reais",
    description: "Contatos validados de fábricas confiáveis"
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Framework de Validação",
    description: "Metodologia para escolher produtos vencedores"
  }, {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Mini Treinamento de Margem",
    description: "Como calcular preço e lucro corretamente"
  }];
  return <div className="min-h-screen bg-[hsl(var(--cacador-bg-main))] text-[hsl(var(--cacador-text-primary))]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(275_38%_2%)_0%,hsl(335_100%_8%)_50%,hsl(275_38%_2%)_100%)]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--cacador-pink))] rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--cacador-yellow))] rounded-full blur-[150px] opacity-15 animate-pulse" style={{
          animationDelay: '1s'
        }} />
        </div>
        
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block mb-4">
              
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-pink-light))] bg-clip-text text-transparent">
                EU TE ENTREGO O SISTEMA.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(48_100%_60%)] bg-clip-text text-transparent">
                VOCÊ TRANSFORMA EM VENDA.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[hsl(var(--cacador-text-secondary))] max-w-3xl mx-auto font-medium">
              Como lucrar com os produtos da SouDrop mesmo sem ter estoque.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button onClick={handleCTA} size="xl" className="bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(48_100%_45%)] text-black font-bold text-lg px-12 py-8 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-[0_4px_30px_hsl(48_100%_50%/0.4)]">
                QUERO ENTRAR AGORA
              </Button>
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-white">12x de R$ 49,90</p>
                <p className="text-sm text-[hsl(var(--cacador-text-secondary))]">ou R$ 499,90 à vista</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <Shield className="w-5 h-5 text-[hsl(var(--cacador-pink))]" />
              <span className="text-sm text-[hsl(var(--cacador-text-secondary))]">
                120 dias de garantia operacional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                O QUE VOCÊ RECEBE
              </span>
            </h2>
            <p className="text-xl text-[hsl(var(--cacador-text-secondary))]">
              Tudo que você precisa para começar do jeito certo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entregaveis.map((item, index) => <Card key={index} className="bg-[hsl(var(--cacador-dark-card))] border-[hsl(var(--cacador-pink))/20] hover:border-[hsl(var(--cacador-pink))/60] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_hsl(335_100%_50%/0.2)]">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--cacador-pink))/20] to-[hsl(var(--cacador-pink))/5] flex items-center justify-center text-[hsl(var(--cacador-pink))]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-[hsl(var(--cacador-text-secondary))]">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Seção de Autoridade - Renan */}
      <section className="py-20 px-4 relative bg-[hsl(var(--cacador-bg-section))]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--cacador-pink))] rounded-full blur-[150px] opacity-10" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] rounded-3xl blur-2xl opacity-20" />
              <img src={renanFerreira} alt="Renan Ferreira" className="relative rounded-3xl shadow-2xl w-full" />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--cacador-pink))/20] to-[hsl(var(--cacador-yellow))/20] px-4 py-2 rounded-full border border-[hsl(var(--cacador-pink))/30]">
                  <Trophy className="w-5 h-5 text-[hsl(var(--cacador-yellow))]" />
                  <span className="text-sm font-bold">MENTOR & ESPECIALISTA</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black">
                <span className="text-white">RENAN</span>
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                  FERREIRA
                </span>
              </h2>
              
              <p className="text-lg text-[hsl(var(--cacador-text-secondary))] leading-relaxed">
                Especialista em Importação e Operação Real de E-commerce. Há anos trabalho com importação direta da China, lidando diariamente com fábricas, fornecedores, containers e toda a operação logística necessária para trazer produtos do outro lado do mundo.
              </p>
              
              <p className="text-lg text-[hsl(var(--cacador-text-secondary))] leading-relaxed">
                Também tenho experiência prática com vendas nos principais marketplaces do Brasil: <span className="text-[hsl(var(--cacador-pink))] font-semibold">Mercado Livre, Shopee, Amazon e Magalu</span>.
              </p>

              <div className="bg-gradient-to-r from-[hsl(var(--cacador-pink))/10] to-[hsl(var(--cacador-yellow))/10] border border-[hsl(var(--cacador-pink))/30] rounded-2xl p-6">
                <p className="text-xl font-bold text-white mb-2">Meu Compromisso:</p>
                <p className="text-[hsl(var(--cacador-text-secondary))]">
                  Não ensino teoria — ensino <span className="text-[hsl(var(--cacador-yellow))] font-bold">prática. Processo. Método</span>. O que funciona na vida real.
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
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(var(--cacador-pink))] bg-clip-text text-transparent">
                POR QUE SOUDROP START?
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {beneficios.map((beneficio, index) => <div key={index} className="flex items-start gap-4 bg-[hsl(var(--cacador-dark-card))] border border-[hsl(var(--cacador-pink))/20] rounded-2xl p-6 hover:border-[hsl(var(--cacador-pink))/60] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_hsl(335_100%_50%/0.2)]">
                <CheckCircle2 className="w-7 h-7 text-[hsl(var(--cacador-pink))] flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-white">{beneficio}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Bônus Section */}
      <section className="py-20 px-4 bg-[hsl(var(--cacador-bg-section))] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--cacador-yellow))] rounded-full blur-[150px] opacity-10" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--cacador-yellow))/20] to-[hsl(var(--cacador-pink))/20] px-6 py-3 rounded-full border border-[hsl(var(--cacador-yellow))/50]">
                <Gift className="w-6 h-6 text-[hsl(var(--cacador-yellow))]" />
                <span className="text-lg font-bold">BÔNUS EXCLUSIVOS</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(var(--cacador-pink))] bg-clip-text text-transparent">
                VOCÊ AINDA LEVA ISSO
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonus.map((item, index) => <Card key={index} className="bg-gradient-to-br from-[hsl(var(--cacador-dark-card))] to-[hsl(var(--cacador-bg-section))] border-[hsl(var(--cacador-yellow))/30] hover:border-[hsl(var(--cacador-yellow))/80] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_hsl(48_100%_50%/0.2)]">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--cacador-yellow))] to-[hsl(48_100%_45%)] flex items-center justify-center text-black">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-[hsl(var(--cacador-text-secondary))]">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Prova Social / Números */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-[hsl(var(--cacador-text-secondary))] font-medium">Vendedores Ativos</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(var(--cacador-pink))] bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-[hsl(var(--cacador-text-secondary))] font-medium">Integrações Ativas</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-[hsl(var(--cacador-text-secondary))] font-medium">Tecnologia Própria</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(var(--cacador-pink))] bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-[hsl(var(--cacador-text-secondary))] font-medium">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-20 px-4 bg-[hsl(var(--cacador-bg-section))]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[hsl(var(--cacador-dark-card))] to-[hsl(var(--cacador-bg-section))] border-2 border-[hsl(var(--cacador-pink))] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cacador-pink))/5] to-[hsl(var(--cacador-yellow))/5]" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                  120 DIAS DE GARANTIA
                </span>
              </h2>
              
              <p className="text-xl text-[hsl(var(--cacador-text-secondary))] max-w-2xl mx-auto">
                Se dentro de 120 dias você não conseguir resultados aplicando nosso método, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>

              <div className="pt-4">
                <p className="text-lg font-bold text-white">
                  Você não tem <span className="text-[hsl(var(--cacador-pink))]">NADA</span> a perder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Final + CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(275_38%_2%)_0%,hsl(335_100%_8%)_50%,hsl(275_38%_2%)_100%)]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--cacador-pink))] rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--cacador-yellow))] rounded-full blur-[150px] opacity-20 animate-pulse" style={{
          animationDelay: '1s'
        }} />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--cacador-yellow))/20] to-[hsl(var(--cacador-pink))/20] px-6 py-3 rounded-full border border-[hsl(var(--cacador-yellow))/50]">
                <Clock className="w-6 h-6 text-[hsl(var(--cacador-yellow))]" />
                <span className="text-lg font-bold">OFERTA ESPECIAL</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black">
              <span className="text-white">COMECE</span>{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--cacador-pink))] to-[hsl(var(--cacador-yellow))] bg-clip-text text-transparent">
                AGORA
              </span>
            </h2>

            <div className="bg-gradient-to-br from-[hsl(var(--cacador-dark-card))] to-[hsl(var(--cacador-bg-section))] border-2 border-[hsl(var(--cacador-pink))/50] rounded-3xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <p className="text-sm text-[hsl(var(--cacador-text-secondary))] uppercase tracking-wider">Investimento</p>
                <div className="space-y-2">
                  <p className="text-6xl font-black bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(var(--cacador-pink))] bg-clip-text text-transparent">
                    12x
                  </p>
                  <p className="text-4xl font-bold text-white">R$ 49,90</p>
                  <p className="text-lg text-[hsl(var(--cacador-text-secondary))]">
                    ou <span className="text-white font-bold">R$ 499,90</span> à vista
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Button onClick={handleCTA} size="xl" className="bg-gradient-to-r from-[hsl(var(--cacador-yellow))] to-[hsl(48_100%_45%)] text-black font-bold text-xl px-16 py-10 rounded-2xl hover:scale-110 transition-all duration-300 shadow-[0_8px_60px_hsl(48_100%_50%/0.6)] hover:shadow-[0_8px_80px_hsl(48_100%_50%/0.8)] animate-pulse">
              GARANTIR POR R$ 49,90/MÊS
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[hsl(var(--cacador-text-secondary))]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[hsl(var(--cacador-pink))]" />
                <span>120 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--cacador-pink))]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[hsl(var(--cacador-yellow))]" />
                <span>Suporte incluído</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[hsl(var(--cacador-pink))/20]">
            <p className="text-2xl font-bold text-white mb-4">
              Não perca tempo com teoria.
            </p>
            <p className="text-xl text-[hsl(var(--cacador-text-secondary))]">
              Comece hoje com estrutura + método validado por quem importa de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[hsl(var(--cacador-pink))/20] bg-[hsl(var(--cacador-bg-section))]">
        <div className="container mx-auto text-center">
          
          <p className="text-sm text-[hsl(var(--cacador-text-secondary))]">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropStart;