import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";
import "./container.css";

function Updatedata() {
  const { id } = useParams();
  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(tour);

  useEffect(() => {
      setCredentials(tour)
  }, [tour])

 
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const photoChang = ((e)=> {
    console.log(e.target.value);
    const photoName = e.target.value.split('\\');
    // const photoName1 = "/" + photoName ;
    // console.log("...........",photoName1);
    const photolength = photoName.length;
    const photo1 = "/" + photoName[photolength-1]
    setCredentials((prev) => ({ ...prev, [e.target.id]: photo1}))
  })

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/tours/${id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);

      navigate("/update");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Container className="Container">
        <Row>
          <Col>
            <h2>Update Tour</h2>
            <Form onSubmit={handleClick}>
              <FormGroup>
                <input
                  type="text"
                  placeholder="Title"
                  required
                  id="title"
                  value={credentials.title}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  placeholder="City"
                  required
                  id="city"
                  value={credentials.city}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  id="address"
                  value={credentials.address}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="number"
                  placeholder="Distance"
                  required
                  id="distance"
                  value={credentials.distance}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="number"
                  placeholder="Price"
                  required
                  id="price"
                  value={credentials.price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="number"
                  placeholder="MaxGroupSize"
                  required
                  id="maxGroupSize"
                  value={credentials.maxGroupSize}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  placeholder="Description"
                  required
                  id="desc"
                  value={credentials.desc}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="file"
                  placeholder="Photo"
                  required
                  id="photo"
                  onChange={photoChang}
                />
              </FormGroup>
              <Button className="submit" type="submit">
                Update Tour
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Updatedata;
