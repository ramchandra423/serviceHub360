import React, { useContext, useEffect, useState } from 'react'
import './bookNow.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import DateCalendarViews from "./Calender.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { SimService } from './SimService'
import { Link } from 'react-router-dom';
import BookNowContext from '../../store/BookNowContext.js';
import axios from 'axios';

export const BookNow = () => {
  const BookNowCtx = useContext(BookNowContext);
  const data = BookNowCtx.service;



  const ctg = data.category;
  const [services, setService] = useState([]);
  console.log(ctg)


  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/sapi/getall?category=${ctg}`);
      // console.log(response.data.data)
      setService(response.data.data);
      console.log(services)
    }

    fetchData();

  }, [])

  // console.log(BookNowCtx.service)
  return (
    <div className='employee-div'>
      <div className='emp-service'>
        <div className='emp-det'>
          <div className='empt-img'>
            <img className='empl' src={data.imageUrl} />
          </div>
          <div className='empt-info-1'>
            <div className='empt-title'>{data.serviceName}</div>
            <div>{data.empName}
            </div>
            <div> {data.location}</div>
            <div>Price : ₹{data.price}</div>

            {/* <div>774993921</div> */}
            {/* <div className='catagory-sign'>Catagory</div> */}
          </div>
        </div>
        <div className='empt-det-2'>
          {/* <div>
            Share
          </div> */}
          <div className='avlt'>
            Available time 8.00AM to 8.00PM
          </div>

          <Link to='/bookapointment'>
            <button className='bookapointment' >
              <FontAwesomeIcon icon={faPenToSquare} />
              Book Apointment
            </button>
          </Link>


        </div>
      </div>

      <div className='emp-description'>
        <div className='desc-emp'>
          <div className='tittl'>Description</div>
          <div className='descp'>{data.description}
          </div>
        </div>
        <div className='similar'>
          <div className='tittl'>Similar Services</div>
          <div className='similar-container'>
          {
                services.map((service, index) => {
                    return (
                      <div className='simser-container'>
                      <div className='simser-img'>
                          <img src={service.imageUrl} />
                      </div>
                      <div className='simser-des'>
                          <div>{service.serviceName}</div>
                          <div>{service.empEmail}
                          </div>
                          <div> {service.location}</div>
                          <div>Price :₹{service.price}</div>
                      </div>
                  </div>
                    )
                })
            }


          </div>
        </div>
      </div>

    </div>
  )
}
