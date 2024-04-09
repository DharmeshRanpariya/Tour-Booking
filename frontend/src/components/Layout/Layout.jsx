import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Tours from "../../pages/Tours";
import TourDetails from "../../pages/TourDetails";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import SearchResultList from "../../pages/SearchResultList";
import Gallery from "../../pages/Gallery";
import About from "../../pages/About";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import ThankYou from "../../pages/ThankYou";
import Account from "../../pages/Account";
import Adminlogin from "../../Admin/Dashboard/Adminlogin";
import Dashboard from "../../Admin/Dashboard/Dashboard";


const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/lll" element={<Dashboard />} />
 
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
