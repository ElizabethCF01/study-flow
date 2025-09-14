import { Separator } from "../../../components/ui/separator";
import Logo from "../../../assets/logo.png";

import LinkedinLogo from "../../../assets/linkedin.png";
import InstagramLogo from "../../../assets/instagram.png";
import TwitterLogo from "../../../assets/twitter.png";
import FacebookLogo from "../../../assets/facebook.png";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Get Started", href: "#" },
    { label: "Use cases", href: "#" },
    { label: "Documentation", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0d0e1466] border-t border-[#1a1c29] backdrop-blur-[5.45px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.45px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex flex-col w-full max-w-[1108px] mx-auto px-[50px] py-[50px] gap-6">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-center gap-[5px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="w-[39.35px] h-[35px]"
              alt="StudyFlow Logo"
              src={Logo}
            />
            <div className="font-normal text-white text-[26px] leading-[85.3px]">
              <span className="font-semibold">Study</span>
              <span className="font-light">Flow</span>
            </div>
          </div>

          <nav className="flex items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center justify-center gap-2 p-2 font-normal text-[#7a7b85] text-sm leading-[22.4px] whitespace-nowrap hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-[#1a1c29] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]" />

        <div className="flex w-full items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <div className="text-[#7a7b85] font-normal text-sm leading-[22.4px]">
            copyright - 2025
          </div>

            <div className="flex items-center gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={InstagramLogo} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={TwitterLogo} alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={FacebookLogo} alt="Facebook" className="w-6 h-6" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
