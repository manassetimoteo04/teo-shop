import { Search, ShoppingBag } from "lucide-react";
import Nav from "./Nav";
import { ButtonIcon } from "@/ui/ButtonIcon";
export default function Header() {
  return (
    <header className="flex h-[7rem] text-gray-600  p-[0_2rem] items-center justify-between">
      <div className="flex gap-[2rem] items-center">
        <div className="flex gap-[2rem] items-center">
          <h1 className="text-[2rem] text-black">TeoShop</h1>
          <Nav />
        </div>
        <div className=" flex  text-gray-400 items-center pl-[1rem] rounded-full overflow-hidden bg-gray-100">
          <Search size={20} />
          <input
            type="text"
            placeholder="Procurar..."
            className="bg-transparent p-[0.8rem] text-gray-600 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-[2rem]">
        <ButtonIcon>
          <ShoppingBag size={20} />
        </ButtonIcon>
        <button className="bg-blue-500 hover:bg-blue-600 p-[0.8rem_1.5rem] font-bold text-white rounded-2xl">
          Iniciar Sessão
        </button>
      </div>
    </header>
  );
}
