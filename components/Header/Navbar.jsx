"use client";

import Link from "next/link";

const navItems = [
    {
        title: "Anasayfa",
        url: "/"
    },
    {
        title: "Portfolyo",
        url: "/#portfolio"
    },
    {
        title: "Hakkımda",
        url: "/#about"
    },
    {
        title: "İletişim",
        url: "/#contact"
    },
];

export default function Navbar(){
    
    return(
        <nav className="flex gap-4 mt-4 px-6 py-3 text-neutral-300 bg-[#D9D9D9]/10 rounded-full border-[0.5px] border-white/10 backdrop-blur fixed left-1/2 -translate-x-1/2 max-sm:hidden z-10">
            {navItems.map((item, index) => (
                <Link href={item.url} key={index} className="hover:text-neutral-100 transition-colors">
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}