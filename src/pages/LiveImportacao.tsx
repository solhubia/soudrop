import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, ShieldCheck, Clock, Zap, Package, Star, Award, Quote } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";

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
    <Card className="bg-soudrop-black/90 border-2 border-soudrop-green shadow-glow backdrop-blur-sm">
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
                className="bg-input border-border/50 focus:border-soudrop-green h-12 text-lg"
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
                className="bg-input border-border/50 focus:border-soudrop-green h-12 text-lg"
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
                className="bg-input border-border/50 focus:border-soudrop-green h-12 text-lg"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-soudrop-yellow hover:bg-soudrop-yellow/90 text-soudrop-black font-bold text-xl py-7 shadow-yellow-glow hover:scale-105 transition-all"
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
            <div className="w-20 h-20 rounded-full bg-soudrop-green/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12 text-soudrop-green" />
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
      <header className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-16 md:h-20 lg:h-24" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-soudrop-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-soudrop-yellow/10 rounded-full blur-3xl"></div>
        
        {/* Linhas de movimento */}
        <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-soudrop-green/30 to-transparent"></div>
        <div className="absolute top-1/3 left-10 w-24 h-1 bg-gradient-to-r from-transparent via-soudrop-yellow/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-1 bg-gradient-to-l from-transparent via-soudrop-green/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-yellow rounded-full shadow-yellow-glow">
                <span className="text-soudrop-black font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Live Exclusiva • Online e Gratuita
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] uppercase">
                <span className="text-foreground">Como Importar</span>
                <br />
                <span className="text-soudrop-green">da China</span>
                <br />
                <span className="text-foreground">e Lucrar nos</span>
                <br />
                <span className="text-soudrop-yellow">Marketplaces</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Aprenda o passo a passo completo para <span className="text-soudrop-green font-bold">escolher produtos vencedores</span>, negociar com fornecedores chineses e <span className="text-soudrop-yellow font-bold">multiplicar seu lucro</span> nos principais marketplaces do Brasil.
              </p>
              
              <div className="space-y-4 bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-soudrop-green/30 shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-soudrop-green/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-soudrop-green" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Data</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR DATA]</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-soudrop-yellow/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-soudrop-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Horário</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR HORÁRIO]</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-3 bg-soudrop-green/20 border-2 border-soudrop-green rounded-xl">
                  <span className="text-soudrop-green font-bold uppercase text-sm">🔥 Vagas Limitadas</span>
                </div>
                <div className="px-5 py-3 bg-soudrop-yellow/20 border-2 border-soudrop-yellow rounded-xl">
                  <span className="text-soudrop-yellow font-bold uppercase text-sm">✅ 100% Gratuito</span>
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
            <p className="text-soudrop-yellow font-bold uppercase tracking-wider mb-3">Quem vai te guiar</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              Conheça o <span className="text-soudrop-green">mentor</span> da SouDrop Brasil
            </h2>
          </div>
          
          <Card className="bg-background border-soudrop-green/30 shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-3xl bg-gradient-primary overflow-hidden border-4 border-soudrop-yellow shadow-yellow-glow">
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Users className="w-24 h-24 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-soudrop-yellow rounded-full flex items-center justify-center border-4 border-background shadow-yellow-glow">
                      <Star className="w-10 h-10 text-soudrop-black" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-foreground">Renan Ferreira</h3>
                    <p className="text-xl text-soudrop-green font-bold">Empresário e Importador há mais de 10 anos</p>
                  </div>
                  
                  <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                    <p>
                      Sou <span className="text-soudrop-green font-bold">Renan Ferreira</span>, empresário e importador há mais de 10 anos, com experiência direta em fábricas da China. Já importei milhares de produtos e ensino, de forma prática, como qualquer pessoa pode fazer o mesmo — sem depender de ninguém.
                    </p>
                    
                    <p>
                      Além da importação, sou <span className="text-soudrop-yellow font-bold">estrategista de vendas, tráfego e negociação</span>, formado em Publicidade e Propaganda. Tenho 4 empresas em meu nome: uma Agência de Tráfego que fatura 7 dígitos por ano, uma startup avaliada em 5 milhões de reais, uma escola online que forma empreendedores digitais para a nova economia e uma consultoria de vendas para grandes corporações.
                    </p>
                    
                    <p>
                      No <span className="text-soudrop-green font-bold">campo de batalha há mais de 7 anos</span>, já atendi mais de 1.000 empresas de diferentes nichos e gerenciei mais de 10 milhões de reais em campanhas de anúncios online. Hoje utilizo toda essa experiência para criar <span className="text-soudrop-yellow font-bold">operações de importação lucrativas</span> para lojistas que vendem em marketplaces. Nesta live, vou te mostrar o que realmente funciona na prática para importar da China e lucrar, sem achismo e sem complicação.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-soudrop-green/20">
                      <div className="w-10 h-10 rounded-lg bg-soudrop-green/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-soudrop-green" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">+10 anos</p>
                        <p className="text-sm text-muted-foreground">Importação da China</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-soudrop-yellow/20">
                      <div className="w-10 h-10 rounded-lg bg-soudrop-yellow/20 flex items-center justify-center flex-shrink-0">
                        <Package className="w-6 h-6 text-soudrop-yellow" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Milhares</p>
                        <p className="text-sm text-muted-foreground">Produtos importados</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-soudrop-green/20">
                      <div className="w-10 h-10 rounded-lg bg-soudrop-green/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-soudrop-green" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">+1.000</p>
                        <p className="text-sm text-muted-foreground">Empresas atendidas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-soudrop-yellow/20">
                      <div className="w-10 h-10 rounded-lg bg-soudrop-yellow/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-soudrop-yellow" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">+R$ 10M</p>
                        <p className="text-sm text-muted-foreground">Gerenciados em anúncios</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-soudrop-green/20 sm:col-span-2 lg:col-span-1">
                      <div className="w-10 h-10 rounded-lg bg-soudrop-green/20 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-soudrop-green" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Operações</p>
                        <p className="text-sm text-muted-foreground">Import. compartilhada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prova social - Depoimentos */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-soudrop-yellow font-bold uppercase tracking-wider mb-3">Resultados reais</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              Prova real de quem já está <span className="text-soudrop-green">no jogo</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que dizem os vendedores que já aplicaram nossas estratégias
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
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
                nome: "Felipe Costa",
                cargo: "Vendedor Amazon • MG"
              }
            ].map((depoimento, index) => (
              <Card key={index} className="bg-card border-2 border-soudrop-green/30 hover:border-soudrop-yellow hover:shadow-yellow-glow transition-all">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Quote className="w-12 h-12 text-soudrop-yellow/40" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                    "{depoimento.texto}"
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-bold text-foreground">{depoimento.nome}</p>
                    <p className="text-sm text-soudrop-green">{depoimento.cargo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-soudrop-yellow font-bold uppercase tracking-wider mb-3">Conteúdo da Live</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
              O que você vai <span className="text-soudrop-green">aprender</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo prático e direto ao ponto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Como funciona a importação da China na prática",
                description: "O passo a passo completo para revenda em marketplaces brasileiros"
              },
              {
                icon: Package,
                title: "Como escolher produtos com alta margem e alta demanda",
                description: "Critérios práticos de seleção que aumentam suas chances de lucro"
              },
              {
                icon: Users,
                title: "Como encontrar e negociar com fornecedores confiáveis",
                description: "Onde buscar, como validar e negociar com segurança na China"
              },
              {
                icon: ShieldCheck,
                title: "Como aproveitar a importação compartilhada",
                description: "Comece com menos capital dividindo custos com outros vendedores"
              },
              {
                icon: Zap,
                title: "Como estruturar suas ofertas para vender mais",
                description: "Estratégias práticas para se destacar nos marketplaces"
              },
              {
                icon: CheckCircle2,
                title: "Passo a passo da sua primeira importação",
                description: "Um roteiro claro e seguro do início ao fim"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-background border-2 border-soudrop-green/30 hover:border-soudrop-green hover:shadow-glow transition-all group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-soudrop-green/20 flex items-center justify-center mb-6 group-hover:bg-soudrop-green/30 transition-colors">
                    <item.icon className="w-8 h-8 text-soudrop-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-yellow rounded-full shadow-yellow-glow mb-8">
            <span className="text-soudrop-black font-bold uppercase text-sm tracking-wider flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Últimas Vagas Disponíveis
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            <span className="text-foreground">Garanta sua vaga na</span>
            <br />
            <span className="text-soudrop-green">Live Exclusiva</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba <span className="text-soudrop-yellow font-bold">acesso imediato</span> ao link da live
          </p>
          
          <div className="max-w-lg mx-auto">
            <FormularioCaptura />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-12 mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2024 SouDrop Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LiveImportacao;
