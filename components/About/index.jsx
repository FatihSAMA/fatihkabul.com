import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Fish/Scene"), { ssr: false });

const socials = [
    {
        name: "Linkedin",
        url: "test",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>)
    },
    {
        name: "Linkedin",
        url: "test",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>)
    },
    {
        name: "Linkedin",
        url: "test",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>)
    },
    {
        name: "Linkedin",
        url: "test",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>)
    },
]


export default function About(){
    return(
        <section id="about" className="mb-24">
            <div className="container">

                <h2 className="subtitle mb-12 text-center w-full">
                    Hakkimda
                </h2>

                <div className="flex flex-wrap gap-8 mb-8">

                    <div className="flex-[5] about-box p-6 flex items-center justify-center flex-col gap-8 relative bg-zinc-900/70">
                        <h4 className="text-center text-2xl font-bold text-neutral-300">
                            🎈 Ben Kimim?
                        </h4>
                        <p className="max-w-80">
                            Merhaba, ben Fatih Kabul. Kod yazmayı, kamp yapmayı ve oyun oynamayı severim. 
                        </p>
                        <Image src={"/mistik.png"} alt="Mıstık Kod Yazıyor :)" fill className="absolute left-0 opacity-60 !w-[200%] !h-[200%] object-cover -z-[2]" />
                    </div>

                    <div className="flex-[3] py-6 about-box relative">

                        <h5 className="text-xl text-center font-semibold">
                            🔗 Sosyal Medya Adreslerim
                        </h5>

                        <div className="flex ">
                            {socials.map((social) => (
                                <div className="flex items-center justify-center" key={social.name}>
                                    {social.icon}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                <div className="flex flex-wrap gap-8">

                    <div className="flex-[3] relative about-box">
                        <Scene />
                    </div>

                    <div className="flex-[5] about-box relative overflow-hidden flex items-center justify-center">
                        <div className="absolute w-[200%] h-[200%] opacity-30 z-[-1]"
                        style={{
                            background: "radial-gradient(circle, rgba(169,88,231,1) 0%, rgba(169,88,231,0) 70%)",
                            clipPath: "inset(0, 0, 0, 0)"
                        }} />
                        
                        <h5 className="text-xl text-center mt-6 font-semibold">
                            🔧 Kullandığım Teknolojiler
                        </h5>
                        
                        <div className="flex">
                            
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}