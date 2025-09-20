import { ShoppingBag } from "lucide-react";
import Nav from "./Nav";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Button from "@/components/ui/Button";
import SearchForm from "./ui/SearchForm";
export default function Header() {
  return (
    <header className="flex h-[7rem]  text-gray-600  p-[0_2rem] items-center justify-between">
      <div className="flex gap-[2rem] items-center">
        <div className="flex gap-[2rem] items-center">
          <h1 className="text-[2rem] text-black">TeoShop</h1>
        </div>
      </div>
      <div className="flex items-center gap-[3rem]">
        <Nav />
        <SearchForm />
        <ButtonIcon>
          <ShoppingBag size={20} />
        </ButtonIcon>
        <Button>Iniciar Sessão</Button>
      </div>
    </header>
  );
}
