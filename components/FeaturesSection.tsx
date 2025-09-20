import { Box, CreditCard, DollarSign, Headphones } from "lucide-react";
import FeatureBox from "./ui/FeatureBox";

export default function FeaturesSection() {
  return (
    <section className="max-w-[120rem] m-[16rem_auto]">
      <div className="grid grid-cols-4">
        <FeatureBox
          icon={<Box />}
          title="Entregas Gratuítas"
          description="Entregas gratuítas com compras +$10"
        />
        <FeatureBox
          icon={<DollarSign />}
          title="Money Guarantee"
          description="30 dias de garantias de retorno"
        />
        <FeatureBox
          icon={<Headphones />}
          title="Online Support"
          description="24 hours a dar, 7 days a week"
        />
        <FeatureBox
          icon={<CreditCard />}
          title="Flexible Payment"
          description="Pay with multiple credit cards"
        />
      </div>
    </section>
  );
}
