import { urlFor } from "@/services/sanityclient"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioBox({ name, image, link }){
    return(
        <Link href={link} target="_blank" className="min-w-80 flex-1 aspect-video overflow-hidden rounded-lg relative group">
                <Image
                src={urlFor(image).width(1280).quality(80).url()}
                alt={name}
                width={1280}
                height={720}
                priority
                placeholder="blur"
                blurDataURL={urlFor(image).width(10).quality(10).url()}
                className="w-full h-full"
                />
                <div
                className="absolute left-1/2 top-1/2 translate-y-full translate-x-full w-[200%] aspect-square rounded-full bg-zinc-950/60 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500" />
                
                <div 
                className="flex flex-col items-center justify-center text-lg font-semibold gap-2.5 absolute inset-0 text-slate-200 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-300 group-hover:delay-100">   
                    <h6 className="text-xl">
                        {name}
                    </h6>
                    <div className="flex items-center justify-center gap-2.5">
                        Göz At
                        <svg className="rotate-[45deg] group-hover:rotate-90 duration-300 delay-700 transition-all" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 256 256">
                            <path fill="currentColor" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></path>
                        </svg>
                    </div>
                </div>
        </Link>
    )
}