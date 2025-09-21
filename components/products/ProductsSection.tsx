import ProductsFilters from "./ProductsFilters";
import ProductsList from "./ProductsList";

export default function ProductsSection() {
  return (
    <section className="max-w-[120rem] m-[16rem_auto]">
      <div className="grid grid-cols-[30rem_1fr]">
        <ProductsFilters />
        <ProductsList />
      </div>
    </section>
  );
}
