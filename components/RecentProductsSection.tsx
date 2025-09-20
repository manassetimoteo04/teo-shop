import Link from "next/link";
import Heading from "./ui/Heading";
import ProductBox from "./ui/ProductBox";
const recentProdcuts = [
  {
    name: "Inch Ipad Pro 512 Space Gray",
    image: "/categories/11-inch-ipad-pro-512gb-space-gray.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Inch Ipad Pro 512 Space Gray",
    image: "/categories/11-inch-ipad-pro-512gb-space-gray.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Inch Ipad Pro 512 Space Gray",
    image: "/categories/11-inch-ipad-pro-512gb-space-gray.png",
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
          <ProductBox key={i} />
        ))}
      </div>
    </section>
  );
}
