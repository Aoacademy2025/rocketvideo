import { motion } from "framer-motion";
import { Check, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const benefits = [
    "ใช้งานได้ตลอดชีพ ไม่มีค่ารายเดือน",
    "อัปเดตฟรีตลอดกาล",
    "เสียงพากย์ไทยคุณภาพสูง",
    "รองรับทุก Format (TikTok, Reels, Shorts)",
    "ประมวลผลบนเครื่องคุณ 100%",
    "ไม่มีลิมิตจำนวนคลิป",
    "Support ทีมงานไทย",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">ข้อเสนอพิเศษ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ซื้อขาด ใช้ตลอดชีพ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ไม่ต้องจ่ายรายเดือน ไม่ต้องกังวลเรื่องค่าใช้จ่ายซ้ำซ้อน
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card border-2 border-primary/20 overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-urgent text-urgent-foreground text-sm font-bold px-6 py-2 rounded-bl-2xl">
              ลด 60%
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Rocket Lifetime License
              </h3>
              <p className="text-muted-foreground">ซื้อครั้งเดียว ใช้ตลอดกาล</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">
                  15,900.-
                </span>
                <span className="text-5xl md:text-6xl font-extrabold text-primary">
                  5,900.-
                </span>
              </div>
              <p className="text-muted-foreground mt-2">จ่ายครั้งเดียว ไม่มีค่ารายเดือน</p>
            </div>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-gradient-primary text-primary-foreground text-xl font-bold py-7 shadow-glow animate-pulse-glow hover:opacity-90 transition-all"
            >
              🚀 ซื้อ License ถาวรทันที
            </Button>

            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">รับประกันคืนเงินใน 7 วัน</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
