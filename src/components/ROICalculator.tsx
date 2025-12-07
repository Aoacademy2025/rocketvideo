import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [costPerClip, setCostPerClip] = useState(1000);
  const [clipsPerMonth, setClipsPerMonth] = useState(10);

  const yearlyOldCost = costPerClip * clipsPerMonth * 12;
  const rocketPrice = 5900;
  const savings = yearlyOldCost - rocketPrice;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("th-TH").format(num);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-semibold">เครื่องคำนวณความคุ้มค่า</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              คำนวณความคุ้มค่าของคุณ
            </h2>
            <p className="text-lg text-muted-foreground">
              ลองปรับตัวเลขเพื่อดูว่าคุณจะประหยัดได้เท่าไหร่
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
            <div className="space-y-10">
              {/* Cost Per Clip Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-foreground">
                    ต้นทุนจ้างตัดต่อต่อคลิป
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {formatNumber(costPerClip)} บาท
                  </span>
                </div>
                <Slider
                  value={[costPerClip]}
                  onValueChange={(value) => setCostPerClip(value[0])}
                  min={500}
                  max={5000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>500 บาท</span>
                  <span>5,000 บาท</span>
                </div>
              </div>

              {/* Clips Per Month Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-foreground">
                    จำนวนคลิปต่อเดือน
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {clipsPerMonth} คลิป
                  </span>
                </div>
                <Slider
                  value={[clipsPerMonth]}
                  onValueChange={(value) => setClipsPerMonth(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1 คลิป</span>
                  <span>100 คลิป</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Results */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">ค่าใช้จ่ายวิธีเก่า/ปี</span>
                  <span className="text-xl font-bold text-foreground">
                    {formatNumber(yearlyOldCost)} บาท
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">ค่า Rocket (จ่ายครั้งเดียว)</span>
                  <span className="text-xl font-bold text-foreground">
                    {formatNumber(rocketPrice)} บาท
                  </span>
                </div>

                <motion.div
                  key={savings}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col sm:flex-row justify-between items-center py-6 px-6 bg-gradient-primary rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-0">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                    <span className="text-lg font-semibold text-primary-foreground">
                      คุณประหยัดเงินปีแรกได้
                    </span>
                  </div>
                  <span className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
                    {savings > 0 ? `${formatNumber(savings)} บาท` : "0 บาท"}
                  </span>
                </motion.div>

                {savings > 0 && (
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    * ยิ่งใช้มากยิ่งคุ้ม และจะประหยัดมากขึ้นทุกปีเพราะไม่ต้องจ่ายอีก!
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
