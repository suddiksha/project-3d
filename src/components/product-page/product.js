import { useMediaQuery } from "react-responsive";

import Carousel from "react-bootstrap/Carousel";
import "../../assets/css/product.css";
import Bene1 from "../../assets/images/bene1.svg";
import Bene2 from "../../assets/images/bene2.svg";
import Bene3 from "../../assets/images/bene3.svg";
import Bene4 from "../../assets/images/bene4.svg";
import Bene5 from "../../assets/images/bene5.svg";
import Bene6 from "../../assets/images/bene6.svg";
import Bene7 from "../../assets/images/bene7.svg";
import Bene8 from "../../assets/images/bene8.svg";
import Bene9 from "../../assets/images/bene9.svg";
import Bene10 from "../../assets/images/bene10.svg";
import Bene11 from "../../assets/images/bene11.svg";
import Bene12 from "../../assets/images/bene12.svg";
import Bene13 from "../../assets/images/bene13.svg";
import Bene14 from "../../assets/images/bene14.svg";
import Bene15 from "../../assets/images/bene15.svg";
import Bene16 from "../../assets/images/bene16.svg";
import Contact from "../contact/contact";
import Vigor from "../../assets/images/b1.svg";
import Vivid from "../../assets/images/b2.svg";
import { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
 const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};


