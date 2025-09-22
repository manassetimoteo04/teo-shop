"use client";
import { useSearchParams } from "next/navigation";
import Heading from "../ui/Heading";
import { useState } from "react";

const filters = [
  "watches",
  "laptops",
  "smartphones",
  "accessories",
  "iphones",
  "ipads",
  "home&tv",
];

export default function ProductsFilters() {
  const [filtered, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  return (
    <div className="flex flex-col gap-[3rem]">
      <div>
        <Heading as="h4">Filtros por categoria</Heading>
        <div className="flex gap-[0.4rem] mt-[3rem] flex-wrap">
          {filters.map((filter) => (
            <span
              onClick={() =>
                setFilter((list: string[]) =>
                  list.some((el: string) => el === filter)
                    ? list.filter((el) => el !== filter)
                    : [...list, filter]
                )
              }
              key={filter}
              className={`${
                filtered.some((el: string) => el === filter)
                  ? "!bg-black text-white"
                  : ""
              } flex p-[0.2rem_0.8rem] cursor-pointer text-[1.4rem] bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full`}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Heading as="h4">Ordernar Por</Heading>
        <div className="flex gap-[0.4rem] mt-[2rem] flex-col">
          <div className="flex gap-[0.5rem] items-center">
            <input
              onChange={() => setSort("asc")}
              checked={sort === "asc"}
              type="radio"
              name="asc"
              id="asc"
            />
            <label htmlFor="asc">Crescente</label>
          </div>
          <div className="flex gap-[0.5rem] items-center">
            <input
              onChange={() => setSort("desc")}
              checked={sort === "desc"}
              type="radio"
              name="desc"
              id="desc"
            />
            <label htmlFor="desc">Decrescente</label>
          </div>
        </div>
      </div>
    </div>
  );
}
