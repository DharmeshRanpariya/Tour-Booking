import React, { useEffect, useState } from "react";
import AddTour from "./AddTour";
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";
import Tour from "./Tour";
import { Link } from "react-router-dom";

function T() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
  console.log(tours);
  return (
    <Container style={{width:"100%",padding:"50px" ,maxWidth:"1200px",margin:"auto",display:"flex",flexDirection:"column",gap:"30px"}}>
      <button className="btn booking_btn"  style={{margin:"auto",boxSizing:"border-box", width:"100%", maxWidth:"150px", height:"50px"}}>
         <Link to={'/addtour'}> Add Tour</Link>
      </button>
      {loading && <h4 className="text-center pt-5">Loading.......</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
      {!loading && !error && (
        <Row>
          {tours.map((tour) => (
            <Col lg="3" className="mb-4" key={tour._id}>
              <Tour tour={tour} />
            </Col>
          ))}
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map((number) => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={page === number ? "active_page" : ""}
                >
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default T;
