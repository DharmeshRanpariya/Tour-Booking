import React from "react";
import "./serchbr.css"

function Serchbr()  {
 return(
    <>
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <button type="submit"><i className="ri-search-line"></i></button>
    </form> 
    </>
 )
}

export default Serchbr