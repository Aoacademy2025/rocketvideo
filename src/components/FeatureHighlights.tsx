import { motion } from "framer-motion";
import { Mic, Image, Smartphone } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Mic,
      title: "Thai Voice Pro",
      subtitle: "เสียงไทยธรรมชาติ",
      description: "เสียง AI ภาษาไทยคุณภาพสูง ฟังดูเป็นธรรมชาติ ไม่แข็งทื่อ",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Image,
      title: "Real Product Gen",
      subtitle: "เจนจากรูปสินค้าจริง",
      description: "ใช้รูปสินค้าจริงของคุณ สร้างคลิปที่เป็นเอกลักษณ์",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "All Formats",
      subtitle: "TikTok/Reels/Shorts",
      description: "รองรับทุกแพลตฟอร์ม ปรับขนาดอัตโนมัติ 9:16, 1:1, 16:9",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ฟีเจอร์ที่คุณจะได้รับ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ทุกสิ่งที่คุณต้องการสำหรับการสร้างคลิปขายของคุณภาพสูง
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-background rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <span className="text-sm font-medium text-primary">{feature.subtitle}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
