import React, { forwardRef, useRef, useEffect } from "react";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/v1.glb");

  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  // Add slow rotation and floating effect
  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;

    if (ref.current) {
      // Slow rotation on the Y-axis
      ref.current.rotation.y += 0.004; // Adjust for slower or faster rotation

      // Floating effect on the Y-axis
      ref.current.position.y = Math.sin(elapsedTime * 1.5) * 0.1; // Adjust amplitude and speed
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
});

function V1({ modelRef }) {
  const localRef = useRef();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const canvasStyle = isExtraSmallScreen
    ? { width: "240px", height: "280px" }
    : isSmallScreen
    ? { width: "280px", height: "360px" }
    : { width: "380px", height: "480px" };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Canvas
        className="custom-canvas Canvas-vig"
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 10] }}
        style={canvasStyle}
      >
        <ambientLight intensity={1.5} />
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null} shadows={false}>
            <Model ref={modelRef || localRef} /> {/* Pass ref */}
          </Stage>
        </PresentationControls>
      </Canvas>
    </motion.div>
  );
}

export default V1;

