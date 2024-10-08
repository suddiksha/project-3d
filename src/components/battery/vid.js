import React, { forwardRef, useRef, useEffect, useState } from "react";
import { useGLTF, Stage} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const lerp = (start, end, t) => start + (end - start) * t;

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/vividbt1.glb");

  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });

  // Floating and rotation logic
  useFrame((state) => {
    if (ref.current) {
      const elapsedTime = state.clock.elapsedTime;
      
      // Floating effect: sinusoidal motion on the Y-axis
      ref.current.position.y = Math.sin(elapsedTime * 1.5) * 0.1;

      // Keep model upright by default
      ref.current.rotation.x = 0;

      // Smoothly interpolate rotation to left when the section is visible
      const targetRotationY = props.isActive ? -Math.PI / 6 : 0; // Target rotation
      ref.current.rotation.y = lerp(ref.current.rotation.y, targetRotationY, 0.05); // Lerp for smooth transition
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
});

function Vidbt({ modelRef }) {
  const localRef = useRef();
  const [isVisible, setIsVisible] = useState(false);  // State to track visibility

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const canvasStyle = isExtraSmallScreen
    ? { width: "240px", height: "310px" }
    : isSmallScreen
    ? { width: "280px", height: "360px" }
    : { width: "360px", height: "480px" };

  // Intersection observer to detect when Vigor section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // Rotate when visible
        } else {
          setIsVisible(false); // Stay straight when not visible
        }
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is visible
    );

    const section = document.getElementById("vivid-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ width: '100%', height: '100%' }} 
    >
      <Canvas
        className="custom-canvas Canvas-vig"
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 10] }}
        style={canvasStyle}
      >
        <ambientLight intensity={1.5} />
          <Stage environment={null} shadows={false}>
            <Model ref={modelRef || localRef} isActive={isVisible} /> {/* Pass visibility as prop */}
          </Stage>
      </Canvas>
    </motion.div>
  );
}

export default Vidbt;
