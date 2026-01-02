import { useEffect } from "react";
import creatorsLogo from "@/assets/creators-logo-tiktok.png";

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
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={creatorsLogo} 
              alt="SouDrop Creators Brasil" 
              className="h-16 md:h-20 w-auto"
            />
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
          <div className="pt-6">
            <div 
              className="relative p-[2px] rounded-xl overflow-hidden mx-auto w-full max-w-[340px] md:max-w-[420px]"
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
              <div className="relative bg-[#0d1f2d]/95 rounded-xl p-4 md:p-5 space-y-2.5 backdrop-blur-sm">
                <p className="text-white text-[clamp(0.95rem,3vw,1.1rem)] font-bold">
                  🔥 Oferta exclusiva para alunos
                </p>
                <p className="text-[clamp(1rem,3.5vw,1.2rem)] font-extrabold uppercase tracking-wide" style={{ color: "#FF2E5F" }}>
                  PRODUTOS A PREÇO DE CUSTO
                </p>
                <div className="space-y-0.5">
                  <p className="text-white/70 text-[clamp(0.8rem,2vw,0.9rem)]">
                    De <span className="line-through">R$189,90</span> por apenas:
                  </p>
                  <p className="text-[clamp(1.6rem,5vw,2rem)] font-extrabold" style={{ color: "#0BFFFF" }}>
                    R$99,90
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-white/80 text-[clamp(0.75rem,1.8vw,0.85rem)]">
                    Ou em até:
                  </p>
                  <p className="text-white text-[clamp(0.9rem,2.5vw,1rem)] font-semibold">
                    💳 3x de R$33,30 no cartão
                  </p>
                </div>
                <div className="text-white/60 text-[clamp(0.7rem,1.8vw,0.8rem)] space-y-0">
                  <p>Valor normal: R$479,61</p>
                  <p className="font-semibold" style={{ color: "#22c55e" }}>Economize R$254,71</p>
                </div>
                <div className="pt-1.5 space-y-1 text-left">
                  <p className="text-white/90 text-[clamp(0.75rem,1.8vw,0.85rem)]">✔ Kit completo de produtos prontos para vender</p>
                  <p className="text-white/90 text-[clamp(0.75rem,1.8vw,0.85rem)]">✔ Ideal para iniciantes no TikTok Shop</p>
                  <p className="text-white/90 text-[clamp(0.75rem,1.8vw,0.85rem)]">✔ Estoque limitado</p>
                  <p className="text-white/90 text-[clamp(0.75rem,1.8vw,0.85rem)]">✔ Curso gratuito incluso</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ObrigadoTiktokLucrativo;
