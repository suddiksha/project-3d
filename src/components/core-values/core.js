import "../../assets/css/core.css";
import { useMediaQuery } from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Corevalues(props) {
  // const isCore = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="core-value mt-4 ">
     
          <div className="row justify-content-center mt-5" data-aos="fade-right"
     data-aos-anchor-placement="center-bottom">
            <div className=" col-3  col-lg-2 col-md-2 col-sm-3  ">
              <img src={props.img} className="coreimg " alt="core value"></img>
            </div>
            <div className=" col-9  col-lg-10 col-md-10 col-sm-9 ">
              <p className="name mb-0 mt-1">{props.name}</p>
              <p className="cp1 mt-2 mb-0 ">{props.para}</p>
              <div className="cp1  mt-2 ">
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
              </div>
            </div>
          </div>
      
      </div>
    </>
  );
}

export default Corevalues;
