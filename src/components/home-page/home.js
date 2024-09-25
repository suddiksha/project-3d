import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import Button from "@mui/material/Button";
import B1 from "../battery/b1";
import B2 from "../battery/b2";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const isHome = useMediaQuery({ query: "(max-width: 768px)" });
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide
  const [showText, setShowText] = useState(false);
  const [modelAnimate, setModelAnimate] = useState(false); // New state to track model animations

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
      setModelAnimate(true); // Trigger model animation
    }, 500); // Delay text and model reveal
    return () => {
      clearTimeout(timer);
      setModelAnimate(false); // Reset model animation when slide changes
    };
  }, [activeSlide]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const modelVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleSlideChange = (selectedIndex) => {
    setActiveSlide(selectedIndex);
    setShowText(false); // Reset text animation when the slide changes
    setModelAnimate(false); // Reset model animation when the slide changes
  };

  return (
    <div className="home">
      {isHome ? (
        <div className="home-phone">
          <div className="landing-page">
          <Carousel
            activeIndex={activeSlide}
            onSelect={handleSlideChange}
            controls={false}
            interval={2500}
            indicators={false}
          >
               <Carousel.Item>
            <div className="row justify-content-center ">
              <div className="col-12 p-0">
                <motion.h2
                  className="emp mt-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  BEST IN CLASS PERFORMANCE
                </motion.h2>
                <div className="row m-0">
                  <div className="col-12 p-0">
                    <div className="three">
                      <B1 />
                    </div>
                  </div>
                </div>
                <motion.h3
                  className="nex text-center mt-2"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Lithium-ion Battery
                </motion.h3>
                <motion.h2
                  className="para pt-2 ps-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  The VIGOR is a breakthrough in ENERGY needs for a
                  Light-Electric Vechicle.
                </motion.h2>
                <motion.div
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <Button variant="contained" className="learn-more1">
                    LEARN MORE
                  </Button>
                </motion.div>
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row justify-content-center ">
              <div className="col-12 p-0">
                <motion.h2
                  className="emp mt-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                 ULTRA FAST CHARGING
                </motion.h2>
                <div className="row m-0">
                  <div className="col-12 p-0">
                    <div className="three">
                      <B2 />
                    </div>
                  </div>
                </div>
                <motion.h3
                  className="nex text-center mt-2"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 1 }}
                >
 Highly Efficient & Safety                </motion.h3>
                <motion.h2
                  className="para pt-2 ps-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  The VIVID is best in the WORLD battery pack for light
                  electric vehicles.
                </motion.h2>
                <motion.div
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <Button variant="contained" className="learn-more1">
                    LEARN MORE
                  </Button>
                </motion.div>
              </div>
            </div>
            </Carousel.Item>
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="landing-page">
          <Carousel
            activeIndex={activeSlide}
            onSelect={handleSlideChange}
            controls={false}
            interval={2500}
            indicators={false}
          >
            {/* First Slide */}
            <Carousel.Item>
              <div className="row justify-content-center m-0">
                <motion.div
                  className="col-6 content p-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1 className="emp">BEST IN CLASS PERFORMANCE</h1>
                  <motion.h3
                    className="nex pt-2"
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Lithium-ion Battery
                  </motion.h3>
                  <motion.h2
                    className="para pt-2 ps-0"
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    The VIGOR is a breakthrough in ENERGY needs for a
                    Light-Electric Vehicle.
                  </motion.h2>
                  <motion.div
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <Button variant="contained" className="learn-more">
                      LEARN MORE
                    </Button>
                  </motion.div>
                </motion.div>
                <div className="col-1"></div>
                <motion.div
                  className="col-5 b1 p-0"
                  initial="hidden"
                  animate={modelAnimate ? "visible" : "hidden"}
                  variants={modelVariants}
                  transition={{ duration: 0.5 }}
                >
                  <B1 />
                </motion.div>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div className="row justify-content-center m-0">
                <motion.div
                  className="col-6 content p-0"
                  initial="hidden"
                  animate={showText ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="emp">ULTRA FAST CHARGING</h1>
                  <motion.h3
                    className="nex pt-2"
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Highly Efficient & Safety{" "}
                  </motion.h3>
                  <motion.h2
                    className="para pt-2 ps-0"
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    The VIVID is best in the WORLD battery pack for light
                    electric vehicles.
                  </motion.h2>
                  <motion.div
                    initial="hidden"
                    animate={showText ? "visible" : "hidden"}
                    variants={textVariants}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Button variant="contained" className="learn-more">
                      LEARN MORE
                    </Button>
                  </motion.div>
                </motion.div>
                <div className="col-1"></div>
                <motion.div
                  className="col-5 b1 p-0"
                  initial="hidden"
                  animate={modelAnimate ? "visible" : "hidden"}
                  variants={modelVariants}
                  transition={{ duration: 0.5 }}
                >
                  <B2 />
                </motion.div>
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Custom Dots */}
          <div className="custom-dots">
            {[0, 1].map((index) => (
              <span
                key={index}
                className={`dot ${index === activeSlide ? "active" : ""}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
