import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';
import UpdateOrderHistory from './UpdateOrderHistory';
import './order.css'


const OrderHistory = () => {

    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    // const id = decoded.userId;
    const email = decoded.email;
    console.log(email)

    const [bookings, setBooking] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/booking/get/user?email=${email}`,);
            setBooking(response.data.data);
        }

        fetchData();

    }, [])

    console.log(bookings)

    return (
        <div className='userTable'>
            <h1 style={{ textAlign: "center" }}><span>My Service Booking History..</span></h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>

                            Service Name</th>
                        
                        {/* <th>Mobile No.</th> */}
                        
                        <th>Shedule Timing</th>
                        <th>Address of User</th>
                        {/* <th>Actions</th> */}
                        <th>Status Of Service</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => {
                            return (
                                <tr key={booking._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='sbk'>
                                            <div className='skbd1' >
                                                <img className='skbdimg' src={booking.service.imageUrl}></img>
                                            </div>
                                            <div className='skbd2'>
                                            <div>{booking.service.serviceName}</div>
                                            <div>{booking.service.empName}</div>
                                            <div>₹ {booking.service.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    {/* <td>{booking.mobileNo}
                                    </td> */}
                                    
                                    <td>Date : {booking.date}<br></br>
                                        Time : {booking.selectedTime}
                                    </td>
                                    <td>Address : {booking.address}<br></br>
                                    Mobile No : {booking.mobileNo}<br></br>
                                        Pincode :{booking.pin}
                                        
                                    </td>
                                    {/* <td className='actionButtons'>
                                        <UpdateOrderHistory id={booking._id} />
                                    </td> */}
                                    <td>{booking.isBookingApproved}</td>
                                    {/* <td className='actionButtons'>

                                        <BookingStaus id={booking._id}/>
                                       
                                    </td> */}
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory