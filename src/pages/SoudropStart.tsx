import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Users, BookOpen, Trophy, Gift, TrendingUp, Target, BarChart3, Package, Snowflake, Mountain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import renanFerreira from "@/assets/renan-ferreira.jpg";
import heroSoudrop from "@/assets/hero-soudrop.jpg";
const SoudropStart = () => {
  const navigate = useNavigate();
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
  const entregaveis = [{
    icon: <Zap className="w-8 h-8" />,
    title: "3 Integrações Liberadas",
    description: "Conecte seus marketplaces"
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Home Personalizada",
    description: "Dashboard sob medida"
  }, {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Dashboard Completo",
    description: "Controle total das vendas"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "120 Dias de Garantia",
    description: "Risco zero"
  }, {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Treinamento Prático",
    description: "Zero enrolação"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Comunidade Exclusiva",
    description: "Rede de importadores"
  }];
  const beneficios = ["Comece certo, sem erros caros", "Escolha produtos com dados reais", "Evite produtos proibidos", "Processos validados na prática", "Suporte + tecnologia inclusos"];
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
  return <div className="min-h-screen bg-ice-bg-main text-ice-text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-ice-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-40 h-40 md:w-72 md:h-72 bg-ice-blue-primary rounded-full blur-[100px] md:blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-5 w-48 h-48 md:w-96 md:h-96 bg-ice-cyan rounded-full blur-[120px] md:blur-[150px] opacity-15 animate-pulse" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-ice-purple rounded-full blur-[150px] md:blur-[200px] opacity-10" />
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <h1 className="text-[28px] leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black max-w-4xl px-2">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                Existe um código simples que permite que pessoas comuns  possam faturarem todos os dias enquanto vivem experiências que antes pareciam impossíveis.
              </span>
            </h1>
            
            <div className="space-y-4 md:space-y-5 max-w-3xl">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ice-text-primary font-bold leading-tight px-4">
                Eu mesmo estou aplicando isso agora.
                <br />
                Estou no Chile, na neve, enquanto meu negócio continua faturando sozinho.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-ice-text-secondary leading-relaxed px-4">
                Na aula especial, eu vou te ensinar como montar sua operação automatizada de dropshipping e ativar um sistema que trabalha enquanto você vive.
              </p>

              <div className="space-y-2 text-sm sm:text-base md:text-lg text-ice-text-primary font-semibold px-4">
                <p>Zero enrolação.</p>
                <p>Zero promessas vazias.</p>
                <p>Somente o passo a passo real.</p>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-ice-text-primary font-bold px-4 pt-2">
                👉 Participe da aula e entenda como destravar sua liberdade digital.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 md:pt-6 w-full max-w-2xl px-4">
              <div style={{
              textAlign: 'center',
              width: '100%'
            }}>
                <button type="button" className="wj-embed-button hover:scale-105 transition-transform duration-300" data-webinarHash="8wgw0kty" style={{
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: 'rgba(41, 182, 246, 0.95)',
                color: 'rgb(255, 255, 255)',
                fontSize: '20px',
                padding: '16px 60px',
                boxShadow: '0 10px 40px rgba(41, 182, 246, 0.3)',
                borderRadius: '12px',
                whiteSpace: 'normal',
                fontWeight: '700',
                lineHeight: '1.3',
                cursor: 'pointer',
                fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                wordBreak: 'break-word',
                margin: 'auto',
                width: '100%',
                maxWidth: '500px'
              }}>
                  Começar agora
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-ice-cyan flex-shrink-0" />
                <span className="text-sm md:text-base text-ice-text-secondary font-medium">120 dias de garantia total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                O QUE VOCÊ RECEBE
              </span>
            </h2>
            <p className="text-lg md:text-xl text-ice-text-secondary px-4">
              Tudo que você precisa para começar do jeito certo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {entregaveis.map((item, index) => <Card key={index} className="bg-ice-bg-card border border-ice-border hover:border-ice-blue-primary transition-all duration-300 hover:scale-105 hover:shadow-ice-glow">
                <CardContent className="p-5 md:p-6 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-ice-blue-primary/20 to-ice-cyan/10 flex items-center justify-center text-ice-blue-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-ice-text-primary">{item.title}</h3>
                  <p className="text-sm md:text-base text-ice-text-secondary">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Seção de Autoridade - Renan */}
      <section className="py-12 md:py-20 px-4 relative bg-ice-bg-card-alt">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-ice-purple rounded-full blur-[150px] opacity-10" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-ice-blue-primary to-ice-cyan rounded-3xl blur-2xl opacity-20" />
              <img src={renanFerreira} alt="Renan Ferreira" className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full border-2 border-ice-border" />
            </div>
            
            <div className="space-y-5 md:space-y-6 order-1 md:order-2">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-ice-bg-card px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-ice-blue-primary">
                  <Trophy className="w-4 h-4 md:w-5 md:h-5 text-ice-cyan" />
                  <span className="text-xs md:text-sm font-bold text-ice-text-primary">MENTOR & ESPECIALISTA</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
                <span className="text-ice-text-primary">RENAN</span>
                <br />
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  FERREIRA
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-ice-text-secondary leading-relaxed">
                Anos importando da China e vendendo nos principais marketplaces: <span className="text-ice-blue-primary font-semibold">Mercado Livre, Shopee, Amazon e Magalu</span>.
              </p>

              <div className="bg-ice-bg-card border border-ice-blue-primary rounded-xl md:rounded-2xl p-5 md:p-6">
                <p className="text-lg md:text-xl font-bold text-ice-text-primary mb-2">Compromisso:</p>
                <p className="text-sm md:text-base text-ice-text-secondary">
                  Zero teoria. <span className="text-ice-cyan font-bold">100% prática validada</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 px-4">
              <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                POR QUE SOUDROP?
              </span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {beneficios.map((beneficio, index) => <div key={index} className="flex items-start gap-3 md:gap-4 bg-ice-bg-card border border-ice-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-ice-blue-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-ice-glow">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-ice-blue-primary flex-shrink-0 mt-0.5 md:mt-1" />
                <p className="text-base md:text-lg font-medium text-ice-text-primary">{beneficio}</p>
              </div>)}
          </div>
        </div>
      </section>


      {/* Prova Social / Números */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-1.5 md:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-xs sm:text-sm md:text-base text-ice-text-secondary font-medium">Vendedores Ativos</p>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-xs sm:text-sm md:text-base text-ice-text-secondary font-medium">Integrações Ativas</p>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-xs sm:text-sm md:text-base text-ice-text-secondary font-medium">Tecnologia Própria</p>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-ice-primary bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-xs sm:text-sm md:text-base text-ice-text-secondary font-medium">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-12 md:py-20 px-4 bg-ice-bg-card-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-ice-bg-card border-2 border-ice-blue-primary rounded-2xl md:rounded-3xl p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ice-blue-primary/5 to-ice-cyan/5" />
            
            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-br from-ice-blue-primary to-ice-cyan flex items-center justify-center">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black px-4">
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  120 DIAS DE GARANTIA
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-ice-text-secondary max-w-2xl mx-auto px-4">
                Não deu resultado em 120 dias? Devolvemos 100%. Sem enrolação.
              </p>

              <div className="pt-2 md:pt-4">
                <p className="text-base md:text-lg font-bold text-ice-text-primary">
                  Risco <span className="text-ice-blue-primary">ZERO</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Final + CTA */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ice-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-ice-blue-primary rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-ice-cyan rounded-full blur-[150px] opacity-20 animate-pulse" style={{
          animationDelay: '1s'
        }} />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-ice-bg-card px-4 py-2 md:px-6 md:py-3 rounded-full border border-ice-cyan shadow-lg">
                  <Snowflake className="w-5 h-5 md:w-6 md:h-6 text-ice-cyan" />
                  <span className="text-sm md:text-lg font-bold text-ice-text-primary">OFERTA ESPECIAL</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-4">
                <span className="text-ice-text-primary">COMECE</span>{" "}
                <span className="bg-gradient-ice-primary bg-clip-text text-transparent">
                  AGORA
                </span>
              </h2>

              <div className="bg-ice-bg-card border-2 border-ice-blue-primary rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-md mx-auto shadow-ice-glow">
                <div className="flex items-center justify-center gap-2 text-ice-text-secondary">
                  <Shield className="w-5 h-5 text-ice-cyan" />
                  <span className="text-sm md:text-base">120 dias de garantia operacional</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-2xl px-4">
              <div style={{
              textAlign: 'center',
              width: '100%'
            }}>
                <button type="button" className="wj-embed-button hover:scale-105 transition-transform duration-300" data-webinarHash="8wgw0kty" style={{
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: 'rgba(41, 182, 246, 0.95)',
                color: 'rgb(255, 255, 255)',
                fontSize: '22px',
                padding: '18px 70px',
                boxShadow: '0 10px 40px rgba(41, 182, 246, 0.3)',
                borderRadius: '12px',
                whiteSpace: 'normal',
                fontWeight: '700',
                lineHeight: '1.3',
                cursor: 'pointer',
                fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                wordBreak: 'break-word',
                margin: 'auto',
                width: '100%',
                maxWidth: '600px'
              }}>
                  COMEÇAR AGORA
                </button>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 px-4 max-w-2xl">
              <p className="text-sm sm:text-base md:text-lg font-bold text-ice-text-primary flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ice-cyan flex-shrink-0" />
                Acesso imediato após confirmação do pagamento
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-ice-text-primary flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ice-cyan flex-shrink-0" />
                Suporte e comunidade exclusiva
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-ice-text-primary flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ice-cyan flex-shrink-0" />
                120 dias de garantia total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ice-bg-card border-t border-ice-border py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xs md:text-sm text-ice-text-secondary">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ice-text-secondary mt-3 md:mt-4 px-4">
            SouDrop START - Monte sua operação automática e venda enquanto descansa
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropStart;