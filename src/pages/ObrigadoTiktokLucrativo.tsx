import { useEffect } from "react";

const ObrigadoTiktokLucrativo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1f2d] to-[#0a1628] relative overflow-hidden">
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      
      {/* Subtle green glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Logo placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
              <span className="text-white/50 text-sm">Sua Logo Aqui</span>
            </div>
          </div>

          {/* PARABÉNS title */}
          <h1 
            className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight"
            style={{ color: "#0BFFFF" }}
          >
            PARABÉNS!
          </h1>

          {/* Main confirmation text */}
          <p className="text-[clamp(1.25rem,4vw,1.75rem)] font-bold leading-relaxed">
            <span className="text-white">Sua inscrição no </span>
            <span style={{ color: "#FF2E5F" }}>TIKTOK LUCRATIVO</span>
            <br />
            <span className="text-white">foi confirmada com sucesso!</span>
          </p>

          {/* Welcome paragraph */}
          <p className="text-white/80 text-[clamp(0.95rem,2.5vw,1.1rem)] leading-relaxed max-w-2xl mx-auto">
            Seja bem-vindo(a) à comunidade que está aprendendo a transformar vídeos simples em uma fonte real de renda todos os dias.
          </p>

          {/* Email instruction paragraph */}
          <p className="text-white/80 text-[clamp(0.95rem,2.5vw,1.1rem)] leading-relaxed max-w-2xl mx-auto">
            Em alguns minutos você vai{" "}
            <span style={{ color: "#FF2E5F" }}>receber no seu e-mail</span>{" "}
            todas as instruções para acessar o curso gratuito.
          </p>

          {/* Enquanto isso section */}
          <div className="pt-6 space-y-2">
            <p className="text-white text-[clamp(1.25rem,3.5vw,1.5rem)] font-semibold">
              Enquanto isso…
            </p>
            <p 
              className="text-[clamp(1rem,2.5vw,1.15rem)]"
              style={{ color: "#0BFFFF" }}
            >
              aproveite essa oportunidade única de dar o primeiro passo com vantagem.
            </p>
          </div>

          {/* Offer Card */}
          <div className="pt-8">
            <div 
              className="relative p-[2px] rounded-2xl overflow-hidden mx-auto max-w-xl"
              style={{
                background: "linear-gradient(90deg, #FF2E5F 0%, #7A3BFF 50%, #22D3EE 100%)"
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-xl opacity-60"
                style={{
                  background: "linear-gradient(90deg, #FF2E5F 0%, #7A3BFF 50%, #22D3EE 100%)"
                }}
              />
              
              {/* Card content */}
              <div className="relative bg-[#0d1f2d]/95 rounded-2xl p-6 md:p-8 space-y-3 backdrop-blur-sm">
                <p className="text-white text-[clamp(1.25rem,4vw,1.5rem)] font-bold">
                  🔥 4 Produtos Completos por apenas R$79,90
                </p>
                <p className="text-white/70 text-[clamp(0.85rem,2vw,0.95rem)]">
                  Valor normal R$179,61 | Economize R$99,71
                </p>
                <p className="text-white text-[clamp(1rem,3vw,1.15rem)]">
                  💳 Ou 3x de R$26,63 sem juros
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ObrigadoTiktokLucrativo;
