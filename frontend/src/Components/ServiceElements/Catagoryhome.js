import React from 'react'
import cleanIm from '../images/Cleaning.png'
import Spa from '../images/women.png'
import Driver from '../images/driver.png'
import Plumber from '../images/plumber.png'
import Carpenter from '../images/carpenter.png'
import Electrician from '../images/electrician.png'
import Mechanics from '../images/mechanics.png'

import './catagory.css'
import { Link } from 'react-router-dom'

export const Catagory = () => {
    return (
            <div className='catagory'>
                
                <div class="card-cat">
                <Link to='/catagory/saloon'>
                    <div class="card-image">
                        <img className='c-image' src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402788588-fe1681.png' />
                    </div>
                    <div class="heading">Saloon</div>
                </Link>
                </div>

                
                <div class="card-cat">
                <Link to='/catagory/driver'>
                    <div class="card-image">
                        <img className='c-image' src={Driver} />
                    </div>
                    <div class="heading">Drivers</div>
                    </Link>
                </div>
                
                <div class="card-cat">
                <Link to='/catagory/painter'>
                    <div class="card-image">
                        <img className='c-image' src='https://img.icons8.com/?size=188&id=9TqTwCc0UVkM&format=png' />
                    </div>
                    <div class="heading">Painter</div>
                    </Link>
                </div>
                <div class="card-cat">
                <Link to='/catagory/carpenter'>
                    <div class="card-image">
                        <img className='c-image' src={Carpenter} />
                    </div>
                    <div class="heading">Carpenter</div>
                    </Link>
                </div>
                <div class="card-cat">
                <Link to='/catagory/plumber'>
                    <div class="card-image">
                        <img className='c-image' src={Plumber} />
                    </div>
                    <div class="heading">Plumbers</div>
                    </Link>
                </div>
                <div class="card-cat">
                <Link to='/catagory/electrician'>
                    <div class="card-image">
                        <img className='c-image' src={Electrician} />
                    </div>
                    <div class="heading">Electrician</div>
                    </Link>
                </div>
                <div class="card-cat">
                <Link to='/catagory/mechanics'>
                    <div class="card-image">
                        <img className='c-image' src={Mechanics} />
                    </div>
                    <div class="heading">Mechanics</div>
                    </Link>
                </div>
                <div class="card-cat">
                <Link to='/catagory/cleaner'>
                    <div class="card-image">
                        <img className='c-image' src={cleanIm} />
                    </div>
                    <div class="heading">Cleaning</div>
                    </Link>
                </div>
            </div>
    )
}
