"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, PerspectiveCamera } from "@react-three/drei"
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
        <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            {/* <directionalLight color={"#a352ff"} intensity={3} position={[-15, 10, 0]} />
            <directionalLight color={"#7b59ca"} intensity={2} position={[15, -10, 0]} />
            <directionalLight color={"#fd8cf8"} intensity={1} position={[0, -4, 0]} /> */}

            <directionalLight
            color={"#a352ff"}
            intensity={2}  // Şiddet daha düşük, gereksiz parlama azaltıldı
            position={[-15, 10, 0]}
            castShadow
            shadow-mapSize-width={1024}  // Daha küçük çözünürlükle daha hızlı gölge hesaplama
            shadow-mapSize-height={1024}
            shadow-camera-near={1}       // Gölge başlama mesafesi
            shadow-camera-far={50}       // Gölgenin sonlanacağı mesafe
            shadow-camera-left={-10}     // Gölge alanı düzenlemesi
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            />

            <directionalLight
            color={"#7b59ca"}
            intensity={1.5}  // Biraz daha düşük şiddet
            position={[15, -10, 0]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            />

            <directionalLight
            color={"#fd8cf8"}
            intensity={1}  // En düşük şiddet
            position={[0, -4, 0]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            />



            <Suspense fallback={<Loader />}>
                <Model />
            </Suspense>
        </Canvas>
    )
}