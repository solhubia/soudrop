import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, TrendingUp, Shield, Package, Search, Star, PlayCircle } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";
import mentorPhoto from "@/assets/renan-ferreira.jpg";
const CacadorProdutos = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const targetAudience = ["Para quem vende em marketplaces e sente que a margem está cada vez menor", "Para quem quer parar de depender apenas de distribuidores nacionais", "Para quem tem vontade de importar da China, mas não sabe por onde começar", "Para quem não quer perder dinheiro escolhendo produtos errados", "Para quem quer ter um processo claro para analisar oportunidades e produtos"];
  const learningTopics = [{
    icon: Target,
    text: "Como entender, na prática, o impacto da importação na sua vida e no seu negócio"
  }, {
    icon: Search,
    text: "Quais são os sites 'secretos' que os próprios chineses usam para comprar barato"
  }, {
    icon: Shield,
    text: "Como encontrar e validar fornecedores de confiança no 1688"
  }, {
    icon: TrendingUp,
    text: "Como comparar preços entre China e Mercado Livre para achar oportunidades de lucro"
  }, {
    icon: Package,
    text: "Como usar Pipi Ads + 1688 para validar demanda de produtos"
  }, {
    icon: CheckCircle2,
    text: "Como transformar esse conhecimento em uma rotina simples de caça de produtos lucrativos"
  }];
  const courseModules = [{
    number: "01",
    title: "Bem-vindo – Quem sou eu e como a importação mudou minha vida",
    description: "Entenda a visão geral do curso e a mentalidade correta para importar com segurança e lucro."
  }, {
    number: "02",
    title: "Os sites 'secretos' que os próprios chineses usam para comprar barato",
    description: "Descubra plataformas usadas pelos chineses para encontrar preços realmente competitivos."
  }, {
    number: "03",
    title: "Como achar um fornecedor de confiança no 1688",
    description: "Aprenda critérios práticos para analisar fornecedores e reduzir riscos na importação."
  }, {
    number: "04",
    title: "Comparando preços e encontrando oportunidades no Mercado Livre",
    description: "Compare preço de compra x preço de venda real, identificando produtos com boa margem."
  }, {
    number: "05",
    title: "Bônus – Pipi Ads + 1688",
    description: "Aula bônus mostrando como usar Pipi Ads junto com 1688 para validar produtos e demanda."
  }, {
    number: "06",
    title: "Encerramento e próximos passos",
    description: "Orientações finais para você continuar evoluindo como um verdadeiro caçador de produtos."
  }];
  const testimonials = [{
    name: "Carlos Mendes",
    role: "Vendedor Mercado Livre • SP",
    text: "Consegui encontrar melhores produtos e evitar várias furadas. O curso é direto ao ponto e muito prático."
  }, {
    name: "Patricia Silva",
    role: "Lojista Shopee • RJ",
    text: "Ganhei muito mais confiança na escolha de produtos para importar. Vale cada centavo do investimento."
  }, {
    name: "Felipe Costa",
    role: "Empreendedor Digital • MG",
    text: "O método de comparação de preços me abriu os olhos para oportunidades que eu nunca tinha visto antes."
  }];
  return <div className="min-h-screen bg-[hsl(var(--cacador-background))]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[hsl(var(--cacador-orange))]">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--cacador-red))] via-[hsl(var(--cacador-orange))] to-[hsl(var(--cacador-yellow))]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-white/20 text-white border-2 border-white/40 px-6 py-2 text-sm font-bold backdrop-blur-sm">
              CURSO ONLINE • 100% GRAVADO
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Caçador de Produtos: Encontre Produtos Lucrativos na China{" "}
              <span className="text-[hsl(var(--cacador-yellow))] drop-shadow-lg">Mesmo Começando do Zero</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Um curso direto ao ponto para te mostrar como pesquisar, comparar e encontrar 
              produtos com potencial real de lucro nos marketplaces.
            </p>

            <div className="flex flex-col items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-white/80 text-lg mb-2">Investimento único de apenas</p>
                <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  R$ 27,90
                </div>
              </div>

              <Button onClick={scrollToCTA} className="bg-[hsl(var(--cacador-yellow))] hover:bg-[hsl(var(--cacador-yellow-dark))] text-[hsl(var(--cacador-red))] px-12 py-8 text-xl font-bold shadow-[var(--shadow-cacador-cta)] hover:shadow-[var(--shadow-cacador-yellow)] transition-all duration-300 hover:scale-105">
                Quero acessar o Caçador de Produtos
              </Button>

              <p className="text-sm text-white/70">
                Curso online, acesso pela internet, conteúdo prático e direto ao ponto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é o curso */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[hsl(var(--cacador-red))] mb-12">
              Para quem é o Caçador de Produtos
            </h2>
            
            <div className="space-y-4">
              {targetAudience.map((item, index) => <Card key={index} className="bg-white border-l-4 border-l-[hsl(var(--cacador-orange))] hover:shadow-[var(--shadow-cacador-red)] transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[hsl(var(--cacador-red))] flex-shrink-0 mt-1" />
                      <p className="text-[hsl(var(--cacador-foreground))] text-lg">{item}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[hsl(var(--cacador-background))] to-[hsl(var(--cacador-orange))]/10">
        <div className="absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[hsl(var(--cacador-red))] mb-4">
              O que você vai aprender por dentro do curso
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {learningTopics.map((topic, index) => <Card key={index} className="bg-white border-2 border-[hsl(var(--cacador-orange))]/30 hover:border-[hsl(var(--cacador-red))]/50 transition-all duration-300 hover:shadow-[var(--shadow-cacador-red)]">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--cacador-red))]/10 to-[hsl(var(--cacador-orange))]/10 flex items-center justify-center">
                        <topic.icon className="w-7 h-7 text-[hsl(var(--cacador-red))]" />
                      </div>
                      <p className="text-[hsl(var(--cacador-foreground))] font-medium leading-relaxed">
                        {topic.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo das aulas */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
              O que você recebe ao entrar no Caçador de Produtos
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Todas as aulas organizadas e prontas para você assistir
            </p>
            
            <div className="space-y-6">
              {courseModules.map((module, index) => <Card key={index} className="bg-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{module.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start gap-3">
                          <PlayCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <h3 className="text-xl font-bold text-foreground leading-tight">
                            {module.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é o especialista */}
      <section className="py-16 md:py-24 bg-cacador-bg-main">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-cacador-pink mb-12">
              Quem está por trás do Caçador de Produtos
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cacador-pink/30 to-cacador-orange/30 blur-2xl rounded-full"></div>
                  <img src={mentorPhoto} alt="Renan Ferreira" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-cacador-pink/40 shadow-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-cacador-text-primary">
                  Renan Ferreira
                </h3>
                
                <div className="space-y-4 text-cacador-text-secondary text-lg leading-relaxed">
...
                </div>

                {/* Authority bullets */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">
                      Mais de 10 anos de experiência com importação da China
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">
                      Milhares de produtos importados diretamente de fábricas chinesas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">
                      Vendedor ativo em Mercado Livre, Shopee, Amazon e Magalu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
              Por que você pode confiar no que vai aprender
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Veja o que alguns alunos têm a dizer
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border-2 border-primary/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div>
                      <p className="text-foreground font-bold">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-primary/5 border-2 border-primary/30">
                <CardContent className="p-8 text-center space-y-4">
                  <Shield className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-foreground font-semibold text-lg">
                    O foco do curso é prática, não teoria complicada
                  </p>
                  <p className="text-muted-foreground">
                    O conteúdo foi criado pensando em quem realmente vende todos os dias 
                    e precisa de resultados reais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona o acesso */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              Como funciona o acesso ao curso
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <PlayCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">100% Online</h3>
                  <p className="text-muted-foreground">
                    Assista quando e onde quiser, no seu ritmo, sem pressa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Aulas Gravadas</h3>
                  <p className="text-muted-foreground">
                    Todo o conteúdo organizado em módulos para facilitar seu aprendizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Acesso Garantido</h3>
                  <p className="text-muted-foreground">
                    Tempo de acesso generoso para você revisar o conteúdo quantas vezes precisar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Pagamento Seguro</h3>
                  <p className="text-muted-foreground">
                    Transação processada em plataforma segura e confiável.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--cacador-red))]/10 via-[hsl(var(--cacador-orange))]/10 to-[hsl(var(--cacador-yellow))]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[hsl(var(--cacador-orange))]/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[hsl(var(--cacador-red))]/20 text-[hsl(var(--cacador-red))] border-2 border-[hsl(var(--cacador-red))]/40 px-6 py-2 text-sm font-bold">
              OFERTA PROMOCIONAL POR TEMPO LIMITADO
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--cacador-foreground))]">
              Pronto para se tornar um{" "}
              <span className="text-[hsl(var(--cacador-red))]">Caçador de Produtos</span>?
            </h2>
            
            <p className="text-xl text-[hsl(var(--cacador-foreground))]/70 max-w-2xl mx-auto">
              O Caçador de Produtos foi feito para acelerar o caminho de quem quer importar 
              com mais segurança e escolher produtos com mais inteligência. Um investimento 
              acessível perto do potencial de retorno que você pode alcançar.
            </p>

            <div className="flex flex-col items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-[hsl(var(--cacador-foreground))]/70 text-lg mb-2">Investimento único de apenas</p>
                <div className="text-5xl md:text-6xl font-bold text-[hsl(var(--cacador-red))] mb-2">
                  R$ 27,90
                </div>
                <p className="text-sm text-[hsl(var(--cacador-foreground))]/60">
                  Pagamento único, sem mensalidades
                </p>
              </div>

              <Button className="bg-[hsl(var(--cacador-yellow))] hover:bg-[hsl(var(--cacador-yellow-dark))] text-[hsl(var(--cacador-red))] px-12 py-8 text-xl font-bold shadow-[var(--shadow-cacador-cta)] hover:shadow-[var(--shadow-cacador-yellow)] transition-all duration-300 hover:scale-105">
                Quero acessar o Caçador de Produtos
              </Button>

              <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
                <div className="flex items-center gap-2 text-[hsl(var(--cacador-foreground))]">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--cacador-red))]" />
                  <span className="font-medium">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2 text-[hsl(var(--cacador-foreground))]">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--cacador-red))]" />
                  <span className="font-medium">Conteúdo Completo</span>
                </div>
                <div className="flex items-center gap-2 text-[hsl(var(--cacador-foreground))]">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--cacador-red))]" />
                  <span className="font-medium">Suporte Incluso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-[hsl(var(--cacador-red-dark))] to-[hsl(var(--cacador-red))] border-t-4 border-[hsl(var(--cacador-yellow))]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white text-sm">
            <p>© 2024 SouDrop Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default CacadorProdutos;