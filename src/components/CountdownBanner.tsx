import { useState, useEffect } from "react";

interface CountdownBannerProps {
  offerName: string;
  endDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownBanner = ({ offerName, endDate }: CountdownBannerProps) => {
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

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-forest-green-primary/20 border border-forest-green-primary/50 rounded-lg px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] sm:min-w-[56px]">
        <span className="text-lg sm:text-2xl font-bold text-forest-lime tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-forest-text-secondary mt-1 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  if (isExpired) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-forest-bg-card border-b border-forest-border">
        <div className="container mx-auto px-4 py-3 text-center">
          <span className="text-forest-text-secondary font-medium">Oferta encerrada</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-forest-bg-card border-b border-forest-green-primary/30">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          {/* Offer text */}
          <p className="text-xs sm:text-sm text-forest-text-secondary font-medium">
            A <span className="text-forest-green-primary font-semibold">{offerName}</span> encerra em:
          </p>

          {/* Countdown boxes */}
          {timeLeft && (
            <div className="flex items-center gap-2 sm:gap-3">
              <TimeBox value={timeLeft.days} label="dias" />
              <span className="text-forest-green-primary font-bold text-lg sm:text-xl">:</span>
              <TimeBox value={timeLeft.hours} label="horas" />
              <span className="text-forest-green-primary font-bold text-lg sm:text-xl">:</span>
              <TimeBox value={timeLeft.minutes} label="min" />
              <span className="text-forest-green-primary font-bold text-lg sm:text-xl">:</span>
              <TimeBox value={timeLeft.seconds} label="seg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
