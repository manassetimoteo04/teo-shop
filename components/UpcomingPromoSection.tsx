import { ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import DaysCountDown from "./ui/DaysCountDown";

export default function UpcomingPromoSection() {
  return (
    <section className="bg-gray-100 p-[8rem_2rem]">
      <div className="max-w-[120rem] m-[0_auto]">
        <div className="grid grid-cols-2 gap-[4rem]">
          <div className=" flex flex-col gap-[2rem] items-start">
            <Heading as="h2">Descontos do Mês</Heading>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ex est commodi aperiam mollitia, odit itaque nesciunt repellat
              aliquid exercitationem placeat dignissimos, laboriosam fugit, non
              fuga fugiat ratione quo nemo!
            </p>
            <Button>
              Ver Productos <ChevronRight />
            </Button>
            <DaysCountDown />
          </div>
          <div className=" max-h-[40rem] p-[5rem] rounded-3xl flex items-center justify-center overflow-hidden">
            <img
              src="/products/apple-tv-4k-wifi.png"
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
