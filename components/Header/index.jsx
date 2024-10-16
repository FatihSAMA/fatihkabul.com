import Link from "next/link";
import Navbar from "./Navbar";

export default function Header(){

    
    return(
        <header className="container my-8 flex items-center justify-between">
            
            <Link href="/" className="">
                <img src="/logo.svg" alt="Logo" />
            </Link>

            <Navbar />

        </header>
    )
}