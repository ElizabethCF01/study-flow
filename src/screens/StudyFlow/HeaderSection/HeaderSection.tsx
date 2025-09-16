import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Logo from "../../../assets/logo-outline.png";
import { useState } from "react";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  const headerBase =
    "relative z-30 flex w-full h-[64px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[166px] py-0 border-b border-[#212429] transition-colors duration-300";
  const headerBg = open
    ? "bg-[#07070a]/95 backdrop-blur-md"
    : "bg-[#07070a4c] backdrop-blur-[5.45px]";

  return (
    <header className={`${headerBase} ${headerBg}`}>
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <img className="w-[34px] h-[30px]" alt="StudyFlow Logo" src={Logo} />
        <div className="font-normal text-white text-[22px] sm:text-[24px] leading-none tracking-tight">
          <span className="font-semibold">Study</span>
          <span className="font-light">Flow</span>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center justify-between gap-2 lg:gap-4">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="px-2 py-1 h-auto text-xs sm:text-sm text-[#a6a7ad] hover:text-black font-normal transition-colors"
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="ghost"
          className="hidden sm:flex items-center gap-2 px-4 py-2 h-auto rounded-lg text-white text-xs sm:text-sm hover:bg-white hover:text-[#11111c]"
        >
          Login
        </Button>
        <Button className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2 h-auto rounded-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] text-[#11111c] text-xs sm:text-sm font-medium hover:opacity-90">
          Sign up
        </Button>
        <Button
          variant="ghost"
          className="hidden md:flex items-center gap-1 p-2 h-auto rounded-lg hover:bg-white/10"
        >
          <GlobeIcon className="w-5 h-5 text-white" />
          <ChevronDownIcon className="w-4 h-4 text-white" />
        </Button>
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 h-auto hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="w-5 h-5 text-white" />
          ) : (
            <MenuIcon className="w-5 h-5 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-full left-0 w-full bg-[#07070a] border-b border-[#212429] animate-fade-in z-50"
        >
          <div className="flex flex-col px-4 py-4 gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                className="text-left w-full text-sm text-[#a6a7ad] hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" className="flex-1 text-xs py-2 text-white">
                Login
              </Button>
              <Button className="flex-1 text-xs py-2 bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] text-[#11111c]">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
