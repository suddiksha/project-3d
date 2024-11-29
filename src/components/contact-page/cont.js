import "../../assets/css/cont.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import Sendmsg from "../json/sendmsg.json";

function Cont() {
  const isCont = useMediaQuery({ query: "(max-width: 768px)" });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Sendmsg,
  };
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errormsg, setErrormsg] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    title: "",
    company: "",
    country: "",
    inquiry: "",
    subject: "",
  });

  const Onsubmit = async (e) => {
    e.preventDefault();
    if (user.email && user.phoneno) {
      setIsSubmitting(true);
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        phoneno: "",
        title: "",
        company: "",
        country: "",
        inquiry: "",
        subject: "",
      });
      setErrormsg(false);
      setSuccessmsg(true);

      setTimeout(() => {
        setSuccessmsg(false);
        setIsSubmitting(false);
      }, 5000);

      try {
        const response = await axios.post(
          "http://localhost:3000/api/sendmail",
          user
        );
        setMsg(response.data.respMesg);
      } catch (error) {
        console.error("Error sending email:", error);
        setIsSubmitting(false);
      }
    } else {
      setErrormsg(true);
      setSuccessmsg(false);
    }
  };
  return (
    <>
      <div className="cont-sec mb-5">
        {/* {isCont ? (
          <div className="cont-phone">
            <h2 className="cont">CONTACT US</h2>
            <p className="cont-para mt-3">
              The first step we need to take is for us to understand your needs,
              so give us a way to reach out to you and let's get to work. Email
              us with any question or inquiries, or call +91 6300 399 054. We
              would be happy to answer your questions and set up a meeting with
              you.
            </p>
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="card cont-card mt-5">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    className="cont-input "
                  />

                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    className="cont-input mt-5"
                  />

                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    className="cont-input mt-5"
                  />

                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    className="cont-input mt-5"
                  />

                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    className="cont-input mt-5"
                  />
                  <TextField
                    id="standard-basic"
                    label="Company"
                    variant="standard"
                    className="cont-input mt-5"
                  />
                  <TextField
                    id="standard-basic"
                    label="Country"
                    variant="standard"
                    className="cont-input mt-5"
                  />
                  <TextField
                    id="standard-basic"
                    label="Inquiry Type"
                    variant="standard"
                    className="cont-input mt-5"
                  />
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    className="cont-input mt-5"
                  />
                  <Button variant="contained" className="msg-btn mt-5">
                    SEND MESSAGE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : ( */}
        <>
          <div className="row cont-us justify-content-center">
            <div className="col-12 ">
              <h2 className="cont">CONTACT US</h2>
              <p className="cont-para mt-3">
                The first step we need to take is for us to understand your
                needs, so give us a way to reach out to you and let's get to
                work. Email us with any question or inquiries, or call +91 6300
                399 054. We would be happy to answer your questions and set up a
                meeting with you.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="card cont-card mt-4">
                <div className="row justify-content-around">
                  <div className="col-4">
                    <TextField
                      name="firstname"
                      value={user.firstname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          firstname: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.firstname}
                      helperText={
                        errormsg && !user.firstname
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="lastname"
                      value={user.lastname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          lastname: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Last Name"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.lastname}
                      helperText={
                        errormsg && !user.lastname
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="row justify-content-around mt-5">
                  <div className="col-4">
                    <TextField
                      name="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          email: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.email}
                      helperText={
                        errormsg && !user.email ? "This field is required" : ""
                      }
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="phoneno"
                      value={user.phoneno}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          phoneno: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Phone Number"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.phoneno}
                      helperText={
                        errormsg && !user.phoneno
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="row justify-content-around mt-5">
                  <div className="col-4">
                    <TextField
                      name="title"
                      value={user.title}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          title: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Title"
                      variant="standard"
                      className="cont-input"
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="company"
                      value={user.company}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          company: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Company"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.company}
                      helperText={
                        errormsg && !user.company
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="row justify-content-around mt-5">
                  <div className="col-4">
                    <TextField
                      name="country"
                      value={user.country}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          country: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Country"
                      variant="standard"
                      className="cont-input"
                      error={errormsg && !user.country}
                      helperText={
                        errormsg && !user.country
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="inquiry"
                      value={user.inquiry}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          inquiry: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Inquiry Type"
                      variant="standard"
                      className="cont-input"
                    />
                  </div>
                </div>

                <div className="row justify-content-around mt-5">
                  <div className="col-10">
                    <TextField
                      name="subject"
                      value={user.subject}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          subject: e.target.value,
                        })
                      }
                      id="standard-basic"
                      label="Message"
                      variant="standard"
                      className="cont-input"
                    />
                  </div>
                </div>
                {successmsg && (
                  <div className="Email">
                    <div className="emailbox text-center">
                      <div className="emailsend text-center">
                        <div className="emailanimation mt-3">
                          <Lottie
                            animationData={Sendmsg}
                            loop={true}
                            autoplay={true}
                            className="sendmsg text-center"
                          />
                        </div>
                        <h5 className="msg mt-3">
                          Your message has been delivered.
                        </h5>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row justify-content-end mt-5">
                  <div className="col-4">
                    {!isSubmitting && (
                      <Button
                        variant="contained"
                        className="msg-btn"
                        onClick={Onsubmit}
                      >
                        SEND MESSAGE
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* )} */}
      </div>
    </>
  );
}
export default Cont;
