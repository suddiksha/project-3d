import "../../assets/css/about.css";
import Abt from "../../assets/images/about.svg";
import Vis from "../../assets/images/vision.svg";
import Mis from "../../assets/images/mission.svg";
import Corevalues from "../core-values/core";
import Core from "../../assets/images/core.svg";
import Core1 from "../../assets/images/core1.svg";
import Core2 from "../../assets/images/core2.svg";
import Core3 from "../../assets/images/core3.svg";
import Core4 from "../../assets/images/core4.svg";
import Core5 from "../../assets/images/core5.svg";
import { useMediaQuery } from "react-responsive";
import Contact from "../contact/contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  const isAbout = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="about-us">
        {isAbout ? (
          <>
            <h1 className="about text-center" data-aos="fade-up" ata-aos-duration="1000">About Us</h1>
            <div className="row justify-content-center about-row">
              <div className="col-12">
                <img src={Abt} className="about-img mt-5 " alt="energy" data-aos="fade-up" ata-aos-duration="1200"></img>
                <div className="about-para pt-0 pb-0 text-center mt-5" data-aos="fade-up" ata-aos-duration="1400">
                  NexiGO Energy pioneers in Research and development of Advanced
                  Energy solutions to EV and Energy Storage markets. We
                  specialize in Designing, Developing and Delivering highly
                  efficient battery packs through Innovative packing methods and
                  bringing cutting edge cell technologies to market. Our
                  technology sets new standards in performance, reliability and
                  safety.
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1 className="vision text-center" data-aos="fade-up" data-aos-duration="1000">Our Vision</h1>

                <img src={Vis} className="vis mt-5" data-aos="fade-up" data-aos-duration="1200"></img>

                <p className="vis-para mt-5" data-aos="fade-up" data-aos-duration="1400">
                  Our Vision is to increase Global adoption of sustainable
                  energy by Designing, Developing and Delivering cutting edge
                  technologies to Electric Vehicles and Energy storage markets.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <h1 className="mission text-center" data-aos="fade-up" data-aos-duration="1000">Our Mission</h1>

              <div className="col-12 text-center">
                <img src={Mis} className="mis mt-5" data-aos="fade-up" data-aos-duration="1200"></img>
                <p className="mis-para mt-5" data-aos="fade-up" data-aos-duration="1400">
                  Our Missions is to be best in the market of providing energy
                  solutions. We seek to develop the most technologically
                  advanced battery packs keeping Quality, Reliability,
                  affordability, and Value in mind. We Use technology as a Guide
                  to bring trust, reduce anxiety, provide education to end user
                  and contribute to global goal of switching to sustainable
                  energy.
                </p>
              </div>
            </div>

            <div className="core-values ">
              <h1 className="core text-center" data-aos="fade-up" data-aos-duration="1000">Core Values</h1>
              <div className="row justify-content-center mt-5">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1200">
                  <img src={Core} className="core-img"></img>
                </div>
                  <p className="core-para  mt-3" data-aos="fade-right" >
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <Corevalues
                    className="core1 mt-5"
                    img={Core1}
                    name="QUALITY"
                    para="Manufactured using the latest technology and stringent quality control, our battery products are designed to exceed in performance and reliability."
                    para1="Obtaining the best possible outcome in the least wasteful manner."
                  ></Corevalues>
                  <Corevalues
                    className="core2"
                    img={Core2}
                    name="RELIABILITY"
                    para="We uphold the values and principles of our organization in every action and decision."
                    para1="To do our job to the best of our ability."
                  ></Corevalues>

                  <Corevalues
                    className="core3"
                    img={Core3}
                    name="AFFORDABILITY"
                    para="An affordable product or services is one that is within most people’s budget
                then our product is affordable."
                    para1="We develop affordable product that can easy to carry.
                "
                  ></Corevalues>

                  <Corevalues
                    className="core4"
                    img={Core4}
                    name="INNOVATION"
                    para="We advance through creativity and efficient processes to implement new ideas."
                    para1="We encourage and development of new innovative products,technologies and ideas for development of new market."
                  ></Corevalues>
                  <Corevalues
                    className="core5"
                    img={Core5}
                    name="CUSTOMER DELIGHT"
                    para="Customer satisfaction is at the center of what we do everyday.
                "
                    para1="We are a trusted partner of our customer."
                    para2="We build and maintain effective and proactive relationship with customers.
                "
                  ></Corevalues>
                </div>
              </div>
           
          </>
        ) : (
          <>
            <div className="row justify-content-center" data-aos="fade-left"
    
     data-aos-easing="ease-in-sine">
              <div className="col-5 p-0">
                <h1 className="about ">ABOUT US</h1>

                <div className="about-para mt-4 ">
                  NexiGO Energy pioneers in Research and development of Advanced
                  Energy solutions to EV and Energy Storage markets. We
                  specialize in Designing, Developing and Delivering highly
                  efficient battery packs through Innovative packing methods and
                  bringing cutting edge cell technologies to market. Our
                  technology sets new standards in performance, reliability and
                  safety.
                </div>
              </div>
              <div className="col-1 p-0"></div>
              <div className="col-6">
                <img
                  src={Abt}
                  className="about-img text-center"
                  alt="energy"
                ></img>
              </div>
            </div>

            <div className="mivi">
              <div className="row justify-content-center mt-5" data-aos="fade-right">
                <div className="col">
                  <img src={Vis} className="vis"></img>
                </div>
                <div className="col ">
                  <h1 className="vision ">Our Vision</h1>
                  <p className="vis-para mt-4">
                    Our Vision is to increase Global adoption of sustainable
                    energy by Designing, Developing and Delivering cutting edge
                    technologies to Electric Vehicles and Energy storage
                    markets.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center mt-5 pt-3" data-aos="fade-left" data-aos-delay="300">
                <div className="col">
                  <h1 className="mission ">Our Mission</h1>
                  <p className="mis-para mt-4">
                    Our Missions is to be best in the market of providing energy
                    solutions. We seek to develop the most technologically
                    advanced battery packs keeping Quality, Reliability,
                    affordability, and Value in mind. We Use technology as a
                    Guide to bring trust, reduce anxiety, provide education to
                    end user and contribute to global goal of switching to
                    sustainable energy.
                  </p>
                </div>
                <div className="col  text-end pt-2">
                  <img src={Mis} className="mis"></img>
                </div>
              </div>
            </div>

            <div className="core-values ">
              <h1 className="core text-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Core Values</h1>
              <div className="row justify-content-center mt-5">
                <div className="col-6 p-0">
                  <img src={Core} className="core-img"></img>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-6 p-0">
                  <p className="core-para  mt-3" data-aos="fade-right">
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <Corevalues
                    className="core1"
                    img={Core1}
                    name="QUALITY"
                    para="Manufactured using the latest technology and stringent quality control, our battery products are designed to exceed in performance and reliability."
                    para1="Obtaining the best possible outcome in the least wasteful manner."
                  ></Corevalues>
                  <Corevalues
                    className="core2"
                    img={Core2}
                    name="RELIABILITY"
                    para="We uphold the values and principles of our organization in every action and decision."
                    para1="To do our job to the best of our ability."
                  ></Corevalues>

                  <Corevalues
                    className="core3"
                    img={Core3}
                    name="AFFORDABILITY"
                    para="An affordable product or services is one that is within most people’s budget
                then our product is affordable."
                    para1="We develop affordable product that can easy to carry.
                "
                  ></Corevalues>

                  <Corevalues
                    className="core4"
                    img={Core4}
                    name="INNOVATION"
                    para="We advance through creativity and efficient processes to implement new ideas."
                    para1="We encourage and development of new innovative products,technologies and ideas for development of new market."
                  ></Corevalues>
                  <Corevalues
                    className="core5"
                    img={Core5}
                    name="CUSTOMER DELIGHT"
                    para="Customer satisfaction is at the center of what we do everyday.
                "
                    para1="We are a trusted partner of our customer."
                    para2="We build and maintain effective and proactive relationship with customers.
                "
                  ></Corevalues>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Contact/>
    </>
  );
}

export default About;
