import "../../assets/css/vivid.css";
import { useMediaQuery } from "react-responsive";
import Vid1 from "../../assets/images/vid.svg";
import Bty2 from "../../assets/images/bty2.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Vivid() {
  const isVivid = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="vivid-sec">
        {isVivid ? (
          <div className="vivid-phone">
            <h1 className="vivid mt-5" data-aos="fade-up">VIVID</h1>
            <h3 className="ultra pt-2" data-aos="fade-up" ata-aos-duration="1000">
              <span className="vid">ULTRA FAST</span> CHARGING & LIFE
            </h3>
            <div className="row justify-content-center">
              <div className="col-11 col-sm-12 mt-1" data-aos="fade-up">
                <img src={Bty2} alt="bty" className="bty-phone"></img>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <p className="vivid-para pt-2" data-aos="fade-right" data-aos-duration="1000">
                  The VIVID is best in the WORLD battery pack for light electric
                  vehicles. VIVID brings the best in both world of ENERGY and
                  POWER. Our Innovative and proprietary Thermal Management
                  techniques takes the heat away from cells for performance,
                  reliability and safety.
                </p>
                <ul className="vivid-points mt-3">
                  <li className="points1" data-aos="fade-right" data-aos-duration="1100">
                    MODULAR & SCALABLE Technology
                    <p className="sub-point1 mb-0">Energy : 1.8kwh - 4.1kwh</p>
                    <p className="sub-point1 mb-0">Voltage : 50.4V - 57.6V</p>
                  </li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1200">Recharge 3.0x FASTER</li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1300">
                    3.0x more Durable and impact resistance
                  </li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1400">IOT Enabled</li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1500">
                    Warranty* : 5yrs / 1,25,000 kms
                  </li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1600">
                    Perfect for Heavy Use , long daily commutes, and abusive
                    environments
                  </li>
                  <li className="points1 pt-2"  data-aos="fade-right" data-aos-duration="1700">
                    Relatively ZERO down time for Last Mile logistics and ride
                    sharing companies
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
        ) : (
          <div className="row justify-content-around m-0">
            <div className="col-6 mt-5">
              <h1 className="vivid mt-5" data-aos="fade-left">VIVID</h1>
              <h3 className="ultra pt-2" data-aos="fade-left">
                <span className="vid" >ULTRA FAST</span> CHARGING & LIFE
              </h3>
              <p className="vivid-para pt-2" data-aos="fade-left">
                The VIVID is best in the WORLD battery pack for light electric
                vehicles. VIVID brings the best in both world of ENERGY and
                POWER. Our Innovative and proprietary Thermal Management
                techniques takes the heat away from cells for performance,
                reliability and safety.
              </p>
              <ul className="vivid-points mt-3">
                <li className="points1" data-aos="fade-left">
                  MODULAR & SCALABLE Technology
                  <p className="sub-point1 mb-0" data-aos="fade-left">Energy : 1.8kwh - 4.1kwh</p>
                  <p className="sub-point1 mb-0" data-aos="fade-left">Voltage : 50.4V - 57.6V</p>
                </li>
                <li className="points1 pt-2" data-aos="fade-left">Recharge 3.0x FASTER</li>
                <li className="points1 pt-2" data-aos="fade-left">
                  3.0x more Durable and impact resistance
                </li>
                <li className="points1 pt-2" data-aos="fade-left">IOT Enabled</li>
                <li className="points1 pt-2" data-aos="fade-left">
                  Warranty* : 5yrs / 1,25,000 kms
                </li>
                <li className="points1 pt-2" data-aos="fade-left">
                  Perfect for Heavy Use , long daily commutes, and abusive
                  environments
                </li>
                <li className="points1 pt-2" data-aos="fade-left">
                  Relatively ZERO down time for Last Mile logistics and ride
                  sharing companies
                </li>
              </ul>
            </div>
            <div className="col-1"></div>
            <div className="col-5 vid-img">
              <img src={Vid1} alt="vid" className="vid1"></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Vivid;
