import "../../assets/css/vigor.css";
import { useMediaQuery } from "react-responsive";
import Bty from "../../assets/images/bty1.svg";
import Vig1 from "../../assets/images/vig.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Vigor() {
  const isVigor = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="vigor-sec">
        {isVigor ? (
          <div className="vigor-phone">
            <h1 className="vigor" data-aos="fade-up">VIGOR</h1>
            <h3 className="you pt-2" data-aos="fade-up" data-aos-duration="1000">
              YOU NEED <span className="vig">VIGOR</span> FOR ON-THE-GO-ENERGY
            </h3>
            <div className="row justify-content-center">
              <div className="col-11 col-sm-12 mt-1" data-aos="fade-up">
                <img src={Bty} alt="bty" className="bty-phone"></img>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <p className="vigor-para pt-2" data-aos="fade-right" data-aos-duration="1000">
                  The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
                  Vehicle. This HIGHLY EFFICIENT battery pack is best in class in
                  weight, performance, reliability, and safety. This rechargeable
                  battery pack is capable of FAST CHARGING(1 hour) without
                  sacrificing the life. Our Innovative and proprietary packing
                  methods set new standards in POWER and ENERGY delivery.
                </p>
                <ul className="vigor-points mt-3">
                  <li className="points"  data-aos="fade-right" data-aos-duration="1100">
                    Configurable and scalable to user needs
                    <p className="sub-point mb-0">Energy: 1.4kwh - 2.3kwh</p>
                    <p className="sub-point mb-0">Voltage: 46.8V - 57.6V nominal</p>
                  </li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1200">
                    Delivers 1.5x more power within the same class of weight and
                    capacity
                  </li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1300">
                    Industrial grade soft over-molding provides impact protection
                  </li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1400">
                    User Configurable Handle Design for multiple carrying and
                    lifting positions
                  </li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1500">IoT Enabled</li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1600">Warranty*: 3yrs / 65,000 kms</li>
                  <li className="points pt-2"  data-aos="fade-right" data-aos-duration="1700">
                    Perfect for everyday short-distance commuters
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center m-0 ">
            <div className="col-5 vig-img" >
              <img src={Vig1} alt="bt" className="vig1"></img>
            </div>
            <div className="col-1"></div>
            <div className="col-6 ">
              <h1 className="vigor " data-aos="fade-right">VIGOR</h1>
              <h3 className="you pt-2"  data-aos="fade-right">
                YOU NEED <span className="vig">VIGOR</span> FOR ON-THE-GO-ENERGY
              </h3>
              <p className="vigor-para pt-2" data-aos="fade-right"
     >
                The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
                Vehicle. This HIGHLY EFFICIENT battery pack is best in class in
                weight, performance, reliability, and safety. This rechargeable
                battery pack is capable of FAST CHARGING(1 hour) without
                sacrificing the life. Our Innovative and proprietary packing
                methods set new standards in POWER and ENERGY delivery.
              </p>
              <ul className="vigor-points mt-3 " 
    >
                <li className="points" data-aos="fade-right">
                  Configurable and scalable to user needs
                  <p className="sub-point mb-0">Energy: 1.4kwh - 2.3kwh</p>
                  <p className="sub-point mb-0">Voltage: 46.8V - 57.6V nominal</p>
                </li>
                <li className="points pt-2" data-aos="fade-right">
                  Delivers 1.5x more power within the same class of weight and
                  capacity
                </li>
                <li className="points pt-2" data-aos="fade-right">
                  Industrial grade soft over-molding provides impact protection
                </li>
                <li className="points pt-2" data-aos="fade-right">
                  User Configurable Handle Design for multiple carrying and
                  lifting positions
                </li>
                <li className="points pt-2" data-aos="fade-right">IoT Enabled</li>
                <li className="points pt-2" data-aos="fade-right">Warranty*: 3yrs / 65,000 kms</li>
                <li className="points pt-2" data-aos="fade-right">
                  Perfect for everyday short-distance commuters
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Vigor;
