import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Scene = dynamic(() => import("@/components/Fish/Scene"), { ssr: false });

const socials = [
    // {
    //     name: "Youtube",
    //     url: "https://www.youtube.com/@theflametr"
    // },
    {
        name: "LikedIn",
        url: "https://www.linkedin.com/in/fatihkabul/"
    },
    {
        name: "GitHub",
        url: "https://github.com/FatihSAMA"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/fatih_kbl/"
    },
    {
        name: "Mail Gönderin",
        url: "mailto:fatihkabul6@gmail.com"
    },
]

const techstack = [
    {
        id: 0,
        name: "JavaScript",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <g fill="none">
                    <rect width={256} height={256} fill="#f0db4f" rx={60}></rect>
                    <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
                </g>
            </svg>
        )
    },
    {
        id: 1,
        name: "Tailwind",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={39.9} height={24} viewBox="0 0 256 154">
                <defs>
                    <linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%">
                        <stop offset="0%" stopColor="#2298bd"></stop>
                        <stop offset="100%" stopColor="#0ed7b5"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"></path>
            </svg>
        )
    },
    {
        id: 2,
        name: "React",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                <g fill="#61dafb">
                    <circle cx={64} cy={64} r={11.4}></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
                </g>
            </svg>
        )
    },
    {
        id: 3,
        name: "Next.js",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                <circle cx={64} cy={64} r={64}></circle>
                <path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"></path>
                <path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
                <defs>
                    <linearGradient id="deviconNextjs0" x1={109} x2={144.5} y1={116.5} y2={160.5} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff"></stop>
                        <stop offset={1} stopColor="#fff" stopOpacity={0}></stop>
                    </linearGradient>
                    <linearGradient id="deviconNextjs1" x1={121} x2={120.799} y1={54} y2={106.875} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff"></stop>
                        <stop offset={1} stopColor="#fff" stopOpacity={0}></stop>
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 4,
        name: "Redux",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                <path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.7 39.7 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.5 50.5 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.5 41.5 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.6 43.6 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.3 7.3 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.7 43.7 0 0 0-9.64 25.25a59.6 59.6 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"></path>
            </svg>
        )
    },
    {
        id: 5,
        name: "Three.js",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <g fill="none">
                    <rect width={256} height={256} fill="#fff" rx={60}></rect>
                    <path stroke="#000" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={4} d="M93.213 222.94L50 48l173.23 49.874z" clipRule="evenodd"></path>
                    <path stroke="#000" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={4} d="m136.583 72.942l21.591 87.496l-86.567-24.945z" clipRule="evenodd"></path>
                    <path stroke="#000" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={4} d="m115.103 147.36l-10.724-43.465l43.008 12.346zM93.65 60.483l10.725 43.465l-43.008-12.346zm86.013 24.777l10.724 43.465l-43.008-12.346zm-64.555 62.13l10.724 43.465l-43.008-12.346z" clipRule="evenodd"></path>
                </g>
            </svg>
        )
    },
    {
        id: 6,
        name: "TypeScript",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                <g fill="none">
                    <rect width={256} height={256} fill="#007acc" rx={60}></rect>
                    <path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"></path>
                </g>
            </svg>
        )
    },
    {
        id: 7,
        name: "Sanity",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                <path fill="#f03e2f" d="M0 0h128v128H0z"></path>
                <path fill="#fff" d="M39.423 33.163c0 10.998 6.913 17.543 20.754 20.993l14.666 3.341c13.099 2.956 21.075 10.298 21.075 22.258a22.47 22.47 0 0 1-4.884 14.408c0-11.933-6.283-18.38-21.439-22.258l-14.4-3.217c-11.532-2.585-20.432-8.62-20.432-21.612a22.35 22.35 0 0 1 4.66-13.913"></path>
                <path fill="#f9b1ab" d="M82.022 76.827c6.256 3.932 8.998 9.431 8.998 17.323c-5.177 6.516-14.274 10.173-24.965 10.173c-17.997 0-30.592-8.702-33.391-23.825h17.283c2.225 6.943 8.117 10.16 15.981 10.16c9.6 0 15.982-5.032 16.108-13.859M48.407 49.468a18.2 18.2 0 0 1-6.781-6.935a17.8 17.8 0 0 1-2.203-9.37c4.996-6.462 13.686-10.407 24.28-10.407c18.333 0 28.94 9.513 31.558 22.904H78.635c-1.833-5.28-6.423-9.39-14.792-9.39c-8.942 0-15.044 5.114-15.394 13.198"></path>
            </svg>
        )
    },
    {
        id: 8,
        name: "Contentful",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={28.35} height={32} viewBox="0 0 256 289">
                <path fill="#fae501" d="M87.333 200.777c-15.306-14.406-24.309-34.213-24.309-56.722s9.003-42.316 23.409-56.722c12.605-12.604 12.605-32.412 0-45.017s-32.412-12.605-45.017 0C16.206 68.426 0 104.44 0 144.055s16.206 75.629 42.316 101.739c12.605 12.605 32.413 12.605 45.017 0c11.705-12.605 11.705-32.413 0-45.017"></path>
                <path fill="#4fb5e1" d="M87.333 87.333c14.406-15.306 34.213-24.309 56.722-24.309s42.316 9.003 56.722 23.409c12.604 12.605 32.412 12.605 45.017 0s12.605-32.412 0-45.017C219.684 16.206 183.67 0 144.055 0S68.426 16.206 42.316 42.316c-12.605 12.605-12.605 32.413 0 45.017c12.605 11.705 32.413 11.705 45.017 0"></path>
                <path fill="#f05751" d="M200.777 200.777c-14.406 15.305-34.213 24.309-56.722 24.309s-42.316-9.004-56.722-23.41c-12.604-12.604-32.412-12.604-45.017 0c-12.605 12.606-12.605 32.413 0 45.018c26.11 25.21 62.124 41.416 101.739 41.416s75.629-16.206 101.739-42.316c12.605-12.605 12.605-32.413 0-45.017c-12.605-11.705-32.413-11.705-45.017 0"></path>
                <circle cx={64.825} cy={64.825} r={31.512} fill="#0681b6"></circle>
                <circle cx={64.825} cy={223.285} r={31.512} fill="#cd4739"></circle>
            </svg>
        )
    },
    {
        id: 9,
        name: "MongoDB",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                <defs>
                    <linearGradient id="vscodeIconsFileTypeMongo0" x1={-645.732} x2={-654.59} y1={839.188} y2={839.25} gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset={0.231} stopColor="#999875"></stop>
                        <stop offset={0.563} stopColor="#9b9977"></stop>
                        <stop offset={0.683} stopColor="#a09f7e"></stop>
                        <stop offset={0.768} stopColor="#a9a889"></stop>
                        <stop offset={0.837} stopColor="#b7b69a"></stop>
                        <stop offset={0.896} stopColor="#c9c7b0"></stop>
                        <stop offset={0.948} stopColor="#deddcb"></stop>
                        <stop offset={0.994} stopColor="#f8f6eb"></stop>
                        <stop offset={1} stopColor="#fbf9ef"></stop>
                    </linearGradient>
                    <linearGradient id="vscodeIconsFileTypeMongo1" x1={-644.287} x2={-657.028} y1={823.405} y2={845.476} gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#48a547"></stop>
                        <stop offset={1} stopColor="#3f9143"></stop>
                    </linearGradient>
                    <linearGradient id="vscodeIconsFileTypeMongo2" x1={-643.386} x2={-652.418} y1={839.485} y2={833.417} gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#41a247"></stop>
                        <stop offset={0.352} stopColor="#4ba74b"></stop>
                        <stop offset={0.956} stopColor="#67b554"></stop>
                        <stop offset={1} stopColor="#69b655"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#vscodeIconsFileTypeMongo0)" d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.7 2.7 0 0 0-1.333 1.523A14 14 0 0 0 16.62 30"></path>
                <path fill="url(#vscodeIconsFileTypeMongo1)" d="M17.026 26.329a13.22 13.22 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a10 10 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187"></path>
                <path fill="url(#vscodeIconsFileTypeMongo2)" d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.73 1.73 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99"></path>
            </svg>
        )
    },
    {
        id: 10,
        name: "Figma",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"></path>
                <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"></path>
                <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"></path>
                <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path>
                <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"></path>
            </svg>
        )
    },

]

