import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Emp = () => {

  const [emps, setEmps] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:5000/epapi/getall");
        setEmps(response.data);
    }

    fetchData();

  },[])

  const deleteEmp = async(empId) =>{
      await axios.delete(`http://localhost:5000/epapi/delete/${empId}`)
      .then((respones)=>{
        setEmps((prevEmp)=> prevEmp.filter((employee)=> employee._id !== empId))
        toast.success(respones.data.msg, {position: 'top-right'})
        alert("deleted")
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='userTable'>
        <Link to={"add"} className='addButton'>Add New Employee</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    emps.map((employee, index)=>{
                        return(
                        <tr key={employee._id}>
                            <td>{index + 1}</td>
                            <td>{employee.empName}</td>
                            <td>{employee.empEmail}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteEmp(employee._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                {/* <Link to={`update/`+employee._id}><FontAwesomeIcon icon={faPenToSquare} /></Link> */}
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

export default Emp