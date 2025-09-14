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
    <footer className="w-full bg-[#0d0e1466] border-t border-[#1a1c29] backdrop-blur-[5.45px] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex flex-col w-full max-w-[1108px] mx-auto px-4 sm:px-8 py-10 gap-6">
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img className="w-[34px] h-[30px]" alt="StudyFlow Logo" src={Logo} />
            <div className="text-white text-[22px] leading-none">
              <span className="font-semibold">Study</span>
              <span className="font-light">Flow</span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2 py-1 text-xs sm:text-sm text-[#7a7b85] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-[#1a1c29]" />

        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4">
          <div className="text-[#7a7b85] text-xs sm:text-sm">copyright - 2025</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={InstagramLogo} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={TwitterLogo} alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={FacebookLogo} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
