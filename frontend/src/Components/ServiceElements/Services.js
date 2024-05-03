import React, { useEffect, useState } from 'react'
import axios from "axios";
// import './sevices.css'
import BasicCard from './BasicCard'
import './services.css'
import { Catagory } from './Catagoryhome'
import { CatagoryPage } from '../CatagoryPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import MainSignup from '../../User/MainSignup'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import BookNowContext from '../../store/BookNowContext';
export const Services = () => {
  const [services, setService] = useState([]);
  const BookNowCtx = useContext(BookNowContext);
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/sapi/getall");
      setService(response.data);
    }

    fetchData();

  }, [])
  return (
    <div className='service'>
      <div className='main-heading'>
        <h1>Find Home <span id='hg'>Services/Repair </span><br></br>Near You</h1>
        <p>Explore Best Home Services & Repair Near You</p>
      </div>
      <Catagory />
      <div className='service-heading'>
        Trending Services
      </div>
      {
        services.map((service, index) => {
          return (
            <Card sx={{ width: "280px",margin:1 }}>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={service.imageUrl}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography level="title-lg">{service.serviceName}</Typography>
        <Typography level="body-sm">{service.empName}</Typography>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          ₹{service.price}
          </Typography>
        </div>
        
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width:"50%" }}
          onClick={()=>BookNowCtx.setService(service)}
        >
          <Link to='/booknow' style={{color:"white"}}>
          Book Now</Link>
        </Button>
        
      </CardContent>
    </Card>
          )
        })
      }

    </div>
  )
}
