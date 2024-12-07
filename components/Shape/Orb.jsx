"use client"

import { useRef, useEffect, memo } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"



const orbPositions = [
  {
    id: "hero",
    
  }
]


function Orb() {
  const { scene, animations } = useGLTF("/furry_orb.glb")
  const mixer = useRef()

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene)

      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip)
        action.play()
      })
    }
  }, [scene, animations])

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta/5)
  })

  return <primitive object={scene} position={[2, 0, 0]} scale={[1, 1, 1]} />
}

useGLTF.preload("/furry_orb.glb")


export default memo(Orb)