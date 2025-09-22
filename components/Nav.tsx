import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="flex gap-[1.5rem]">
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
          <Link href="/categories" className="hover:text-black ">
            Categorias
          </Link>{" "}
          <Link href="/products" className="hover:text-black">
            Productos
          </Link>{" "}
          <Link href="promoctions" className="hover:text-black">
            Promoções
          </Link>
        </li>
      </ul>
    </nav>
  );
}
