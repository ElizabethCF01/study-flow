import { ChevronDownIcon, GlobeIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Logo from "../../../assets/logo.png";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="flex w-full h-[71px] items-center justify-between px-4 md:px-8 lg:px-[166px] py-0 bg-[#07070a4c] border-b border-[#212429] backdrop-blur-[5.45px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.45px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="relative w-[39.35px] h-[35px]"
          alt="StudyFlow Logo"
          src={Logo}
        />

        <div className="relative w-[158px] font-normal text-white text-[26px] text-center tracking-[0] leading-[85.3px]">
          <span className="font-semibold">Study</span>
          <span className="font-light">Flow</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center justify-between gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="inline-flex items-center justify-center gap-2 p-2 h-auto [font-family:'Manrope',Helvetica] text-[#a6a7ad] font-normal text-sm tracking-[0] leading-[22.4px] hover:text-black transition-colors"
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="flex items-center justify-between gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2 px-[35px] py-4 h-auto rounded-lg [font-family:'Manrope',Helvetica] font-normal text-white text-sm tracking-[0] leading-[19.2px] whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors"
        >
          Login
        </Button>

        <Button className="inline-flex items-center justify-center gap-2 px-[35px] py-2.5 h-auto rounded-[98px] bg-[linear-gradient(46deg,rgba(112,207,228,1)_0%,rgba(152,129,229,1)_100%)] [font-family:'Manrope',Helvetica] font-normal text-[#11111c] text-sm tracking-[0] leading-[19.2px] whitespace-nowrap hover:opacity-90 transition-opacity">
          Sign up
        </Button>

        <Button
          variant="ghost"
          className="flex items-center justify-between gap-2 p-2 h-auto rounded-lg hover:bg-white/10 transition-colors"
        >
          <GlobeIcon className="w-6 h-6 text-white" />
          <ChevronDownIcon className="w-[19px] h-[19px] text-white" />
        </Button>
      </div>
    </header>
  );
};
