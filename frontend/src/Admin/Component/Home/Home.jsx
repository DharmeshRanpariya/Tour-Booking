import React from "react";
import CommonSection from "../../../components/shared/CommonSection";
import "./home1.css";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import Subtitle from "../../../components/shared/Subtitle";

function Home() {
  const { data: booking } = useFetch(`${BASE_URL}/booking`);
  const { data: tour } = useFetch(`${BASE_URL}/tours`);
  const { data: user } = useFetch(`${BASE_URL}/users`);
  const totalBookingPrice = booking.reduce((total, book) => {
    if (typeof book.price === "number") {
      return total + book.price;
    } else {
      return total;
    }
  }, 0);

  console.log("Total Booking Price:", totalBookingPrice);

  return (
    <>
      <Link to={"/adminlogin"} style={{ textDecoration: "none" }}>
        <CommonSection title={"Admin Logout"} />
      </Link>
      <div style={{ paddingLeft: "14%", paddingTop: "2%" }}>
        <Subtitle subtitle={"Introdation"} />
        <h2 className="gallery_title">Introduction to our website</h2>
      </div>
      <div class="cart_container">
        <div class="cart">
          <h6>Tours</h6>
          <p>{tour ? tour.length : 0}</p>
        </div>

        <div class="cart">
          <h6>Booking</h6>
          <p>{booking ? booking.length : 0}</p>
        </div>

        <div class="cart">
          <h6>User</h6>
          <p>{user ? user.length : 0}</p>
        </div>

        <div class="cart">
          <h6>Payment</h6>
          <p>₹{totalBookingPrice}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
