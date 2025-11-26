import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Explore", to: "/explore" },
    { label: "Sessions", to: "/sessions" },
    // { label: "Mentors", to: "/mentors" },
    { label: "About", to: "/about" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-[#064C3B] border-b border-[#0A7A5E] shadow-[0_0_40px_-10px_#0A7A5E] sticky top-0 z-30">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-[#1BD69C] tracking-tight 
                       hover:text-white transition-all duration-300"
          >
            SkillSwap
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[#D8FFF4]/85 hover:text-[#1BD69C] 
                           hover:-translate-y-[2px] transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-[#D8FFF4]/80 hover:text-[#1BD69C] transition-all duration-300"
              to="/login"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 bg-[#15A57E] text-white font-bold rounded-md
                         shadow-lg hover:bg-[#0A7A5E] transition-all duration-300
                         hover:shadow-[0_0_22px_#1BD69C] hover:-translate-y-[3px]"
            >
              Join Now →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <i className="fa-solid fa-bars" />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay + Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
            onClick={closeMenu}
          />

          {/* Right sliding drawer */}
          <div
            className="absolute right-0 top-0 h-full w-64 bg-[#032018] border-l border-[#0A7A5E] 
                       shadow-[0_0_30px_rgba(0,0,0,0.7)] flex flex-col p-5 
                       animate-slide-in"
          >
            {/* Top: logo + close */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-bold text-[#1BD69C]">SkillSwap</span>
              <button
                className="text-white text-xl"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="text-[#D8FFF4]/85 hover:text-[#1BD69C] py-1
                             border-b border-white/5 last:border-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom actions */}
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3 text-sm">
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-[#D8FFF4]/85 hover:text-[#1BD69C]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="px-4 py-2 bg-[#15A57E] text-white font-semibold rounded-md
                           shadow-md hover:bg-[#0A7A5E] hover:shadow-[0_0_18px_#1BD69C]
                           text-center transition-all"
              >
                Join Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
