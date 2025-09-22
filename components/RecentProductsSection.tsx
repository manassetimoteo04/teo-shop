import Link from "next/link";
import Heading from "./ui/Heading";
import ProductBox from "./ui/ProductBox";
const recentProdcuts = [
  {
    name: "Inch Ipad Pro 512 Space Gray",
    image: "/products/11-inch-ipad-pro-512gb-space-gray.png",
    price: 10_800,
    category: "ipads",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Air Pods Max",
    image: "/products/airpods-max.png",
    price: 134_800,
    category: "accessories",

    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Apple Watch Series 9 Aluminium",
    image: "/products/apple-watch-series-9-aluminum.png",
    category: "watches",
    price: 30_800,

    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
];
export default function RecentProductsSection() {
  return (
    <section className="max-w-[120rem] m-[16rem_auto]">
      <div className="flex justify-between items-center">
        <Heading as="h3">Productos Recentes</Heading>
        <Link href="/products" className="text-gray-500  hover:text-gray-950">
          Ver todos
        </Link>
      </div>
      <div className="grid-cols-3 grid gap-[3rem] mt-[3rem]">
        {recentProdcuts.map((product, i) => (
          <ProductBox key={i} product={product} />
        ))}
      </div>
    </section>
  );
}
