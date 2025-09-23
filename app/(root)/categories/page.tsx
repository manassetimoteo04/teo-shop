import CategoriesList from "@/components/categories/CategoriesList";
import CategoryHeroSection from "@/components/categories/CategoryHeroSection";
import Heading from "@/components/ui/Heading";

export default function CategoriesPage() {
  return (
    <>
      <CategoryHeroSection />
      <section className="max-w-[120rem]  mb-[25rem] m-[16rem_auto]">
        <Heading as="h2">Todas Categorias</Heading>
        <CategoriesList />
      </section>
    </>
  );
}
