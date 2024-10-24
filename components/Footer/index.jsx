import Link from "next/link"

const socials = [
    {
        name: "Youtube",
        icon: "",
        url: ""
    },
]

export default function Footer(){
    return(
        <footer className="container mt-12 mb-8 ">

            <div className="w-full h-[0.0625rem] bg-neutral-700 rounded-full" />
            <div className="flex items-center flex-wrap w-full justify-between  mt-8">
                <span>
                    © 2024, All rights reserved.
                </span>
                <div className="flex items-center justify-center">
                    <Link className="flex items-center justify-center gap-2" href={""}>
                        Youtube
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-45" width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                <path strokeDasharray={20} strokeDashoffset={20} d="M12 21l0 -17.5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate>
                                </path>
                                <path strokeDasharray={12} strokeDashoffset={12} d="M12 3l7 7M12 3l-7 7">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate>
                                </path>
                            </g>
                        </svg>  
                    </Link>
                </div>
            </div>
        </footer>
    )
}