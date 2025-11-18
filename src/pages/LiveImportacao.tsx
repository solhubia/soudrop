import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, TrendingUp, Shield, DollarSign, Users, Star, Package } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";
import mentorPhoto from "@/assets/renan-ferreira.jpg";
const LiveImportacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
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
      [e.target.name]: e.target.value
    });
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
                Descubra o passo a passo completo para aumentar sua margem de lucro, 
                ter acesso direto a fornecedores chineses e importar com segurança — 
                mesmo sendo iniciante.
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

            {/* Right Side - Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-card border-2 border-primary/30 shadow-elegant">
                <CardContent className="p-8">
                  {!isSubmitted ? <>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Garanta Sua Vaga Agora
                        </h3>
                        <p className="text-muted-foreground">
                          Preencha os dados abaixo para participar
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome" className="text-foreground">Nome Completo</Label>
                          <Input id="nome" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleInputChange} required className="bg-input border-primary/20 focus:border-primary" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">E-mail</Label>
                          <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleInputChange} required className="bg-input border-primary/20 focus:border-primary" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                          <Input id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" value={formData.whatsapp} onChange={handleInputChange} required className="bg-input border-primary/20 focus:border-primary" />
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-yellow text-accent-foreground hover:shadow-yellow-glow transition-all duration-300 text-lg font-bold py-6 mt-6" size="lg">
                          {isSubmitting ? "Processando..." : "🔥 Quero garantir minha vaga na live exclusiva"}
                        </Button>
                      </form>

                      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Seus dados estão seguros</span>
                      </div>
                    </> : <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Inscrição Confirmada!
                      </h3>
                      <p className="text-muted-foreground">
                        Você receberá todas as informações da live no e-mail cadastrado.
                      </p>
                    </div>}
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
              Conheça o mentor da SouDrop Brasil
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
                <p>
                  Sou <span className="text-foreground font-semibold">Renan Ferreira</span>, empresário e importador há mais de 10 anos, 
                  com experiência direta dentro de fábricas e escritórios na China. Já importei milhares de produtos 
                  e ensino, de forma prática, como qualquer pessoa pode fazer o mesmo — sem depender de atravessadores.
                </p>
                
                <p>
                  Trabalho diariamente no campo de batalha da importação: negociando com fornecedores chineses, 
                  analisando catálogos, fechando carregamentos e desenhando operações seguras e lucrativas para 
                  quem vende em marketplaces no Brasil.
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
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium text-lg">
                    +10 anos de experiência com importação da China
                  </span>
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

            <Button onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })} className="bg-gradient-yellow text-accent-foreground hover:shadow-yellow-glow transition-all duration-300 text-xl font-bold py-8 px-12" size="xl">
              🔥 Quero garantir minha vaga na live exclusiva
            </Button>

            <p className="text-sm text-muted-foreground">
              Clique no botão acima e preencha seus dados no formulário do topo da página
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default LiveImportacao;