"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = [
  "Working-On",
  "Summary",
  "Experience",
  "Projects",
  "Testimonials",
  "Skills",
  "Achievements",
  "Publications",
  "Certifications",
  "Education",
  "Contact"
];

export function Navigation() {
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
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm py-4"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-serif font-bold text-xl tracking-wider text-charcoal"
        >
          SP.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="relative text-sm font-medium hover:text-charcoal text-charcoal-light transition-none"
              >
                {item.replace("-", " ")}
              </a>
            );
          })}
        </nav>
      </div>
      
      {/* Mobile Nav Scroll */}
      <div className="md:hidden w-full overflow-x-auto no-scrollbar px-6 mt-2">
        <nav className="flex items-center justify-start gap-6 w-max pb-2">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="relative text-sm font-medium hover:text-charcoal text-charcoal-light whitespace-nowrap transition-none"
              >
                {item.replace("-", " ")}
              </a>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
