import React from "react";
import img1 from '../../../assets/images/hero-img02.jpg'
import img2 from '../../../assets/images/gallery-02.jpg'
import img3 from '../../../assets/images/gallery-06.jpg'

function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
