import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import FeatureHighlights from "@/components/FeatureHighlights";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ComparisonSection />
        <HowItWorks />
        <ROICalculator />
        <FeatureHighlights />
        <PricingSection />
        <FAQSection />
      </main>
      <MobileCTA />
    </div>
  );
};

export default Index;
