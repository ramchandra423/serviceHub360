import React from 'react'
import "../AboutUs/aboutus.css"
import Logo from '../images/logo/logo-servicehub.png'
export const AboutUs = () => {
    let message = ``;
    let bar1message = 'xyz';
    let bar2message = 'abc';
    return (

        <div className="section-white">
            <div className='heading-contactus'>
                <h1>About <span>Us</span></h1>
            </div>
            <p className="bar">{bar1message}</p>
            <div className="about-container">
                <div className="about-text">
                    <h4>Bringing Professional Services to Your Doorstep!</h4>
                    <p>
                        Welcome to ServiceHub360, your one-stop destination for all your home service needs. We specialize in
                        connecting you with skilled professionals who provide a range of services to enhance your living space.
                        From plumbing and electrical work to cleaning, painting, and home repairs, we've got you covered. Our
                        platform ensures that you can easily find and book reliable service providers who deliver top-notch
                        quality and unparalleled convenience. With a commitment to customer satisfaction, we strive to make
                        every service experience seamless and enjoyable. Explore our wide array of services today and let us
                        help you transform your house into a home you'll love.
                    </p>
                </div>
                <div className="about-image">

                    <img src={Logo} alt="About Us" />
                </div>
            </div>
            <p className="bar">{bar2message}</p>
            <div className="col-md-12 text-center">
                <h2 className="section-title">
                    The Team Behind ServiceHub360
                </h2>
                <p className="section-subtitle">{message}</p>
            </div>
            <div className="ct1">
                <div className="team-item">
                    <div>
                    <img src="https://i.ibb.co/K6VQMV5/somu.jpg" className="team-img" alt="pic"></img>
                    <h3>Soumitra Behera</h3>
                    </div>
                    <div className="team-info">
                        <p>front-end</p>
                        <p>Hello! I can turn your imagination into a webpage.</p>

                        <ul className="team-icon">
                            <li><a href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                            </a></li>
                            <li><a href="#" className="instagram">
                                <i className="fa fa-instagram"></i>
                            </a></li>
                            <li><a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a></li>
                        </ul>
                    </div>                    
                </div>

                <div className="team-item">
                    <div>
                    <img src="https://i.ibb.co/Tkbpp9p/Sabya.jpg" className="team-img" alt="pic"></img>
                        <h3>Sabyasachi Biswal</h3>
                    </div>
                    <div className="team-info">
                    <p>front-end</p>
                            <p>Belive me, my code will make pixel-perfect Webpages .</p>

                        <ul className="team-icon">
                            <li><a href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                            </a></li>
                            <li><a href="#" className="instagram">
                                <i className="fa fa-instagram"></i>
                            </a></li>
                            <li><a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a></li>
                        </ul>
                    </div>                    
                </div>

                <div className="team-item">
                    <div>
                    <img src="https://i.ibb.co/NypC0h3/sourav.jpg" className="team-img" alt="pic"></img>
                        <h3>Sourav Kumar Das</h3>
                    </div>
                    <div className="team-info">
                    <p>Back-end</p>
                            <p>I ensure that everything work perfectly at your site.</p>
                        <ul className="team-icon">
                            <li><a href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                            </a></li>
                            <li><a href="#" className="instagram">
                                <i className="fa fa-instagram"></i>
                            </a></li>
                            <li><a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a></li>
                        </ul>
                    </div>                    
                </div>
                <div className="team-item">
                    <div>
                    <img src="https://i.ibb.co/7JCJpt8/Rama.jpg" className="team-img" alt="pic"></img>
                        <h3>Rama Chandra Rout</h3>
                    </div>
                    <div className="team-info">
                    <p>Database</p>
                            <p>You don't have to memorize everything ,
                                I will store it for you.</p>
                        <ul className="team-icon">
                            <li><a href="#" className="twitter">
                                <i className="fa fa-twitter"></i>
                            </a></li>
                            <li><a href="#" className="instagram">
                                <i className="fa fa-instagram"></i>
                            </a></li>
                            <li><a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a></li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
