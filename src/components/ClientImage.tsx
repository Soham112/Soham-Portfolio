"use client";

import { useState } from "react";
import Image from "next/image";

export function ClientImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-warm-sand flex items-center justify-center ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(143, 175, 143, 0.8)" /* wage color */
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* A simple badminton racket abstraction */}
          <path d="M12 2A4.5 4.5 0 0 0 7.5 6.5C7.5 9.81 10.3 12 12 15c1.7-3 4.5-5.19 4.5-8.5A4.5 4.5 0 0 0 12 2z"/>
          <path d="M12 15v7"/>
          <path d="M10 22h4"/>
          <path d="M7.5 6.5h9"/>
          <path d="M8.5 9.5h7"/>
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setError(true)}
    />
  );
}
