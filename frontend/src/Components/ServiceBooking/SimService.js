import React from 'react'
import './simservice.css'
import cleaner from '../images/Cleaning.png'
export const SimService = () => {
    return (
                <div className='simser-container'>
                    <div className='simser-img'>
                        <img src={cleaner} />
                    </div>
                    <div className='simser-des'>
                        <div>Home Cleaner</div>
                        <div>routstaryjhb@gmail.com
                        </div>
                        <div> KIIT Square,Bhubanewar</div>
                        <div>Price : ₹577</div>
                    </div>
                </div>
    )
}
