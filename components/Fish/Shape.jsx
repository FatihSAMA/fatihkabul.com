import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";

export default function Shape(){

    const mesh = useRef();

    return(
        <group>

            <mesh scale={[15, 10, 2]} position={[0, 0, 0]} ref={mesh}>
                <boxGeometry
                    castShadow
                    receiveShadow
                />
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
    );
}