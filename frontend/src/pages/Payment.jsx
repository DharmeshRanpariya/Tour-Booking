// import React from 'react'
// import './payment11.css'
// import { useParams, useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../utils/config';
// import useFetch from '../hooks/useFetch';


// export default function Payment() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: booking  } = useFetch(`${BASE_URL}/booking/${id}`);
  
//   const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);
//   const photo = tour.photo;
//   const serviceFee = 500;
//   const price = Number(tour.price) * 5 + Number(serviceFee);

//   const succes = () => {
//     navigate('/thank-you')
//   }
//   return (
//     <div className="payment_container">
//       {/* products_img_container */}
//       <div className="products_img_container">

//         {/* <div className="back_btn">
//           <button>back</button>
//         </div> */}

//         <div className="products_title">
//           <h1>{tour.title}</h1>
//         </div>

//         <div className="paroducts_details">
//           <table>
//             <tr>
//               <td className="products_img"><img src={photo} alt="" /></td>
//               <td className="product_name">{tour.city}</td>
//               <td className="products_price">₹{price}</td>
//             </tr>
//           </table>
//         </div>

//         <div className="total_price">
//           <h2>Total pay</h2>
//           <h1>₹{price}</h1>
//         </div>

//         <div className="sub_information">
//             <h3>Tour & Travel</h3>
//             <div className="link">
//               <p>Tems</p>
//               <p>Privacy</p>
//             </div>
//         </div>

//       </div>

// {/* products_payment_container */}
//       <div className="products_payment_container">
//         <div className="products_payment_title">
//           <h2>pay with card</h2>
//         </div>
//         <div className="payment_from">
//           <form>
//             {/* input_group */}
//             <div className="input_group">
//               <label>Email</label>
//               <input type="email" />
//             </div>

//             {/*input_group  */}
//             <div className="input_group">
//               <label>Card information</label>
//               <div className="card_info_input_group">
//                 <input type="number" placeholder="1234 1234 1234" />
//                 <div className="more_card_info_input_group">
//                   <input
//                     className="cad_sub_info"
//                     type="number"
//                     placeholder="MM/DD"
//                   />
//                   <input
//                     className="cad_sub_info"
//                     type="number"
//                     placeholder="CVC"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* input_group */}
//             <div className="input_group">
//               <label>Card Holder Name</label>
//               <input type="text" />
//             </div>

//             {/* input_group */}
//             <div className="input_group">
//               <label>Country </label>
//               <select name="Country" id="Country">
//                 <option value="india">india</option>
//                 <option value="usa">usa</option>
//                 <option value="chaina">chaina</option>
//                 <option value="japan">japan</option>
//               </select>
//             </div>

//             <button className="submit" onClick={succes}>pay</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
