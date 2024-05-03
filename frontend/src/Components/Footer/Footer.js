import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
// import download from '../images/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/logo/logo-servicehub.png'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className='fpart-1'>
                <div className='fdetails'>
                    <p className='ftitle'><FontAwesomeIcon icon={faMapMarker} />  Location</p>
                    <span className='fdes'>Silicon Institue of Tech, Bhubaneswar</span>
                </div>
                <div className='fdetails'>
                    <p className='ftitle'><FontAwesomeIcon icon={faMobile} /> Contact us</p>
                    <span className='fdes'>+91-784683727</span>
                </div>
                <div className='fdetails'>
                    <p className='ftitle'><FontAwesomeIcon icon={faEnvelope} /> Mail Us</p>
                    <span className='fdes'>servicehub360@gmail.com</span>
                </div>
            </div>
            <hr style={{marginLeft:"1%",marginRight:"1%"}} />
            <div className='fpart-2'>
                <div className='pt1'>
                    <div class="footer-social-icon">
                        <div className='fdes'>
                            <img src={Logo} className='logo-imgd'/>
                        </div>
                        <p className='ftitle'>Follow us</p>
                        <svg className ="ico" xmlns="http://www.w3.org/2000/svg" height="34" width="30" viewBox="0 0 512 512"><path fill="#0d5de7" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                        <svg className ="ico" xmlns="http://www.w3.org/2000/svg" height="34" width="30" viewBox="0 0 448 512"><path fill="#c40fc7" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <svg className ="ico" xmlns="http://www.w3.org/2000/svg" height="34" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        <svg className ="ico" xmlns="http://www.w3.org/2000/svg" height="34" width="30" viewBox="0 0 496 512"><path fill="#1866ec" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
                    </div>
                </div>
                <div className='pt2'>
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <p className='ftitle'>Get to Know Us</p>
                        </div>
                        <ul className='fdes'>
                            <li><a href="/">Home</a></li>
                            
                            
                            <li><a href="/AboutUs">About us</a></li>
                            <li><a href="/ContactUs">Contact us</a></li>
                            <li><a href="#">Privacy & Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <p>&copy; 2022-2023, All Right Reserved ServiceHub360.</p>
            </div>
        </footer>
    )
}


