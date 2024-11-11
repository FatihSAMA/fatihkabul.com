"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, PerspectiveCamera, Environment } from "@react-three/drei"
import Model from "./Model"


const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html
            center
            as={"div"}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{ color: "#F1F1F1", fontSize: 14 }}>
                {progress.toFixed(1)} % loaded...
            </p>
        </Html>
    );
}


export default function ShapeScene(){
    
    return(
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <ambientLight intensity={1} /> */}
            {/* <Environment preset="city" /> */}

            <directionalLight color={"#a352ff"} intensity={5} position={[-15, 10, 0]} />
            <directionalLight color={"#7b59ca"} intensity={5} position={[15, -10, 0]} />
            <directionalLight color={"#fd8cf8"} intensity={1} position={[0, -10, 0]} />


            <Suspense fallback={<Loader />}>
                <Model />
            </Suspense>
        </Canvas>
    )
}