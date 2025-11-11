import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Target, Shield, Clock, Rocket, Star, ChevronRight } from "lucide-react";
import { useTracking } from "@/hooks/useTracking";

const FontesSecretas = () => {
  const { trackEventOnce } = useTracking();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Qual é o seu objetivo com importação hoje?",
      options: [
        "Começar a importar do zero",
        "Encontrar produtos com alta margem de lucro",
        "Descobrir fornecedores confiáveis",
        "Escalar meu negócio atual de revenda"
      ]
    },
    {
      question: "Você já comprou produtos direto da China alguma vez?",
      options: [
        "Sim, já importei antes",
        "Não, quero aprender do zero",
        "Só comprei de revendedores"
      ]
    },
    {
      question: "Quanto você pretende investir nas primeiras compras?",
      options: [
        "Até R$500",
        "De R$500 a R$1.000",
        "De R$1.000 a R$3.000",
        "Mais de R$3.000"
      ]
    },
    {
      question: "O que mais te impede de começar agora?",
      options: [
        "Medo de ser enganado por fornecedores",
        "Não saber onde achar produtos lucrativos",
        "Falta de confiança para importar sozinho",
        "Falta de conhecimento sobre o processo"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/8SaUXFm", "_blank");
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Results Section */}
          <section className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-[#C41E3A] text-white border-[#FFD700]">
              ✓ Quiz Completo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFD700]">
              Veja os Resultados de Quem Já Está Aplicando o Método
            </h1>
            <p className="text-xl text-[#FFF9E6]/80 max-w-3xl mx-auto mb-8">
              Alunos que acessaram as <span className="text-[#FFD700] font-bold">Fontes Secretas da China</span> já encontraram produtos com margens de até <span className="text-[#C41E3A] font-bold">300% de lucro</span> e criaram negócios extremamente lucrativos — sem depender de intermediários.
            </p>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "Achei um fornecedor com preço inacreditável.", author: "Maria S." },
                { quote: "Em 3 dias encontrei 5 produtos lucrativos.", author: "João P." },
                { quote: "Já recuperei o investimento no primeiro pedido.", author: "Carlos R." }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-6 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
                  <Star className="w-8 h-8 text-[#FFD700] mb-4" />
                  <p className="text-[#FFF9E6] mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-[#FFD700] font-semibold">— {testimonial.author}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Transformation Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#FFD700]">
              O Que Pode Acontecer Nos Próximos Dias
            </h2>
            <p className="text-center text-[#FFF9E6]/80 mb-12 max-w-3xl mx-auto">
              Enquanto a maioria continua comprando de intermediários, você vai aprender a chegar <span className="text-[#FFD700] font-bold">direto na origem dos produtos</span>, pagando até <span className="text-[#C41E3A] font-bold">10x mais barato</span> e encontrando <span className="text-[#FFD700] font-bold">oportunidades de mar azul</span> que quase ninguém conhece.
            </p>
            
            <Card className="p-8 bg-gradient-to-r from-[#C41E3A]/20 to-[#FFD700]/10 border-[#FFD700]/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFF9E6]/60 mb-4">Hoje</h3>
                  <ul className="space-y-2 text-[#FFF9E6]/70">
                    <li>• Produtos comuns</li>
                    <li>• Margens pequenas</li>
                    <li>• Alta concorrência</li>
                    <li>• Dependência de intermediários</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Amanhã</h3>
                  <ul className="space-y-2 text-[#FFD700]">
                    <li>• Produtos exclusivos</li>
                    <li>• Margens altas (até 300%)</li>
                    <li>• Mar azul</li>
                    <li>• Fornecedores diretos</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Identification Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#FFD700]">
              Se Você Se Identificar com 2 ou Mais Dessas Frases, Esse Curso Foi Feito Pra Você 👇
            </h2>
            <Card className="p-8 bg-[#0F0A08] border-[#C41E3A]/30">
              <div className="space-y-4">
                {[
                  "Compro produtos caros e ganho pouco",
                  "Não sei onde achar fornecedores confiáveis",
                  "Tenho medo de investir e perder dinheiro",
                  "Vejo outros lucrando e não sei como eles fazem",
                  "Quero vender produtos que ninguém mais vende"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#FFF9E6]">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Before/After Table */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#FFD700]">
              Antes e Depois das Fontes Secretas
            </h2>
            <Card className="overflow-hidden border-[#FFD700]/30">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#C41E3A]/20">
                      <th className="p-4 text-left text-[#FFF9E6]/60">Antes das Fontes Secretas</th>
                      <th className="p-4 text-left text-[#FFD700]">Depois das Fontes Secretas</th>
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
                        <td className="p-4 text-[#FFF9E6]/70">{row[0]}</td>
                        <td className="p-4 text-[#FFD700]">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* What You'll Learn */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#FFD700]">
              O Que Você Vai Aprender
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, text: "Como descobrir produtos lucrativos antes de chegarem ao Brasil" },
                { icon: Target, text: "Como identificar fornecedores reais e confiáveis" },
                { icon: Rocket, text: "Como encontrar mar azul (produtos com baixa concorrência e alta margem)" },
                { icon: CheckCircle2, text: "Como validar um produto sem precisar de estoque" },
                { icon: Star, text: "Como montar sua própria lista de produtos vencedores" }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-[#0F0A08] border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
                  <item.icon className="w-10 h-10 text-[#C41E3A] mb-4" />
                  <p className="text-[#FFF9E6]">{item.text}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-[#C41E3A]/20 to-[#FFD700]/10 border-[#FFD700] border-2">
              <div className="text-center">
                <Shield className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700]">
                  🛡️ Garantia de 120 Dias: Risco Zero Para Você!
                </h2>
                <p className="text-lg text-[#FFF9E6]/90 mb-6 max-w-3xl mx-auto">
                  Se você aplicar o método das <span className="text-[#FFD700] font-bold">Fontes Secretas da China</span>, seguir o passo a passo e <span className="text-[#C41E3A] font-bold">não encontrar produtos lucrativos ou fornecedores confiáveis</span> nos próximos <span className="font-bold">120 dias</span>, eu devolvo <span className="font-bold">100% do seu investimento</span>.
                </p>
                <p className="text-lg text-[#FFF9E6]/90 mb-6 max-w-3xl mx-auto">
                  Tenho tanta certeza de que, com as estratégias do treinamento, <span className="text-[#FFD700] font-bold">você vai encontrar produtos ocultos e margens de lucro que nunca viu antes</span>, que criei essa <span className="font-bold">garantia absurda</span>:<br/>
                  👉 <span className="text-[#C41E3A] font-bold">ou você tem resultado, ou não paga nada.</span>
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-[#FFF9E6]">Você tem 120 dias inteiros pra testar</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-[#FFF9E6]">Se não tiver lucro ou não achar oportunidades reais, o risco é meu</span>
                  </div>
                </div>
                <p className="text-sm text-[#FFF9E6]/60 italic">
                  "Se você não tiver resultado, eu não quero o seu dinheiro. Eu quero o seu sucesso."
                </p>
              </div>
            </Card>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#FFD700]">
                Acesso às Fontes Secretas da China
              </h2>
              <p className="text-4xl md:text-6xl font-bold text-[#C41E3A] mb-4">
                Por Apenas R$37 💥
              </p>
              <p className="text-lg text-[#FFF9E6]/80 max-w-2xl mx-auto mb-8">
                Tenha acesso imediato ao treinamento completo e aprenda o mesmo método usado por grandes importadores para descobrir produtos lucrativos e fornecedores reais, direto da China.
              </p>
            </div>

            <Card className="p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-2xl mx-auto mb-8">
              <div className="space-y-4 mb-8">
                {[
                  "📊 Planilha de cálculo de custos e lucros",
                  "🧭 Checklist de verificação de fornecedores",
                  "💬 Grupo VIP com atualizações e oportunidades"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#FFF9E6]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-[#C41E3A]/20 px-4 py-2 rounded-full mb-4">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-[#FFD700] font-semibold">Oferta disponível por tempo limitado</span>
                </div>
              </div>

              <Button 
                onClick={handleCTA}
                className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white text-xl py-6 rounded-lg font-bold shadow-[0_0_30px_rgba(196,30,58,0.5)] hover:shadow-[0_0_40px_rgba(196,30,58,0.7)] transition-all"
              >
                🔥 Quero Acessar as Fontes Secretas Agora
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#FFD700]">
              Dúvidas Frequentes
            </h2>
            <Card className="p-8 bg-[#0F0A08] border-[#FFD700]/30 max-w-3xl mx-auto">
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
                    <AccordionTrigger className="text-[#FFF9E6] hover:text-[#FFD700]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#FFF9E6]/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#FFD700]">
              Enquanto outros ainda compram caro de intermediários...
            </h2>
            <p className="text-2xl md:text-3xl mb-8 text-[#FFF9E6]">
              Você vai direto na <span className="text-[#C41E3A] font-bold">fonte secreta dos produtos mais baratos do mundo.</span>
            </p>
            <p className="text-lg text-[#FFF9E6]/80 mb-8 max-w-2xl mx-auto">
              Dê o primeiro passo hoje e descubra onde nascem os produtos que geram margens absurdas de lucro.
            </p>
            <Button 
              onClick={handleCTA}
              className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white text-2xl py-8 px-12 rounded-lg font-bold shadow-[0_0_30px_rgba(196,30,58,0.5)] hover:shadow-[0_0_40px_rgba(196,30,58,0.7)] transition-all"
            >
              👉 Quero Descobrir as Fontes Secretas Agora
            </Button>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0A08] text-[#FFF9E6]">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F0A08]/95 backdrop-blur-sm border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4 py-4">
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-sm text-[#FFF9E6]/60 mt-2 text-center">
            Pergunta {currentStep + 1} de {questions.length}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        {currentStep === 0 && (
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-[#C41E3A] text-white border-[#FFD700]">
              🔓 Acesso Exclusivo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFD700]">
              Descubra as <span className="text-[#C41E3A]">Fontes Secretas da China</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#FFF9E6]/80 mb-4">
              Aprenda onde encontrar os produtos mais baratos do mundo — antes que cheguem ao Brasil
            </p>
            <Card className="p-6 bg-[#0F0A08] border-[#FFD700]/30 max-w-2xl mx-auto mt-8">
              <p className="text-lg text-[#FFF9E6]/90 mb-4">
                Existe um mapa usado por quem realmente lucra com importação.
              </p>
              <p className="text-lg text-[#FFF9E6]/90">
                Agora você vai ter acesso às mesmas <span className="text-[#FFD700] font-bold">fontes ocultas de produtos e fornecedores</span> que os grandes importadores usam para ter margens de até <span className="text-[#C41E3A] font-bold">300% de lucro</span>.
              </p>
            </Card>
          </div>
        )}

        <Card className="p-8 md:p-12 bg-[#0F0A08] border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFD700]">
            {questions[currentStep].question}
          </h2>
          <div className="space-y-4">
            {questions[currentStep].options.map((option, idx) => (
              <Button
                key={idx}
                onClick={() => handleAnswer(option)}
                variant="outline"
                className="w-full justify-start text-left p-6 h-auto bg-[#0F0A08] border-[#FFF9E6]/20 hover:border-[#FFD700] hover:bg-[#FFD700]/10 text-[#FFF9E6] hover:text-[#FFD700] transition-all text-lg"
              >
                <span className="mr-3 text-[#C41E3A] font-bold">{String.fromCharCode(65 + idx)}.</span>
                {option}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FontesSecretas;