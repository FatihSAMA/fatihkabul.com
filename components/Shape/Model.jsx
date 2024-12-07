"use client";

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, memo, useMemo } from 'react';
import * as THREE from 'three'

function Model() {
    const { nodes } = useGLTF('/shape.glb')

    const materialProps = useMemo(() => ({
        clearcoat: 0.394,
        clearcoatRoughness: 0.495,
        ior: 1.5,
        coatTint: "#4faaff",
        sheen: 0.268,
        sheenRoughness: 0.5,
        sheenTint: "#ff4444",
    }), []);

    const materialProps2 = useMemo(() => ({
        clearcoat: 0.1, // Parlaklık, cam için
        clearcoatRoughness: 0.1, // Pürüzsüz yüzey
        ior: 0.2, // Camın kırılma indeksi
        coatTint: "#ffffff", // Cam için beyaz renk tonu
        sheen: 0.2, // Düşük sheen, camda daha az parlama
        sheenRoughness: 0.3, // Şeffaflık
        sheenTint: "#ffffff", // Şeffaflık için renk tonu
        transmission: 1, // Şeffaflık (cam efekti için)
        roughness: 0.2, // Metalik yüzey için düşük roughness
        metalness: 1, // Metalik etkisi
        opacity: 0.85, // Yarı şeffaflık
        envMapIntensity: 1.0, // Çevre haritası yansıması
    }), []);
    

    const outside = useRef(null)
    const inside = useRef(null)

    useFrame((state, delta) => {

        // outside.current.rotation.x += delta * 0.02
        outside.current.rotation.y += delta * 0.01

        inside.current.rotation.x += delta * 0.03

    })

    return (
        <group dispose={null}>
            <mesh
                ref={inside}
                castShadow
                receiveShadow
                geometry={nodes.Icosphere.geometry}
                scale={4}
            >
                <meshPhysicalMaterial
                    {...materialProps}
                    attenuationTint={new THREE.Color(materialProps.coatTint)}
                    sheenColor={new THREE.Color(materialProps.sheenTint)}
                />
            </mesh>
            <mesh
                ref={outside}
                castShadow
                receiveShadow
                geometry={nodes.Icosphere006.geometry}
                scale={[4.5,4.5,4.5]}
            >
                <MeshTransmissionMaterial         
backside
backsideThickness={1}
samples={16}
thickness={0.2}
anisotropicBlur={0.1}
iridescence={1}
iridescenceIOR={1}
iridescenceThicknessRange={[0, 1400]}
clearcoat={1}
envMapIntensity={0.5}
                />
                {/* <meshPhysicalMaterial
                    {...materialProps2}
                    attenuationTint={new THREE.Color(materialProps.coatTint)} 
                    sheenColor={new THREE.Color(materialProps.sheenTint)} // Renk tonu beyaz
                /> */}
            </mesh>
        </group>
    )
}

useGLTF.preload('/shape.glb')

export default memo(Model)