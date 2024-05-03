import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    userName:"",
    email:"",
    password:""
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/create", user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/admin/user")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/admin/user"}>Back</Link>
        <h3 style={{textAlign:"center"}}>Add New User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="userName">Enter your Name</label>
                <input type="text" onChange={inputHandler} id="fname" name="userName" autoComplete='off' placeholder='Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Enter your Email</label>
                <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Enter your Password</label>
                <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add