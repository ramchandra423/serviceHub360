// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";
// import "./add.css";
// import toast from 'react-hot-toast';

// const AService = () => {

//   const services = {
//     category:"",
//     serviceName:"",
//     empName:"",
//     imageUrl:"",
//     price:"",
//     location:"",
//     description:""
//   }

//   const [ser, setSer] = useState(services);
//   const navigate = useNavigate();

//   const inputHandler = (e) =>{
//       const {name, value} = e.target;
//       setSer({...ser, [name]:value});
//   }

//   const submitForm = async(e) =>{
    
//     e.preventDefault();
//     await axios.post("http://localhost:5000/sapi/create", ser)
//     .then((response)=>{
        
//        toast.success(response.data.msg, {position:"top-right"})
//        navigate("/admin/service")
//     })
//     .catch(error => console.log(error))
//   }


//   return (
//     <div className='addUser'>
//         <Link to={"/admin/service"}>Back</Link>
//         <h3 style={{textAlign:"center"}}>Add new Service</h3>
//         <form className='addUserForm' onSubmit={submitForm}>
//         <div>
//             <select name="category"  onChange={inputHandler}>
//               <option value="" >
//                 Select your Category
//               </option>
//               <option value="Electrician">Electrician</option>
//               <option value="Plumber">Plumber</option>
//               <option value="Driver">Driver</option>
//               <option value="Carpenter">Carpenter</option>
//               <option value="Barber">Barber</option>
//               <option value="Mechanic">Mechanic</option>
//               <option value="Home Cleaner">Home Cleaner</option>
//             </select>
//           </div>
//             <div className="inputGroup">
//                 <label htmlFor="serviceName">Enter Service Name</label>
//                 <input type="text" onChange={inputHandler} id="fname" name="serviceName" autoComplete='off' placeholder='Service Name' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="empName">Enter Employee Name</label>
//                 <input type="text" onChange={inputHandler} id="email" name="empName" autoComplete='off' placeholder='Name' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="imageUrl">Enter Url of Image</label>
//                 <input type="text" onChange={inputHandler} id="email" name="imageUrl" autoComplete='off' placeholder='Image URL' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="price">Enter Service Price</label>
//                 <input type="text" onChange={inputHandler} id="email" name="price" autoComplete='off' placeholder='Price' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="location">Enter your Location</label>
//                 <input type="text" onChange={inputHandler} id="email" name="location" autoComplete='off' placeholder='Location' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="description">Enter Description</label>
//                 <input type="textarea" onChange={inputHandler} id="email" name="description" autoComplete='off' placeholder='Description' />
//             </div>
//             <div className="inputGroup">
//                 <label htmlFor="password">Enter your Password</label>
//                 <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='password' />
//             </div>
//             <div className="inputGroup">
//                 <button type="submit">ADD Service</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default AService


