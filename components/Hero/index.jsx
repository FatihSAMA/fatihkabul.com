"use client";

import Magnetic from "../Buttons/Magnetic";
import TextTyping from "../TextTyping";


export default function Hero(){
    return(
        <section className="h-screen w-full relative">
            {/* Left Light */}
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[1200px] aspect-square rounded-full pointer-events-none -z-[1]"
                style={{
                    background: "radial-gradient(circle, rgba(169,88,231,0.2) 0%, rgba(169,88,231,0) 70%)",
                    clipPath: "inset(0, 0, 0, 0)"
                }}
            />

            <div className="w-full h-full flex flex-col items-start justify-center gap-16 container lg:pl-12">
                <h1 className="text-6xl md:text-9xl lg:text-[168px] font-azonix whitespace-pre-line leading-[1]">
                    <TextTyping text={"Slogan\nYazisi"} />
                </h1>
                <Magnetic>
                    <button className="relative flex gap-8 justify-center items-center text-lg py-4 px-4 group z-20 lg:ml-16">
                        Hadi Başlayalım
                        <svg className="rotate-[135deg] group-hover:rotate-180 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256">
                            <path fill="currentColor" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></path>
                        </svg>
                        <span className="absolute bg-current h-[1px] w-1/2 left-4 bottom-0 transition-all" />
                    </button>
                </Magnetic>
                <div />

            </div>

        </section>
    );
}