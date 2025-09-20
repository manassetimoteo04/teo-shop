import CategorySection from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
import RecentProductsSection from "@/components/RecentProductsSection";
import UpcomingPromoSection from "@/components/UpcomingPromoSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <RecentProductsSection />
      <UpcomingPromoSection />
    </>
  );
}
