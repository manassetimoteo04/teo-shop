import { ReactNode } from "react";

export default function ButtonIcon({ children }: { children: ReactNode }) {
  return (
    <button className="size-[4rem] rounded-2xl hover:bg-gray-200 flex items-center justify-center bg-gray-100">
      {children}
    </button>
  );
}
