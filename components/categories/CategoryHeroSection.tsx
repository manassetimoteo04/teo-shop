import Heading from "../ui/Heading";
import HeroGridImages from "./HeroGridImages";

export default function CategoryHeroSection() {
  return (
    <div className="px-[6rem] overflow-hidden relative flex-col   bg-gray-50 text-gray-500 h-[55rem] mt-[7rem] gap-[4rem] items-center flex justify-center">
      <Heading as="h1">Explorar Categorias</Heading>
      <span className="max-w-[40rem] flex items-center text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        molestiae itaque iusto cupiditate.
      </span>
      <HeroGridImages position="left" />
      <HeroGridImages position="right" />
    </div>
  );
}
