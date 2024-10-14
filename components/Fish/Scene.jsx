"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, PerspectiveCamera, Environment, Text, Float, Lightformer, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Shape from "./Shape";

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
        new THREE.Vector3(5, 5, -5),
        new THREE.Vector3(-25, 0, 10),
        new THREE.Vector3(25, 0, 2),
        new THREE.Vector3(-25, 5, -5),
        new THREE.Vector3(5, 5, -5),
    ];
    const path1 = new THREE.CatmullRomCurve3(points1);
    
    const points2 = [
        new THREE.Vector3(-5, -5, 0),
        new THREE.Vector3(25, 2, 4),
        new THREE.Vector3(-25, 6, -1),
        new THREE.Vector3(25, -3, 2),
        new THREE.Vector3(-5, -5, 0),
    ];
    const path2 = new THREE.CatmullRomCurve3(points2);
    

    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                {/* Lighhts and Cameras */}
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <directionalLight intensity={1} position={[0, 3, 2]} color={"blue"} />
                <Environment preset="city" />

                {/* Glass Effect */}
                {/* <Float   
                speed={1}
                rotationIntensity={5}
                floatIntensity={1}
                floatingRange={[-2, 2]} 
                >
                </Float> */}
                <Shape />
        
                {/* Fishes */}
                <Model path={path1} speed={.015} />
                <Model path={path2} speed={.01} />

                {/* Text */}
                <Text  position={[0, 0, -1]} fontSize={3} color="white" anchorX="center" anchorY="middle">
                    DENEME YAZISI
                </Text>

            </Suspense>
        </Canvas>
    );
}
