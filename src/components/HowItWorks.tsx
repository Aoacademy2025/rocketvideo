import { motion } from "framer-motion";
import { ImagePlus, Mic, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ImagePlus,
      step: "1",
      title: "ใส่รูปสินค้า/สคริปต์",
      description: "อัปโหลดรูปสินค้าของคุณและใส่สคริปต์ที่ต้องการพูด",
    },
    {
      icon: Mic,
      step: "2",
      title: "เลือกเสียงพากย์ไทย",
      description: "เลือกเสียง AI ภาษาไทยที่เป็นธรรมชาติและน่าเชื่อถือ",
    },
    {
      icon: Rocket,
      step: "3",
      title: "รันโปรแกรม",
      description: "กดปุ่มเดียว รอ 3 นาที ได้คลิปพร้อมใช้งานทันที",
    },
  ];

  return (
    <section id="demo" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ใช้งานง่าย แค่ 3 ขั้นตอน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ไม่ต้องมีทักษะตัดต่อ ไม่ต้องมีประสบการณ์ ใครๆ ก็ทำได้
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-shadow duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-extrabold text-primary/20">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
