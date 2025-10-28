import { useEffect } from "react";
import { Button } from "@/components/ui_link/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, MessageCircle, GraduationCap, TrendingUp, Sparkles } from "lucide-react";

const ObrigadoCacadorChina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0604] text-[#FFF9E6]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A] to-[#FFD700] rounded-full blur-xl opacity-60 animate-pulse" />
              <CheckCircle className="w-24 h-24 text-[#FFD700] relative" />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#C41E3A] to-[#FFD700] bg-clip-text text-transparent">
                Parabéns!
              </span>
              <span className="block mt-2 text-[#FFD700]">Você Está Dentro! 🎉</span>
            </h1>
            <p className="text-lg md:text-xl text-[#FFF9E6]/80">
              Sua jornada na importação lucrativa da China começa agora. Você tomou a decisão certa!
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid gap-6 mb-12">
            {/* WhatsApp Card */}
            <Card className="p-8 bg-gradient-to-br from-[#C41E3A]/10 to-[#FFD700]/10 border-[#FFD700]/30 hover-scale hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#FFD700]">
                    1. Entre no Grupo VIP do WhatsApp
                  </h2>
                  <p className="text-[#FFF9E6]/80">
                    Acesse nossa comunidade exclusiva com dicas diárias, produtos quentes e suporte direto.
                  </p>
                </div>
                <Button size="lg" variant="red" className="w-full" asChild>
                  <a 
                    href="https://chat.whatsapp.com/seu-link-aqui" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar no Grupo VIP
                  </a>
                </Button>
              </div>
            </Card>

            {/* Platform Access Card */}
            <Card className="p-8 bg-gradient-to-br from-[#FFD700]/10 to-[#C41E3A]/10 border-[#C41E3A]/30 hover-scale hover:shadow-[0_0_30px_rgba(196,30,58,0.3)] transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#C41E3A] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#FFD700]">
                    2. Acesse o Treinamento Completo
                  </h2>
                  <p className="text-[#FFF9E6]/80">
                    Todo o conteúdo está disponível imediatamente. Comece agora mesmo a descobrir produtos lucrativos!
                  </p>
                </div>
                <Button size="lg" variant="blue" className="w-full" asChild>
                  <a 
                    href="https://area-de-membros.exemplo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Acessar Treinamento
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="p-8 bg-[#0F0A08] border-[#FFD700]/20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-[#FFD700]" />
                <h2 className="text-2xl font-bold text-[#FFD700]">Próximos Passos:</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FFD700] mb-1">Entre no Grupo VIP</h3>
                    <p className="text-[#FFF9E6]/70 text-sm">
                      É lá que acontece a mágica: oportunidades diárias, networking e suporte.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FFD700] mb-1">Assista a Primeira Aula</h3>
                    <p className="text-[#FFF9E6]/70 text-sm">
                      Comece pelo módulo 1 e veja como é simples encontrar produtos lucrativos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FFD700] mb-1">Use as Ferramentas</h3>
                    <p className="text-[#FFF9E6]/70 text-sm">
                      Baixe a planilha de lucros e a lista de produtos quentes — estão na área de membros!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#FFD700] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FFD700] mb-1">Aplique e Compartilhe</h3>
                    <p className="text-[#FFF9E6]/70 text-sm">
                      Encontrou seu primeiro produto? Compartilhe no grupo e receba feedback da comunidade!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Final Message */}
          <div className="mt-12 text-center space-y-4">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#C41E3A]/20 to-[#FFD700]/20 border border-[#FFD700]/30 rounded-full">
              <p className="text-[#FFD700] font-semibold">
                ✨ Bem-vindo à comunidade de importadores de sucesso!
              </p>
            </div>
            <p className="text-[#FFF9E6]/60 text-sm">
              Qualquer dúvida, estamos à disposição no grupo VIP. Vamos juntos! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObrigadoCacadorChina;
