import { Ship, Globe, TrendingDown, CheckCircle2, Users, Shield, Zap, Package, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Importacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full animate-fade-in">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">Clube Exclusivo de Importação</span>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-border shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AFsOl5kf_hM"
                title="Vídeo do Clube de Importação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-6 leading-tight">
              Escale Seu Negócio com Acesso a
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Preços da China Mesmo Importando Pouco</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Entre para o clube exclusivo e tenha acesso aos mesmos preços e fornecedores que grandes importadores usam, sem precisar comprar em grande volume
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              O Que Você Ganha no Clube
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Todos os benefícios para você escalar suas importações pagando muito menos
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Preços de Fábrica",
                  description: "Preço de quem compra em grande volume mesmo comprando pouco, compartilhando custos de importação"
                },
                {
                  icon: Users,
                  title: "Compras Coletivas",
                  description: "Compartilhe custos de importação em grande volume e tenha acesso a preços imbatíveis"
                },
                {
                  icon: Shield,
                  title: "Fornecedores Verificados",
                  description: "Catálogo exclusivo de fornecedores já testados e aprovados pelos membros"
                },
                {
                  icon: Globe,
                  title: "Networking de Qualidade",
                  description: "Conecte-se com importadores experientes e expanda sua rede de contatos"
                },
                {
                  icon: Package,
                  title: "Desenho Estratégico",
                  description: "Chamada exclusiva para mapear estratégias do seu negócio com importação"
                },
                {
                  icon: Zap,
                  title: "Conteúdo Exclusivo",
                  description: "Treinamentos e ferramentas para otimizar suas importações"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12 rounded-2xl border-2 border-primary/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  Entre para o Clube Agora
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Investimento único para acesso vitalício
                </p>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="inline-block">
                    <p className="text-sm text-muted-foreground mb-2">De R$ 997 por apenas</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl font-bold">R$</span>
                      <span className="text-6xl md:text-7xl font-black bg-gradient-primary bg-clip-text text-transparent">297</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-2">ou 12x de R$ 29,19</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button size="xl" className="text-lg px-12 w-full md:w-auto group" asChild>
                  <a href="https://pay.kiwify.com.br/YdspuHP" target="_blank" rel="noopener noreferrer">
                    Quero Entrar para o Clube
                    <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  🔒 Pagamento 100% seguro
                </p>
              </div>

              {/* Bonus/Guarantee */}
              <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Garantia de 7 dias</h4>
                    <p className="text-sm text-muted-foreground">Se não gostar, devolvemos 100% do seu dinheiro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Acesso vitalício</h4>
                    <p className="text-sm text-muted-foreground">Pague uma vez e aproveite para sempre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tudo que você recebe ao entrar
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Acesso ao catálogo exclusivo de fornecedores",
                "Grupo privado de membros no WhatsApp",
                "Chamada para desenho estratégico do negócio",
                "Networking de qualidade com importadores",
                "Participação em compras coletivas",
                "Preços de grande volume mesmo comprando pouco",
                "Suporte prioritário da equipe"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Última Chance para Entrar com Desconto
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Garanta sua vaga no clube exclusivo por apenas R$ 297 e comece a importar com preços de atacado
            </p>
            <Button size="xl" className="text-lg px-12 w-full md:w-auto group" asChild>
              <a href="https://pay.kiwify.com.br/YdspuHP" target="_blank" rel="noopener noreferrer">
                Quero Garantir Minha Vaga
                <Ship className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⏰ Oferta por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Soudrop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Importacao;
