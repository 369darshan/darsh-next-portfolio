"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from 'three';

const Scene = () => {
  const blobRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom shader for gradient effect
  const shaderData = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#ff69b4") },
        uColor2: { value: new THREE.Color("#4169e1") },
        uColor3: { value: new THREE.Color("#9370db") },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseIntensity: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDistort;
        
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uMouseIntensity;
        
        float noise(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float n = i.x + i.y * 157.0 + 113.0 * i.z;
          return mix(
            mix(
              mix(sin(n), sin(n + 1.0), f.x),
              mix(sin(n + 157.0), sin(n + 158.0), f.x),
              f.y),
            mix(
              mix(sin(n + 113.0), sin(n + 114.0), f.x),
              mix(sin(n + 270.0), sin(n + 271.0), f.x),
              f.y),
            f.z);
        }
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Base wave patterns
          float noiseFreq = 1.5;
          float noiseAmp = 0.4;
          vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
          pos += normal * noise(noisePos) * noiseAmp;
          
          // Mouse interaction waves
          float dist = length(uv - vec2(uMouse.x, uMouse.y));
          float mouseWave = sin(dist * 10.0 - uTime * 2.0) * exp(-dist * 3.0) * uMouseIntensity;
          pos += normal * mouseWave * 0.5;
          
          // Additional waves
          pos.x += sin(pos.y * 4.0 + uTime) * 0.1;
          pos.y += sin(pos.z * 4.0 + uTime) * 0.1;
          pos.z += sin(pos.x * 4.0 + uTime) * 0.1;
          
          vDistort = noise(noisePos) + mouseWave;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vDistort;
        
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uTime;
        uniform vec2 uMouse;
        
        void main() {
          float mixStrength = (sin(vUv.x * 10.0 + uTime) + 1.0) / 2.0;
          vec3 color1 = mix(uColor1, uColor2, mixStrength);
          vec3 color2 = mix(uColor2, uColor3, vDistort);
          vec3 finalColor = mix(color1, color2, vUv.y);
          
          // Add some brightness variation based on distortion and mouse proximity
          float mouseDist = length(vUv - uMouse);
          float mouseGlow = exp(-mouseDist * 4.0) * 0.2;
          finalColor += vec3(vDistort * 0.1 + mouseGlow);
          
          gl_FragColor = vec4(finalColor, 0.7);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime() * 0.5;
      materialRef.current.uniforms.uMouse.value.set(mousePosition.x, mousePosition.y);
      
      // Calculate mouse intensity based on movement
      const targetIntensity = (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.5;
      materialRef.current.uniforms.uMouseIntensity.value += 
        (targetIntensity - materialRef.current.uniforms.uMouseIntensity.value) * 0.1;
    }
    if (blobRef.current) {
      blobRef.current.rotation.y += 0.001;
      blobRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff69b4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4169e1" />

      <motion3d.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        <mesh ref={blobRef}>
          <sphereGeometry args={[2.5, 164, 164]} />
          <shaderMaterial
            ref={materialRef}
            uniforms={shaderData.uniforms}
            vertexShader={shaderData.vertexShader}
            fragmentShader={shaderData.fragmentShader}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </motion3d.group>
    </>
  );
};

const Contact3D = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <Scene />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Contact3D;