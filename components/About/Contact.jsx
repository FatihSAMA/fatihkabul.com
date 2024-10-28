"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Scene = dynamic(() => import("@/components/Fish/Scene"), { ssr: false })

export default function Contact() {
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isCopied) setIsCopied(false)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [isCopied])

    const handleCopy = () => {
        navigator.clipboard.writeText("fatihkabul6@gmail.com")
        setIsCopied(true)
    }

    return (
        <div className="flex-[3] relative about-box">
            <div className="w-full h-full absolute backdrop-blur-[6px] z-[1] flex items-center justify-center flex-col gap-2.5">
                <div className="flex items-center justify-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <h5 className="text-neutral-400 font-semibold text-lg">Bana Ulaşın</h5>
                </div>
                <button
                    className="flex gap-4 text-xl"
                    onClick={handleCopy}
                >
                    <div className="h-4 w-4 relative flex items-center justify-center">
                        <AnimatePresence>
                            {isCopied ? (
                                <Success key="success" className={"absolute top-0 left-0"} />
                            ) : (
                                <Copy key="copy" className={"absolute top-0 left-0"} />
                            )}
                        </AnimatePresence>
                    </div>
                    fatihkabul6@gmail.com
                </button>
            </div>
            <Scene />
        </div>
    )
}

const Success = (props) => (
    <motion.svg
        {...props}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 45 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
    >
        <path
            fill="#22c55e"
            d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
        />
    </motion.svg>
)

const Copy = (props) => (
    <motion.svg
        {...props}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 512 512"
    >
        <path
            fill="currentColor"
            d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"
        />
        <path
            fill="currentColor"
            d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"
        />
    </motion.svg>
)
