import React, {useState} from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/config";
import './container.css';

function AddTour() {
  const [credentials, setCredentials] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    photo: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
   
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const photoChang = ((e)=> {
    console.log(e.target.value);
    const photoName = e.target.value.split("\\");
    const photolength = photoName.length;
    setCredentials((prev) => ({ ...prev, [e.target.id]: photoName[photolength-1] }))
  })

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/tours/create`, {
        method: "post",
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
    <Container className="Container">
      <Row>
        <Col>
          <h2>Add Tour</h2>
          <Form onSubmit={handleClick}>
            
            <FormGroup>
              <input
                type="text"
                placeholder="Title"
                required
                id="title"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="text"
                placeholder="City"
                required
                id="city"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="text"
                placeholder="Address"
                required
                id="address"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="Distance"
                required
                id="distance"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="Price"
                required
                id="price"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="MaxGroupSize"
                required
                id="maxGroupSize"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="text"
                placeholder="Description"
                required
                id="desc"
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
            <Button className="submit" type="submit" >
              Add New Tour
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddTour;
