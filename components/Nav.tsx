import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="flex gap-[1rem]">
          <Link href="#">Home</Link>
          <Link href="#">Categoria</Link>
          <Link href="#">Productos</Link>
          <Link href="#">Promoções</Link>
        </li>
      </ul>
    </nav>
  );
}
