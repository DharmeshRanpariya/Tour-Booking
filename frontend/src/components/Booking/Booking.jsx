import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";
import logo from '../../assets/images/logo.png';
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const { price, reviews, title } = tour;
  console.log(".....", title);
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    price: "",
  });
  console.log(".....", booking );

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 500;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);


    

  //send data to server
  const handleClick = async (e) => {
    e.preventDefault();
    setBooking({
      ...booking,
      price: totalAmount
    })
      const selected = booking.bookAt;
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  
    // console.log(booking);
    // await pay
    try {
      if (!user || user === undefined || user === null) {
        return alert("please login for booking");
      }
     
      // Check if selected date is not in the past
      console.log(".........",selected);
      console.log(".............",currentDate);
      if (selected >= currentDate) {
        setSelectedDate(selected);
      } else {
        alert('Please select a date from today or a future date.');
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      pay(totalAmount)
      // navigate("/payment");
    } catch (err) {
      alert(err.message);
    }
  };
  const pay = async (totalAmount) => {
    
    const { data: key } = await axios.get(
      "http://localhost:8000/api/v1/getkey"
    );
    const {
      data: { order },
    } = await axios.post("http://localhost:8000/api/v1/payment/checkout", {
      totalAmount,
    });

    const options = {
      key: key,
      amount: order.totalAmount,
      currency: "INR",
      name: "Tour and Travel",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      callback_url: "http://localhost:8000/api/v1/payment/paymentVerification",
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#faa935",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    // console.log(data);
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
        ₹{price} <span> /person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center ">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info_form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guests"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ₹{price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge </h5>
            <span>₹{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>₹{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button
          className="btn primary_btn w-100 mt-4"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
