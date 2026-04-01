"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  bgWhite?: boolean;
}

export function Card({ children, className, delay = 0, bgWhite = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all duration-300",
        bgWhite ? "bg-white" : "bg-warm-sand",
        "shadow-warm hover:shadow-warm-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
