import StickyTopBar from "@/components/StickyTopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorks from "@/components/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
import FeatureHighlights from "@/components/FeatureHighlights";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyTopBar />
      <div className="pt-10">
        <Navigation />
        <main>
          <HeroSection />
          <ComparisonSection />
          <HowItWorks />
          <ROICalculator />
          <FeatureHighlights />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </div>
  );
};

export default Index;
