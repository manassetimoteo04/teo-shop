import CategorySection from "@/components/CategorySection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import RecentProductsSection from "@/components/RecentProductsSection";
import UpcomingPromoSection from "@/components/UpcomingPromoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <RecentProductsSection />
      <UpcomingPromoSection />
      <FeaturesSection />
    </>
  );
}
