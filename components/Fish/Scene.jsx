"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, PerspectiveCamera, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
// import Shape from "./Shape";

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


export default function Scene() {

    const points1 = [
        new THREE.Vector3(-18, 0, 0),
        new THREE.Vector3(18, 5, 0),
        new THREE.Vector3(-18, -2, 0),
        new THREE.Vector3(18, 0, -2),
        new THREE.Vector3(-18, 0, 5),
    ];
    const path1 = new THREE.CatmullRomCurve3(points1);
    
    const points2 = [
        new THREE.Vector3(18, -4, -5),
        new THREE.Vector3(-18, 0, 5),
        new THREE.Vector3(18, -2, 2),
        new THREE.Vector3(-18, -5, -2),
        new THREE.Vector3(18, -2, 0),
    ];
    const path2 = new THREE.CatmullRomCurve3(points2);
    

    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                {/* Lighhts and Cameras */}
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                {/* <directionalLight intensity={1} position={[0, 3, 2]} color={"white"} /> */}
                <ambientLight intensity={1} />
                {/* <Environment preset="sunset" /> */}

                {/* Glass Effect */}
                {/* <Shape /> */}
        
                {/* Fishes */}
                <Model path={path1} speed={.025} />
                <Model path={path2} speed={.025} />

                <Environment resolution={1024}>
                    <group rotation={[-Math.PI / 3, 0, 0]}>
                    <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                        <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                    ))}
                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
                    </group>
                </Environment>

            </Suspense>
        </Canvas>
    );
}
