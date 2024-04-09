import React from "react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utils/config";
import '../Booking/booking.css'
import Subtitle from "../../../components/shared/Subtitle";

function User() {
  const { data: user, loading, error } = useFetch(`${BASE_URL}/users`);

  return (
    <>
        <div className="booking_user_continer">
        <Subtitle subtitle={"User"} />
      <h2 className="gallery_title">User login details</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            {user.map((user, index) =>  (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              
            ))}
          </table>
        </div>
    </>
  );
}

export default User;
