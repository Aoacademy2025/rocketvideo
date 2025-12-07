import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 bg-foreground"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-background">
            Rocket <span className="text-3xl">🚀</span>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-background transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-background transition-colors"
            >
              ข้อกำหนดการใช้งาน
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-background transition-colors"
            >
              ติดต่อเรา
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 Rocket. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
