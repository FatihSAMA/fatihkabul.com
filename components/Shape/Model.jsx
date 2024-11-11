"use client";

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

export default function Model() {
    const { nodes } = useGLTF('/shape.glb')

    // Material props for sphere
    const { clearcoat, clearcoatRoughness, ior, coatTint, sheen, sheenRoughness, sheenTint } = {
        clearcoat: { value: 0.394, min: 0, max: 1 },
        clearcoatRoughness: { value: 0.495, min: 0, max: 1 },
        ior: { value: 1.5, min: 1, max: 2.5 },
        coatTint: "#4faaff",
        sheen: { value: 0.268, min: 0, max: 1 },
        sheenRoughness: { value: 0.5, min: 0, max: 1 },
        sheenTint: "#ff4444",
    }

    const outside = useRef(null)
    const inside = useRef(null)

    useFrame((state, delta) => {

        outside.current.rotation.x += delta * 0.1
        outside.current.rotation.y += delta * 0.1

        inside.current.rotation.x -= delta * 0.16

    })

    return (
        <group dispose={null}>
            <mesh
                ref={inside}
                castShadow
                receiveShadow
                geometry={nodes.Icosphere.geometry}
                scale={5}
            >
                <meshPhysicalMaterial
                    clearcoat={clearcoat}
                    clearcoatRoughness={clearcoatRoughness}
                    ior={ior}
                    attenuationTint={new THREE.Color(coatTint)}
                    sheen={sheen}
                    sheenRoughness={sheenRoughness}
                    sheenColor={new THREE.Color(sheenTint)}
                />
            </mesh>
            <mesh
                ref={outside}
                castShadow
                receiveShadow
                geometry={nodes.Icosphere006.geometry}
                scale={[5, 5, 6]}
            >
                <MeshTransmissionMaterial         
                backside
                samples={4}
                thickness={3}
                chromaticAberration={0.005}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/shape.glb')
