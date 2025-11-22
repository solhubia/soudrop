import { Button } from "@/components/ui_link/button";
import { ExternalLink, Package, TrendingUp, Ship } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  variant: "soudrop" | "shopee" | "red" | "blue";
  type: "website" | "course" | "import";
  onTrack?: () => void;
}

export function LinkCard({ title, description, url, variant, type, onTrack }: LinkCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    onTrack?.();
    
    if (url.startsWith('/')) {
      navigate(url);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const getIcon = () => {
    if (type === "website") {
      return <Package className="w-6 h-6" strokeWidth={2.5} />;
    } else if (type === "import") {
      return <Ship className="w-6 h-6" strokeWidth={2.5} />;
    } else {
      return <TrendingUp className="w-6 h-6" strokeWidth={2.5} />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto group">
      <Button
        variant={variant}
        size="lg"
        onClick={handleClick}
        className="w-full h-auto p-4 sm:p-6 relative overflow-hidden rounded-2xl backdrop-blur-sm group-hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        <div className="flex items-start justify-between w-full z-10">
          <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0">
              {getIcon()}
            </div>
            <div className="text-left flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold tracking-tight leading-tight">{title}</h3>
              {description && (
                <p className="text-xs sm:text-sm opacity-85 font-medium mt-1 leading-relaxed text-wrap">{description}</p>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-60 group-hover:opacity-90 transition-opacity" strokeWidth={2} />
          </div>
        </div>
      </Button>
    </div>
  );
}