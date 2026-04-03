"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightItem {
  heading: string;
  description: string;
  bullets: string[];
}

interface ExpandableInsightSectionProps {
  title: string;
  items: InsightItem[];
  className?: string;
}

export function ExpandableInsightSection({
  title,
  items,
  className,
}: ExpandableInsightSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("mt-6 pt-4 border-t border-warm-sand/50", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg font-bold text-charcoal group-hover:text-sage transition-colors duration-200">
          {title}
        </span>
        <div className="text-charcoal-light group-hover:text-sage transition-colors duration-200">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">
                    {item.heading}
                  </h4>
                  <p className="text-charcoal-light text-sm italic leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-charcoal-light text-sm flex gap-2 leading-relaxed">
                        <span className="text-sage font-bold shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
