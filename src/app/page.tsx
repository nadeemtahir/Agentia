import { FAQ } from "./component/faq";
import { NeoAIShowcase } from "./component/features";
import { Hero } from "./component/hero";
import PricingSection from "./component/price";

export default function Home() {
  return (
    <>
      <Hero />
      <NeoAIShowcase />
      <PricingSection/>
      <FAQ/>
    </>
  );
}

