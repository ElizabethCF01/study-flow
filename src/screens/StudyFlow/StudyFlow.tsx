import { FeaturesSection } from "./FeaturesSection/FeaturesSection";
import { FooterSection } from "./FooterSection/FooterSection";
import { HeaderSection } from "./HeaderSection/HeaderSection";

import GlowHero from "../../assets/glow-hero.png";
import GlowFooter from "../../assets/glow-footer.webp";
import GlowTestimonials from "../../assets/glow-testimonials.webp";

export const StudyFlow = (): JSX.Element => {
  return (
    <div
      className="bg-[#07070a] min-h-screen w-full flex flex-col"
    >
      <div className="relative w-full overflow-hidden">
        
        <img
          className="absolute w-full  h-auto top-0 left-1/2 transform -translate-x-1/2 opacity-80"
          alt=""
          src={GlowHero}
        />

        <img
          className="absolute w-full  h-auto bottom-0 left-1/2 transform -translate-x-1/2 opacity-60"
          alt=""
          src={GlowFooter}
        />

        <img
          className="absolute  h-auto bottom-[20%] left-[30%] transform -translate-x-1/2 opacity-60"
          alt=""
          src={GlowTestimonials}
        />

        <div className="relative z-10 flex flex-col w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <HeaderSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <FeaturesSection />
          </div>

          <div className="translate-y-[-1rem] mt-24 animate-fade-in opacity-0 [--animation-delay:400ms]">
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
