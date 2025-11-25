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
          {/* Success Icon */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <CheckCircle className="w-24 h-24 text-primary relative" strokeWidth={1.5} />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Bem-vindo a Soudrop! 🎉</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Parabéns! Agora você faz parte da plataforma de dropshipping mais completa do Brasil.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{
          animationDelay: '0.25s'
        }}>
            <div className="space-y-3">
              <p className="text-center text-sm md:text-base font-medium">
                Etapa 2 de 2 – Assista ao vídeo para liberar seus próximos passos
              </p>
              <Progress value={75} className="h-3 bg-muted" />
            </div>
          </div>

          {/* Video Instruction Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center space-y-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Antes de seguir… este vídeo é OBRIGATÓRIO.
            </h2>
            <div className="text-base md:text-lg text-muted-foreground space-y-3">
              <p>
                Você acabou de dar um passo importante — mas não para por aqui.
              </p>
              <p>
                No vídeo abaixo, eu vou te mostrar <strong className="text-foreground">exatamente o que fazer agora</strong>, quais são os <strong className="text-foreground">próximos passos</strong>, e como <strong className="text-foreground">aproveitar 100% do potencial</strong> do que você acabou de liberar.
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">⚠️</span>
                <span>Se você pular esse vídeo, você pode perder oportunidades que <strong className="text-foreground">só quem assiste fica sabendo</strong>.</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">👉</span>
                <span><strong className="text-foreground">Assista agora</strong> e siga as instruções com atenção.</span>
              </p>
              <p className="text-lg font-semibold text-foreground mt-4">
                É aqui que começa a diferença entre quem só compra… e quem <strong>realmente tem resultado</strong>.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <div className="aspect-video relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/RdT2ExTPB7o?autoplay=1&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0&iv_load_policy=3"
                    title="Vídeo de Boas-Vindas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ pointerEvents: 'none' }}
                  ></iframe>
                  {/* Overlay to prevent interaction */}
                  <div className="absolute inset-0 bg-transparent" style={{ pointerEvents: 'auto' }} onClick={(e) => e.preventDefault()}></div>
                </div>
              </div>
            </div>
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