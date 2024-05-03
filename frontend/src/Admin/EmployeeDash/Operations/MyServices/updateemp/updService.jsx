import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const UpdService = () => {
    const [serv, setServ] = useState({
        category: "",
        serviceName: "",
        empName: "",
        empEmail:"",
        imageUrl: "",
        price: "",
        location: "",
        description: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data based on ID
        axios.get(`http://localhost:5000/sapi/getone/${id}`)
            .then((response) => {
                setServ(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [id]);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setServ(prevServ => ({
            ...prevServ,
            [name]: value
        }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            // Send updated user data to the server
            const response = await axios.put(`http://localhost:5000/sapi/update/${id}`, serv);
            toast.success(response.data.msg, { position: "top-right" });
            navigate("/employee/myservices");
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Failed to update user. Please try again later.", { position: "top-right" });
        }
    };

    return (
        <div className='addUser'>
            <Link to={"/employee/myservices"}>Back</Link>
            <h3 style={{ textAlign: "center" }}>Update Service Details</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div>
                    <select name="category" value={serv.category} onChange={inputChangeHandler} disabled>
                        <option value="">Select your Category</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Driver">Driver</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Barber">Barber</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Home Cleaner">Home Cleaner</option>
                    </select>

                </div>
                <div className="inputGroup">
                    <label htmlFor="serviceName">Enter Service Name.</label>
                    <input type="text" value={serv.serviceName} onChange={inputChangeHandler} id="fname" name="serviceName" autoComplete='off' placeholder='Name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="empName">Enter Employee Name</label>
                    <input type="text" value={serv.empName} onChange={inputChangeHandler} disabled id="email" name="empName" autoComplete='off' placeholder='Email' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="empEmail">Enter  Email here</label>
                    <input type="email" value={serv.empEmail} onChange={inputChangeHandler}  id="email" name="empEmail" autoComplete='off' placeholder='Email' />
                </div>

                <div className="inputGroup">
                    <label htmlFor="imageUrl">Enter Url of Image</label>
                    <input type="text" value={serv.imageUrl} onChange={inputChangeHandler}  name="imageUrl" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="price">Enter Service Price</label>
                    <input type="text" value={serv.price} onChange={inputChangeHandler}  name="price" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="location">Enter your Location</label>
                    <input type="text" value={serv.location} onChange={inputChangeHandler}  name="location" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="description">Enter Description</label>
                    <input type="textarea" value={serv.description} onChange={inputChangeHandler}  name="description" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE Service</button>
                </div>

            </form>
        </div>
    );
};

export default UpdService;
