import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, TrendingUp, Shield, DollarSign, Users, Star, Package } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";
import mentorPhoto from "@/assets/renan-ferreira.jpg";
const LiveImportacao = () => {
  const handleCTA = () => {
    window.open("https://www.even3.com.br/checkout/9639b82f-d6c4-4fb6-a8f0-7f631a2ecb2b?i=63309222&lang=pt", "_blank");
  };
  const learningTopics = [{
    icon: Package,
    text: "Como funciona, na prática, a importação da China para revenda em marketplaces"
  }, {
    icon: Target,
    text: "Como escolher produtos com alta margem e demanda real"
  }, {
    icon: Shield,
    text: "Como encontrar e validar fornecedores confiáveis na China"
  }, {
    icon: Users,
    text: "Como usar a importação compartilhada para começar com pouco capital"
  }, {
    icon: TrendingUp,
    text: "Como evitar os erros que fazem iniciantes perder dinheiro"
  }, {
    icon: DollarSign,
    text: "Estratégias para maximizar lucro e reduzir riscos na operação"
  }];
  const testimonials = [{
    name: "Carlos Mendes",
    role: "Vendedor Mercado Livre • SP",
    text: "Comecei a importar há 6 meses e já triplicou minha margem. A importação compartilhada foi essencial para começar sem grandes riscos."
  }, {
    name: "Patricia Silva",
    role: "Lojista Shopee • RJ",
    text: "Antes eu comprava de distribuidores aqui no Brasil. Agora importo direto e minha competitividade aumentou demais!"
  }, {
    name: "Felipe Costa",
    role: "Empreendedor Digital • MG",
    text: "O passo a passo de validação de fornecedor me poupou de cair em golpes. Hoje importo com segurança e previsibilidade."
  }];
  return <div className="min-h-screen bg-background">
      {/* Warning Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 py-2 px-4">
        <p className="text-white text-center font-bold uppercase text-sm md:text-base">
          ⚠️ ÚLTIMAS VAGAS PARA A LIVE EXCLUSIVA DE IMPORTAÇÃO DA CHINA
        </p>
      </div>

      {/* Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-6">
              <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 text-sm font-bold inline-flex items-center gap-2">
                <Star className="w-4 h-4" />
                LIVE EXCLUSIVA • ONLINE E GRATUITA
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Como Importar da China e{" "}
                <span className="text-primary">Lucrar nos Marketplaces</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Descubra o passo a passo completo para aumentar sua margem de lucro, ter acesso direto a fornecedores chineses e importar com segurança mesmo sendo iniciante.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">100% Online</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">Totalmente Gratuito</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">Conteúdo Prático</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-card border-2 border-primary/30 shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      Garanta Sua Vaga Agora
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Clique no botão abaixo para se inscrever na live exclusiva
                    </p>

                    <Button onClick={handleCTA} className="w-full bg-gradient-yellow text-accent-foreground hover:shadow-yellow-glow transition-all duration-300 text-base md:text-lg font-bold py-7 px-6 h-auto whitespace-normal leading-tight" size="lg">
                      🔥 Quero garantir minha vaga na live exclusiva
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Inscrição 100% segura</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quem vai te guiar nessa jornada
            </h2>
            <p className="text-xl text-primary font-semibold">
              Conheça o mentor do Clube de importação         
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full"></div>
                <img src={mentorPhoto} alt="Renan Ferreira" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-primary/30 shadow-elegant" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>                Renan Ferreira, empresário e importador há mais de 10 anos, com experiência direta dentro de fábricas e escritórios na China. Já importei milhares de produtos e ensino, de forma prática, como qualquer pessoa pode fazer o mesmo — sem depender de atravessadores.<span className="text-foreground font-semibold">Renan Ferreira</span>, empresário e importador há mais de 10 anos, 
                  com experiência direta dentro de fábricas e escritórios na China. Já importei milhares de produtos 
                  e ensino, de forma prática, como qualquer pessoa pode fazer o mesmo — sem depender de atravessadores.
                </p>
                
                <p>
                  Trabalho diariamente no campo de batalha da importação: negociando com fornecedores chineses, analisando catálogos, fechando carregamentos e desenhando operações seguras e lucrativas para quem vende em marketplaces no Brasil
                </p>
                
                <p>
                  Depois de anos testando produtos e modelos de compra, desenvolvi um passo a passo simples para 
                  que lojistas e empreendedores iniciantes consigam importar da China com muito mais segurança, 
                  margem e previsibilidade.
                </p>
              </div>

              {/* Authority Bullets */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  
                  
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium text-lg">
                    Milhares de produtos importados diretamente de fábricas chinesas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium text-lg">
                    Operações de importação compartilhada para lojistas de marketplaces
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O que você vai aprender nessa live
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <topic.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {topic.text}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Prova real de quem já está no jogo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border-2 border-primary/30 hover:border-accent/50 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Não Perca Essa Oportunidade
            </h2>
            
            <p className="text-xl text-muted-foreground">
              As vagas são limitadas e essa live pode mudar completamente a forma 
              como você trabalha com marketplaces. Garanta sua presença agora!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Badge className="bg-primary/20 text-primary border border-primary/30 px-6 py-2 text-base">
                Vagas Limitadas
              </Badge>
              <Badge className="bg-accent/20 text-accent border border-accent/30 px-6 py-2 text-base">
                100% Gratuito
              </Badge>
            </div>

            <Button onClick={handleCTA} className="bg-gradient-yellow text-accent-foreground hover:shadow-yellow-glow transition-all duration-300 text-lg md:text-xl font-bold py-8 px-8 md:px-12 h-auto whitespace-normal leading-tight" size="xl">
              🔥 Quero garantir minha vaga na live exclusiva
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default LiveImportacao;