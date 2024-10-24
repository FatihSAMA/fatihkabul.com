import Image from "next/image";

export default function Review({ avatar, name, title, review }){
    return(
        <div className="p-6 flex flex-col justify-center gap-4 bg-zinc-900/60 border-2 border-white/5 overflow-hidden h-60 w-[400px] rounded-lg"> 
            
            <div className="flex items-center gap-6 w-full">
                <div className="rounded-full bg-zinc-950 w-[72px] h-[72px] overflow-hidden flex items-center justify-center">
                    <Image src={avatar} alt="Avatar" width={72} height={72} />
                </div>

                <div>
                    <h4 className="">
                        {name}
                    </h4>
                    <h5 className="text-neutral-500 text-sm">
                        {title}
                    </h5>
                </div>
            </div>

            <p className="text-sm  text-justify">
                {review}
            </p>

        </div>
    )
}