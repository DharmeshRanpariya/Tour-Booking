import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

import loginImg from "../../assets/images/login.png";
import userIcon from "../../assets/images/user.png";

function Adminlogin() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "123"
    ) {
      navigate("/dashboard");
    } else {
      alert("you will try");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-axuto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Adminlogin;
