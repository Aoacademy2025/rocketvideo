import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border p-4 shadow-card"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Lifetime License</p>
          <p className="text-xl font-bold text-primary">5,900.-</p>
        </div>
        <Button
          size="lg"
          className="bg-gradient-primary text-primary-foreground font-bold flex-1 max-w-xs shadow-glow animate-pulse-glow"
        >
          🚀 ซื้อทันที
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileCTA;
