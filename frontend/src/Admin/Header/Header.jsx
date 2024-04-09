import React, { useEffect, useRef, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthContext";


const nav_links = [
  {
    path: "/dashboard",
    display: "Home",
  },
  {
    path: "/tour",
    display: "Tour",
  },
  {
    path: "/booking",
    display: "Booking",
  },
  {
    path: "/review",
    display: "Review",
  },
  {
    path: "/reports",
    display: "Report",
  },
  {
    path: "/requirement",
    display: "UserRequirement",
  },
  {
    path: "/user",
    display: "User",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    navigate("/adminlogin");
  };


  const toggleMenu = () => menuRef.current.classList.toggle('show_menu') 

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}> 
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link " : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_right d-flex align-items-center gap-4">
                
                  
                                       
      
                 
             
              </div>
            </div>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
