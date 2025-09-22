import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonIcon from "./ButtonIcon";

export default function Pagination() {
  return (
    <div className="flex gap-[1rem] items-center">
      <ButtonIcon>
        <ChevronLeft />
      </ButtonIcon>
      <span>Página 1 de 5</span>
      <ButtonIcon>
        <ChevronRight />
      </ButtonIcon>
    </div>
  );
}
