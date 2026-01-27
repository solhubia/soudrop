import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Package } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  destroy: () => void;
}

const ObrigadoSoudrop = () => {
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [showSecondFold, setShowSecondFold] = useState(false);
  const [isAPIReady, setIsAPIReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const playerIdRef = useRef(`upsell-player-${Math.random().toString(36).substr(2, 9)}`);

  // Video ID - pode ser alterado conforme necessário
  const videoId = "RdT2ExTPB7o";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load YouTube Iframe API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!isAPIReady) return;

    playerRef.current = new window.YT.Player(playerIdRef.current, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        fs: 0,
        disablekb: 1,
        playsinline: 1,
        enablejsapi: 1,
        origin: window.location.origin,
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
        },
        onStateChange: (event) => {
          // Quando o vídeo termina, libera os botões
          if (event.data === window.YT.PlayerState.ENDED) {
            setShowButtons(true);
            // Reinicia o vídeo em loop
            if (playerRef.current) {
              playerRef.current.seekTo(0, true);
              playerRef.current.playVideo();
            }
          }
        },
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isAPIReady, videoId]);

  const handleUnmute = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      setShowUnmuteOverlay(false);
    }
  }, []);

  const handleSkipBonus = () => {
    setShowSecondFold(true);
    setTimeout(() => {
      const secondFold = document.getElementById('second-fold');
      if (secondFold) {
        secondFold.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Você está quase lá!
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Assista ao vídeo abaixo para liberar um <span className="text-primary font-semibold">bônus exclusivo</span> disponível apenas nesta página.
            </p>
            <p className="text-base md:text-lg text-primary font-medium max-w-xl mx-auto">
              São poucos minutos que podem acelerar seus resultados com a SouDrop.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <div className="aspect-video relative">
                  {/* YouTube Player Target */}
                  <div id={playerIdRef.current} className="absolute inset-0 w-full h-full" />
                  
                  {/* Click Blocker Overlay */}
                  <div 
                    className="absolute inset-0 z-10"
                    style={{ pointerEvents: showUnmuteOverlay ? 'none' : 'auto' }}
                    onClick={(e) => e.preventDefault()}
                  />

                  {/* Unmute Overlay */}
                  {showUnmuteOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                      <button
                        onClick={handleUnmute}
                        className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:scale-105"
                      >
                        🔊 Clique para ativar o som
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* First Layer CTAs - Only show after video ends */}
          {showButtons && !showSecondFold && (
            <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
              {/* Green Button - Upsell */}
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
                asChild
              >
                <a href="https://pay.kiwify.com.br/zrBAaMP" target="_blank" rel="noopener noreferrer">
                  ✅ Quero aproveitar essa oferta agora
                </a>
              </Button>

              {/* Red Button - Skip */}
              <Button 
                size="lg" 
                onClick={handleSkipBonus}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
              >
                ❌ Quero seguir sem esse bônus
              </Button>
            </div>
          )}

          {/* Second Layer - Shows after clicking "skip bonus" */}
          {showSecondFold && (
            <div id="second-fold" className="animate-fade-in space-y-8">
              {/* Cards Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* WhatsApp Card */}
                <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-center">
                    <div className="p-4 bg-green-500/10 rounded-full">
                      <MessageCircle className="w-10 h-10 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-white">
                    Grupo WhatsApp SouDrop
                  </h3>
                  <p className="text-white/80 text-center">
                    Entre no nosso grupo exclusivo e receba avisos, suporte e oportunidades
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
                    asChild
                  >
                    <a href="https://chat.whatsapp.com/ChzrC8Px4sPFYkImtHPa5Z" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Entrar no Grupo
                    </a>
                  </Button>
                </div>

                {/* Platform Card */}
                <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Package className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-white">
                    Plataforma SouDrop
                  </h3>
                  <p className="text-white/80 text-center">
                    Acesse agora a plataforma e comece a vender hoje
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full font-bold"
                    asChild
                  >
                    <a href="https://app2.soudrop.com.br/login" target="_blank" rel="noopener noreferrer">
                      <Package className="w-5 h-5 mr-2" />
                      Acessar Plataforma
                    </a>
                  </Button>
                </div>
              </div>

              {/* Next Steps Section */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
                  <CheckCircle className="w-7 h-7 text-primary" />
                  Próximos Passos
                </h3>
                <ul className="space-y-4 text-left max-w-xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-white text-lg">
                      Entre no grupo do WhatsApp para receber suporte e atualizações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-white text-lg">
                      Acesse a plataforma SouDrop e configure sua conta
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-white text-lg">
                      Comece a vender com os melhores produtos para dropshipping
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObrigadoSoudrop;
