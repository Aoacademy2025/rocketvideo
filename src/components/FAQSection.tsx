import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "ใช้ได้เฉพาะ Windows ใช่ไหม?",
      answer:
        "ใช่ครับ ตอนนี้ Rocket รองรับเฉพาะ Windows 10/11 64-bit เท่านั้น เรากำลังพัฒนาเวอร์ชัน Mac อยู่และจะแจ้งให้ทราบเมื่อพร้อม",
    },
    {
      question: "ต้องใช้อินเทอร์เน็ตไหม?",
      answer:
        "ต้องใช้อินเทอร์เน็ตสำหรับ Activate License ครั้งแรกและดาวน์โหลด AI Model แต่หลังจากนั้นสามารถใช้งานแบบ Offline ได้ 100%",
    },
    {
      question: "สเปคคอมขั้นต่ำเท่าไหร่?",
      answer:
        "RAM: 16GB ขึ้นไป, GPU: RTX 3060 หรือเทียบเท่า, พื้นที่ว่าง: 20GB ขึ้นไป สำหรับประสิทธิภาพที่ดีที่สุดแนะนำ RTX 4060 ขึ้นไป",
    },
    {
      question: "มีการอัปเดตซอฟต์แวร์ไหม?",
      answer:
        "แน่นอนครับ! ผู้ซื้อ Lifetime License จะได้รับอัปเดตฟรีตลอดกาล ทั้งฟีเจอร์ใหม่และ AI Model ที่ปรับปรุง",
    },
    {
      question: "ถ้าไม่พอใจสามารถขอเงินคืนได้ไหม?",
      answer:
        "ได้ครับ เรามีนโยบายรับประกันคืนเงินภายใน 7 วัน ถ้าคุณไม่พอใจด้วยเหตุผลใดก็ตาม สามารถติดต่อทีมงานเพื่อขอเงินคืนได้ทันที",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            หากมีคำถามเพิ่มเติม สามารถติดต่อทีมงานได้ตลอดเวลา
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
