import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utils/config";
import { Rating } from "primereact/rating";
import Subtitle from "../../../components/shared/Subtitle";
import '../Serchbar/serchbr.css'

export default function Review() {
  const { data: review, loading, error } = useFetch(`${BASE_URL}/review`);
  const [serchChange, setSerchChange] = useState("");

  return (
    <>
      <div className="booking_user_continer">
      <Subtitle subtitle={"Review"} />
      <h2 className="gallery_title">Review the given tour </h2>
      <form className="search-bar">
          <input type="text"
           placeholder="Search..."
           onChange={(e) => setSerchChange(e.target.value)} />
          <button type="submit">
            <i className="ri-search-line"></i>
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Tour Name</th>
              <th>Review Text</th>
              <th>Rating</th>
            </tr>
          </thead>
          {review.filter((item) => {
          return serchChange.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(serchChange);
        })
        ?.map((review) => (
            <tbody>
              <tr>
                <td>{review.username}</td>
                <td>{review.title}</td>
                <td>{review.reviewText}</td>
                <td><Rating value={review.rating} readOnly cancel={false} className="rating"></Rating></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div>
        
      </div>
    </>
  );
}
