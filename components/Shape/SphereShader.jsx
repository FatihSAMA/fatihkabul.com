import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal; // Yüzey normalleri fragment shader için gönderiliyor
varying vec3 vPosition; // Pozisyon bilgisi gönderiliyor

// GLSL Noise Fonksiyonu
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);
  vec4 iz0 = vec4(Pi0.z, Pi0.z, Pi0.z, Pi0.z);
  vec4 iz1 = vec4(Pi1.z, Pi1.z, Pi1.z, Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = fract(ixy0 * (1.0 / 7.0)) * 2.0 - 1.0;
  vec4 gy0 = abs(gx0) - 0.5;
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = fract(ixy1 * (1.0 / 7.0)) * 2.0 - 1.0;
  vec4 gy1 = abs(gx1) - 0.5;
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000), dot(g010,g010), dot(g100,g100), dot(g110,g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001), dot(g011,g011), dot(g101,g101), dot(g111,g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(dot(g000, Pf0), dot(g100, vec3(Pf1.x, Pf0.yz)),
                      dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z)), dot(g110, vec3(Pf1.xy, Pf0.z))),
                 vec4(dot(g001, vec3(Pf0.xy, Pf1.z)), dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z)),
                      dot(g011, vec3(Pf0.x, Pf1.yz)), dot(g111, Pf1)),
                 fade_xyz.z);
  return 2.2 * mix(mix(n_z.x, n_z.y, fade_xyz.x), mix(n_z.z, n_z.w, fade_xyz.x), fade_xyz.y);
}

void main() {
  vUv = uv;

  // Gürültü ve yüzey dalgalanması
  vec3 pos = position;
  float noise = cnoise(pos * 5.0 + (uTime/2.0));
  pos += normal * noise * 0.4;

  vPosition = pos; // Fragment shader için pozisyonu gönderiyoruz
  vNormal = normal; // Normal değerlerini aktarıyoruz

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

`;

const fragmentShader = `
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 lightDir = normalize(vec3(0.5, 0.0, 0.8)); // Işığın yönü
  float diff = max(dot(vNormal, lightDir), 0.0); // Lambertian aydınlatma
  vec3 baseColor = mix(vec3(0.3, 0.1, 0.6), vec3(0.8, 0.1, 0.9), vUv.y);

  vec3 color = baseColor * diff; // Işığa göre renklendirme
  gl_FragColor = vec4(color, 1.0);
}
`;




const SphereShader = () => {
  const materialRef = useRef();
  const meshRef = useRef();

  useFrame(({ clock }, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }

  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default SphereShader;