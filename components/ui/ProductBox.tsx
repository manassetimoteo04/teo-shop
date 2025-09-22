import { DollarSign } from "lucide-react";
import Link from "next/link";

type ProductType = {
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
};
export default function ProductBox({ product }: { product: ProductType }) {
  return (
    <Link href="/products/" className="flex flex-col gap-[1.5rem]">
      <div className=" h-[25rem] flex items-center justify-center bg-gray-100 p-[3rem] rounded-2xl w-full l">
        <img src={product.image} alt="img" className="!h-full w-auto " />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <h4 className="font-semibold truncate">{product.name}</h4>
        <p className="truncate text-gray-500">{product.description}</p>
        <div className="flex justify-between">
          <span className="flex items-center gap-[0.3rem] text-[1.4rem]">
            <DollarSign size={18} /> {product.price},00
          </span>
          <span className="flex bg-gray-200 p-[0.3rem_1rem] rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
