import React, { forwardRef, useRef, useEffect } from "react";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import "../../assets/css/b1.css";
import { useMediaQuery } from "react-responsive";

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/vividbt.glb");

  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  // Rotate model
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.5 * delta; 
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
});

const modelVariants = {
  hidden: { x: "-100vw", opacity: 0 }, // Slide in from left
  visible: { x: 0, opacity: 1 },       // Fully visible
};
function B2({ modelRef }) {
  const localRef = useRef();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const canvasStyle = isExtraSmallScreen
    ? { width: "240px", height: "260px" } // screens below 700px
    : isSmallScreen
    ? { width: "260px", height: "390px" } // screens 768px or less
    : { width: "320px", height: "420px" }; // Default size

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={modelVariants}
    >
      <Canvas
        className="custom-canvas Canvas1"
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 10] }}
        style={canvasStyle}
      >
        <ambientLight intensity={1.5} />
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null} shadows={false}>
            <Model ref={modelRef || localRef} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </motion.div>
  );
}

export default B2;
