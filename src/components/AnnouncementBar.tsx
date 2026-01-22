import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "announcement_bar_closed";
const EXPIRY_HOURS = 24;

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const closedAt = parseInt(stored, 10);
      const now = Date.now();
      const hoursPassed = (now - closedAt) / (1000 * 60 * 60);
      if (hoursPassed < EXPIRY_HOURS) {
        setIsVisible(false);
        return;
      }
    }
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div
      className="sticky top-0 z-[9999] flex items-center justify-center px-4 py-3 md:py-2"
      style={{ backgroundColor: "#b71c1c" }}
    >
      <p className="text-center text-sm md:text-base font-bold text-white pr-8 md:pr-0">
        Você foi selecionado para receber uma mentoria completa por apenas R$37,00. Corra, pois as vagas são limitadas!
      </p>
      <button
        onClick={handleClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Fechar aviso"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