export default function About(){
    return(
        <section id="about" className="mb-24">
            <div className="container relative">
                <div className="h-full aspect-square rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[-1]"
                style={{
                    background: "radial-gradient(circle, rgba(169,88,231,.2) 0%, rgba(169,88,231,0) 70%)",
                }} />

                <h2 className="subtitle mb-12 text-center w-full">
                    Hakkimda
                </h2>

                <div className="flex flex-wrap gap-4 mb-4">

                    <div className="flex-[5] about-box p-6 flex items-center justify-center flex-col gap-8 relative bg-zinc-950/80">
                        <h4 className="text-center text-2xl font-bold text-neutral-300">
                            🎈 Ben Kimim?
                        </h4>
                        <p className="max-w-80">
                            Merhaba, ben Fatih Kabul. Kod yazmayı, kamp yapmayı ve oyun oynamayı severim. 
                        </p>
                        <Image src={"/mistik.png"} alt="Mıstık Kod Yazıyor :)" fill className="absolute left-0 opacity-60 !w-[200%] !h-[200%] object-cover -z-[2]" />
                    </div>

                    <div className="flex-[3] py-6 about-box flex items-center justify-center flex-col lg:bg-zinc-950/10">

                        <h5 className="text-xl text-center font-semibold flex items-center justify-center gap-2 text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256">
                            <path fill="currentColor" d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"></path>
                        </svg> 
                        Sosyal Medya Adreslerim
                        </h5>

                        <div className="flex flex-col gap-2.5 mt-6 w-full items-center">
                            {socials.map((social) => (
                                <Link href={social.url} className="flex items-center justify-center gap-2.5 group w-fit  hover:text-teal-400 transition-colors" key={social.name}>
                                    <span className="text-xl">
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

                </div>

                <div className="flex flex-wrap gap-4">

                    <div className="flex-[3] relative about-box">
                        <Scene />
                    </div>

                    <div className="flex-[5] about-box overflow-hidden">
                        
                        <h5 className="text-xl text-center mt-6 font-semibold">
                            🔧 Kullandığım Teknolojiler
                        </h5>
                        
                        <div className="flex gap-4 mt-8 -translate-x-2">
                            {techstack.slice(0,8).map(tech => (
                                <div key={tech.id} className="py-2 px-3 flex items-center justify-center gap-2.5 rounded-lg border-2 border-neutral-800 hover:border-neutral-700 transition-colors">
                                    <div className="text-[#32a8a8]">
                                        {tech.logo}
                                    </div>
                                    <h6 className="">
                                        {tech.name}
                                    </h6>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-4 -translate-x-32">
                            {techstack.slice(2).map(tech => (
                                <div key={tech.id} className="py-2 px-3 flex items-center justify-center gap-2.5 rounded-lg border-2 border-neutral-800 hover:border-neutral-700 transition-colors">
                                    <div className="text-[#32a8a8]">
                                        {tech.logo}
                                    </div>
                                    <h6 className="">
                                        {tech.name}
                                    </h6>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-4 -translate-x-24">
                            {techstack.slice(5).map(tech => (
                                <div key={tech.id} className="py-2 px-3 flex items-center justify-center gap-2.5 rounded-lg border-2 border-neutral-800 hover:border-neutral-700 transition-colors">
                                    <div className="text-[#32a8a8]">
                                        {tech.logo}
                                    </div>
                                    <h6 className="">
                                        {tech.name}
                                    </h6>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}