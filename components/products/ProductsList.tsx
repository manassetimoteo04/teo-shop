import Heading from "../ui/Heading";
import Pagination from "../ui/Pagination";
import ProductBox from "../ui/ProductBox";
const products = [
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
  {
    name: "Apple Watch Series 9 Aluminium 1",
    image: "/products/apple-watch-series-9-aluminum.png",
    category: "watches",
    price: 30_800,

    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Apple Watch Series 9 Aluminium 2",
    image: "/products/apple-watch-series-9-aluminum.png",
    category: "watches",
    price: 30_800,

    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
  {
    name: "Apple Watch Series 9 Aluminium 3",
    image: "/products/apple-watch-series-9-aluminum.png",
    category: "watches",
    price: 30_800,

    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur ut consectetur quia. Quia minus repudiandae, illo eligendi commodi ipsa sapiente animi hic ipsum ut esse molestias, quidem ullam cupiditate?",
  },
];
export default function ProductsList() {
  return (
    <div>
      <Heading as="h4">Mostrando 1 - 9 de 30 Productos</Heading>
      <div className="grid grid-cols-3 gap-[4rem] mt-[3rem]">
        {products.map((product) => (
          <ProductBox key={product.name} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-[4rem]">
        <Pagination />
      </div>
    </div>
  );
}
