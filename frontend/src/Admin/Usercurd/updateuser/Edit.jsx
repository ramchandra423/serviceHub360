// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from "axios";
// import toast from 'react-hot-toast';

// const Edit = () => {
//     const [user, setUser] = useState({
//         userName: "",
//         email: ""
//     });

//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch user data based on ID
//         axios.get(`http://localhost:5000/api/getone/${id}`)
//             .then((response) => {
//                 setUser(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching user data:", error);
//             });
//     }, [id]);

//     const inputChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setUser(prevUser => ({
//             ...prevUser,
//             [name]: value
//         }));
//     };

//     const submitForm = async (e) => {
//         e.preventDefault();
//         try {
//             // Send updated user data to the server
//             const response = await axios.put(`http://localhost:5000/api/update/${id}`, user);
//             toast.success(response.data.msg, { position: "top-right" });
//             navigate("/admin/user");
//         } catch (error) {
//             console.error("Error updating user:", error);
//             toast.error("Failed to update user. Please try again later.", { position: "top-right" });
//         }
//     };

//     return (
//         <div className='addUser'>
//             <Link to={"/admin/user"}>Back</Link>
//             <h3 style={{textAlign:"center"}}>Update User Details</h3>
//             <form className='addUserForm' onSubmit={submitForm}>
//                 <div className="inputGroup">
//                     <label htmlFor="fname">Enter your Name</label>
//                     <input type="text" value={user.userName} onChange={inputChangeHandler} id="fname" name="userName" autoComplete='off' placeholder='First name' />
//                 </div>
//                 <div className="inputGroup">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
//                 </div>
//                 <div className="inputGroup">
//                     <button type="submit">UPDATE USER</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Edit;
