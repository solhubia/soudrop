import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target, Shield, Clock, Rocket, Star, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTracking } from "@/hooks/useTracking";

const FontesSecretasDetalhes = () => {
  const { trackEventOnce } = useTracking();
  
  const handleCTA = () => {
    trackEventOnce("click_fontes_secretas_cta", () => {
      const fbq = (window as any).fbq;
      if (fbq) {
        fbq("track", "Lead", {
          content_name: "Fontes Secretas CTA",
          value: 37,
          currency: "BRL"
        });
      }
    });
    window.open("https://pay.kiwify.com.br/fntsE35", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-6xl">
        {/* Before/After Table */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-[#FFD700] px-2 leading-tight">
            Antes e Depois das Fontes Secretas
          </h2>
          <Card className="overflow-hidden border-[#FFD700]/30">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-[#C41E3A]/20">
                    <th className="p-3 md:p-4 text-left text-[#FFF9E6]/60 text-xs md:text-base">Antes das Fontes Secretas</th>
                    <th className="p-3 md:p-4 text-left text-[#FFD700] text-xs md:text-base">Depois das Fontes Secretas</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Compra de revendedores locais", "Compra direto da origem"],
                    ["Margens pequenas (20–40%)", "Margens altas (até 300%)"],
                    ["Produtos saturados", "Produtos exclusivos e pouco explorados"],
                    ["Alto risco e desinformação", "Fornecedores testados e confiáveis"]
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-[#FFD700]/10">
                      <td className="p-3 md:p-4 text-[#FFF9E6]/70">{row[0]}</td>
                      <td className="p-3 md:p-4 text-[#FFD700]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* What You'll Learn */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-[#FFD700] px-2 leading-tight">
            O Que Você Vai Aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: TrendingUp,
                text: "Como descobrir produtos lucrativos antes de chegarem ao Brasil"
              },
              {
                icon: Target,
                text: "Como identificar fornecedores reais e confiáveis"
              },
              {
                icon: Rocket,
                text: "Como encontrar mar azul (produtos com baixa concorrência e alta margem)"
              },
              {
                icon: CheckCircle2,
                text: "Como validar um produto sem precisar de estoque"
              },
              {
                icon: Star,
                text: "Como montar sua própria lista de produtos vencedores"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-4 md:p-6 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C41E3A] mb-3 md:mb-4" />
                <p className="text-sm md:text-base text-[#FFF9E6]">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="mb-8 md:mb-16">
          <Card className="p-4 md:p-8 bg-gradient-to-r from-[#C41E3A]/20 to-[#FFD700]/10 border-[#FFD700] border-2">
            <div className="text-center">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-[#FFD700] mx-auto mb-3 md:mb-4" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-[#FFD700] px-2 leading-tight">
                🛡️ Garantia de 120 Dias: Risco Zero Para Você!
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]/90 mb-4 md:mb-6 max-w-3xl mx-auto px-2">
                Se você aplicar o método das <span className="text-[#FFD700] font-bold">Fontes Secretas da China</span>, seguir o passo a passo e <span className="text-[#C41E3A] font-bold">não encontrar produtos lucrativos ou fornecedores confiáveis</span> nos próximos <span className="font-bold">120 dias</span>, eu devolvo <span className="font-bold">100% do seu investimento</span>.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]/90 mb-4 md:mb-6 max-w-3xl mx-auto px-2">
                Tenho tanta certeza de que, com as estratégias do treinamento, <span className="text-[#FFD700] font-bold">você vai encontrar produtos ocultos e margens de lucro que nunca viu antes</span>, que criei essa <span className="font-bold">garantia absurda</span>:<br />
                👉 <span className="text-[#C41E3A] font-bold">ou você tem resultado, ou não paga nada.</span>
              </p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center justify-center gap-2 md:gap-3 px-2">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] flex-shrink-0" />
                  <span className="text-sm md:text-base text-[#FFF9E6] text-left">Você tem 120 dias inteiros pra testar</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-3 px-2">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] flex-shrink-0" />
                  <span className="text-sm md:text-base text-[#FFF9E6] text-left">Se não tiver lucro ou não achar oportunidades reais, o risco é meu</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#FFF9E6]/60 italic px-2">
                "Se você não tiver resultado, eu não quero o seu dinheiro. Eu quero o seu sucesso."
              </p>
            </div>
          </Card>
        </section>

        {/* Pricing Section */}
        <section className="mb-8 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 text-[#FFD700] px-2 leading-tight">
              Acesso às Fontes Secretas da China
            </h2>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#C41E3A] mb-3 md:mb-4">
              Por Apenas R$37 💥
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]/80 max-w-2xl mx-auto mb-6 md:mb-8 px-3">
              Tenha acesso imediato ao treinamento completo e aprenda o mesmo método usado por grandes importadores para descobrir produtos lucrativos e fornecedores reais, direto da China.
            </p>
          </div>

          <Card className="p-4 md:p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "📊 Planilha de cálculo de custos e lucros",
                "🧭 Checklist de verificação de fornecedores",
                "💬 Grupo VIP com atualizações e oportunidades"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] flex-shrink-0 mt-0.5 md:mt-1" />
                  <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 bg-[#C41E3A]/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700]" />
                <span className="text-xs md:text-sm text-[#FFD700] font-semibold">Oferta por tempo limitado</span>
              </div>
            </div>

            <Button 
              onClick={handleCTA} 
              className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white text-base md:text-lg lg:text-xl py-4 md:py-6 rounded-lg font-bold shadow-[0_0_30px_rgba(196,30,58,0.5)] hover:shadow-[0_0_40px_rgba(196,30,58,0.7)] transition-all"
            >
              🔥 Quero Acessar as Fontes Secretas Agora
              <ChevronRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-[#FFD700] px-2 leading-tight">
            Dúvidas Frequentes
          </h2>
          <Card className="p-4 md:p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Preciso ter CNPJ para importar?",
                  answer: "Não! Você pode começar como pessoa física e depois formalizar."
                },
                {
                  question: "Posso começar com pouco dinheiro?",
                  answer: "Sim. Há estratégias seguras para começar com valores baixos e escalar gradualmente."
                },
                {
                  question: "Recebo acesso imediato?",
                  answer: "Sim, o acesso é liberado assim que o pagamento é confirmado."
                },
                {
                  question: "E se eu não gostar do curso?",
                  answer: "Você tem 120 dias de garantia total — risco zero."
                },
                {
                  question: "Posso importar mesmo sem falar chinês?",
                  answer: "Sim! O método mostra como negociar de forma simples, com ferramentas automáticas e seguras."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-sm md:text-base text-[#FFF9E6] hover:text-[#FFD700] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-[#FFF9E6]/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center px-2">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 text-[#FFD700] leading-tight">
            Enquanto outros ainda compram caro de intermediários...
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-[#FFF9E6] leading-tight">
            Você vai direto na <span className="text-[#C41E3A] font-bold">fonte secreta dos produtos mais baratos do mundo.</span>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo hoje e descubra onde nascem os produtos que geram margens absurdas de lucro.
          </p>
          <Button 
            onClick={handleCTA} 
            className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white text-lg md:text-xl lg:text-2xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-bold shadow-[0_0_30px_rgba(196,30,58,0.5)] hover:shadow-[0_0_40px_rgba(196,30,58,0.7)] transition-all"
          >
            👉 Quero Descobrir as Fontes Secretas Agora
          </Button>
        </section>
      </div>
    </div>
  );
};

export default FontesSecretasDetalhes;
