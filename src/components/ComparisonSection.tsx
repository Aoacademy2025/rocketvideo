import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const oldWay = [
    "จ้างคนตัดต่อ 500-2,000 บาท/คลิป",
    "รอคิว 3-7 วัน ต่อคลิป",
    "สมัครสมาชิกรายเดือน ค่าใช้จ่ายไม่จบ",
    "ต้องอัปโหลดไฟล์ขึ้น Cloud",
    "ข้อมูลสินค้าอาจรั่วไหล",
  ];

  const rocketWay = [
    "จ่ายครั้งเดียว ใช้ตลอดชีพ",
    "สร้างคลิปเสร็จใน 3 นาที",
    "ไม่มีค่ารายเดือน ไม่มีค่าใช้จ่ายซ่อน",
    "ประมวลผลบนเครื่องคุณ 100%",
    "ข้อมูลสินค้าไม่ออกจากเครื่อง",
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ทำไมต้องเปลี่ยนมาใช้ Rocket?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เปรียบเทียบวิธีเดิมกับวิธีใหม่ที่จะเปลี่ยนธุรกิจของคุณ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">วิธีเก่า</h3>
            </div>
            <ul className="space-y-4">
              {oldWay.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Rocket Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              แนะนำ
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Rocket Way 🚀</h3>
            </div>
            <ul className="space-y-4">
              {rocketWay.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
