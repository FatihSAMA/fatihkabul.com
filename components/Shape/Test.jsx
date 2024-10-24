"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html, PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

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
};

useGLTF.preload("/test.glb");
export default function Test() {

    const { scene } = useGLTF("/test.glb");


    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                {/* Lighhts and Cameras */}
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <directionalLight intensity={1} position={[0, 3, 2]} color={"white"} />

                <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={.5}>
                    <primitive object={scene} />
                </group>

            </Suspense>
        </Canvas>
    );
}
