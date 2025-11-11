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
const FontesSecretas = () => {
  const {
    trackEventOnce
  } = useTracking();

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
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showNextPage, setShowNextPage] = useState(false);
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

  if (showResults && showNextPage) {
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
              onClick={() => window.location.href = '/fontes-secretas-detalhes'}
              className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-[#0F0A08] text-lg md:text-xl lg:text-2xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-bold shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all"
            >
              Continuar
            </Button>
          </section>
        </div>
      </div>;
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
