import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../components/shared/Subtitle";
import Testimonials from "../components/Testimonial/Testimonials";

function About() {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="12">
          <Subtitle subtitle={'Fans Love'} />
          <h2 className="testimonial_title">What our fan say about us</h2>
        </Col>
        <Col lg="12">
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About