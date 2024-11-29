import React, { forwardRef, useRef, useEffect } from "react";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import "../../assets/css/b2.css";
import { useMediaQuery } from "react-responsive";

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/vividbt.glb");

  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  // Floating and slight turn to the right logic
  useFrame((state) => {
    if (ref.current) {
      const elapsedTime = state.clock.elapsedTime;

      // Floating effect: sinusoidal motion on the Y-axis with higher amplitude
      ref.current.position.y = Math.sin(elapsedTime * 1.5) * 0.1; // Adjusted amplitude and speed

      // Set the transition duration in seconds
      const transitionDuration = 3; // Time for the model to transition to upright
      const rightTurnDuration = 5; // Time for the model to complete the right turn
      const progress = Math.min(elapsedTime / transitionDuration, 1); // 0 to 1 over the upright transition
      const turnProgress = Math.min(elapsedTime / rightTurnDuration, 1); // Slow progress for Y rotation

      // Start with a perfect top-down view (rotation.x = 90 degrees)
      // Progressively rotate to upright (rotation.x = 0) over time
      ref.current.rotation.x = Math.PI / 2 * (1 - progress);

      // Apply a slow right turn over time (from 0 to -Math.PI / 8)
      ref.current.rotation.y = -Math.PI / 8 * turnProgress; // Progressively turn right
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
});

function B2({ modelRef, isActive }) {
  const localRef = useRef();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const canvasStyle = isExtraSmallScreen
    ? { width: "240px", height: "260px" } // screens below 700px
    : isSmallScreen
    ? { width: "280px", height: "320px" } // screens 768px or less
    : { width: "330px", height: "420px" }; // Default size

  const modelVariants = {
    hidden: { x: "-100vw", opacity: 0 }, 
    visible: { x: 0, opacity: 1 }, 
  };

  useEffect(() => {
    // Reset the animation when the slide becomes active
    if (isActive && localRef.current) {
      localRef.current.rotation.x = Math.PI / 2; // Reset to top view
      localRef.current.rotation.y = 0; // Reset the slight right turn
    }
  }, [isActive]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeOut" }}
      variants={modelVariants}
      style={{ width: '100%', height: '100%' }}  // Add explicit width/height
    >
      <Canvas
        className="custom-canvas Canvas1"
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 10] }}
        style={canvasStyle}  // Ensure canvas has defined size
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
