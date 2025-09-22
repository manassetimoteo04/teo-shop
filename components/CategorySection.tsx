import Link from "next/link";
import Heading from "./ui/Heading";
import CategoryBox from "./ui/CategoryBox";

const categories = [
  {
    name: "Accessórios",
    image: "/categories/accessories-category.png",
  },
  {
    name: "Ipads",
    image: "/categories/ipads-category.png",
  },
  ,
  {
    name: "Laptops",
    image: "/categories/laptops-category.png",
  },
  ,
  {
    name: "Phones",
    image: "/categories/phones-category.png",
  },
  {
    name: "TV & Home",
    image: "/categories/tv-home-category.png",
  },
  {
    name: "Watches",
    image: "/categories/watches-category.png",
  },
];
export default function CategorySection() {
  return (
    <section className="max-w-[120rem] m-[16rem_auto]">
      <div className="flex justify-between items-center">
        <Heading as="h2">Procurar por Categorias</Heading>
        <Link href="/categories" className="text-gray-500  hover:text-gray-950">
          Ver todos
        </Link>
      </div>
      <div className="grid-cols-3 grid gap-[3rem] mt-[3rem]">
        {categories.map((category, i) => (
          <CategoryBox key={i} category={category} />
        ))}
      </div>
    </section>
  );
}
