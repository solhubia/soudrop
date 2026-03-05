import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, TrendingUp, Target, Shield, Clock, Rocket, Star, ChevronRight, X } from "lucide-react";
import antesDepoisImage from "@/assets/antes-depois-produtos.png";
import garantia120Image from "@/assets/garantia-120.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTracking } from "@/hooks/useTracking";

const FontesSecretasDetalhes = () => {
  const { trackEventOnce } = useTracking();
  const [timeRemaining, setTimeRemaining] = useState(11 * 60 + 20); // 11:20 em segundos
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
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
    window.open("https://pay.kiwify.com.br/8SaUXFm", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
      {/* Progress Bar */}
      <div className="bg-[#0F0A08] py-2 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-3 max-w-6xl">
          <Progress value={75} className="h-2 bg-[#FFF9E6]/20" />
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-4xl">
        {/* Timer Alert */}
        <div className="bg-gradient-to-r from-pink-900/30 to-pink-800/30 border-2 border-pink-500/50 rounded-xl p-4 mb-6 md:mb-8">
          <p className="text-center text-pink-300 font-bold text-base md:text-lg">
            Resgate agora seu desconto: {formatTime(timeRemaining)}
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="text-[#FFF9E6]">Pare de </span>
            <span className="text-[#C41E3A]">pagar caro</span>
            <span className="text-[#FFF9E6]"> em fornecedores locais e </span>
            <span className="text-[#4ADE80]">lucre até 4x mais</span>
            <span className="text-[#FFF9E6]"> sem precisar investir em estoque.</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#FFF9E6]/80 max-w-3xl mx-auto px-3 leading-relaxed">
            Descubra como acessar fornecedores exclusivos da China que te darão margens de lucro absurdas e produtos que poucos têm acesso.
          </p>
        </section>
        
        {/* Before/After Table */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-[#FFD700] px-2 leading-tight">
            Antes e Depois das Fontes Secretas
          </h2>
          
          {/* Comparison Image */}
          <div className="mb-8 md:mb-12">
            <img 
              src={antesDepoisImage} 
              alt="Comparação de lucros antes e depois das Fontes Secretas" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <Card className="overflow-hidden border-[#FFD700]/30 bg-[#0F0A08]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-[#C41E3A]/20">
                    <th className="p-3 md:p-4 text-left text-[#FFF9E6]/60 text-xs md:text-base">Antes das Fontes Secretas</th>
                    <th className="p-3 md:p-4 text-left text-[#FFD700] text-xs md:text-base font-bold">Depois das Fontes Secretas</th>
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
                      <td className="p-3 md:p-4 text-[#FFF9E6]/70 flex items-start gap-2">
                        <span className="text-[#C41E3A] flex-shrink-0">❌</span>
                        <span>{row[0]}</span>
                      </td>
                      <td className="p-3 md:p-4 text-[#FFD700] font-semibold">
                        <div className="flex items-start gap-2">
                          <span className="text-[#4ADE80] flex-shrink-0">✅</span>
                          <span>{row[1]}</span>
                        </div>
                      </td>
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
            O Que Você Vai Aprender Nesse Curso:
          </h2>
          <Card className="p-6 md:p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-3xl mx-auto">
            <ul className="space-y-4 md:space-y-6">
              {[
                {
                  title: "Fornecedores confiáveis da China:",
                  text: "Lista exclusiva com fornecedores testados e verificados. Você não vai mais perder tempo e dinheiro com intermediários ou golpistas."
                },
                {
                  title: "Como validar fornecedores:",
                  text: "Passo a passo completo para identificar se um fornecedor é real, seguro e confiável antes de fazer qualquer pedido."
                },
                {
                  title: "Produtos com alta margem de lucro:",
                  text: "Descubra produtos exclusivos com baixa concorrência e margens de até 300%. Acesse nichos pouco explorados antes dos seus concorrentes."
                },
                {
                  title: "Planilha de cálculo de custos:",
                  text: "Ferramenta pronta para calcular todos os custos de importação (produto + frete + impostos) e descobrir seu lucro real antes de importar."
                },
                {
                  title: "Método de pesquisa de produtos:",
                  text: "Aprenda a encontrar produtos vencedores usando estratégias secretas que grandes importadores usam para descobrir tendências antes que virem febre no Brasil."
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 md:gap-4">
                  <span className="text-[#FFD700] text-lg md:text-xl flex-shrink-0 mt-1">•</span>
                  <div>
                    <p className="text-sm md:text-base lg:text-lg text-[#FFD700] font-bold mb-1">{item.title}</p>
                    <p className="text-sm md:text-base text-[#FFF9E6]/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Special Offer Section */}
        <section className="mb-8 md:mb-16">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-[#0F0A08] to-[#1a1410] border-[#FFD700] border-2 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#FFF9E6] mb-4 leading-tight">
              Esse mesmo conteúdo vale{" "}
              <span className="text-[#C41E3A] font-bold line-through">R$997</span>{" "}
              em uma mentoria individual, mas você vai pagar apenas{" "}
              <span className="text-[#4ADE80] font-bold text-3xl md:text-4xl lg:text-5xl">R$37</span>{" "}
              👇
            </p>
            
            <Button 
              onClick={handleCTA} 
              className="w-full mt-6 bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-lg md:text-xl lg:text-2xl py-6 md:py-8 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.5)] hover:shadow-[0_0_40px_rgba(74,222,128,0.7)] transition-all"
            >
              GARANTIR ACESSO POR R$37
            </Button>
          </Card>
        </section>

        {/* Guarantee Badge */}
        {/* <section className="mb-4 md:mb-6">
          <div className="flex justify-center">
            <img 
              src={garantia120Image} 
              alt="Garantia de 120 dias" 
              className="w-80 md:w-96 lg:w-[28rem] aspect-square object-contain"
            />
          </div>
        </section> */}

        {/* Guarantee Section */}
        <section className="mb-8 md:mb-16">
          <Card className="p-6 md:p-10 bg-[#0F0A08] border-[#FFD700] border-2 max-w-3xl mx-auto">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                {/* <span className="text-[#FFF9E6]">Garantia de 120 Dias: </span> */}
                <span className="text-[#C41E3A]">Risco Zero para sua Jornada Rumo ao Sucesso!</span>
              </h2>
              
              {/* <p className="text-base md:text-lg text-[#FFF9E6] mb-6 leading-relaxed">
                Se você estiver com sua operação ativa e <span className="font-bold">não faturar</span> nos próximos <span className="font-bold">120 dias</span>, <span className="font-bold underline">eu reembolso 100% do seu valor investido</span> nas Fontes Secretas da China.
              </p> */}
              
              <p className="text-base md:text-lg text-[#FFF9E6] mb-6 leading-relaxed">
                Eu tenho tanta certeza que com as <span className="font-bold">Fontes Secretas + Os Fornecedores Validados</span> é impossível você não ter resultado, que eu criei essa <span className="font-bold">garantia ABSURDA.</span>
              </p>
              
              <p className="text-base md:text-lg text-[#FFF9E6] mb-8 leading-relaxed">
                <span className="font-bold">Sem burocracia alguma</span>, se você seguir os passos e não tiver resultados, eu te devolvo o valor de volta pra você na hora.
              </p>

              <Button 
                onClick={handleCTA} 
                className="w-full bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-base md:text-lg lg:text-xl py-5 md:py-6 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all uppercase"
              >
                LIBERAR ACESSO AGORA
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 md:mb-16">
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

      </div>
    </div>
  );
};

export default FontesSecretasDetalhes;
