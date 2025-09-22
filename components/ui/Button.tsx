import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode | string }) {
  return (
    <button className="bg-black font-semibold justify-center flex gap-2 items-center font-sans  p-[0.8rem_1.5rem]  text-white rounded-2xl">
      {children}
    </button>
  );
}
