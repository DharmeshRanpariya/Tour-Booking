import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../components/shared/Subtitle";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";

function Gallery() {
  return (
    <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Gallery