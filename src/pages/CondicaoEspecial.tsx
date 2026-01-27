import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, CheckCircle2 } from "lucide-react";

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

const PLACEHOLDER_LINKS = {
  checkout: "#LINK_CHECKOUT",
  whatsapp: "#LINK_WHATSAPP",
  plataforma: "#LINK_PLATAFORMA",
};

const VIDEO_ID = "dQw4w9WgXcQ"; // Placeholder - substituir pelo ID real

const CondicaoEspecial = () => {
  const playerRef = useRef<YTPlayer | null>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showSecondLayer, setShowSecondLayer] = useState(false);
  const playerIdRef = useRef(`ce-player-${Math.random().toString(36).substr(2, 9)}`);

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
      videoId: VIDEO_ID,
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
          if (event.data === window.YT.PlayerState.ENDED) {
            setVideoEnded(true);
          }
        },
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isAPIReady]);

  const handleUnmute = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      setShowUnmuteOverlay(false);
    }
  }, []);

  const handleSkipOffer = () => {
    setShowSecondLayer(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Você está quase lá!
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-3">
            Assista ao vídeo abaixo para liberar uma condição exclusiva disponível apenas nesta página.
          </p>
          <p className="text-sm md:text-base text-zinc-400">
            São poucos minutos que podem acelerar seus resultados com a SouDrop.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-700/50">
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
                  className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-base md:text-lg px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:scale-105"
                >
                  🔊 Clique para ativar o som
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* First Layer CTAs - Only visible after video ends */}
      {videoEnded && !showSecondLayer && (
        <section className="px-4 pb-10 animate-fade-in">
          <div className="max-w-xl mx-auto flex flex-col gap-4">
            <a
              href={PLACEHOLDER_LINKS.checkout}
              className="w-full"
            >
              <Button
                className="w-full h-14 text-lg font-bold bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                ✅ Quero aproveitar essa condição agora
              </Button>
            </a>
            <Button
              onClick={handleSkipOffer}
              variant="destructive"
              className="w-full h-12 text-base font-semibold bg-red-600 hover:bg-red-700 text-white"
            >
              Quero seguir sem essa condição
            </Button>
          </div>
        </section>
      )}

      {/* Second Layer - Cards after skipping offer */}
      {showSecondLayer && (
        <section className="px-4 pb-10 animate-fade-in">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Card 1 - WhatsApp */}
            <Card className="bg-zinc-900/80 border-zinc-700/50 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Grupo WhatsApp SouDrop
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Entre no nosso grupo exclusivo e receba suporte e oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href={PLACEHOLDER_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                    Entrar no Grupo
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Card 2 - Plataforma */}
            <Card className="bg-zinc-900/80 border-zinc-700/50 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <ExternalLink className="w-5 h-5 text-yellow-400" />
                  Plataforma SouDrop
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Acesse agora a plataforma e comece a vender hoje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href={PLACEHOLDER_LINKS.plataforma} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                    Acessar Plataforma
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Próximos Passos - Always visible after second layer */}
      {showSecondLayer && (
        <section className="px-4 pb-16 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-400">
                Próximos Passos
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-200">
                    Entre no grupo do WhatsApp para receber suporte
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-200">
                    Acesse a plataforma SouDrop e configure sua conta
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-200">
                    Comece a vender com os melhores produtos para dropshipping
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CondicaoEspecial;
