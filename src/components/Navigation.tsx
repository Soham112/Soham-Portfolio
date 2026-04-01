"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Summary", id: "summary" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Publications", id: "publications" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 120;
      let current = "";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) current = item.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-sm py-3" : "bg-background/95 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-serif font-bold text-xl tracking-wider text-charcoal hover:text-sage transition-colors flex-shrink-0"
        >
          SP.
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <nav className="flex items-center gap-5 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-sm font-medium transition-colors pb-1 ${
                  activeId === item.id
                    ? "text-charcoal"
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-sage"
                  />
                )}
              </button>
            ))}
          </nav>
          
          <div className="w-px h-4 bg-warm-sand"></div>
          
          <a
            href="/Soham%20Patil%202026.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 text-sm font-semibold text-sage border border-sage rounded-full hover:bg-sage hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-charcoal hover:text-sage hover:bg-warm-sand/30 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-4 mt-2 w-52 bg-white rounded-2xl shadow-lg border border-warm-sand/60 overflow-hidden"
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium border-b border-warm-sand/30 transition-colors ${
                      activeId === item.id
                        ? "text-sage bg-sage/5 font-semibold"
                        : "text-charcoal-light hover:text-charcoal hover:bg-warm-sand/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/Soham%20Patil%202026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-5 py-3 text-sm font-semibold text-sage hover:bg-sage/10 transition-colors"
                >
                  Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
