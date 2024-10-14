import { MeshTransmissionMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from 'leva';

export default function Shape(){

    const mesh = useRef();
    const { nodes } = useGLTF("/shape.glb");
    const { viewport } = useThree();

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
    });

    // const materialProps = {
    //     thickness: 3,
    //     roughness: 0.2,
    //     transmission: 1,
    //     ior: 1,
    //     chromaticAberration: 0.01,
    //     backside: false,
    // }

    useFrame(() => {
        if(mesh.current){
            mesh.current.rotation.x += 0.0009;
            mesh.current.rotation.y -= 0.0001;
        }
    });

    return(
        <group >

            <mesh
                ref={mesh}
                castShadow
                receiveShadow
                geometry={nodes.Cube__0.geometry}
                scale={5}
            >
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
            {/* <mesh scale={10} position={[0, 0, 0]}>
                <sphereGeometry
                    castShadow
                    receiveShadow
                />
                <MeshTransmissionMaterial {...materialProps} />
            </mesh> */}
            
        </group>
    );
}