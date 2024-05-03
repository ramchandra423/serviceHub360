import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import './timeslot.css'
import './bookapointment.css'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './calender.css'
import BookNowContext from '../../store/BookNowContext';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const BookApointment = () => {
  const [formData, setFormData] = useState({
    address: '',
    mobileNo: '',
    pin: ''
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const [value, setValue] = React.useState(dayjs());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const selectedDate = value.$d;
  // console.log({ selectedDate, selectedTime })
  const BookNowCtx = useContext(BookNowContext);
  const service = BookNowCtx.service
  // console.log(BookNowCtx.service)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    const date = selectedDate.toDateString()
    const dataToSend = { ...formData, date, selectedTime, service };
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const email = decoded.email;
    console.log(email)
    try {
      const response = await axios.post("http://localhost:5000/booking/create", { ...dataToSend, email });
      console.log(response.data)
      navigate("/mybookings")
    }
    catch (error) {
      console.log(error)
    }
  };
    
  useEffect(() => {
    
    getTime();

  }, [])
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeSlot(timeList)
    // console.log(t)
  }
  return (

    <div className='bkap'>
      
      <form onSubmit={handleSubmit} >
      <div className='bkaphead'>Select Date and Time Slot to Book Your Appointment</div>
        <div className='cti-con'>
        

        
          <div className='cal-con'>
            <h2>Select Date Slot</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateCalendar']}>
                <DemoItem >
                  <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} disablePast />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
        </div>
        <div className='time-con'>
          <h2 className='my-5 font-bold'>Select Time Slot</h2>
          <div className='slot-con'>
            {timeSlot.map((item, index) => (
              <button id='tslot' key={index}
                // disabled={isSlotBooked(item.time)}
                variant='outiline'
                className={`border rounded-full 
                p-2 px-3 hover:bg-primary
                 hover:text-white
                 ${selectedTime == item.time && 'bg-primary text-white'}`}
                onClick={() => setSelectedTime(item.time)}
              >{item.time}</button>
            ))}
          </div>
        </div>
        </div>

        <h2> Enter Your Address Here....</h2>
        <div style={{ width: "30%" }}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ width: "30%" }}>
          <label htmlFor="mobileNo">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div style={{ width: "30%" }}>
          <label htmlFor="pin">Pincode:</label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            pattern="[0-9]{6}"
            required
          />
        </div>

        <div className='kt'>
          <button className='bkser'>Book Service</button>
        </div>
      </form>

    </div>
  )
}
