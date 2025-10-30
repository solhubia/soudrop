import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Lock, Clock, Users, TrendingUp, Shield, Zap } from "lucide-react";
import expertPhoto from "@/assets/expert-photo.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { trackViewContent, trackInitiateCheckout, trackWishCheckout } from "@/lib/fbq";

const CacadorProdutos = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Countdown Timer Header */}
      <div className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-3 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-lg">
            ⏰ Esta oferta é por tempo limitado: {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <Star className="w-4 h-4 fill-current" />
              Oferta Especial por Tempo Limitado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Descubra como encontrar produtos lucrativos direto da China
              <span className="bg-gradient-primary bg-clip-text text-transparent"> — e revender no Brasil com lucros de até 300%</span>, mesmo sem experiência!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              O mesmo método usado por importadores profissionais agora disponível para você, em um curso simples e direto de <span className="font-bold text-primary">apenas R$37</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="xl" variant="hero" onClick={() => { trackWishCheckout("courses"); scrollToCTA();}} className="w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Quero Aprender Agora!
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Garantia de 7 dias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Authority Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-16 h-16 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground">[Vídeo de Apresentação]</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Você está a poucos cliques de descobrir onde estão os produtos mais lucrativos da China
                  </h2>
                  <p className="text-muted-foreground">
                    E como qualquer pessoa pode acessar o mesmo mercado que abastece as maiores lojas do Brasil.
                  </p>
                  <Button variant="gradient" size="lg" onClick={() => { trackWishCheckout("courses"); scrollToCTA();}}>
                    Começar Agora
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O Que Você Vai Aprender
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Aprenda o passo a passo para achar produtos que vendem todos os dias",
                "Descubra os fornecedores secretos do 1688 (plataforma que os chineses usam, não o ocidente)",
                "Saiba quanto custa importar de verdade e como calcular seu lucro real",
                "Tenha acesso à planilha automática de cálculo de lucro",
                "Receba uma lista com 20 produtos quentes de 2025",
                "Veja como validar um produto antes de gastar um centavo"
              ].map((benefit, index) => (
                <Card key={index} className="p-6 hover:border-primary/40 transition-all hover-scale">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Você não vai mais depender de sorte, anúncios ou cursos caros
            </h2>
            <p className="text-lg text-muted-foreground">
              Em poucas horas, vai enxergar oportunidades que 95% das pessoas não veem — produtos que vendem sozinhos, com margens de até 300%.
            </p>
            <Button size="xl" variant="hero" onClick={() => { trackWishCheckout("courses"); scrollToCTA();}}>
              Quero Essa Transformação!
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Veja o Que Nossos Alunos Estão Dizendo
            </h2>
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
                <Card key={index} className="p-6 space-y-4 hover-scale">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-40 rounded-lg overflow-hidden">
                    <img 
                      src={expertPhoto} 
                      alt="Renan Ferreira - Expert em Importação" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold">Sobre Renan Ferreira</h3>
                  <p className="text-muted-foreground">
                    Renan Ferreira é empresário e importador há mais de 10 anos, com experiência direta em fábricas da China. Já importou milhares de produtos e ensina, de forma prática, como qualquer pessoa pode fazer o mesmo — sem depender de ninguém.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="cta-section" className="py-16 bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-primary/20 shadow-glow">
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Oferta Irresistível
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">💰 Curso "Caçador de Produtos Lucrativos"</span>
                    <span className="font-semibold line-through text-muted-foreground">R$497</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">📊 Planilha de Cálculo de Lucro</span>
                    <span className="font-semibold line-through text-muted-foreground">R$97</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">📦 Lista de Produtos Lucrativos</span>
                    <span className="font-semibold line-through text-muted-foreground">R$197</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">💬 Scripts e Checklists</span>
                    <span className="font-semibold line-through text-muted-foreground">R$47</span>
                  </div>
                  <div className="flex justify-between items-center py-4 text-lg">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold line-through text-muted-foreground">R$838</span>
                  </div>
                </div>

                <div className="bg-gradient-primary p-8 rounded-lg">
                  <p className="text-primary-foreground/80 text-sm mb-2">Mas hoje você paga apenas:</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">R$37</p>
                  <p className="text-primary-foreground/80 text-sm">Acesso imediato e vitalício + Garantia de 7 dias</p>
                </div>

                <Button size="xl" variant="default" className="w-full" asChild>
                  <a href="https://pay.kiwify.com.br/8SaUXFm"
                    onClick={() => trackInitiateCheckout("courses", 37)}>
                    <Zap className="w-5 h-5 mr-2" />
                    Quero Aprender a Achar Produtos Lucrativos Agora!
                  </a>
                </Button>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Pagamento 100% Seguro
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Garantia de 7 Dias
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    +5.000 Alunos
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-destructive">
              <Clock className="w-6 h-6" />
              <p className="text-lg font-bold">⚠️ Essa oferta de R$37 é promocional e pode sair do ar a qualquer momento.</p>
            </div>
            <p className="text-muted-foreground">As vagas são limitadas para manter o suporte de qualidade.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Preciso ter CNPJ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não necessariamente! Você pode começar importando como pessoa física até R$3.000 por ano. Muitos dos nossos alunos começaram assim e depois abriram CNPJ quando o negócio decolou.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Consigo importar com pouco dinheiro?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Você pode começar com investimentos a partir de R$500. O curso ensina como escolher produtos com baixo investimento inicial e alto potencial de lucro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Recebo o curso na hora?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Assim que o pagamento for confirmado, você receberá acesso imediato à plataforma com todas as aulas, materiais e bônus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Tem garantia?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Enquanto a maioria continua apenas comprando da China, você vai aprender a lucrar com ela.
            </h2>
            <p className="text-lg text-muted-foreground">
              Dê o primeiro passo hoje — e descubra o poder de importar com estratégia.
            </p>
            <Button size="xl" variant="hero" onClick={() => { trackWishCheckout("courses"); scrollToCTA();}} className="w-full sm:w-auto">
              <Zap className="w-5 h-5 mr-2" />
              Garantir Minha Vaga Agora!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Caçador de Produtos Lucrativos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CacadorProdutos;
