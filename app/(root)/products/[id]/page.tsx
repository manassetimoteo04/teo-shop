import ProductDetails from "@/components/products/ProductDetails";
import RelactedProducts from "@/components/products/RelactedProducts";

export default function ProductDetailsPage() {
  return (
    <section className="max-w-[120rem]  mb-[25rem] m-[16rem_auto]">
      <ProductDetails />
      <RelactedProducts />
    </section>
  );
}
