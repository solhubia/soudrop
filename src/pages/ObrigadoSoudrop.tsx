import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Package } from "lucide-react";
import { useEffect } from "react";

const ObrigadoSoudrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
          <div className="text-center space-y-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Bem-vindo ao Soudrop! 🎉
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Parabéns! Agora você faz parte da plataforma de dropshipping mais completa do Brasil.
            </p>
          </div>

          {/* Cards with Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* WhatsApp Card */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entrar no Grupo
                </a>
              </Button>
            </div>

            {/* Soudrop Platform Card */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Package className="w-5 h-5 mr-2" />
                  Acessar Plataforma
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
    </div>
  );
};

export default ObrigadoSoudrop;
