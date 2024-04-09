import React, {useState} from "react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utils/config";
import Subtitle from "../../../components/shared/Subtitle";
import { Link } from "react-router-dom";
import './UserReq.css';


function UserReq() {
  const { data: choice, loading, error, refetch } = useFetch(`${BASE_URL}/userchoice`);

  const [approvedIds, setApprovedIds] = useState([]);
  const handleUpdate = (id) => {
    setApprovedIds([...approvedIds, id]);
    console.log("........u", id);
  }
  const handleDelete = async (id) => {
    const url = `${BASE_URL}/userchoice/${id}`
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
      <div className="userchoice_continer">
        <Subtitle subtitle={"User Choice"} />
        <h2 className="gallery_title">User requirement tour </h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Location</th>
              <th>Days</th>
              <th>People</th>
              <th>Price</th>
              <th>Description</th>
              {approvedIds.length >= 0 ? (
                <th colSpan="2">Action</th>
              ) : (
                <th>Action</th>
              )}
            </tr>
          </thead>
          {choice.map((choice) => (
            <tbody>
              <tr key={choice._id}>
                <td>{choice.user}</td>
                <td>{choice.location}</td>
                <td>{choice.days}</td>
                <td>{choice.people}</td>
                <td>{choice.price}</td>
                <td>{choice.discription}</td>
                <td>
                {approvedIds.includes(choice._id) ? (
                    <button className="btn btn-success" onClick={() => handleUpdate(choice._id)} disabled>
                      Approved
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={() => handleUpdate(choice._id)}>
                      Approve
                    </button>
                  )}
                </td>
                {!approvedIds.includes(choice._id) && (
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(choice._id)}>
                      Disallow
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div></div>
    </>
  );
}

export default UserReq;
