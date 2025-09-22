"use client";
import { ShoppingBag } from "lucide-react";
import Nav from "./Nav";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Button from "@/components/ui/Button";
import SearchForm from "./ui/SearchForm";
import { useEffect, useRef } from "react";
export default function Header() {
  const ref = useRef(null);
  useEffect(() => {}, []);
  return (
    <header
      ref={ref}
      className="flex h-[7rem] z-20 bg-white/70 backdrop-blur-xl fixed top-0 left-0 w-full  text-gray-600  p-[0_2rem] items-center justify-between"
    >
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
