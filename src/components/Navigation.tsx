"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  "Summary",
  "Experience",
  "Projects",
  "Achievements",
  "Publications",
  "Skills", 
  "Certifications",
  "Education",
  "Contact"
];

export function Navigation() {
  const [activeTab, setActiveTab] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = NAV_ITEMS.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(NAV_ITEMS[i].toLowerCase());
          break;
        }
      }
      
      if (window.scrollY < 200) setActiveTab("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const elem = document.getElementById(target);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-serif font-bold text-xl tracking-wider text-charcoal hover:text-sage transition-colors"
        >
          SP.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeTab === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-charcoal",
                  isActive ? "text-charcoal" : "text-charcoal-light"
                )}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-sage mt-1"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button could be added here, but for simplicity we'll just show it mostly as standard or wrap if needed. Given "mobile responsive", a horizontal menu might overflow. Let's make an overflow-x-auto container for moble. */}
      </div>
      
      {/* Mobile Nav Scroll */}
      <div className="md:hidden w-full overflow-x-auto no-scrollbar px-6 mt-2">
        <nav className="flex items-center justify-start gap-6 w-max pb-2">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeTab === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-charcoal whitespace-nowrap",
                  isActive ? "text-charcoal" : "text-charcoal-light"
                )}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="underline-mb"
                    className="absolute left-0 top-full h-[2px] w-full bg-sage mt-1"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
