import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.css';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const AddService = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  const id = decoded.userId;
  const [emp, setEmp] = useState({
    category: '',
    empName: '',
    empEmail: '',
    empPassword: '',
  });

  useEffect(() => {
    // Fetch user data based on ID
    axios
      .get(`http://localhost:5000/epapi/getone/${id}`)
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSer({ ...ser, [name]: value });
  };

  const [ser, setSer] = useState({
    category: '',
    serviceName: '',
    imageUrl: '',
    price: '',
    location: '',
    description: '',
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const serviceData = {
      ...ser,
      category: emp.category,
      empName: emp.empName,
      empEmail: emp.empEmail,
      empPassword: emp.empPassword,
    };
    try {
      const response = await axios.post('http://localhost:5000/sapi/create', serviceData);
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/employee/myservices');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='addUser'>
      <Link to={'/admin/service'}>Back</Link>
      <h3 style={{ textAlign: 'center' }}>Add new Service</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div>
          <select name='category' value={emp.category} disabled onChange={inputHandler}>
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
        <div className='inputGroup'>
          <label htmlFor='serviceName'>Enter Service Name</label>
          <input type='text' onChange={inputHandler} id='fname' name='serviceName' autoComplete='off' placeholder='Service Name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='imageUrl'>Enter Url of Image</label>
          <input type='text' onChange={inputHandler} id='email' name='imageUrl' autoComplete='off' placeholder='Image URL' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='price'>Enter Service Price</label>
          <input type='text' onChange={inputHandler} id='email' name='price' autoComplete='off' placeholder='Price' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='location'>Enter your Location</label>
          <input type='text' onChange={inputHandler} id='email' name='location' autoComplete='off' placeholder='Location' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='description'>Enter Description</label>
          <input type='textarea' onChange={inputHandler} id='email' name='description' autoComplete='off' placeholder='Description' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='empEmail'>Enter your Email</label>
          <input type='email' onChange={inputHandler} value={emp.empEmail} disabled id='password' name='empEmail' autoComplete='off' placeholder='Email' />
        </div>
        {/* Password field should not be displayed in the form */}
        <div className='inputGroup'>
          <button type='submit'>ADD Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
