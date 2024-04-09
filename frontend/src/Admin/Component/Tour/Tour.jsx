import React, { useRef } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../../../components/shared/tour-card.css";
import { BASE_URL } from "../../../utils/config";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";


function Tour({ tour }) {
  
  const { _id, title, city, photo, featured } = tour;
  const navigate = useNavigate();

  const deleted = async (id) => {
   
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Tour Deteleed' });
    const url = `${BASE_URL}/tours/${id}`
    const res = await fetch(url, {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',
    });
    navigate("/update");
  }  

  const toast = useRef(null);
  

  return (
    <>
    
      <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={`${photo}`} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              
            </span>
          </div>
          <h5 className="tour_title">
            <Link to={`/detail/${_id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-itmes-center justify-content-between mt-3">
          <button className="btn booking_btn">
              <Link to={`/updateData/${_id}`}>Update Now</Link>
            </button>
            
            <button className="btn booking_btn" onClick={() => deleted(_id)}>
              <Link to={`/home`}>Delete Now</Link>
              <Toast ref={toast}></Toast>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
    </>
  );
}

export default Tour;
