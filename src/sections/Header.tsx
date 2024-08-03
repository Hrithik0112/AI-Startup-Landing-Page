import React from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl mx-auto max-w-2xl backdrop-blur-lg">
          <div className="h-10 w-10 border border-white/15 inline-flex justify-center items-center rounded-lg">
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