function Product() {
  const isProduct = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="product-page">
        {isProduct ? (
          <div className="product-phone">
            <div className="vig-phone">
              <div className="row justify-content-center">
                <div className="col-12">
                <h1 className="vigor1 text-center" data-aos="fade-right"  data-aos-duration="1000">VIGOR</h1>
                <h2 className="best text-center mt-2" data-aos="fade-right"  data-aos-duration="1200">BEST IN CLASS PERFORMANCE</h2>
                <h3 className="you1 pt-2  text-center  " data-aos="fade-right"  data-aos-duration="1400">
                    YOU NEED <span className="vig">VIGOR</span> FOR
                    ON-THE-GO-ENERGY
                  </h3>
                <div className="card card-vigor mt-5"  data-aos="zoom-out-right">
                  <img src={Vigor} className="bt " alt="Battery" />
                </div>

                
                  <p className="vigor-para1 pt-5" data-aos="fade-right"  data-aos-duration="1200">
                    The VIGOR is a breakthrough in ENERGY needs for a
                    Light-Electric Vehicle. This HIGHLY EFFICIENT battery pack
                    is best in class in weight, performance, reliability, and
                    safety. This rechargeable battery pack is capable of FAST
                    CHARGING(1 hour) without sacrificing the life. Our
                    Innovative and proprietary packing methods set new standards
                    in POWER and ENERGY delivery.
                  </p>
                  <ul className="vigor-points1 mt-3">
                    <li className="points1" data-aos="fade-right"  data-aos-duration="1000">
                      Configurable and scalable to user needs
                      <p className="sub-point1 mb-0">Energy: 1.4kwh - 2.3kwh</p>
                      <p className="sub-point1 mb-0">
                        Voltage: 46.8V - 57.6V nominal
                      </p>
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1100">
                      Delivers 1.5x more power within the same class of weight
                      and capacity
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1200">
                      Industrial grade soft over-molding provides impact
                      protection
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1300">
                      User Configurable Handle Design for multiple carrying and
                      lifting positions
                    </li>
                    <li className="points1 pt-2"data-aos="fade-right"  data-aos-duration="1400">IoT Enabled</li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1500">
                      Warranty*: 3yrs / 65,000 kms
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1600">
                      Perfect for everyday short-distance commuters
                    </li>
                  </ul>
                  <div className="benefit mt-5" data-aos="fade-right"  data-aos-duration="1700">
                    <p className="benefits">BENEFITS</p>
                    <Carousel
                      controls={false}
                      indicators={true}
                      interval={2500}
                    >
                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene1}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mb-0 mt-1">2.3KWH</p>
                              <p className="bene-name  mb-0">Capacity</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene2}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">1.5Hr</p>
                              <p className="bene-name  mb-0">*Fast Charging</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene3}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">1300</p>
                              <p className="bene-name  mb-0">Life Cycle</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene4}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">
                                Cell Cooling
                              </p>
                              <p className="bene-name  mb-0">
                                Unique Thermal Management
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene5}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head  mt-1 mb-0">4C</p>
                              <p className="bene-name  mb-0">Cont Power</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene6}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">0C - 40C</p>
                              <p className="bene-name  mb-0">Consistent</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene7}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">
                                Over Moulding
                              </p>
                              <p className="bene-name  mb-0">Ruggedness</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene8}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">
                                Shoulder,Handle
                              </p>
                              <p className="bene-name  mb-0">
                                Adjustable/Replaceable Strap
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  </div>
              </div>
            </div>

            <div className="vid-phone">
              <div className="row justify-content-center">
                <div className="col-12 p-0">
                <h1 className="vigor1 text-center" data-aos="fade-right"  data-aos-duration="1000">VIVID</h1>
                  <h2 className="best mt-2 text-center" data-aos="fade-right"  data-aos-duration="1200">ULTRA FAST CHARGING & LIFE</h2>
                  <h3 className="you1 pt-2 text-center" data-aos="fade-right"  data-aos-duration="1400">
                    YOU NEED<span className="vig">VIVID</span>FOR PRODUCTIVITY &
                    NO DOWN TIME
                  </h3>
                  <div className="card card-vigor mt-5" data-aos="zoom-out-right">
                    <img src={Vivid} className="bt1"></img>
                  </div>
                  <p className="vigor-para1 pt-5" data-aos="fade-right"  data-aos-duration="1200">
                    The VIVID is best in the WORLD battery pack for light
                    electric vehicles. VIVID brings the best in both world of
                    ENERGY and POWER. Our Innovative and proprietary Thermal
                    Management techniques takes the heat away from cells for
                    performance, reliability and safety.
                  </p>
                  <ul className="vigor-points1 mt-3">
                    <li className="points1" data-aos="fade-right"  data-aos-duration="1000">
                      MODULAR & SCALABLE Technology{" "}
                      <p className="sub-point1 mb-0">
                        Energy : 1.8kwh - 4.1kwh
                      </p>
                      <p className="sub-point1 mb-0">Voltage : 50.4V - 57.6V</p>
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1100">Recharge 3.0x FASTER</li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1200">
                      3.0x more Durable and impact resistance
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1300">IOT Enabled</li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1400">
                      Warranty* : 5yrs / 1,25,000 kms
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1500">
                      Perfect for Heavy Use , long daily commutes, and abusive
                      environments
                    </li>
                    <li className="points1 pt-2" data-aos="fade-right"  data-aos-duration="1600">
                      Relatively ZERO down time for Last Mile logistics and ride
                      sharing companies{" "}
                    </li>
                  </ul>
                  <div className="benefit mt-5" data-aos="fade-right"  data-aos-duration="1700">
                    <p className="benefits">BENEFITS</p>
                    <Carousel
                      controls={false}
                      indicators={true}
                      interval={2500}
                    >
                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene9}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">1.8KWH</p>
                              <p className="bene-name  mb-0">Capacity</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene10}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">20Min</p>
                              <p className="bene-name  mb-0">*Fast Charging</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene11}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">3000</p>
                              <p className="bene-name  mb-0">Life Cycle</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene12}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">Cell Cooling</p>
                              <p className="bene-name  mb-0">Thermal Management</p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene13}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">4C</p>
                              <p className="bene-name  mb-0">*Peak Power</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene14}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">0C - 40C</p>
                              <p className="bene-name  mb-0">Consistent</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene15}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">5 Years</p>
                              <p className="bene-name  mb-0">Warranty</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene16}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">
                                Last Mile Delivery
                              </p>
                              <p className="bene-name  mb-0">Application </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="product-vigor">
              <div className="row justify-content-center">
                <div className="col-5 p-0">
                  <div className="card card-vigor"  data-aos="zoom-out-right">
                    <img src={Vigor} className="bt" alt="Battery" />
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                  <h1 className="vigor1" data-aos="fade-left"  data-aos-duration="1000">VIGOR</h1>
                  <h2 className="best"data-aos="fade-left" data-aos-duration="1100">BEST IN CLASS PERFORMANCE</h2>
                  <h3 className="you1 pt-2" data-aos="fade-left" data-aos-duration="1200">
                    YOU NEED <span className="vig">VIGOR</span> FOR
                    ON-THE-GO-ENERGY
                  </h3>
                  <p className="vigor-para1 pt-2" data-aos="fade-left" data-aos-duration="1400">
                    The VIGOR is a breakthrough in ENERGY needs for a
                    Light-Electric Vehicle. This HIGHLY EFFICIENT battery pack
                    is best in class in weight, performance, reliability, and
                    safety. This rechargeable battery pack is capable of FAST
                    CHARGING(1 hour) without sacrificing the life. Our
                    Innovative and proprietary packing methods set new standards
                    in POWER and ENERGY delivery.
                  </p>
                  <ul className="vigor-points1 mt-3" data-aos="fade-left" data-aos-duration="1500"> 
                    <li className="points1" >
                      Configurable and scalable to user needs
                      <p className="sub-point1 mb-0" >Energy: 1.4kwh - 2.3kwh</p>
                      <p className="sub-point1 mb-0">
                        Voltage: 46.8V - 57.6V nominal
                      </p>
                    </li>
                    <li className="points1 pt-2" data-aos="fade-left" >
                      Delivers 1.5x more power within the same class of weight
                      and capacity
                    </li>
                    <li className="points1 pt-2"  >
                      Industrial grade soft over-molding provides impact
                      protection
                    </li>
                    <li className="points1 pt-2" >
                      User Configurable Handle Design for multiple carrying and
                      lifting positions
                    </li>
                    <li className="points1 pt-2" >IoT Enabled</li>
                    <li className="points1 pt-2" >
                      Warranty*: 3yrs / 65,000 kms
                    </li>
                    <li className="points1 pt-2" >
                      Perfect for everyday short-distance commuters
                    </li>
                  </ul>

                  {/* Benefit section with carousel */}
                  <div className="benefit mt-5" data-aos="fade-left" data-aos-duration="1700">
                    <p className="benefits">BENEFITS</p>
                    <Carousel
                      controls={false}
                      indicators={true}
                      interval={2500}
                    >
                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene1}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mb-0 mt-1">2.3KWH</p>
                              <p className="bene-name">Capacity</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene2}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">1.5Hr</p>
                              <p className="bene-name">*Fast Charging</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene3}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">1300</p>
                              <p className="bene-name">Life Cycle</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene4}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head mt-1 mb-0">
                                Cell Cooling
                              </p>
                              <p className="bene-name">
                                Unique Thermal Management
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene5}
                                alt="icon"
                                className="bene1 mt-1"
                              ></img>
                              <p className="bene-head  mt-1 mb-0">4C</p>
                              <p className="bene-name">Cont Power</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene6}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">0C - 40C</p>
                              <p className="bene-name">Consistent</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene7}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">
                                Over Moulding
                              </p>
                              <p className="bene-name">Ruggedness</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene8}
                                alt="icon"
                                className="bene1  mt-1"
                              ></img>
                              <p className="bene-head mb-0  mt-1">
                                Shoulder,Handle
                              </p>
                              <p className="bene-name">
                                Adjustable/Replaceable Strap
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-vivid">
              <div className="row justify-content-center">
                <div className="col-6">
                  <h1 className="vigor1"  data-aos="fade-right"  data-aos-duration="1000">VIVID</h1>
                  <h2 className="best" data-aos="fade-right"  data-aos-duration="1100">ULTRA FAST CHARGING & LIFE</h2>
                  <h3 className="you1 pt-2" data-aos="fade-right"  data-aos-duration="1200">
                    YOU NEED<span className="vig">VIVID</span>FOR PRODUCTIVITY &
                    NO DOWN TIME
                  </h3>
                  <p className="vigor-para1 pt-2" data-aos="fade-right"  data-aos-duration="1400">
                    The VIVID is best in the WORLD battery pack for light
                    electric vehicles. VIVID brings the best in both world of
                    ENERGY and POWER. Our Innovative and proprietary Thermal
                    Management techniques takes the heat away from cells for
                    performance, reliability and safety.
                  </p>
                  <ul className="vigor-points1 mt-3"data-aos="fade-right"  data-aos-duration="1500">
                    <li className="points1" >
                      MODULAR & SCALABLE Technology{" "}
                      <p className="sub-point1 mb-0">
                        Energy : 1.8kwh - 4.1kwh
                      </p>
                      <p className="sub-point1 mb-0">Voltage : 50.4V - 57.6V</p>
                    </li>
                    <li className="points1 pt-2">Recharge 3.0x FASTER</li>
                    <li className="points1 pt-2">
                      3.0x more Durable and impact resistance
                    </li>
                    <li className="points1 pt-2">IOT Enabled</li>
                    <li className="points1 pt-2">
                      Warranty* : 5yrs / 1,25,000 kms
                    </li>
                    <li className="points1 pt-2">
                      Perfect for Heavy Use , long daily commutes, and abusive
                      environments
                    </li>
                    <li className="points1 pt-2">
                      Relatively ZERO down time for Last Mile logistics and ride
                      sharing companies{" "}
                    </li>
                  </ul>

                  <div className="benefit mt-5" data-aos="fade-right"  data-aos-duration="1700">
                    <p className="benefits">BENEFITS</p>
                    <Carousel
                      controls={false}
                      indicators={true}
                      interval={2500}
                    >
                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene9}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">1.8KWH</p>
                              <p className="bene-name">Capacity</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene10}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">20Min</p>
                              <p className="bene-name">*Fast Charging</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene11}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">3000</p>
                              <p className="bene-name">Life Cycle</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene12}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">Cell Cooling</p>
                              <p className="bene-name">Thermal Management</p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="row justify-content-center mt-3">
                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene13}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">4C</p>
                              <p className="bene-name">*Peak Power</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene14}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">0C - 40C</p>
                              <p className="bene-name">Consistent</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene15}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">5 Years</p>
                              <p className="bene-name">Warranty</p>
                            </div>
                          </div>

                          <div className="col-3">
                            <div className="text-center">
                              <img
                                src={Bene16}
                                alt="icon"
                                className="bene1"
                              ></img>
                              <p className="bene-head mb-0">
                                Last Mile Delivery
                              </p>
                              <p className="bene-name">Application </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>

                <div className="col-1"></div>
                <div className="col-5">
                  <div className="card card-vigor" data-aos="zoom-out-right">
                    <img src={Vivid} className="bt1"></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Contact />
    </>
  );
}

export default Product;
