"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useMemo } from "react";
import { useProgress, Html, PerspectiveCamera, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center as={"div"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <p style={{ color: "#F1F1F1", fontSize: 14 }}>{progress.toFixed(1)} % loaded...</p>
    </Html>
  );
};

export default function Scene() {
  // Memoize paths to avoid recalculations on every render
  const path1 = useMemo(() => {
    const points1 = [
      new THREE.Vector3(-18, 0, 0),
      new THREE.Vector3(18, 5, 0),
      new THREE.Vector3(-18, -2, 0),
      new THREE.Vector3(18, 0, -2),
      new THREE.Vector3(-18, 0, 5),
    ];
    return new THREE.CatmullRomCurve3(points1);
  }, []);

  const path2 = useMemo(() => {
    const points2 = [
      new THREE.Vector3(18, -4, -5),
      new THREE.Vector3(-18, 0, 5),
      new THREE.Vector3(18, -2, 2),
      new THREE.Vector3(-18, -5, -2),
      new THREE.Vector3(18, -2, 0),
    ];
    return new THREE.CatmullRomCurve3(points2);
  }, []);

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={1} />
        {/* Fishes */}
        <Model path={path1} speed={0.025} />
        <Model path={path2} speed={0.025} />
      </Suspense>
    </Canvas>
  );
}