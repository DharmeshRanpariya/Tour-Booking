import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Component/Home/Home";
import Tour from "../Component/Tour/Tour";
import Booking from "../Component/Booking/Booking";
import Review from "../Component/Review/Review";
import Reports from "../Component/Reports/Reports";
import User from "../Component/User/User";
import Header from "../Header/Header";
import T from "../Component/Tour/T";
import Adminlogin from "./Adminlogin";
import AddTour from "../Component/Tour/AddTour";
import Upsatemessage from "../Component/Tour/Updatemessage";
import Updatedata from "../Component/Tour/Updatedata";
import Details from "../Component/Tour/Details";
import UserReq from "../Component/Requirement/UserReq";


const Dashboard = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/adminlogin" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/tour" element={<T />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/user" element={<User />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/addtour" element={<AddTour />} />
        <Route path="/update" element={<Upsatemessage />}/>
        <Route path="/updateData/:id" element={<Updatedata />}/>
        <Route path="/detail/:id" element={<Details />} />
        <Route path="requirement" element={<UserReq />} />
      </Routes>
      
    </>
  );
};

export default Dashboard;