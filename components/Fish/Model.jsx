import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

useGLTF.preload("/koi_fish.glb");

export default function Model({ path, speed }) {
  const fishRef = useRef(null);
  const mixerRef = useRef(null);

  const { scene, animations } = useGLTF("/koi_fish.glb");
  const [t, setT] = useState(0); 

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);

      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
      action.timeScale = 2; 
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene, animations]);

  useFrame((state, delta) => {
    
    if (mixerRef.current) mixerRef.current.update(delta);

    setT((prevT) => (prevT >= 1 ? 0 : prevT + delta * speed)); 
    
    if (fishRef.current && path) {
      try{
        const position = path.getPointAt(t); 
        const tangent = path.getTangentAt(t).normalize(); 
        fishRef.current.position.copy(position);
        const targetPosition = position.clone().add(tangent); 
        fishRef.current.lookAt(targetPosition);
        fishRef.current.rotateY(-Math.PI/2); 
      }catch{
        
      }
    }
  });

  return (
    <group ref={fishRef} rotation={[0, 0, 0]} position={[0, 0, 0]} scale={1.5}>
      <primitive object={scene.clone()} />
    </group>
  );
}