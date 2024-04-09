import React, { useContext,useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import Subtitle from "./Subtitle";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function UserChoice() {
  const { user } = useContext(AuthContext);
  const currentUser = user;
  const name = currentUser?.email;
  const [credentials, setCredentials] = useState({
    user: name ,
    location: "",
    days: "",
    people: "",
    price: "",
    discription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log("...........", credentials);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/userchoice`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      alert("Your Choice Submited");
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Col lg="12">
      <Subtitle subtitle={"User Choice Tour"} />
      <h2 className="gallery_title">Your self create tour</h2>
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                id="location"
                placeholder="where are you going ?"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i class="ri-calendar-2-line"></i>
            </span>
            <div>
              <h6>Max Days</h6>
              <input
                type="number"
                id="days"
                placeholder="For how many days ?"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                id="people"
                placeholder="0"
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i>₹</i>
            </span>
            <div>
              <h6>Max Price</h6>
              <input
                type="number"
                id="price"
                placeholder="0"
                onChange={handleChange}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <i class="ri-message-2-line"></i>
            </span>
            <div>
              <h6>Discription</h6>
              <input
                type="text"
                id="discription"
                placeholder="Tour is... "
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <span className="search_icon" type="submit" onClick={handleClick}>
            <i class="ri-chat-upload-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default UserChoice;
