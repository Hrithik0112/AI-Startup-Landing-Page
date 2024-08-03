import React from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl mx-auto max-w-2xl">
          <div className="h-10 w-10 border border-white/15 inline-flex justify-center items-center rounded-lg">
            <LogoIcon className="h-8 w-8" />
          </div>
            <div className="hidden md:block">
                <nav className="flex gap-8 text-sm">
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Features</a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Developers</a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">Changelog</a>
                </nav>
            </div>
          <div className="flex items-center gap-4">
            <button className="py-2 px-3 relative rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ">
                <div className="absolute inset-0">
                    <div className="inset-0 rounded-lg border absolute border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                    <div className="inset-0 border rounded-lg absolute border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
                </div>
                <span>

              Join Waitlist
                </span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
