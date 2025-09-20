import Image from "next/image";

export default function CategoryBox({
  category,
}: {
  category: { name: string; image: string };
}) {
  return (
    <div className="bg-gray-50 p-[2rem] pt-[4rem] rounded-2xl">
      <div className="flex h-[20rem]  relative overflow-hidden">
        <Image
          width={3000}
          height={3000}
          alt="category"
          className="w-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto absolute"
          src={category.image}
        />
      </div>
      <span className="flex items-center justify-center rounded-xl bg-white p-[1rem]">
        {category.name}
      </span>
    </div>
  );
}
