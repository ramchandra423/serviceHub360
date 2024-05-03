import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const AllService = () => {

  const [services, setService] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:5000/sapi/getall");
        setService(response.data);
    }

    fetchData();

  },[])

  const deleteService = async(serviceId) =>{
      await axios.delete(`http://localhost:5000/sapi/delete/${serviceId}`)
      .then((respones)=>{
        setService((prevService)=> prevService.filter((service)=> service._id !== serviceId))
        toast.success(respones.data.msg, {position: 'top-right'})
        alert("deleted")
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='userTable'>
        {/* <Link to={"add"} className='addButton'>Add New Service</Link> */}
        <h2 style={{textAlign:"center",color:"blueviolet"}}>All Service Details.</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Service Name</th>
                    <th>Employee Name</th>
                    <th>Url Of Image</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service, index)=>{
                        return(
                        <tr key={service._id}>
                            <td>{index + 1}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.empName}</td>
                            <td><div className='imagebox'>
                                <img className='bbim' src={service.imageUrl} alt={service.imageUrl}></img>
                            </div>
                                </td>
                            <td>{service.price}</td>
                            <td>{service.location}</td>
                            <td>{service.description}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteService(service._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                {/* <Link to={`update/`+service._id}><FontAwesomeIcon icon={faPenToSquare} /></Link> */}
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default AllService