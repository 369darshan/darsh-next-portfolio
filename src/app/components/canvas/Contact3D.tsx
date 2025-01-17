"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const Contact3D = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 1]} intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#4fc3dc" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <motion.group
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#4fc3dc"
              attach="material"
              distort={0.5}
              speed={1}
              roughness={0.9}
              metalness={0.3}
              transparent
              opacity={0.4}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={0.5}
            />
          </Sphere>
        </motion.group>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.7}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Contact3D;
