import { useEffect, useRef, useState, useCallback } from "react";

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

interface VSLYoutubePlayerProps {
  videoId: string;
  className?: string;
}

const VSLYoutubePlayer = ({ videoId, className = "" }: VSLYoutubePlayerProps) => {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [isAPIReady, setIsAPIReady] = useState(false);
  const playerIdRef = useRef(`vsl-player-${Math.random().toString(36).substr(2, 9)}`);

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
          // When video ends, loop it (keeping sound on if unmuted)
          if (event.data === window.YT.PlayerState.ENDED && playerRef.current) {
            playerRef.current.seekTo(0, true);
            playerRef.current.playVideo();
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

  return (
    <div 
      ref={containerRef}
      className={`vsl-container relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      {/* YouTube Player Target */}
      <div id={playerIdRef.current} className="absolute inset-0 w-full h-full" />
      
      {/* Click Blocker Overlay - always present to prevent YouTube interaction */}
      <div 
        className="absolute inset-0 z-10"
        style={{ pointerEvents: showUnmuteOverlay ? 'none' : 'auto' }}
        onClick={(e) => e.preventDefault()}
      />

      {/* Unmute Overlay with CTA */}
      {showUnmuteOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
          <button
            onClick={handleUnmute}
            className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:scale-105"
          >
            🔊 Ativar som e assistir do início
          </button>
        </div>
      )}
    </div>
  );
};

export default VSLYoutubePlayer;
