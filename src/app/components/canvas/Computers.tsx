/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";


import CanvasLoader from "../Loader";

const Computers = ({ isMobile }: any) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 90, 10]}
        angle={0}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1}
        position={isMobile ? [0, -3, -2.2] : [0, -3.0, -1.5]}
        rotation={[0, -0.3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 2, 8], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      title="Rotate left and right."
      className='delay-0 h-full cursor-pointer'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}

          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;