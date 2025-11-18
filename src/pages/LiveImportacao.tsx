import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, ShieldCheck, Clock, Zap, Package, Star, Award } from "lucide-react";
import logoSoudrop from "@/assets/new-logo-v2.png";

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
    <Card className="bg-card border-primary/30 shadow-glow backdrop-blur-sm">
      <CardContent className="p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-semibold">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-primary h-12 text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-primary h-12 text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground font-semibold">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-input border-border/50 focus:border-primary h-12 text-lg"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl py-7 shadow-yellow-glow hover:scale-105 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "QUERO GARANTIR MINHA VAGA"}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              🔒 Seus dados estão seguros. Ao preencher, você concorda em receber comunicações sobre a live.
            </p>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-foreground">Vaga garantida! 🎉</h3>
            <p className="text-muted-foreground text-lg">
              Você receberá todas as informações da live no seu e-mail e WhatsApp.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      <header className="py-6 px-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-12 md:h-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-yellow rounded-full shadow-yellow-glow">
                <span className="text-secondary-foreground font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Live Exclusiva • Online e Gratuita
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] uppercase">
                <span className="text-foreground">Como Importar</span>
                <br />
                <span className="text-primary">da China</span>
                <br />
                <span className="text-foreground">e Lucrar nos</span>
                <br />
                <span className="text-secondary">Marketplaces</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Aprenda o passo a passo completo para <span className="text-primary font-bold">escolher produtos vencedores</span>, negociar com fornecedores chineses e <span className="text-secondary font-bold">multiplicar seu lucro</span> nos principais marketplaces do Brasil.
              </p>
              
              <div className="space-y-4 bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-primary/30 shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Data</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR DATA]</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Horário</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR HORÁRIO]</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-3 bg-primary/20 border-2 border-primary rounded-xl">
                  <span className="text-primary font-bold uppercase text-sm">🔥 Vagas Limitadas</span>
                </div>
                <div className="px-5 py-3 bg-secondary/20 border-2 border-secondary rounded-xl">
                  <span className="text-secondary font-bold uppercase text-sm">✅ 100% Gratuito</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <FormularioCaptura />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Mentor */}
      <section className="py-20 px-4 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-bold uppercase tracking-wider mb-3">Quem vai te guiar</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              Conheça o <span className="text-primary">mentor</span> da SouDrop Brasil
            </h2>
          </div>
          
          <Card className="bg-background border-primary/30 shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-3xl bg-gradient-primary overflow-hidden border-4 border-primary shadow-glow">
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Users className="w-24 h-24 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center border-4 border-background shadow-yellow-glow">
                      <Star className="w-10 h-10 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-foreground">[SEU NOME]</h3>
                    <p className="text-xl text-primary font-bold">Especialista em Importação da China</p>
                  </div>
                  
                  <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                    <p>
                      Especialista em importação da China <span className="text-primary font-bold">focada em lojistas</span> que vendem em marketplaces. 
                      Já ajudei <span className="text-secondary font-bold">dezenas de vendedores</span> a aumentarem margem, escalarem operações e importarem com segurança.
                    </p>
                    
                    <p>
                      Estou <span className="text-primary font-bold">diariamente no campo de batalha</span>, negociando com fornecedores, 
                      analisando produtos e acompanhando operações de importação compartilhada.
                    </p>
                    
                    <p>
                      Nesta live, vou mostrar <span className="text-secondary font-bold">o que realmente funciona hoje</span> para importar 
                      da China e lucrar vendendo em marketplaces, sem depender de "achismo".
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4 pt-6">
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">+X anos</p>
                        <p className="text-sm text-muted-foreground">Importação China</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">+Y lojistas</p>
                        <p className="text-sm text-muted-foreground">Impactados</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-primary/20">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Recorrente</p>
                        <p className="text-sm text-muted-foreground">Import. Compartilhada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para quem é essa live */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-bold uppercase tracking-wider mb-3">Público-alvo</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Essa live é para <span className="text-primary">você</span> que...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Vende em marketplaces e sente que sua margem está cada vez menor",
              "Quer parar de depender apenas de distribuidores nacionais",
              "Tem medo de importar e errar em taxas, prazos ou fornecedores",
              "Busca um passo a passo claro para importar com segurança",
              "Fatura entre 10k e 300k por mês e quer escalar com importação",
              "Precisa de fornecedores confiáveis e produtos de qualidade"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-bold uppercase tracking-wider mb-3">Conteúdo da Live</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              O que você vai <span className="text-primary">aprender</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo prático e direto ao ponto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                icon: Package,
                title: "Passo a passo para sua primeira importação",
                description: "Um roteiro claro do início ao fim"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 hover:border-primary hover:shadow-glow transition-all group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social - Depoimentos */}
      <section className="py-20 px-4 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-bold uppercase tracking-wider mb-3">Resultados reais</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              Prova real de quem já está <span className="text-primary">no jogo</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Foco em prática, não apenas teoria
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                texto: "Com a estratégia de importação compartilhada, consegui acessar produtos que sozinho eu não conseguiria. Hoje tenho muito mais margem nos marketplaces.",
                nome: "Carlos Silva",
                cargo: "Vendedor Mercado Livre • SP"
              },
              {
                texto: "Eu tinha medo de importar da China. Depois de entender o passo a passo, fiz minha primeira importação com segurança e orientação.",
                nome: "Patrícia Mendes",
                cargo: "Lojista Shopee • RJ"
              },
              {
                texto: "Antes eu vendia bem, mas com margem baixa. Ajustando os produtos e a importação, meu lucro aumentou sem precisar dobrar o faturamento.",
                nome: "Felipe Santos",
                cargo: "E-commerce • MG"
              }
            ].map((depoimento, index) => (
              <Card key={index} className="bg-background border-2 border-primary/30 hover:border-primary/60 hover:shadow-glow transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-secondary/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground/90 mb-6 text-lg leading-relaxed italic">
                    "{depoimento.texto}"
                  </p>
                  <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{depoimento.nome}</p>
                      <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-primary rounded-2xl shadow-glow">
              <div className="text-5xl md:text-6xl font-black text-primary-foreground mb-3">[500+]</div>
              <p className="text-primary-foreground/90 font-bold text-lg uppercase tracking-wide">Empresários Treinados</p>
            </div>
            <div className="text-center p-8 bg-gradient-yellow rounded-2xl shadow-yellow-glow">
              <div className="text-5xl md:text-6xl font-black text-secondary-foreground mb-3">[1.200+]</div>
              <p className="text-secondary-foreground/90 font-bold text-lg uppercase tracking-wide">Importações Realizadas</p>
            </div>
            <div className="text-center p-8 bg-gradient-primary rounded-2xl shadow-glow">
              <div className="text-5xl md:text-6xl font-black text-primary-foreground mb-3">[98%]</div>
              <p className="text-primary-foreground/90 font-bold text-lg uppercase tracking-wide">De Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/20 border-2 border-destructive rounded-full mb-6">
              <Clock className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-bold uppercase text-sm">Últimas vagas disponíveis</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">
              <span className="text-foreground">Garanta sua</span>
              <br />
              <span className="text-secondary">vaga agora</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
              Esta é uma <span className="text-primary font-bold">live exclusiva</span>, focada em quem realmente quer resultados práticos.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Não será um conteúdo genérico. As <span className="text-secondary font-bold">vagas são limitadas</span> para garantir 
              qualidade e interação durante o evento.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto mb-12">
            <FormularioCaptura />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-foreground">100% Online</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-foreground">Totalmente Gratuito</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-bold text-foreground">Conteúdo Exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-card border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logoSoudrop} alt="SouDrop Brasil" className="h-10" />
            <p className="text-muted-foreground text-sm">
              © 2024 SouDrop Brasil - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LiveImportacao;
