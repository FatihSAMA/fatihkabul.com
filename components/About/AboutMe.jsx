import Image from "next/image";

export default function AboutMe(){
    return(
        <div className="flex-[5] about-box p-6 flex items-center justify-center flex-col gap-8 relative bg-zinc-950/80">
            <h4 className="text-center text-2xl font-bold text-neutral-300">
                🎈 Ben Kimim?
            </h4>
            <p className="max-w-80">
                Merhaba, ben Fatih Kabul. Kod yazmayı, kamp yapmayı ve oyun oynamayı severim. 
            </p>
            <Image src={"/mistik.png"} alt="Mıstık Kod Yazıyor :)" fill className="absolute left-0 opacity-60 !w-[200%] !h-[200%] object-cover -z-[2]" />
        </div>
    )
}