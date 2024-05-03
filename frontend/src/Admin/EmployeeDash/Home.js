import React from 'react'
import { BsPersonFillGear, BsBookmarkFill }
  from 'react-icons/bs'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { SlUser } from "react-icons/sl";
import { MdFeedback } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { Link } from 'react-router-dom';

function Home() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>EMPLOYEE DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <Link className='cdcl' to="profile">
          <div className='card-inner'>
            <h3>EDIT PROFILE</h3>
            <SlUser className='card_icon' />
          </div>
          <h2></h2>
          </Link>
          {/* <FontAwesomeIcon icon={faUserPen} /> */}
        </div>
        <div className='card'>
        <Link className='cdcl' to="myservices">
          <div className='card-inner'>
            <h3>MY SERVICES</h3>
            <BsPersonFillGear className='card_icon' />
          </div>
          <h1>5</h1>
          </Link>
        </div>
        <div className='card'>
        <Link className='cdcl' to="bookings">
          <div className='card-inner'>
            <h3>BOOKINGS</h3>
            <BsBookmarkFill className='card_icon' />
          </div>
          <h1> </h1>
          </Link>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>FEEDBACKS</h3>
            <MdFeedback className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Home