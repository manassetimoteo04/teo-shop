import { DollarSign } from "lucide-react";
import Heading from "./Heading";
import Link from "next/link";

export default function ProductBox() {
  return (
    <Link href="/products/" className="flex flex-col gap-[1.5rem]">
      <div className=" h-[25rem] flex items-center justify-center bg-gray-100 p-[3rem] rounded-2xl w-full l">
        <img
          src="/products/11-inch-ipad-pro-512gb-space-gray.png"
          alt="img"
          className="!h-full w-auto "
        />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <h4 className="font-semibold truncate">Nome do Producto</h4>
        <p className="truncate text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sit
          earum dolorem quo unde omnis, quidem consequatur sed velit quod ex
          reiciendis rem. Possimus nulla officiis, eius repellendus porro
          deleniti!
        </p>
        <div className="flex justify-between">
          <span className="flex items-center gap-[0.3rem] text-[1.4rem]">
            <DollarSign size={18} /> 10.000,00
          </span>
          <span className="flex bg-gray-200 p-[0.3rem_1rem] rounded-full">
            watches
          </span>
        </div>
      </div>
    </Link>
  );
}
