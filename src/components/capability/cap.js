import "../../assets/css/cap.css";
import Cap1 from "../../assets/images/cap1.svg";
import Cap2 from "../../assets/images/cap2.svg";
import { useMediaQuery } from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Custom1 from "../../assets/images/custom1.svg";
import Custom2 from "../../assets/images/custom2.svg";
import Custom3 from "../../assets/images/custom3.svg";
import Contact from "../contact/contact";
function Cap() {
  const isCap = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="capability-sec">
        {isCap ? (
          <div className="cap-phone">
            <div className="row justify-content-center">
              <div className="col">
                <h2
                  className="cap-head text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Innovation
                </h2>
                <img
                  src={Cap1}
                  alt="cap"
                  className="cap1 mt-5"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                ></img>
                <ul className="cap-para mt-5">
                  <li
                    className="cap-points mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    Patent Pending Thermal Management Techniques
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Efficiency improvement in power and energy delivery
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  >
                    {" "}
                    Research and Development to enable Ultra Fast charging, long
                    life and Safety
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1700"
                  >
                    {" "}
                    Innovation in IoT and data collection for continuous product
                    improvement
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    {" "}
                    Unique packaging methods to Increase safety and reliability
                  </li>
                </ul>
              </div>
            </div>

            <h1
              className="custom text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Custom Design
            </h1>
            <div className="row mt-5 justify-content-around">
              <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                <div
                  className="card custom-card"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src={Custom1} className="custom1 " alt="Custom1"></img>
                  <p className="custom-para text-center mt-3">
                    Our innovations are scalable and modular to fit into any
                    shape, size, and energy needs
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-4 col-sm-12 mt-5">
                <div
                  className="card custom-card"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <img src={Custom2} className="custom1 " alt="Custom2"></img>
                  <p className="custom-para1 text-center mt-3">
                    Modular and easily customizable Battery management System
                    Architecture
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-4 col-sm-12 mt-5">
                <div
                  className="card custom-card"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  <img src={Custom3} className="custom1 " alt="Custom3"></img>
                  <p className="custom-para2 text-center mt-3">
                    Proven Thermal management solutions for various cell formats
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center cap">
              <div className="col">
                <h2
                  className="cap-head text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  State Of The Art R&D Lab
                </h2>
                <img
                  src={Cap2}
                  alt="cap"
                  className="cap2 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                ></img>
                <ul className="cap-para mt-2">
                  <li
                    className="cap-points mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    Growing database of cell technologies, suppliers and
                    respective cell characterization data{" "}
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Innovation in Charging Algorithms based on cell
                    characterization
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  >
                    {" "}
                    Extensive life testing of cells and battery packs
                  </li>
                  <li
                    className="cap-points mt-1"
                    data-aos="fade-up"
                    data-aos-duration="1700"
                  >
                    {" "}
                    End user charging and load profile characterization on
                    battery packs at various operating conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="row justify-content-around" data-aos="fade-right">
              <div className="col-12 col-lg-5 col-md-5 col-sm-12">
                <img src={Cap1} alt="cap" className="cap1"></img>
              </div>
              <div className="col-1"></div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="card cap-card">
                  <h2 className="cap-head ms-3">Innovation</h2>
                  <ul className="cap-para mt-2">
                    <li className="cap-points mt-2">
                      Patent Pending Thermal Management Techniques
                    </li>
                    <li className="cap-points mt-1">
                      Efficiency improvement in power and energy delivery
                    </li>
                    <li className="cap-points mt-1">
                      {" "}
                      Research and Development to enable Ultra Fast charging,
                      long life and Safety
                    </li>
                    <li className="cap-points mt-1">
                      {" "}
                      Innovation in IoT and data collection for continuous
                      product improvement
                    </li>
                    <li className="cap-points mt-1">
                      {" "}
                      Unique packaging methods to Increase safety and
                      reliability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h1
              className="custom text-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Custom Design
            </h1>
            <div
              className="row mt-5 justify-content-around"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                <div className="card custom-card">
                  <img src={Custom1} className="custom1 " alt="Custom1"></img>
                  <p className="custom-para text-center mt-3">
                    Our innovations are scalable and modular to fit into any
                    shape, size, and energy needs
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                <div className="card custom-card">
                  <img src={Custom2} className="custom1 " alt="Custom2"></img>
                  <p className="custom-para1 text-center mt-3">
                    Modular and easily customizable Battery management System
                    Architecture
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                <div className="card custom-card">
                  <img src={Custom3} className="custom1 " alt="Custom3"></img>
                  <p className="custom-para2 text-center mt-3">
                    Proven Thermal management solutions for various cell formats
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row justify-content-around cap"
              data-aos="fade-left"
            >
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="card cap-card">
                  <h2 className="cap-head ms-3">State Of The Art R&D Lab</h2>
                  <ul className="cap-para mt-2">
                    <li className="cap-points mt-2">
                      Growing database of cell technologies, suppliers and
                      respective cell characterization data{" "}
                    </li>
                    <li className="cap-points mt-1">
                      Innovation in Charging Algorithms based on cell
                      characterization
                    </li>
                    <li className="cap-points mt-1">
                      {" "}
                      Extensive life testing of cells and battery packs
                    </li>
                    <li className="cap-points mt-1">
                      {" "}
                      End user charging and load profile characterization on
                      battery packs at various operating conditions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-1"></div>

              <div className="col-12 col-lg-5 col-md-5 col-sm-12 ">
                <img src={Cap2} alt="cap" className="cap2"></img>
              </div>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </>
  );
}

export default Cap;
