import { ReactNode } from "react";
import Heading from "./Heading";

export default function FeatureBox({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <span>{icon}</span>
      <Heading as="h4">{title}</Heading>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
