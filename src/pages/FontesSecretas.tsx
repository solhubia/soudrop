import { useEffect, useState } from "react";
import crescimentoLucrosImg from "@/assets/crescimento-lucros.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Target, Shield, Clock, Rocket, Star, ChevronRight } from "lucide-react";
import { useTracking } from "@/hooks/useTracking";
import priceComparisonImg from "@/assets/price-comparison.png";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}
import depoimentoGustavoImg from "@/assets/depoimento-gustavo.jpeg";
import depoimentoFelipeImg from "@/assets/depoimento-felipe.jpeg";
import depoimentoFelipe2Img from "@/assets/depoimento-felipe-2.jpeg";
import depoimentoCarlosImg from "@/assets/depoimento-carlos.jpeg";
import depoimentoPatriciaImg from "@/assets/depoimento-patricia.jpeg";
import antesDepoisImage from "@/assets/antes-depois-produtos.png";
import garantia120Image from "@/assets/garantia-120.png";
const FontesSecretas = () => {
  const {
    trackEventOnce
  } = useTracking();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showNextPage, setShowNextPage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(11 * 60 + 20);

  useEffect(() => {
    trackEventOnce("view_fontes_secretas_lp", () => {
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: "Fontes Secretas",
          page_path: "/fontes-secretas",
        });
      }
    });
  }, [trackEventOnce]);

  useEffect(() => {
    if (!showDetails) return;
    
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
  }, [showDetails]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const questions = [{
    question: "Qual é o seu objetivo com importação hoje?",
    options: ["Começar a importar do zero", "Encontrar produtos com alta margem de lucro", "Descobrir fornecedores confiáveis", "Escalar meu negócio atual de revenda"]
  }, {
    question: "Você já comprou produtos direto da China alguma vez?",
    options: ["Sim, já importei antes", "Não, quero aprender do zero", "Só comprei de revendedores"]
  }, {
    question: "Quanto você pretende investir nas primeiras compras?",
    options: ["Até R$500", "De R$500 a R$1.000", "De R$1.000 a R$3.000", "Mais de R$3.000"]
  }, {
    question: "O que mais te impede de começar agora?",
    options: ["Medo de ser enganado por fornecedores", "Não saber onde achar produtos lucrativos", "Falta de confiança para importar sozinho", "Falta de conhecimento sobre o processo"]
  }];
  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [currentStep]: answer
    });
    if (currentStep < questions.length) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };
  const progressPercentage = currentStep / questions.length * 100;
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

  const handleContinueToLoading = () => {
    setShowLoading(true);
    // Simular progresso de carregamento
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setLoadingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowLoading(false);
          setShowNextPage(true);
        }, 500);
      }
    }, 50);
  };
  if (showResults && !showLoading && !showNextPage) {
    return <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
        <div className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-6xl">
          {/* Results Section */}
          <section className="text-center mb-8 md:mb-16 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight px-2">
              <span className="text-[#FFF9E6]">Esses foram os resultados de alguns dos meus alunos, </span>
              <span className="text-[#4ADE80]">dos mais diversos nichos e tipos de produtos</span>
              <span className="text-[#FFF9E6]">:</span>
            </h1>
          </section>

          {/* Testimonials */}
          <section className="mb-8 md:mb-16">
            <div className="flex flex-col gap-4 md:gap-6 max-w-3xl mx-auto">
              <Card className="p-0 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all overflow-hidden">
                <img src={depoimentoGustavoImg} alt="Depoimento de Gustavo via WhatsApp" className="w-full h-auto" />
              </Card>
              <Card className="p-0 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all overflow-hidden">
                <img src={depoimentoFelipeImg} alt="Depoimento de Felipe via WhatsApp" className="w-full h-auto" />
              </Card>
              <Card className="p-0 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all overflow-hidden">
                <img src={depoimentoFelipe2Img} alt="Depoimento completo de Felipe via WhatsApp" className="w-full h-auto" />
              </Card>
              <Card className="p-0 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all overflow-hidden">
                <img src={depoimentoCarlosImg} alt="Depoimento de Carlos via WhatsApp" className="w-full h-auto" />
              </Card>
              <Card className="p-0 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all overflow-hidden">
                <img src={depoimentoPatriciaImg} alt="Depoimento de Patrícia via WhatsApp" className="w-full h-auto" />
              </Card>
            </div>
          </section>

          {/* Continue Section */}
          <section className="text-center mb-8 md:mb-16 px-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-[#FFF9E6] leading-tight">
              E você também pode ter resultados como esses...
            </h2>
            <p className="text-base md:text-lg text-[#FFF9E6]/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Descubra como as <span className="text-[#FFD700] font-bold">Fontes Secretas</span> podem transformar o seu negócio de importação
            </p>
            <Button onClick={handleContinueToLoading} className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-lg md:text-xl lg:text-2xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all">
              Continuar
              <ChevronRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </section>
        </div>
      </div>;
  }

  if (showLoading) {
    return <div className="min-h-screen bg-[#FFF9E6] text-[#0F0A08] flex items-center justify-center">
        <div className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-2xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Estamos analisando suas respostas... ⏳
            </h1>
            
            <div className="space-y-3">
              <p className="text-base md:text-lg text-[#0F0A08]/70">Carregando...</p>
              <div className="max-w-md mx-auto">
                <Progress value={loadingProgress} className="h-3 bg-[#0F0A08]/10" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#0F0A08]">{loadingProgress}%</p>
            </div>
          </div>
        </div>
      </div>;
  }

  if (showResults && showNextPage && !showDetails) {
    return <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
        <div className="container mx-auto px-3 md:px-4 py-6 md:py-8 max-w-6xl">
          {/* Seu Plano Foi Aprovado Section */}
          <section className="mb-8 md:mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-6 md:p-10 border-2 border-emerald-300 dark:border-emerald-700 mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 text-emerald-700 dark:text-emerald-400 px-2 leading-tight">
                Seu plano foi aprovado!
              </h2>
              <p className="text-center text-sm md:text-base text-[#0F0A08] dark:text-[#FFF9E6] max-w-3xl mx-auto px-3">
                Agora a decisão é sua! Isso é o que pode acontecer com seu negócio caso tome a decisão correta:
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <img 
                src={crescimentoLucrosImg} 
                alt="Crescimento de lucros com produtos lucrativos" 
                className="w-full h-auto rounded-lg shadow-lg mb-2"
              />
              <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 italic">
                Lucro de até 4x maior
              </p>
            </div>
          </section>

          {/* Identification Section */}
          <section className="mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-[#FFF9E6] px-2 leading-tight">
              Nos próximos dias..
            </h2>
            
            <p className="text-center text-base md:text-lg text-[#FFF9E6]/90 mb-8 md:mb-12 max-w-4xl mx-auto px-3 leading-relaxed">
              Enquanto a concorrência continua comprando produtos saturados de fornecedores comuns pagando caro, você vai conseguir acessar <span className="font-bold underline decoration-[#C41E3A] decoration-2">fornecedores exclusivos com margens de até 300%</span> e <span className="font-bold underline decoration-[#C41E3A] decoration-2">sem investir em estoque caro ou arriscar seu dinheiro com fontes duvidosas</span>.
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-[#FFF9E6] px-2 leading-tight">
              Se você se identificar com 2 ou mais dessas frases, esse curso foi feito pra você:
            </h3>
            
            <Card className="p-4 md:p-8 bg-[#FFF9E6] border-2 border-[#C41E3A]/30">
              <div className="space-y-3 md:space-y-4">
                {[
                  "Não tenho dinheiro pra investir em estoque caro",
                  "Vendo produtos com margem baixa",
                  "Não sei onde achar fornecedores confiáveis",
                  "Tenho medo de ser enganado por fornecedores falsos",
                  "Quero vender produtos exclusivos que poucos têm acesso"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-[#C41E3A]/5 rounded-lg">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#C41E3A" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-[#0F0A08] font-medium flex-1">
                      "{item}"
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Continue Button */}
          <section className="text-center mb-8 md:mb-16">
            <Button 
              onClick={() => setShowDetails(true)}
              className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-lg md:text-xl lg:text-2xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all"
            >
              Continuar
            </Button>
          </section>
        </div>
      </div>;
  }

  if (showDetails) {
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
          <section className="mb-4 md:mb-6">
            <div className="flex justify-center">
              <img 
                src={garantia120Image} 
                alt="Garantia de 120 dias" 
                className="w-80 md:w-96 lg:w-[28rem] aspect-square object-contain"
              />
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="mb-8 md:mb-16">
            <Card className="p-6 md:p-10 bg-[#0F0A08] border-[#FFD700] border-2 max-w-3xl mx-auto">
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-[#FFF9E6]">Garantia de 120 Dias: </span>
                  <span className="text-[#C41E3A]">Risco Zero para sua Jornada Rumo ao Sucesso!</span>
                </h2>
                
                <p className="text-base md:text-lg text-[#FFF9E6] mb-6 leading-relaxed">
                  Se você estiver com sua operação ativa e <span className="font-bold">não faturar</span> nos próximos <span className="font-bold">120 dias</span>, <span className="font-bold underline">eu reembolso 100% do seu valor investido</span> nas Fontes Secretas da China.
                </p>
                
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
  }

  return <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
      {/* Progress Bar */}
      {currentStep > 0 && <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F0A08]/95 backdrop-blur-sm border-b border-[#FFD700]/20">
          <div className="container mx-auto px-3 py-2 md:py-4">
            <Progress value={progressPercentage} className="h-1.5 md:h-2" />
            <p className="text-xs md:text-sm text-[#FFF9E6]/60 mt-1.5 md:mt-2 text-center">
              Pergunta {currentStep} de {questions.length}
            </p>
          </div>
        </div>}

      <div className="container mx-auto px-3 pt-16 md:pt-24 pb-8 md:pb-12 max-w-4xl">
        {currentStep === 0 && <div className="text-center mb-6 md:mb-12 animate-fade-in">
            <Badge className="mb-3 md:mb-4 bg-[#C41E3A] text-white border-[#FFD700] text-xs md:text-sm">
              🔓 Acesso Exclusivo
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              <span className="text-[#FFF9E6]">Acesse as </span>
              <span className="text-[#C41E3A]">Fontes Secretas da China</span>
              <span className="text-[#FFF9E6]"> Que Fazem Até Iniciantes </span>
              <span className="text-[#4ADE80]">Lucrarem 4x Mais.</span>
              <span className="text-[#FFF9E6]"> Sem Intermediários ou </span>
              <span className="text-[#C41E3A]">Pagar Caro em Revendedores.</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-[#FFF9E6]/80 mb-3 md:mb-4 px-2">
              Descubra o método simples que revela as fontes secretas da China que reduzem seus custos pela metade e multiplicam suas margens de lucro — sem precisar de intermediários, fornecedores caros ou contatos na China.
            </p>
            <div className="max-w-4xl mx-auto mt-4 md:mt-8">
              <img src={priceComparisonImg} alt="Comparação de preços: mesmo produto custa ¥1.58 na China e R$28 no Brasil" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Benefits Section */}
            <Card className="p-6 md:p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-2xl mx-auto mt-6 md:mt-8 text-left">
              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#4ADE80] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-[#FFF9E6] font-semibold">
                    100% Pronto para usar — só aplicar e lucrar
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#4ADE80] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-[#FFF9E6] font-semibold">
                    Funciona mesmo se você achar que "não tem experiência com importação"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#4ADE80] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-[#FFF9E6] font-semibold">
                    Resultados em dias, não meses
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#4ADE80] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-[#FFF9E6] font-semibold">
                    Baseado em fontes reais testadas por importadores profissionais
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#4ADE80] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-[#FFF9E6] font-semibold">
                    Fornecedores, plataformas e métodos práticos incluídos
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base lg:text-lg text-[#FFF9E6]/80 mb-6 md:mb-8 leading-relaxed">Você não precisa criar nada do zero — é literalmente acessar as fontes, escolher seus produtos e começar lucrar!</p>

              <Button onClick={() => setCurrentStep(1)} className="w-full bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-base md:text-lg lg:text-xl py-5 md:py-6 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all whitespace-normal h-auto min-h-[60px]">
                🚀 QUERO DESCOBRIR AS FONTES SECRETAS
              </Button>
            </Card>
          </div>}

        {currentStep > 0 && <Card className="p-4 md:p-8 lg:p-12 bg-[#0F0A08] border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] animate-fade-in">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 text-[#FFD700] leading-tight">
              {questions[currentStep - 1].question}
            </h2>
            <div className="space-y-3 md:space-y-4">
              {questions[currentStep - 1].options.map((option, idx) => <Button key={idx} onClick={() => handleAnswer(option)} variant="outline" className="w-full justify-start text-left p-4 md:p-6 h-auto bg-[#0F0A08] border-[#FFF9E6]/20 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-[#FFF9E6] hover:text-[#FFD700] transition-all text-sm md:text-base lg:text-lg min-h-[60px] md:min-h-auto whitespace-normal">
                  <span className="mr-2 md:mr-3 text-[#C41E3A] font-bold text-base md:text-lg flex-shrink-0">{String.fromCharCode(65 + idx)}.</span>
                  <span className="leading-relaxed">{option}</span>
                </Button>)}
            </div>
          </Card>}
      </div>
    </div>;
};
export default FontesSecretas;
