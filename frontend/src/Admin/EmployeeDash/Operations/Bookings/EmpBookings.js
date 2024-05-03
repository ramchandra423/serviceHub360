import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';
import BookingStaus from './BookingStatus';

const EmpBookings = () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const email = decoded.email;

    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/booking/get/employee?email=${email}`);
            setBooking(response.data.data);
        }
        fetchData();
    }, [bookings]); // Changed from BookingStaus to bookings, assuming you want to fetch data whenever bookings change

    // Function to update isBookingApproved status
    const updateBookingStatus = async (bookingId, newStatus) => {
        try {
            // Update the status in the backend
            await axios.post("http://localhost:5000/booking/updateStatus", { status: newStatus, _id: bookingId });
            // Update the status in the local state
            const updatedBookings = bookings.map(booking => {
                if (booking._id === bookingId) {
                    return { ...booking, isBookingApproved: newStatus };
                }
                return booking;
            });
            setBooking(updatedBookings);
            toast.success("Status updated successfully!");
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Failed to update status. Please try again.");
        }
    };

    return (
        <div className='userTable'>
            <h1 style={{ textAlign: "center" }}><span>All Booked Services</span></h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Service Name</th>
                        <th>User Name</th>
                        <th>User Mobile No.</th>
                        <th>Price</th>
                        <th>Schedule Timing</th>
                        <th>Address of User</th>
                        <th>Status Of Service</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking._id}>
                            <td>{index + 1}</td>
                            <td>{booking.service.serviceName}</td>
                            <td>{booking.email}</td>
                            <td>{booking.mobileNo}</td>
                            <td>{booking.service.price}</td>
                            <td>{booking.date}<br /><br />{booking.selectedTime}</td>
                            <td>{booking.address}<br /><br />Pincode : {booking.pin}</td>
                            <td>{booking.isBookingApproved}</td>
                            <td className='actionButtons'>
                                <BookingStaus id={booking._id} updateStatus={updateBookingStatus} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpBookings;
