import { Button } from "@/components/ui_link/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Lock, Clock, Users, TrendingUp, Shield, Zap, Sparkles } from "lucide-react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import { trackViewContent, trackInitiateCheckout, trackPurchase } from "@/lib/fbq";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const CacadorProdutosChina = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos em segundos

  useEffect(() => {
    trackViewContent("courses", { content_name: document.title });

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0604] text-[#FFF9E6]">
      {/* Countdown Timer Header */}
      <div className="bg-gradient-to-r from-[#C41E3A] to-[#C41E3A]/80 text-white py-3 sticky top-0 z-50 shadow-lg border-b-2 border-[#FFD700]">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Clock className="w-5 h-5 animate-pulse text-[#FFD700]" />
          <span className="font-bold text-lg">
            ⏰ Esta oferta é por tempo limitado: {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Hero Section with Chinese Theme */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/20 via-transparent to-[#FFD700]/10" />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z' fill='%23FFD700' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C41E3A]/20 to-[#FFD700]/20 border border-[#FFD700]/30 rounded-full text-sm font-medium text-[#FFD700] mb-4">
              <Sparkles className="w-4 h-4" />
              Oferta Especial de Lançamento
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FFD700]">Descubra os Segredos</span> da Importação Lucrativa Direto da China
              <span className="block mt-2 bg-gradient-to-r from-[#C41E3A] to-[#FFD700] bg-clip-text text-transparent">
                Lucros de até 300% — Mesmo Começando do Zero!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#FFF9E6]/80 max-w-2xl mx-auto">
              O método testado e aprovado por importadores profissionais, agora disponível em um treinamento completo por <span className="font-bold text-[#FFD700]">apenas R$37</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" variant="red" onClick={() => { trackInitiateCheckout("courses", 37); scrollToCTA;}} className="w-full sm:w-auto text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Quero Começar Agora!
              </Button>
              <div className="flex items-center gap-2 text-sm text-[#FFD700]">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Authority Section */}
      <section className="py-16 bg-[#0F0A08]/50 border-y border-[#FFD700]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-[#C41E3A]/30 bg-[#0F0A08] shadow-[0_0_30px_rgba(196,30,58,0.3)]">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-video bg-gradient-to-br from-[#C41E3A]/30 to-[#FFD700]/20 rounded-lg flex items-center justify-center border border-[#FFD700]/20">
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-16 h-16 mx-auto text-[#FFD700]" />
                    <p className="text-sm text-[#FFF9E6]/60">[Vídeo de Apresentação]</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700]">
                    Acesse o Mesmo Mercado dos Grandes Importadores
                  </h2>
                  <p className="text-[#FFF9E6]/80">
                    Descubra onde estão os produtos mais lucrativos da China e como qualquer pessoa pode começar a importar hoje mesmo.
                  </p>
                  <Button variant="blue" size="lg" onClick={scrollToCTA}>
                    Garantir Acesso Agora
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C41E3A]/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#FFD700]">
              O Que Você Vai Dominar
            </h2>
            <p className="text-center text-[#FFF9E6]/70 mb-12">Todas as ferramentas para seu sucesso na importação</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Passo a passo para encontrar produtos que vendem todos os dias",
                "Acesso aos fornecedores secretos do 1688 — a plataforma real dos chineses",
                "Cálculo exato de custos e lucros — sem surpresas",
                "Planilha automática de precificação e margem de lucro",
                "Lista exclusiva com 20 produtos quentes para 2025",
                "Método de validação de produto antes de investir 1 real"
              ].map((benefit, index) => (
                <Card key={index} className="p-6 bg-[#0F0A08] border-[#FFD700]/20 hover:border-[#C41E3A]/40 transition-all hover-scale hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-[#FFF9E6] font-medium">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 bg-gradient-to-r from-[#C41E3A]/10 via-[#0F0A08] to-[#FFD700]/10 border-y border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700]">
              Pare de Depender de Sorte ou Cursos Caros
            </h2>
            <p className="text-lg text-[#FFF9E6]/80">
              Em poucas horas você vai enxergar oportunidades que 95% das pessoas não conseguem ver — produtos que praticamente se vendem sozinhos, com margens incríveis de lucro.
            </p>
            <Button size="lg" variant="red" onClick={scrollToCTA} className="text-lg px-8 py-6">
              Quero Essa Transformação!
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#FFD700]">
              Resultados Reais de Alunos Reais
            </h2>
            <p className="text-center text-[#FFF9E6]/70 mb-12">Veja o que estão conquistando com o método</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Lucas M.",
                  text: "Achei um produto no 1688 por R$12 e vendi por R$89 aqui no Brasil! Já paguei o curso mais de 10x!"
                },
                {
                  name: "Carolina S.",
                  text: "Sempre achei que importar era impossível. Em 3 dias encontrei 5 produtos prontos pra revender!"
                },
                {
                  name: "Rafael D.",
                  text: "O método é simples, direto e prático. Agora sei onde estão as oportunidades antes de todo mundo."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 space-y-4 bg-[#0F0A08] border-[#FFD700]/20 hover-scale hover:shadow-[0_0_25px_rgba(196,30,58,0.3)]">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-[#FFF9E6]/80 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-[#FFD700]">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-[#0F0A08]/50 border-y border-[#FFD700]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-[#C41E3A]/10 to-[#FFD700]/10 border-[#FFD700]/30">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img 
                      src={renanPhoto} 
                      alt="Renan Ferreira" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700]">Renan Ferreira</h3>
                  <p className="text-[#FFF9E6]/80">
                    Empresário e importador há mais de 10 anos, com experiência direta em fábricas da China. Já importou milhares de produtos e agora compartilha seu método comprovado para você começar do zero.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                      <span className="text-[#FFF9E6]/70">+10 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                      <span className="text-[#FFF9E6]/70">Milhares de produtos importados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                      <span className="text-[#FFF9E6]/70">+5.000 alunos treinados</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="cta-section" className="py-16 bg-gradient-to-b from-[#C41E3A]/10 to-[#FFD700]/10 relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23FFD700' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-[#FFD700]/40 bg-[#0F0A08] shadow-[0_0_60px_rgba(255,215,0,0.3)]">
              <div className="text-center space-y-8">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                    Oferta Exclusiva
                  </h2>
                  <div className="h-1 w-full bg-gradient-to-r from-[#C41E3A] via-[#FFD700] to-[#C41E3A]" />
                </div>
                
                <div className="space-y-4 bg-[#0A0604]/50 p-6 rounded-lg border border-[#FFD700]/20">
                  <div className="flex justify-between items-center py-3 border-b border-[#FFD700]/10">
                    <span className="text-[#FFF9E6]/80">💰 Curso Completo "Caçador de Produtos"</span>
                    <span className="font-semibold line-through text-[#FFF9E6]/50">R$497</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#FFD700]/10">
                    <span className="text-[#FFF9E6]/80">📊 Planilha Automática de Lucros</span>
                    <span className="font-semibold line-through text-[#FFF9E6]/50">R$97</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#FFD700]/10">
                    <span className="text-[#FFF9E6]/80">📦 Lista com 20 Produtos Quentes</span>
                    <span className="font-semibold line-through text-[#FFF9E6]/50">R$197</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#FFD700]/10">
                    <span className="text-[#FFF9E6]/80">💬 Scripts e Checklists Prontos</span>
                    <span className="font-semibold line-through text-[#FFF9E6]/50">R$47</span>
                  </div>
                  <div className="flex justify-between items-center py-4 text-lg">
                    <span className="font-semibold text-[#FFD700]">Valor Total:</span>
                    <span className="font-semibold line-through text-[#FFF9E6]/50">R$838</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#C41E3A] to-[#C41E3A]/80 p-8 rounded-lg border-2 border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                  <p className="text-white/80 text-sm mb-2">🎉 Investimento Promocional de Hoje:</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl text-white/60 line-through">R$838</span>
                    <span className="text-6xl md:text-7xl font-bold text-[#FFD700]">R$37</span>
                  </div>
                  <p className="text-white/80 text-sm">✅ Acesso imediato e vitalício | ✅ Garantia de 7 dias</p>
                </div>

                <Button size="lg" variant="red" className="w-full text-lg py-6" asChild>
                  <a href="https://pay.kiwify.com.br/8SaUXFm"
                    onClick={() => trackPurchase("courses", 37)}>
                    <Zap className="w-5 h-5 mr-2" />
                    SIM! Quero Aprender a Importar Agora!
                  </a>
                </Button>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-[#FFF9E6]/70">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#FFD700]" />
                    Pagamento 100% Seguro
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FFD700]" />
                    Garantia Incondicional
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FFD700]" />
                    +5.000 Alunos Ativos
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-[#C41E3A]/20 border-y border-[#C41E3A]/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#FFD700]">
              <Clock className="w-6 h-6" />
              <p className="text-lg font-bold">⚠️ Oferta de R$37 pode sair do ar a qualquer momento!</p>
            </div>
            <p className="text-[#FFF9E6]/80">Vagas limitadas para garantir qualidade no suporte aos alunos.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD700]">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-[#FFD700]/20 rounded-lg px-6 bg-[#0F0A08]">
                <AccordionTrigger className="text-left font-semibold text-[#FFF9E6] hover:text-[#FFD700]">
                  Preciso ter CNPJ para começar?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFF9E6]/80">
                  Não necessariamente! Você pode começar importando como pessoa física até R$3.000 por ano. Muitos dos nossos alunos começaram assim e depois abriram CNPJ quando o negócio decolou.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-[#FFD700]/20 rounded-lg px-6 bg-[#0F0A08]">
                <AccordionTrigger className="text-left font-semibold text-[#FFF9E6] hover:text-[#FFD700]">
                  Consigo importar com pouco dinheiro?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFF9E6]/80">
                  Sim! Você pode começar com investimentos a partir de R$500. O curso ensina como escolher produtos com baixo investimento inicial e alto potencial de lucro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-[#FFD700]/20 rounded-lg px-6 bg-[#0F0A08]">
                <AccordionTrigger className="text-left font-semibold text-[#FFF9E6] hover:text-[#FFD700]">
                  Recebo o curso imediatamente?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFF9E6]/80">
                  Sim! Assim que o pagamento for confirmado, você receberá acesso imediato à plataforma com todas as aulas, materiais e bônus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-[#FFD700]/20 rounded-lg px-6 bg-[#0F0A08]">
                <AccordionTrigger className="text-left font-semibold text-[#FFF9E6] hover:text-[#FFD700]">
                  E se eu não gostar do curso?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFF9E6]/80">
                  Sem problemas! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento, sem perguntas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A0604] via-[#C41E3A]/10 to-[#0A0604]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700]">
              Enquanto Outros Apenas Compram da China, Você Vai Lucrar Com Ela
            </h2>
            <p className="text-lg text-[#FFF9E6]/80">
              Dê o primeiro passo hoje e descubra o poder de importar com estratégia, conhecimento e método comprovado.
            </p>
            <Button size="lg" variant="red" onClick={scrollToCTA} className="w-full sm:w-auto text-lg px-8 py-6">
              <Sparkles className="w-5 h-5 mr-2" />
              Garantir Minha Vaga Agora!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#FFD700]/20 bg-[#0A0604]">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-[#FFF9E6]/60">
            © 2025 Caçador de Produtos Lucrativos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CacadorProdutosChina;
