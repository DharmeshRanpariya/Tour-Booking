import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import Subtitle from "../components/shared/Subtitle";
// import { Container, Row, Button } from "reactstrap";
// import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Account() {
  const { data: users, loading, error } = useFetch(`${BASE_URL}/users`);
  const { data: booking, refetch } = useFetch(`${BASE_URL}/booking`);

  const { user } = useContext(AuthContext);

  if (loading || !users || !user) {
    return (
      <div style={{ textAlign: "center", fontSize: "30px", padding: "50px" }}>
        Not Login...
      </div>
    );
  }

  const currentUser = user;
  const name = currentUser.email;

  const handleDelete = async (id) => {
    const url = `${BASE_URL}/booking/${id}`
    const res = await fetch(url, {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',
    });
    refetch();
  }

  return (
    <>
      <div className="booking_user_continer">
        <Subtitle subtitle={"Account"} />
        <h2 className="gallery_title">User Detalis</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>

          {users
            .filter((user) => user.email === name)
            .map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
        </table>
      </div>

      <div className="booking_user_continer">
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
              <th>Action</th>
            </tr>
          </thead>
          {booking
            .filter((book) => book.userEmail === name)
            .map((book, index) => {
              let date = new Date(book["bookAt"]);
              return (
                <tr key={book._id}>
                  <td>{book.fullName}</td>
                  <td>{book.userEmail}</td>
                  <td>{book.phone}</td>
                  <td>{book.tourName}</td>
                  <td>{book.guestSize}</td>
                  <td>{book.price}</td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>
                    Delete
                  </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}

export default Account;
