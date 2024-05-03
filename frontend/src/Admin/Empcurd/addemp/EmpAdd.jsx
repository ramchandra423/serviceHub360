import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const EmpAdd = () => {

  const emps = {
    category:"",
    empName:"",
    empEmail:"",
    empPassword:""
  }

  const [emp, setEmp] = useState(emps);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setEmp({...emp, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:5000/epapi/create", emp)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/admin/employee")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/admin/employee"}>Back</Link>
        <h3 style={{textAlign:"center"}}>Add New Employee</h3>
        <form className='addUserForm' onSubmit={submitForm}>
        <div>
          <select name='category'  onChange={inputHandler}>
            <option value=''>Select your Category</option>
            <option value='Electrician'>Electrician</option>
            <option value='Plumber'>Plumber</option>
            <option value='Driver'>Driver</option>
            <option value='Carpenter'>Carpenter</option>
            <option value='Barber'>Barber</option>
            <option value='Mechanic'>Mechanic</option>
            <option value='Home Cleaner'>Home Cleaner</option>
          </select>
        </div>
            <div className="inputGroup">
                <label htmlFor="empName">Enter your Name</label>
                <input type="text" onChange={inputHandler} id="fname" name="empName" autoComplete='off' placeholder='Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="empEmail">Enter your Email</label>
                <input type="email" onChange={inputHandler} id="email" name="empEmail" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="empPassword">Enter your Password</label>
                <input type="password" onChange={inputHandler} id="password" name="empPassword" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default EmpAdd