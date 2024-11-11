import Link from "next/link";

export default function Header(){

    
    return(
        <header className="container my-8 flex items-center justify-between absolute left-1/2 -translate-x-1/2 z-50">
            
            <Link href="/" className="">
                <img src="/logo.svg" alt="Logo" />
            </Link>

        </header>
    )
}