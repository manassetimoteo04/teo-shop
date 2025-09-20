import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="flex gap-[1.5rem]">
          <Link href="#" className="hover:text-black">
            Home
          </Link>{" "}
          <Link href="#" className="hover:text-black ">
            Categories
          </Link>{" "}
          <Link href="#" className="hover:text-black">
            Products
          </Link>{" "}
          <Link href="#" className="hover:text-black">
            Promotions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
