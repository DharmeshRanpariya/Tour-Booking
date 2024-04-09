import React, { useState } from "react";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";
import "./booking.css";
import Subtitle from "../../../components/shared/Subtitle";
import { Col, Form, FormGroup } from "reactstrap";
import Serchbr from "../Serchbar/Serchbr";
import '../Serchbar/serchbr.css'

function Booking() {
  const { data: booking } = useFetch(`${BASE_URL}/booking`);
  const [serchChange, setSerchChange] = useState("");

  return (
    <>
      <div className="booking_user_continer">
        <Subtitle subtitle={"Booking"} />
        <h2 className="gallery_title">Our Booking tours</h2>
        <form className="search-bar">
          <input type="text" 
          placeholder="Search..." 
          onChange={(e) => setSerchChange(e.target.value)}/>
          <button type="submit">
            <i className="ri-search-line"></i>
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone No.</th>
              <th>Tour Name</th>
              <th>Guest Size</th>
              <th>Price</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          {booking.filter((item) => {
          return serchChange.toLowerCase() === ""
            ? item
            : item.tourName.toLowerCase().includes(serchChange);
        })
        ?.map((book) => {
            let date = new Date(book["bookAt"]);
            return (
              <tbody>
                <tr key={book.id}>
                  <td>{book.fullName}</td>
                  <td>{book.userEmail}</td>
                  <td>{book.phone}</td>
                  <td>{book.tourName}</td>
                  <td>{book.guestSize}</td>
                  <td>{book.price}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Booking;
