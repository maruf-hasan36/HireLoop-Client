import Bg from "@/components/Bg";
import CardSection from "@/components/CardSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <StatsSection></StatsSection>
      <CardSection></CardSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <Bg></Bg>
    </div>
  );
}
