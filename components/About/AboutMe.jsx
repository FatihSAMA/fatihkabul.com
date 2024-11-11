import Image from "next/image";

export default function AboutMe(){
    return(
        <div className="flex-[5] about-box p-6 flex items-center justify-center flex-col gap-8 relative bg-zinc-950">
            <h3 className="text-center text-2xl font-bold text-neutral-300 z-[3]">
                🎈 Ben Kimim?
            </h3>
            <p className="max-w-80  z-[3]">
                Merhaba, ben Fatih Kabul. Kod yazmayı, kamp yapmayı ve oyun oynamayı severim. 
            </p>
            <Image src={"/mistik.png"} alt="Mıstık Kod Yazıyor :)" fill className="absolute left-0 opacity-60 !w-[200%] !h-[200%] object-cover z-[1]" />
            <div className="absolute inset-0 w-full h-full bg-zinc-950/60 z-[2]" />
        </div>
    )
}