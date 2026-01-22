import { Ship, Globe, TrendingDown, CheckCircle2, Users, Shield, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { trackViewContent, trackInitiateCheckout, trackWishCheckout } from "@/lib/fbq";
import { useTracking } from "@/hooks/useTracking";
import VSLYoutubePlayer from "@/components/VSLYoutubePlayer";

const Importacao = () => {
  const { trackEventOnce } = useTracking();

  useEffect(() => {
    trackViewContent("club", { content_name: document.title });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full animate-fade-in">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">🔒 Clube Exclusivo de Importação | Vídeo rápido (1 min)</span>
              </div>
            </div>

            {/* VSL Video Section */}
            <VSLYoutubePlayer videoId="AFsOl5kf_hM" className="mb-8" />

            {/* Headline */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight text-white">
              Importe direto da fábrica com preço de atacado mesmo comprando pouco — sem atravessador e dentro da lei.
            </h1>
            
            <p className="text-lg md:text-xl text-white text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              A gente junta vários compradores menores, negocia como se fosse um grande e divide custo de importação. Você paga preço de quem traz container mesmo começando pequeno.
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                  trackEventOnce('wish_checkout', () => {
                    trackWishCheckout("club");
                  });
                }}
              >
                Quero ver se eu posso entrar
                <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              O Que Você Ganha no Clube
            </h2>
            <p className="text-center text-white mb-12 max-w-2xl mx-auto">
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
                  className="bg-card p-6 rounded-xl hover:border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/10 p-8 md:p-12 rounded-2xl border-2 border-primary/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                  Entre para o Clube Agora
                </h2>
                <p className="text-lg text-white mb-6">
                  Investimento único para acesso vitalício
                </p>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="inline-block">
                    <p className="text-sm text-white mb-2">De R$ 997 por apenas</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl font-bold text-white">R$</span>
                      <span className="text-6xl md:text-7xl font-black bg-gradient-primary bg-clip-text text-transparent">297</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-2">ou 12x de R$ 29,19</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button size="xl" className="text-lg px-12 w-full md:w-auto group" asChild>
                  <a href="https://pay.kiwify.com.br/YdspuHP" target="_blank" rel="noopener noreferrer" 
                    onClick={() => trackEventOnce('club_checkout', () => {
                      trackInitiateCheckout("club", 297);
                    })}
                  >
                    Quero Entrar para o Clube
                    <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <p className="text-sm text-white mt-4">
                  🔒 Pagamento 100% seguro
                </p>
              </div>

              {/* Bonus/Guarantee */}
              <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-muted">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Garantia de 7 dias</h4>
                    <p className="text-sm text-white">Se não gostar, devolvemos 100% do seu dinheiro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-white">Acesso vitalício</h4>
                    <p className="text-sm text-white">Pague uma vez e aproveite para sempre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
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
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-muted/10 p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Última Chance para Entrar com Desconto
            </h2>
            <p className="text-lg text-white mb-8">
              Garanta sua vaga no clube exclusivo por apenas R$ 297 e comece a importar com preços de atacado
            </p>
            <Button size="xl" className="text-lg px-12 w-full md:w-auto group" asChild>
              <a href="https://pay.kiwify.com.br/YdspuHP" target="_blank" rel="noopener noreferrer"
                onClick={() => trackEventOnce('final_club_checkout', () => {
                  trackInitiateCheckout("club", 297);
                })}
              >
                Quero Garantir Minha Vaga
                <Ship className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-white mt-4">
              ⏰ Oferta por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p className="text-sm">© 2025 Soudrop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Importacao;
