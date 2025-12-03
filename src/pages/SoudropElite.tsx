import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Target, TrendingUp, Users, Briefcase, Calculator, GraduationCap, Award, Shield, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import soudropLogo from "@/assets/soudrop-logo-oficial.png";
import { AnimatedSection } from "@/components/AnimatedSection";
const SoudropElite = () => {
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
  const pilares = [{
    icon: TrendingUp,
    title: "Como encontrar produtos para vender",
    description: "Aprenda a identificar produtos com demanda, que vendem bem e têm margem de lucro interessante. Sem chute, com método."
  }, {
    icon: Target,
    title: "Onde e como anunciar",
    description: "Domine os principais marketplaces (Mercado Livre, Shopee, etc) e aprenda a criar anúncios que convertem em vendas."
  }, {
    icon: Briefcase,
    title: "Gestão de pedidos sem estoque",
    description: "Entenda como funciona o dropshipping e como gerenciar pedidos sem precisar ter produtos em casa."
  }, {
    icon: Calculator,
    title: "Precificação e lucro real",
    description: "Calcule corretamente seus custos, defina preços competitivos e garanta que você está lucrando de verdade."
  }, {
    icon: Shield,
    title: "Evite os erros mais comuns",
    description: "Produtos proibidos, fornecedores ruins, anúncios bloqueados - aprenda o que NÃO fazer para economizar tempo e dinheiro."
  }, {
    icon: GraduationCap,
    title: "Suporte e comunidade",
    description: "Acesso a materiais de apoio, tirando dúvidas e uma comunidade de pessoas que estão no mesmo caminho que você."
  }];
  const paraQuemE = ["Quer ter uma renda extra trabalhando de casa", "Busca uma fonte de renda principal sem sair de casa", "Não tem capital para investir em estoque", "Quer flexibilidade de horários para trabalhar quando puder", "Tem disposição para aprender algo novo e aplicar"];
  return <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24 md:pb-36 px-5 sm:px-6 md:px-4">
        <div className="absolute inset-0 bg-black" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-12">
            <AnimatedSection delay={0}>
              <div className="inline-block">
                <span className="px-5 md:px-7 py-2.5 md:py-3 bg-yellow-950/80 text-elite-gold rounded-full text-xs md:text-sm font-semibold border border-elite-gold/50 tracking-wider uppercase backdrop-blur-sm shadow-lg shadow-yellow-900/20">
                  🔴 Método Sem Estoque
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-white leading-[1.25] sm:leading-[1.2] tracking-tight max-w-4xl mx-auto">
                Descubra como <span className="text-elite-gold drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">vender sem estoque</span> no método que fazem até iniciantes{" "}
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">lucrarem mais de 100 mil reais por mês</span>{" "}
                sem <span className="text-elite-gold drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">investir em estoque</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                O método simples para vender online sem investir em estoque — inclusive produtos comuns, como uma simples tomada — e lucrar mais de R$100.000 por mês.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                Garanta sua vaga e faça suas primeiras vendas com produtos comuns.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="pt-4 sm:pt-6 md:pt-8">
                <div style={{
                textAlign: "center"
              }}>
                  <button type="button" className="wj-embed-button w-full sm:w-auto group" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
                  color: "rgb(0, 0, 0)",
                  fontSize: "16px",
                  padding: "18px 32px",
                  boxShadow: "0 15px 50px rgba(251, 191, 36, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.2)",
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
                }}>GARANTIR VAGA    <ArrowRight className="inline-block ml-2 h-5 w-5" /></button>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-5 md:mt-6 tracking-wide flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Método ao vivo</span>
                  <span>·</span>
                  <span>Vagas limitadas</span>
                  <span>·</span>
                  <span>Não fica disponível depois</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O que é a aula */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-black to-[#050A18]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            O que você vai <span className="text-elite-gold">aprender na aula</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Na aula ao vivo, vou te mostrar exatamente como transformar produtos simples em uma operação lucrativa.
            Sem enrolação, sem teoria — só o que funciona na prática.
          </p>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            Essa aula é para <span className="text-elite-gold">quem quer:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {paraQuemE.map((item, index) => <div key={index} className="flex items-start gap-4 p-5 sm:p-6 bg-black/50 border border-elite-gold/20 rounded-xl hover:border-elite-gold/40 transition-all">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-base sm:text-lg">{item}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Conteúdo da Aula */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A18] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-white">
            O que vou revelar <span className="text-elite-gold">na aula</span>
          </h2>
          <p className="text-center text-gray-400 mb-10 sm:mb-16 text-base sm:text-lg">
            A estratégia completa para faturar com produtos simples
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return <Card key={index} className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border border-elite-gold/20 hover:border-elite-gold/50 transition-all">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-elite-gold to-yellow-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{pilar.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{pilar.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18] border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-elite-gold mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
            O que muda depois dessa aula
          </h2>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 text-left">
            <div className="p-6 sm:p-8 bg-black/50 border border-red-500/30 rounded-xl">
              <p className="text-red-400 font-bold mb-3 sm:mb-4 text-base sm:text-lg">❌ ANTES</p>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li>• Sem renda extra</li>
                <li>• Preso ao escritório ou emprego</li>
                <li>• Sem flexibilidade de horários</li>
                <li>• Dependendo de um salário fixo</li>
                <li>• Sem controle da própria agenda</li>
              </ul>
            </div>
            <div className="p-6 sm:p-8 bg-elite-gold/10 border border-elite-gold/50 rounded-xl">
              <p className="text-elite-gold font-bold mb-3 sm:mb-4 text-base sm:text-lg">✓ DEPOIS</p>
              <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <li>• Vendendo de casa</li>
                <li>• Trabalhando no seu horário</li>
                <li>• Renda extra ou principal</li>
                <li>• Sem precisar de estoque</li>
                <li>• Mais liberdade e flexibilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção do Mentor */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img src={renanPhoto} alt="Renan Ferreira" className="w-full rounded-2xl border-4 border-elite-gold/30 shadow-[0_0_40px_rgba(251,191,36,0.2)]" />
            </div>
            <div>
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-4 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
                <Crown className="w-4 h-4 text-elite-gold" />
                <span className="text-elite-gold text-xs sm:text-sm font-medium uppercase tracking-wider">Seu Instrutor</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Renan Ferreira
              </h2>
              <p className="text-lg sm:text-xl text-elite-gold mb-4 sm:mb-6 font-semibold">
                Especialista em Vendas Online e Marketplaces
              </p>
              
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Anos de experiência com <span className="text-elite-gold font-semibold">vendas em marketplaces</span> e 
                  operação prática nos principais canais: Mercado Livre, Shopee, Amazon e Magalu.
                </p>
                <p>
                  Também trabalho com <span className="text-elite-gold font-semibold">importação direta da China</span>, 
                  o que me dá uma visão completa de toda a cadeia.
                </p>
                <p className="text-white font-semibold text-base sm:text-lg">
                  Meu objetivo é ensinar você do jeito mais prático possível:
                </p>
                <p>
                  Sem enrolação, sem teoria demais. Foco em fazer você começar a vender de verdade, 
                  <span className="text-elite-gold font-semibold"> aplicando o que funciona na prática</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso Exclusivo */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18]">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-elite-gold mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Método <span className="text-elite-gold">Validado</span>
          </h2>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-xl text-gray-300 leading-relaxed">
            <p>Método testado e comprovado</p>
            <p>Foco em resultados práticos</p>
            <p className="text-elite-gold font-semibold">
              Aprenda com quem já vendeu e continua vendendo todos os dias
            </p>
          </div>
          <div className="mt-8 sm:mt-12 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-elite-gold/10 border-2 border-elite-gold rounded-xl">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-elite-gold" />
            <span className="text-elite-gold font-bold text-base sm:text-xl uppercase tracking-wide">Acesso Completo</span>
          </div>
        </div>
      </section>

      {/* Posicionamento / Prova */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-gradient-to-b from-[#050A18] to-black border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-white">
            Por que confiar no <span className="text-elite-gold">Método</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-6 sm:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
              <p className="text-3xl sm:text-4xl font-bold text-elite-gold mb-2">500+</p>
              <p className="text-gray-400 text-sm sm:text-base">Alunos Ativos</p>
            </div>
            <div className="p-6 sm:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
              <p className="text-3xl sm:text-4xl font-bold text-elite-gold mb-2">5+ Anos</p>
              <p className="text-gray-400 text-sm sm:text-base">de Experiência Prática</p>
            </div>
            <div className="p-6 sm:p-8 bg-black/50 border border-elite-gold/20 rounded-xl">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-elite-gold mx-auto mb-3 sm:mb-4" />
              <p className="text-3xl sm:text-4xl font-bold text-elite-gold mb-2">100%</p>
              <p className="text-gray-400 text-sm sm:text-base">Foco em Prática</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Garanta Sua Vaga <span className="text-elite-gold">Na Aula</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400">
              Aula gratuita e ao vivo — vagas limitadas
            </p>
          </div>

          <Card className="bg-gradient-to-br from-[#0A1124]/90 to-[#0A1124]/60 border-2 border-elite-gold/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-elite-gold/10 border border-elite-gold/30 rounded-full mb-4 sm:mb-6">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-elite-gold" />
                  <span className="text-elite-gold font-bold text-xs sm:text-sm uppercase tracking-wider">Método Sem Estoque</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-white">
                  Descubra como faturar alto<br />
                  <span className="text-elite-gold">vendendo produtos simples</span>
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">Aula 100% gratuita e ao vivo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">Estratégia completa revelada</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">Materiais bônus durante a aula</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-elite-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">Tire suas dúvidas em tempo real</p>
                  </div>
                </div>

                <div style={{
                textAlign: 'center'
              }}>
                  <button type="button" className="wj-embed-button w-full sm:w-auto" data-webinarHash="8wgw0kty" style={{
                  border: "none",
                  background: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
                  color: "rgb(0, 0, 0)",
                  fontSize: "16px",
                  padding: "18px 32px",
                  boxShadow: "0 15px 50px rgba(251, 191, 36, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.2)",
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
                }}>GARANTIR MINHA VAGA AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" /></button>
                </div>

                <p className="mt-5 sm:mt-6 text-gray-500 text-xs sm:text-sm">
                  • Método ao vivo · Vagas limitadas · Não fica disponível depois
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final 2 */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-4 bg-[#050A18] border-t border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-14 h-14 sm:w-20 sm:h-20 text-elite-gold mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Está Pronto para Começar?
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Comece hoje a construir sua <span className="text-elite-gold font-bold">renda extra ou principal</span>
          </p>
          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que estão aprendendo a vender online de casa,
            sem estoque e com método validado.
          </p>
          
          <div style={{
          textAlign: 'center'
        }}>
            <button type="button" className="wj-embed-button w-full sm:w-auto" data-webinarHash="8wgw0kty" style={{
            border: "none",
            background: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
            color: "rgb(0, 0, 0)",
            fontSize: "16px",
            padding: "18px 32px",
            boxShadow: "0 15px 50px rgba(251, 191, 36, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.2)",
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
          }}>GARANTIR MINHA VAGA AGORA <ArrowRight className="inline-block ml-2 h-5 w-5" /></button>
          </div>

          <p className="mt-6 sm:mt-8 text-elite-gold font-semibold text-base sm:text-lg">
            ⚡ Comece hoje mesmo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-5 sm:px-6 md:px-4 bg-black border-t border-elite-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default SoudropElite;