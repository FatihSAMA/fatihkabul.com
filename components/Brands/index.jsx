import Marquee from "react-fast-marquee";

const logos = [
    {
        path: "/brands/rubiconist.png",
        alt: "Rubiconist",
    },
    {
        path: "/brands/damitmasepeti.png",
        alt: "Damıtma Sepeti",
    },
    {
        path: "/brands/midnightservice.svg",
        alt: "Midnight Service",
    },
    {
        path: "/brands/perry.png",
        alt: "Perry",
    },
    {
        path: "/brands/rubiconsgame.png",
        alt: "Rubicons Game",
    },
];

export default function Brands() {
    return (
        <Marquee 
        autoFill className="bg-gradient-to-r from-[#2f7380] to-[#2b155e] !bg-opacity-25 !-rotate-3 mt-10 mb-32 w-full">
            {logos.map((logo, index) => (
                <div className="md:mx-12 mx-4 py-2" key={index}>
                    <img
                        src={logo.path}
                        alt={logo.alt}
                        className="grayscale-[1] md:h-10 h-7 w-auto"
                    />
                </div>
            ))}
        </Marquee>
    );
}
