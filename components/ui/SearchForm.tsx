import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <div className=" flex  text-gray-400 items-center pl-[1rem] rounded-full overflow-hidden bg-gray-100">
      <Search size={20} />
      <input
        type="text"
        placeholder="Procurar..."
        className="bg-transparent p-[0.8rem] text-gray-600 focus:outline-none"
      />
    </div>
  );
}
