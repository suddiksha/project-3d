import "../../assets/css/contact.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import Button from "@mui/material/Button";
import Conline from "../../assets/images/contactline.png";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

function Contact() {
  const isContact = useMediaQuery({ query: "(max-width: 768px)" });
  const [msg, setMsg] = useState("");
  const [errormsg, setErrormsg] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email1: "",
    sub: "",
    message: "",
  });

  const Onsubmit = async (e) => {
    e.preventDefault();
    if (user.email1 && user.message) {
      setUser({
        name: "",
        email1: "",
        sub: "",
        message: "",
      });
      setErrormsg(false);
      setSuccessmsg(true);
      setTimeout(() => {
        setSuccessmsg(false);
      }, 4000);

      try {
        const response = await axios.post("http://localhost:3000/api/send", user);
        setMsg(response.data.respMesg);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      setErrormsg(true);
      setSuccessmsg(false);
    }
  };

  return (
    <>
      <div className="contact-us">
        {isContact ? (
          <div className="contact-phone">
            <div className="row">
              <div className="col-12">
                <h2 className="contactus">Contact Us</h2>

                <TextField
  id="filled-basic"
  label="Name"
  variant="filled"
  className="input1 mt-5"
  value={user.name}
  onChange={(e) => setUser({ ...user, name: e.target.value })}
/>
<TextField
  id="filled-basic"
  label="Email"
  variant="filled"
  className="input1 mt-2"
  value={user.email1}
  onChange={(e) => setUser({ ...user, email1: e.target.value })}
/>
<TextField
  id="filled-basic"
  label="Subject"
  variant="filled"
  className="input1 mt-2"
  value={user.sub}
  onChange={(e) => setUser({ ...user, sub: e.target.value })}
/>
<TextField
  id="filled-multiline-static"
  label="Message"
  multiline
  rows={4}
  variant="filled"
  className="input1 mt-2"
  value={user.message}
  onChange={(e) => setUser({ ...user, message: e.target.value })}
/>


                <Button variant="contained" className="submit mt-4">
                  Submit
                </Button>
              </div> </div>
              <div className="row justify-content-around mt-5">
                <div className="col-10 text-center mt-3">
                  <h2 className="location ">Location</h2>
                  <h3 className="place pt-4">Hyderabad , India</h3>
                  <p className="address pt-2">
                    Plot no 1 & 4, Survey no: 354 A & AA Nandigama Village,
                    Patancheru mandal, Sangareddy district, Telengana - 502300
                  </p>
                  <h2 className="place pt-4">Cleveland , USA</h2>
                  <p className="address pt-2">
                    <p className="mb-0">ohio - 44011</p>
                    <p className="mb-0">Ph: +1 216 385 - 8127</p>
                    <p className="mb-0">contact@nexigoenergu.com </p>
                  </p>
                </div>
              </div>
              <div className="mb-5"></div>
           
          </div>
        ) : (
          <div className="row justify-content-center m-0 pt-5 mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 p-0">
              <img src={Conline} className="img-fliuid conline"></img>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 locationsec p-0">
              <h2 className="location ">Location</h2>
              <h3 className="place pt-5">Hyderabad , India</h3>
              <p className="address pt-2">
                Plot no 1 & 4, Survey no: 354 A & AA Nandigama Village,
                Patancheru mandal, Sangareddy district, Telengana - 502300
              </p>
              <h2 className="place pt-4">Cleveland , USA</h2>
              <p className="address pt-2">
                <p className="mb-0">ohio - 44011</p>
                <p className="mb-0">Ph: +1 216 385 - 8127</p>
                <p className="mb-0">contact@nexigoenergu.com </p>
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 contactussec p-0">
              <h2 className="contactus">Contact Us</h2>

              <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            className="input1 mt-5"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className="input1 mt-2"
            value={user.email1}
            onChange={(e) => setUser({ ...user, email1: e.target.value })}
          />
          <TextField
            id="filled-basic"
            label="Subject"
            variant="filled"
            className="input1 mt-2"
            value={user.sub}
            onChange={(e) => setUser({ ...user, sub: e.target.value })}
          />
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="filled"
            className="input1 mt-2"
            value={user.message}
            onChange={(e) => setUser({ ...user, message: e.target.value })}
          />
          <Button variant="contained" className="submit mt-4" onClick={Onsubmit}>
            Submit
          </Button>
        </div>

            <div className="mb-5"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
