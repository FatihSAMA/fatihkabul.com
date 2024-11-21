"use client";
import { useState } from "react";
import { urlFor } from "@/services/sanityclient";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioBox({ name, image, link }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={link}
      target="_blank"
      className="min-w-80 flex-1 aspect-video overflow-hidden rounded-lg relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <Image
        src={urlFor(image).width(1280).quality(100).url()}
        alt={name}
        width={1280}
        height={720}
        priority
        placeholder="blur"
        blurDataURL={urlFor(image).width(10).quality(10).url()}
        className="w-full h-full"
      />

      {/* Hover Overlay */}
      <div className="bg-zinc-950/60 absolute inset-0 group-hover:opacity-100 opacity-0 transition-all" />

      {/* Look Button */}
      <div
        className={`absolute -translate-y-full -translate-x-full z-10 bg-[#0009]/40 w-fit h-fit leading-none text-nowrap flex items-center px-2.5 py-1.5 backdrop-blur-sm rounded-full  text-sm font-regular`}
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
          opacity: isHovering ? 1 : 0,
          pointerEvents: "none", // Butonun etkileşime girmemesi için
        }}
      >
        {name}
        <svg
          className="rotate-[45deg]"
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"
          ></path>
        </svg>
      </div>
    </Link>
  );
}
