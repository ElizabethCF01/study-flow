import { FeaturesSection } from "./FeaturesSection/FeaturesSection";
import { FooterSection } from "./FooterSection/FooterSection";
import { HeaderSection } from "./HeaderSection/HeaderSection";

import GlowHero from "../../assets/glow-hero.png";
import GlowFooter from "../../assets/glow-footer.webp";
import GlowTestimonials from "../../assets/glow-testimonials.webp";

export const StudyFlow = (): JSX.Element => {
  return (
    <div className="bg-[#07070a] min-h-screen w-full flex flex-col">
      <div className="relative w-full overflow-hidden">
        <img
          className="pointer-events-none select-none absolute w-[140%] md:w-full max-w-none h-auto top-0 left-1/2 -translate-x-1/2 opacity-80"
          alt=""
          src={GlowHero}
        />
        <img
          className="pointer-events-none select-none absolute w-[160%] md:w-full max-w-none h-auto bottom-0 left-1/2 -translate-x-1/2 opacity-60"
          alt=""
          src={GlowFooter}
        />
        <img
          className="pointer-events-none select-none absolute w-[90%] md:w-auto h-auto bottom-[25%] md:bottom-[20%] left-0   opacity-60"
          alt=""
          src={GlowTestimonials}
        />
        <div className="relative z-10 flex flex-col w-full">
          <HeaderSection />
          <FeaturesSection />
          <div id="footer" className="mt-20 sm:mt-24">
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
