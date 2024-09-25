import "../../assets/css/market.css";
import Mark1 from "../../assets/images/mark1.svg";
import Mark2 from "../../assets/images/mark2.svg";
import Mark3 from "../../assets/images/mark3.svg";
import Mark4 from "../../assets/images/mark4.svg";
import Mark5 from "../../assets/images/mark5.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Contact from "../contact/contact";
import { useEffect } from "react";

function Market() {
  const isMarket = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="market-page">
        {isMarket ? (
          <div className="market-phone">
            <div className="row justify-content-center">
              <div className="col-12 mb-5">
                <h1 className="mark-head" data-aos="fade-up"
     data-aos-duration="1000">LIGHT ELECTRIC VEHICLES</h1>
                <img src={Mark4} alt="mark" className="mark4 mt-4" data-aos="fade-up"
     data-aos-duration="1200"></img>
                <p className="mark-para mt-4" data-aos="fade-up"
     data-aos-duration="1400">
                  Light Electric vehicles are the primary mode of transportation
                  in densely populated areas across all continents. Globally,
                  Over 100 million 2-wheelers and 3-wheelers are on streets
                  every day covering over 300 million kilometers each day which
                  is equivalent to a round trip from Earth to Sun. Reducing
                  carbon emissions from these vehicles is a challenge NexiGO
                  energy has taken up. NexiGO’s technology is the key
                  contributor to achieving global electrification faster. Our
                  Innovative designs bring reliability, faster charge times, and
                  safety to the energy source for the vehicles.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 m1">
                <h1 className="mark-head " data-aos="fade-up"
     data-aos-duration="1000">INDUSTRIAL VEHICLES</h1>
                <img src={Mark2} alt="mark" className="mark2 mt-4" data-aos="fade-up"
     data-aos-duration="1200"></img>
                <p className="mark-para mt-4" data-aos="fade-up"
     data-aos-duration="1400">
                  Industrial vehicles serve a crucial role in increasing
                  efficiency of any manufacturing and logistics plants. In a
                  Large manufacturing facilities, each forklifts and tow motors
                  travel several tens of miles a day. The energy source to these
                  vehicles need to be reliable, safe, and long lasting. ZERO
                  DOWNTIME is a key requirement for these vehicles as they can
                  disrupt the manufacturing and logistics flow in a large
                  facility which downstream to loss of money. NEXIGO’s developed
                  an Ultra-Fast charging, high life, and safe battery packs to
                  significantly reduce the down time.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 mt-5">
                <h1 className="mark-head " data-aos="fade-up"
     data-aos-duration="1000">ENERGY STORAGE</h1>
                <img src={Mark5} alt="mark" className="mark5 mt-4" data-aos="fade-up"
     data-aos-duration="1200"></img>
                <p className="mark-para mt-4" data-aos="fade-up"
     data-aos-duration="1400">
                  Efficiently storing energy from renewable sources is a key
                  step in achieving NET ZERO carbon footprint. The growing
                  dependency on the grid for Electric vehicle charging and
                  modern industrialization is making it more susceptible for
                  breaking and unreliable. Grid stabilization and local energy
                  backup is the need of the hour, as it eliminated the need for
                  upgrading the entire infrastructure. A reliable, long lasting,
                  flexible and modular energy source is the dominant factor in
                  achieving this Goal. NexiGO’s has developed a battery pack
                  solution that specifically meet the needs of energy storage
                  market that is 10 x Safe, 10 x long life and maintenance free.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row justify-content-around">
              <div className="col-5"  data-aos="fade-down"
     data-aos-duration="2000">
                <img src={Mark1} alt="Mark" className="mark1"></img>
              </div>
              <div className="col-1 p-0"></div>
              <div className="col-6"  data-aos="fade-up"
     data-aos-duration="2000">
                <h1 className="mark-head">LIGHT ELECTRIC VEHICLES</h1>
                <p className="mark-para mt-3">
                  Light Electric vehicles are the primary mode of transportation
                  in densely populated areas across all continents. Globally,
                  Over 100 million 2-wheelers and 3-wheelers are on streets
                  every day covering over 300 million kilometers each day which
                  is equivalent to a round trip from Earth to Sun. Reducing
                  carbon emissions from these vehicles is a challenge NexiGO
                  energy has taken up. NexiGO’s technology is the key
                  contributor to achieving global electrification faster. Our
                  Innovative designs bring reliability, faster charge times, and
                  safety to the energy source for the vehicles.
                </p>
              </div>
            </div>
            <div className="row justify-content-around m1">
              <div className="col-6" data-aos="fade-down"
     data-aos-duration="2000">
                <h1 className="mark-head mt-5">INDUSTRIAL VEHICLES</h1>
                <p className="mark-para mt-3">
                  Industrial vehicles serve a crucial role in increasing
                  efficiency of any manufacturing and logistics plants. In a
                  Large manufacturing facilities, each forklifts and tow motors
                  travel several tens of miles a day. The energy source to these
                  vehicles need to be reliable, safe, and long lasting. ZERO
                  DOWNTIME is a key requirement for these vehicles as they can
                  disrupt the manufacturing and logistics flow in a large
                  facility which downstream to loss of money. NEXIGO’s developed
                  an Ultra-Fast charging, high life, and safe battery packs to
                  significantly reduce the down time.
                </p>
              </div>
              <div className="col-1 p-0"></div>
              <div className="col-5" data-aos="fade-up"
     data-aos-duration="2000">
                <img src={Mark2} alt="mark" className="mark2"></img>
              </div>
            </div>

            <div className="row justify-content-start m1">
              <div className="col-5" data-aos="fade-up"
     data-aos-duration="2000">
                <img src={Mark3} alt="mark" className="mark3"></img>
              </div>
              <div className="col-1 p-0"></div>

              <div className="col-6" data-aos="fade-down"
     data-aos-duration="2000">
                <h1 className="mark-head">ENERGY STORAGE</h1>
                <p className="mark-para pt-3">
                  Efficiently storing energy from renewable sources is a key
                  step in achieving NET ZERO carbon footprint. The growing
                  dependency on the grid for Electric vehicle charging and
                  modern industrialization is making it more susceptible for
                  breaking and unreliable. Grid stabilization and local energy
                  backup is the need of the hour, as it eliminated the need for
                  upgrading the entire infrastructure. A reliable, long lasting,
                  flexible and modular energy source is the dominant factor in
                  achieving this Goal. NexiGO’s has developed a battery pack
                  solution that specifically meet the needs of energy storage
                  market that is 10 x Safe, 10 x long life and maintenance free.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <Contact/>
    </>
  );
}

export default Market;
