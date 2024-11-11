"use client"

import { useEffect, useState } from "react"
import { fetchData } from "@/services/fetchData"
import { urlFor } from "@/services/sanityclient"
import Marquee from "react-fast-marquee"

export default function Brands() {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const fetchBrands = async () => {
            const query = '*[_type == "brands"]'
            const data = await fetchData(query)
            setBrands(data)
        }
        
        fetchBrands()
    }, [])

    return (
        <Marquee 
            autoFill 
            className="bg-gradient-to-r from-[#2f7380] to-[#2b155e] !bg-opacity-25 !-rotate-3 mt-10 mb-32"
        >
            {brands.length > 0 ? brands.map((logo, index) => (
                <div className="md:mx-12 mx-4 py-2" key={index}>
                    <img
                        src={urlFor(logo.image)}
                        alt={logo.name}
                        className="md:h-10 h-7 w-auto grayscale"
                    />
                </div>
            )) : null}
        </Marquee>
    )
}
