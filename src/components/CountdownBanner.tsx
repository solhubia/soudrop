import { useState, useEffect } from "react";

interface CountdownBannerProps {
  offerName: string;
  endDate: Date;
  variant?: "forest" | "blue";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownBanner = ({ offerName, endDate, variant = "forest" }: CountdownBannerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = endDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  // Color schemes based on variant
  const colors = {
    forest: {
      banner: "bg-forest-bg-card border-b border-forest-green-primary/30",
      box: "bg-[#00C853] border-[#4ADE80]",
      number: "text-white",
      label: "text-forest-lime",
      separator: "text-forest-green-primary",
      text: "text-forest-text-secondary",
      highlight: "text-forest-green-primary",
      expiredBg: "bg-forest-bg-card border-b border-forest-border",
      expiredText: "text-forest-text-secondary",
    },
    blue: {
      banner: "bg-[#0a0f1a] border-b border-blue-500/30",
      box: "bg-blue-600 border-blue-400",
      number: "text-white",
      label: "text-blue-300",
      separator: "text-blue-400",
      text: "text-gray-400",
      highlight: "text-blue-400",
      expiredBg: "bg-[#0a0f1a] border-b border-gray-700",
      expiredText: "text-gray-400",
    },
  };

  const colorScheme = colors[variant];

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className={`${colorScheme.box} border rounded-lg px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] sm:min-w-[56px]`}>
        <span className={`text-lg sm:text-2xl font-bold ${colorScheme.number} tabular-nums`}>
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className={`text-[10px] sm:text-xs ${colorScheme.label} mt-1 uppercase tracking-wide font-medium`}>
        {label}
      </span>
    </div>
  );

  if (isExpired) {
    return (
      <div className={`fixed top-0 left-0 right-0 z-50 ${colorScheme.expiredBg}`}>
        <div className="container mx-auto px-4 py-3 text-center">
          <span className={`${colorScheme.expiredText} font-medium`}>Oferta encerrada</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${colorScheme.banner}`}>
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          {/* Offer text */}
          <p className={`text-xs sm:text-sm ${colorScheme.text} font-medium`}>
            A <span className={`${colorScheme.highlight} font-semibold`}>{offerName}</span> encerra em:
          </p>

          {/* Countdown boxes */}
          {timeLeft && (
            <div className="flex items-center gap-2 sm:gap-3">
              <TimeBox value={timeLeft.days} label="dias" />
              <span className={`${colorScheme.separator} font-bold text-lg sm:text-xl`}>:</span>
              <TimeBox value={timeLeft.hours} label="horas" />
              <span className={`${colorScheme.separator} font-bold text-lg sm:text-xl`}>:</span>
              <TimeBox value={timeLeft.minutes} label="min" />
              <span className={`${colorScheme.separator} font-bold text-lg sm:text-xl`}>:</span>
              <TimeBox value={timeLeft.seconds} label="seg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
