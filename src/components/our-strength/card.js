import "../../assets/css/card.css";
import Top from "../../assets/images/rec.svg";
import Bottom from "../../assets/images/rec1.svg";
import Ca1 from "../../assets/images/ca1.svg";
import Ca2 from "../../assets/images/ca2.svg";
import Ca3 from "../../assets/images/ca3.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Card() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="card-sec ">
        <h1 className="our" data-aos="fade-up"
     data-aos-duration="2000">OUR STRENGHTS</h1>
        <div className="row crd" data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img src={Top} alt="rec" className="rec"></img>
              <img src={Ca1} alt="card" className="ca1"></img>

              <p className="head mt-3">Markets</p>
              <p className="para1 text-center">
                Primary Focus on Electric Vehicles and Energy Storage Market
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 c1">
            <div className="card ">
              <img src={Top} alt="rec" className="rec"></img>
              <img src={Ca2} alt="card" className="ca1"></img>

              <p className="head mt-3">Technology</p>
              <p className="para1 text-center">
                NexiGO proprietary technologies increses productivity and
                efficiency in the entire value chain of Owing an Electric
                vechicle
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 c1">
            <div className="card ">
              <img src={Top} alt="rec" className="rec "></img>
              <img src={Ca3} alt="card" className="ca1"></img>

              <p className="head mt-3">Capabilities</p>
              <p className="para1 text-center">
                Customized Energy Solutions, Persuasive Research in Thermal
                Management, cell testing, packaging techniques, and user
                experience in our state of the art LAB{" "}
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
