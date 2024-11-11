import dynamic from "next/dynamic"
const ShapeScene = dynamic(() => import("./ShapeScene"), { ssr: false })


export default function Shape(){
    return(
        <div className="fixed w-full h-full inset-0 -z-[5]">
            <ShapeScene />
        </div>
    )
}