import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const StickyTopBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          return { hours: 4, minutes: 59, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-urgent py-2.5 px-4"
    >
      <div className="container flex items-center justify-center gap-3">
        <Flame className="w-5 h-5 text-urgent-foreground animate-pulse" />
        <p className="text-sm md:text-base font-medium text-urgent-foreground">
          ข้อเสนอ Lifetime License จะสิ้นสุดใน:{" "}
          <span className="font-bold tabular-nums">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </p>
        <Flame className="w-5 h-5 text-urgent-foreground animate-pulse hidden sm:block" />
      </div>
    </motion.div>
  );
};

export default StickyTopBar;
