"use client";

import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Preload the GLTF model
useGLTF.preload("/rainbow.glb");

export default function Test() {
  const { scene } = useGLTF("/rainbow.glb");

  return (
    <div className="fixed inset-0 -z-10 w-full h-screen">
      <Canvas>
        {/* Set up the camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

        {/* Add lighting */}
        <directionalLight
          intensity={15}
          position={[0, 3, 5]}
          color={"white"}
        />

        {/* Add your 3D model */}
        <group
          rotation={[0, Math.PI / 12, -Math.PI / 5]}
          position={[4, 0, 0]}
          scale={6}
        >
          <primitive object={scene} />
        </group>

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}    // Lower values include more elements in the bloom
            luminanceSmoothing={.5}  // Smooth the bloom effect
            height={300}              // Resolution of the bloom pass
            intensity={5}           // Strength of the bloom effect
          />
        </EffectComposer>
      
      </Canvas>

    </div>
  );
}
