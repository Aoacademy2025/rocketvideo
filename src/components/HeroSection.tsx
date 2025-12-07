import { motion } from "framer-motion";
import { Play, Shield, Monitor, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const trustBadges = [
    { icon: Monitor, text: "Windows Only" },
    { icon: CreditCard, text: "No Monthly Fees" },
    { icon: Shield, text: "Privacy 100%" },
  ];

  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              เลิกจ่ายรายเดือน...
              <br />
              <span className="text-gradient-primary">เสกคลิปไวรัล</span>
              <br />
              บนเครื่องคุณ
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              อัปโหลดรูปสินค้า → เลือกเสียงพากย์ไทย → ได้คลิปขายของทันทีใน 3 นาที.
              <br />
              <span className="font-semibold text-foreground">Windows Only & Local Processing.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground text-lg font-bold px-8 py-6 shadow-glow animate-pulse-glow hover:opacity-90 transition-all"
              >
                🚀 รับสิทธิ์ซื้อขาด 5,900.-
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg font-semibold px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10"
              >
                <Play className="w-5 h-5 mr-2" />
                ดูตัวอย่างคลิป
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card border border-border"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative animate-float">
              <div className="bg-glass rounded-2xl p-6 shadow-card border border-border/50">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Mock Software UI */}
                  <div className="absolute inset-4 bg-card/90 rounded-lg shadow-soft p-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-muted rounded-full w-3/4" />
                      <div className="h-3 bg-muted rounded-full w-1/2" />
                      <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Play className="w-10 h-10 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 bg-primary rounded-md flex-1" />
                        <div className="h-8 bg-muted rounded-md flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-full shadow-card border border-border"
              >
                <span className="text-sm font-bold text-primary">AI Powered ✨</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-full shadow-card border border-border"
              >
                <span className="text-sm font-bold text-foreground">🎬 3 นาที/คลิป</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
