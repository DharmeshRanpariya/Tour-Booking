import React, { useEffect, useRef, useState, useContext } from "react";
import "../../../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";

function Details() {
  const { id } = useParams();
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1);

  return (
    <>
      <Row>
        <Col>
          <div className="tour_content">
            <img src={photo} alt="" />
            <div className="tour_info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
                <span className="tour_rating d-flex align-items-center gap-1">
                  <i
                    className="ri-star-fill"
                    style={{ color: "var(--secondary-color)" }}
                  ></i>
                  {avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? (
                    "Not rated"
                  ) : (
                    <span>({reviews?.length})</span>
                  )}
                </span>
                <span>
                  <i className="ri-map-pin-user-fill"></i>
                  {address}
                </span>
              </div>
              <div className="tour_extra_details">
                <span>
                  <i className="ri-map-pin-2-line"></i>
                  {city}
                </span>
                <span>
                  <i className="ri-money-dollar-circle-line"></i>₹{price}
                  /per person
                </span>
                <span>
                  <i className="ri-map-pin-time-line"></i>
                  {distance} k/m
                </span>
                <span>
                  <i className="ri-group-line"></i>
                  {maxGroupSize}
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Details;
