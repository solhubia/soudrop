import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, MessageCircle, Package } from "lucide-react";
import { useEffect } from "react";
const ObrigadoSoudrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{
          animationDelay: '0.15s'
        }}>
            <div className="space-y-3">
              <p className="text-center text-sm md:text-base font-medium text-muted-foreground">
                Etapa 2 de 2 · Assista ao vídeo para liberar seus próximos passos
              </p>
              <Progress value={75} className="h-3 bg-muted" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Bem-vindo a Soudrop!</h1>
          </div>

          {/* Video Instruction Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center space-y-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Antes de seguir, este vídeo é obrigatório.
            </h2>
            <div className="text-base md:text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Neste vídeo eu vou te mostrar, em poucos minutos, o que você precisa fazer agora para ativar seu acesso e começar a usar a Soudrop do jeito certo.
              </p>
              <p>
                Assista até o final para entender os próximos passos e evitar erros que podem travar seus resultados.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-8 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <div className="aspect-video relative bg-black overflow-hidden">
                  <iframe
                    id="upsell-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/RdT2ExTPB7o?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&showinfo=0&loop=1&playlist=RdT2ExTPB7o&mute=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    title="Vídeo de Boas-Vindas"
                  ></iframe>
                  
                  {/* Camada para bloquear clique/pause */}
                  <div className="absolute inset-0 pointer-events-auto bg-transparent"></div>
                  
                  {/* Camada para cobrir a área do logo do YouTube */}
                  <div className="absolute right-0 bottom-0 w-20 h-10 bg-gradient-to-l from-black/90 to-black/0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upsell CTA Button */}
          <div className="mb-12 flex justify-center animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <a href="#upsell-checkout">
                Quero entrar no Grupo Vip e Mentoria
              </a>
            </Button>
          </div>

          {/* Cards with Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* WhatsApp Card */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex justify-center">
                <div className="p-4 bg-green-500/10 rounded-full">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center">Grupo WhatsApp</h3>
              <p className="text-muted-foreground text-center">
                Entre no nosso grupo exclusivo e conecte-se com outros membros
              </p>
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                <a href="https://chat.whatsapp.com/ChzrC8Px4sPFYkImtHPa5Z?mode=wwt" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entrar no Grupo
                </a>
              </Button>
            </div>

            {/* Soudrop Platform Card */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center">Plataforma Soudrop</h3>
              <p className="text-muted-foreground text-center">
                Acesse agora a plataforma e comece a vender
              </p>
              <Button size="lg" className="w-full" asChild>
                <a href="https://app2.soudrop.com.br/login" target="_blank" rel="noopener noreferrer">
                  <Package className="w-5 h-5 mr-2" />
                  Acessar Plataforma
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-4 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <h3 className="text-2xl font-bold">Próximos Passos</h3>
            <ul className="space-y-3 text-left max-w-xl mx-auto text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Entre no grupo do WhatsApp para receber atualizações e suporte</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Acesse a plataforma Soudrop e configure sua conta</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Comece a vender com os melhores produtos para dropshipping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};
export default ObrigadoSoudrop;