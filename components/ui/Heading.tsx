import { ReactNode } from "react";

type HeadingType = { as: "h1" | "h2" | "h3" | "h4"; children: ReactNode };

export default function Heading({ as = "h2", children }: HeadingType) {
  const Component = as;
  const styles = {
    h1: "text-[5rem]",
    h2: "text-[4rem]",
    h3: "text-[3rem]",
    h4: "text-[1.6rem] font-semibold",
  };
  return <Component className={`${styles[as]}`}>{children}</Component>;
}
