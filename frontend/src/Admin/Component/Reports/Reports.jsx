import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/config";
import useFetch from "../../../hooks/useFetch";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Subtitle from "../../../components/shared/Subtitle";

function Reports() {
  const { data: booking } = useFetch(`${BASE_URL}/booking`);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [value, setValue] = useState(booking);

  useEffect(() => {
    if (booking && booking.length > 0) {
      setValue(booking);
    }
  }, [booking]);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (date) => {
    let filter = booking.filter((book) => {
      let bookDate = new Date(book["bookAt"]);
      return (
        bookDate >= date.selection.startDate &&
        bookDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setValue(filter);
  };
  return (
    <>
      <div className="booking_user_continer">
      <Subtitle subtitle={"Reports"} />
      <h2 className="gallery_title">Generate booking reports</h2>
        <div
          className="date"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Tour Name</th>
              <th>Guest Size</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          {/* {booking.map((book) => {
            let date = new Date(book["bookAt"]);
            return (
              <tr key={book.id}>
                <td>{book.fullName}</td>
                <td>{book.userEmail}</td>
                <td>{book.tourName}</td>
                <td>{book.guestSize}</td>
                <td>{date.toLocaleDateString()}</td>
              </tr>
            );
            
          })} */}
          {value.map((book) => {
            let date = new Date(book["bookAt"]);
            return (
              <tbody>
                <tr key={book.id}>
                  <td>{book.fullName}</td>
                  <td>{book.userEmail}</td>
                  <td>{book.tourName}</td>
                  <td>{book.guestSize}</td>
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

export default Reports;
