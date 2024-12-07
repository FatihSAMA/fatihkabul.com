"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html } from "@react-three/drei"
import Orb from "./Orb"
import { useRef } from "react"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

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

function Lights(){
    const light1Ref = useRef();
    const light2Ref = useRef();
      
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
  
        if (light1Ref.current && light2Ref.current) {
          light1Ref.current.position.x = Math.cos(time * 1) * 10;
          light1Ref.current.position.z = Math.sin(time * 1) * 10;
          light2Ref.current.position.x = Math.cos(time * 1 + Math.PI) * 10;
          light2Ref.current.position.z = Math.sin(time * 1 + Math.PI) * 10;
        }
      });

      return(
        <>
            <directionalLight
            ref={light1Ref}
            color={"#a352ff"}
            intensity={1}
            position={[-15, 10, 6]}
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
            ref={light2Ref}
            color={"#42f5dd"}
            intensity={1}
            position={[15, 10, 6]}
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
        </>
      )
}


export default function ShapeScene(){


    
    return(
        <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 50 }}>

            <ambientLight intensity={0.1} />
            <Lights />

            <EffectComposer>
                <Bloom intensity={1.5} width={300} height={300} kernelSize={3} luminanceThreshold={0.5} luminanceSmoothing={0.9} />
            </EffectComposer>

            <Suspense fallback={<Loader />}>
                <Orb />
            </Suspense>

        </Canvas>
    )
}