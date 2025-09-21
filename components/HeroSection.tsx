import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="px-[6rem]  bg-no-repeat bg-[url('/hero/hero-1.png')] bg-gray-50 text-gray-500 h-[calc(100dvh-7rem)] gap-[4rem] items-center grid grid-cols-2">
      <div className="flex flex-col items-start gap-[2rem]">
        <h1 className="text-[5rem] text-black font-bold ">
          Encontre tudo o que você procura em um só lugar
        </h1>
        <p>
          Descubra Ipads, smartphones e acessórios que combinam com você.
          Exclusividade e preços que cabem no bolso.
        </p>
        <Button>
          Explorar Coleção <ChevronRight />
        </Button>
      </div>
      <div>
        {/* <Image
          src="/hero/hero-1.png"
          width={3000}
          height={3000}
          alt="hero-img"
          className="w-full rounded-full filter-[invert()] h-full"
        /> */}
      </div>
    </div>
  );
}
