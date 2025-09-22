import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function ProductDetails() {
  return (
    <div className="grid gap-[4rem] grid-cols-[1fr_1.2fr]">
      <div className=" max-h-[35rem] flex items-center justify-center bg-gray-100 p-[3rem] rounded-2xl w-full l">
        <img
          src={"/products/apple-watch-series-9-aluminum.png"}
          alt="img"
          className="!h-full w-auto "
        />
      </div>
      <div className="flex flex-col gap-[3rem]">
        <header className="flex flex-col gap-[0.3rem]">
          <Heading as="h3">Product Name</Heading>
          <div className="text-gray-500">
            <span>Watches</span>
            {"  "}|{"  "}
            <span className="text-yellow-600">Em estoque</span>
          </div>
          <span className="text-gray-950">$ 10.390,00</span>
        </header>
        <div className="flex gap-[2rem] flex-col">
          <Heading as="h4">Descrição</Heading>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam
            amet, officia atque culpa similique laudantium ipsa, architecto
            rerum optio minus excepturi quasi quibusdam quaerat ea iusto
            corrupti exercitationem numquam?
          </p>
          <Button>Adicionar no Carrinho</Button>
        </div>
      </div>
    </div>
  );
}
