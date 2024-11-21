"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ServiceBox({ icon, title, description }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className="bg-zinc-950/90 border-2 border-white/5 flex flex-col gap-1 flex-1 px-8 py-6 rounded-xl hover:border-white/10 transition-all cursor-pointer min-w-[320px] h-[260px] overflow-hidden relative group"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Icon */}
      <Image
        src={icon}
        alt={title}
        width={isHover ? 50 : 64}
        height={isHover ? 50 : 64}
        className="mb-2.5 transition-all duration-300"
      />

      {/* Title */}
      <h3 className="text-2xl transition-all">{title}</h3>

      {/* Description */}
      <p className="text-base text-neutral-400 text-left transition-all lg:max-w-[250px]">
        {description}
      </p>

      {/* Motion Button */}
      <motion.button
        initial={{ y: 100 }}
        animate={{ y: isHover ? 0 : 100 }}
        transition={{ duration: 0.2 }}
        className="w-fit mt-auto"
      >
        Teklif Al
      </motion.button>

      {/* Background Circles */}
      <div className="absolute -right-full -bottom-full group-hover:bottom-0 group-hover:right-0 translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] bg-zinc-600/40 rounded-full -z-[2] transition-all" />
      <div className="absolute -right-full -bottom-full group-hover:bottom-0 group-hover:right-0 translate-y-1/2 translate-x-1/2 w-[250px] h-[250px] bg-zinc-300/30 rounded-full -z-[1] transition-all duration-300" />

      {/* Arrow Icon */}
      <div className="absolute -right-full -bottom-full group-hover:right-6 group-hover:bottom-6 transition-all duration-300">
        <svg
          className="rotate-[45deg]"
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"
          ></path>
        </svg>
      </div>
    </div>
  )
}
