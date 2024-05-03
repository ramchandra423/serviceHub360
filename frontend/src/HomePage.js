import React from 'react'
import './home.css'

import { Services } from './Components/ServiceElements/Services'
export const Home = () => {
  return (
    <div>
      {/* Catagory Bar start */}
      {/* <div className='catagory'>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402788588-fe1681.png' />
          </div>
          <div class="heading">Men's Saloon</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Spa} />
          </div>
          <div class="heading">Women's Saloon</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={cleanIm} />
          </div>
          <div class="heading">Home Cleaning</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Driver} />
          </div>
          <div class="heading">Drivers</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src='https://img.icons8.com/?size=188&id=9TqTwCc0UVkM&format=png' />
          </div>
          <div class="heading">Painting</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Carpenter} />
          </div>
          <div class="heading">Carpenter</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Plumber} />
          </div>
          <div class="heading">Plumbers</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Electrician} />
          </div>
          <div class="heading">Electrician</div>
        </div>
        <div class="card-cat">
          <div class="card-image">
            <img className='c-image' src={Mechanics} />
          </div>
          <div class="heading">Mechanics</div>
        </div>
      </div> */}
      {/* Catagory Bar Ends Here */}
    
      <Services/>

      {/* Features Section */}
      <div className='apart'>
        <div className='features-title'>
        What Sets Us Apart
        </div>
        <div className='apt'>
          <div className='ser-logo'>
          <img src='https://img.icons8.com/?size=256&id=UrbzqE77xV1o&format=png' style={{width:"75px"}}/>
          </div>
          <div className='ser-head'>Perfection Anytime</div>
          <p className='ser-des'>Don’t hesitate about timing. You have control over scheduling a visit of our technician.</p>
        </div>
        <div className='apt'>
          <div className='ser-logo'>
          <img src='https://img.icons8.com/?size=200&id=SmsWMHLWSYJn&format=png' style={{width:"75px"}}/>
          </div>
          <div className='ser-head'>Experienced</div>
          <p className='ser-des'>Our staffs are expert,well skilled, experienced, skilful.  You will experience the best service ever.</p>
        </div>
        <div className='apt'>
          <div className='ser-logo'>
            <img src='https://img.icons8.com/?size=200&id=gShesypkbo1o&format=png' style={{width:"75px"}}/>
          </div>
          <div className='ser-head'>Advanced Technology</div>
          <p className='ser-des'>We use advanced technologies to diagnose your device, install & repair your appliances.</p>
        </div>
      </div>
    </div>
  )
}
