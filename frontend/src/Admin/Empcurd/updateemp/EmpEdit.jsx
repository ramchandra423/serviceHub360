// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from "axios";
// import toast from 'react-hot-toast';

// const EmpEdit = () => {
//     const [emp, setEmp] = useState({
//         empName: "",
//         empEmail: ""
//     });

//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch user data based on ID
//         axios.get(`http://localhost:5000/epapi/getone/${id}`)
//             .then((response) => {
//                 setEmp(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching user data:", error);
//             });
//     }, [id]);

//     const inputChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setEmp(prevEmp => ({
//             ...prevEmp,
//             [name]: value
//         }));
//     };

//     const submitForm = async (e) => {
//         e.preventDefault();
//         try {
//             // Send updated user data to the server
//             const response = await axios.put(`http://localhost:5000/epapi/update/${id}`, emp);
//             toast.success(response.data.msg, { position: "top-right" });
//             navigate("/admin/employee");
//         } catch (error) {
//             console.error("Error updating user:", error);
//             toast.error("Failed to update user. Please try again later.", { position: "top-right" });
//         }
//     };

//     return (
//         <div className='addUser'>
//             <Link to={"/admin/employee"}>Back</Link>
//             <h3 style={{textAlign:"center"}}>Update Employee Details</h3>
//             <form className='addUserForm' onSubmit={submitForm}>
//                 <div className="inputGroup">
//                     <label htmlFor="fname">Enter your Name</label>
//                     <input type="text" value={emp.empName} onChange={inputChangeHandler} id="fname" name="empName" autoComplete='off' placeholder='First name' />
//                 </div>
//                 <div className="inputGroup">
//                     <label htmlFor="email">Enter your Email</label>
//                     <input type="email" value={emp.empEmail} onChange={inputChangeHandler} id="email" name="empEmail" autoComplete='off' placeholder='Email' />
//                 </div>
//                 <div className="inputGroup">
//                     <button type="submit">UPDATE USER</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default EmpEdit;
