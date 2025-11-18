import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, ShieldCheck, Clock, Zap } from "lucide-react";

const LiveImportacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio - aqui você pode integrar com sua API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const FormularioCaptura = () => (
    <Card className="bg-card border-primary/20 shadow-glow">
      <CardContent className="p-6">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-background border-primary/30"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Quero garantir minha vaga na live exclusiva"}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Ao preencher o formulário, você concorda em receber comunicações sobre a live.
            </p>
          </form>
        ) : (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Vaga garantida!</h3>
            <p className="text-muted-foreground">
              Você receberá todas as informações da live no seu e-mail e WhatsApp.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-destructive/20 border border-destructive rounded-full">
              <span className="text-destructive font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Live Exclusiva
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Como Importar da China e Lucrar Vendendo em Marketplaces
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Aprenda, passo a passo, como escolher produtos, negociar com fornecedores e montar operações lucrativas sem precisar ser um expert em importação.
            </p>
            
            <div className="space-y-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <p className="font-semibold">Data: [EDITAR DATA]</p>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <p className="font-semibold">Horário: [EDITAR HORÁRIO]</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary font-semibold">
                Vagas limitadas
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary font-semibold">
                100% online e gratuito
              </span>
            </div>
          </div>
          
          <div>
            <FormularioCaptura />
          </div>
        </div>
      </section>

      {/* Para quem é essa live */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Essa live é para você que...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Vende em marketplaces e sente que sua margem está cada vez menor",
              "Quer parar de depender apenas de distribuidores nacionais",
              "Tem medo de importar e errar em taxas, prazos ou fornecedores",
              "Busca um passo a passo claro para importar com segurança",
              "Fatura entre 10k e 300k por mês e quer escalar com importação",
              "Precisa de fornecedores confiáveis e produtos de qualidade"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O que você vai aprender na live
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Conteúdo prático e direto ao ponto
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Como escolher produtos certos para importar",
                description: "Critérios de seleção que aumentam suas chances de lucro"
              },
              {
                icon: Users,
                title: "Como encontrar fornecedores confiáveis na China",
                description: "Onde buscar, como validar e negociar com segurança"
              },
              {
                icon: ShieldCheck,
                title: "Noções de custos, fretes e taxas",
                description: "Calcule corretamente para não ter prejuízo"
              },
              {
                icon: CheckCircle2,
                title: "Como trazer produtos e vender com boa margem",
                description: "Estratégias práticas para marketplaces"
              },
              {
                icon: Zap,
                title: "Erros mais comuns de iniciantes",
                description: "Aprenda com quem já passou por isso e evite perdas"
              },
              {
                icon: TrendingUp,
                title: "Passo a passo para sua primeira importação",
                description: "Um roteiro claro do início ao fim"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quem é o especialista */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quem vai te guiar nessa live
          </h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="mx-auto">
                  <div className="w-48 h-48 rounded-full bg-gradient-primary overflow-hidden">
                    {/* Placeholder para foto do especialista */}
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Users className="w-20 h-20 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">[Nome do Especialista]</h3>
                  
                  <p className="text-lg text-foreground">
                    [Editar: Adicione aqui a apresentação do especialista. Exemplo: "Trabalha com importação da China há mais de X anos, já realizou centenas de operações bem-sucedidas e ajudou dezenas de vendedores a estruturarem suas importações."]
                  </p>
                  
                  <p className="text-lg text-foreground">
                    [Editar: Destaque a experiência com marketplaces. Exemplo: "Especialista em vendas nos principais marketplaces brasileiros (Mercado Livre, Shopee, Amazon, Magalu), com expertise em encontrar produtos de alta conversão."]
                  </p>
                  
                  <p className="text-lg text-foreground">
                    [Editar: Mencione resultados concretos. Exemplo: "Já auxiliou mais de X empresários a dobrarem suas margens de lucro através de importação estratégica, sempre com foco em segurança e conformidade."]
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Por que você pode confiar no que vai aprender
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Foco em prática, não apenas teoria
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                texto: "[Editar: Depoimento de aluno/empresário que teve resultado positivo com o conteúdo]",
                nome: "[Nome]",
                cargo: "[Cargo/Empresa]"
              },
              {
                texto: "[Editar: Depoimento focando em como o conteúdo é prático e aplicável no dia a dia]",
                nome: "[Nome]",
                cargo: "[Cargo/Empresa]"
              },
              {
                texto: "[Editar: Depoimento sobre a confiança e segurança transmitida pelo especialista]",
                nome: "[Nome]",
                cargo: "[Cargo/Empresa]"
              }
            ].map((depoimento, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <p className="text-foreground mb-4 italic">"{depoimento.texto}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold">{depoimento.nome}</p>
                    <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">[X+]</div>
              <p className="text-muted-foreground">Empresários treinados</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">[X+]</div>
              <p className="text-muted-foreground">Importações realizadas</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">[X%]</div>
              <p className="text-muted-foreground">De satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garanta sua vaga agora
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Esta é uma live exclusiva, focada em quem realmente quer resultados práticos. 
            Não será um conteúdo genérico. As vagas são limitadas para garantir 
            qualidade e interação durante o evento.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <FormularioCaptura />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>100% online</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Totalmente gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Conteúdo exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default LiveImportacao;
