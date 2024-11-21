import Link from "next/link";

const socials = [
    // {
    //     name: "Youtube",
    //     url: "https://www.youtube.com/@theflametr",
    //     icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" width={45.52} height={32} viewBox="0 0 256 180">
    //             <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path>
    //             <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path>
    //         </svg>
    // )
    // },
    {
        name: "LikedIn",
        url: "https://www.linkedin.com/in/fatihkabul/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <g fill="none">
                    <rect width={256} height={256} fill="#fff" rx={60}></rect>
                    <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
                    <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"></path>
                </g>
            </svg>
        )
    },
    {
        name: "GitHub",
        url: "https://github.com/FatihSAMA",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
            </svg>
        )
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/fatih_kbl/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <g fill="none">
                    <rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect>
                    <rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect>
                    <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path>
                    <defs>
                        <radialGradient id="skillIconsInstagram0" cx={0} cy={0} r={1} gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fd5"></stop>
                            <stop offset={0.1} stopColor="#fd5"></stop>
                            <stop offset={0.5} stopColor="#ff543e"></stop>
                            <stop offset={1} stopColor="#c837ab"></stop>
                        </radialGradient>
                        <radialGradient id="skillIconsInstagram1" cx={0} cy={0} r={1} gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3771c8"></stop>
                            <stop offset={0.128} stopColor="#3771c8"></stop>
                            <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                        </radialGradient>
                    </defs>
                </g>
            </svg>
        )
    },
]

export default function SocialAccounts(){
    return(
        <div className="flex-[3] py-6 about-box flex items-center justify-center flex-col lg:bg-zinc-950/85">

            <h4 className="text-xl text-center font-semibold flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256">
                    <path fill="currentColor" d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"></path>
                </svg> 
                Sosyal Medya Adreslerim
            </h4>

            <div className="flex gap-4 mt-8 w-full items-center justify-center px-4 flex-wrap ">
                {socials.map((social) => (
                    <Link href={social.url} target="_blank" className="flex items-center justify-center gap-2.5 group w-fit rounded-lg px-2 py-2.5 border-2 border-neutral-800 hover:border-neutral-700 transition-colors" key={social.name}>
                        <span>
                            {social.icon}
                        </span>
                        
                        <span className="text-lg">
                            {social.name}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-45 group-hover:rotate-90 transition-all duration-300" width={24} height={24} viewBox="0 0 24 24">
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
                ))}
            </div>

        </div>
    )
}