import React from 'react'
import './contactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { faEnvelope, faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
export const ContactUs = () => {
  const [contactUs, setcontactUs] = React.useState({
    name :"",
    email:"",
    subject:"",
    message:"",
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setcontactUs({
      ...contactUs,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const {name,email,subject,message} = contactUs;
    const formData = {name,email,subject,message};

    try {
      const response = await axios.post("http://localhost:5000/contact-us", formData);

      // Handle successful signup
      // Clear form data after successful signup
      for (const key in contactUs) {
        setcontactUs({
          ...contactUs,
          [key]: ""
        });
      }

      alert("Mail Sent Sucessfully!");
    } catch (error) {
      console.log("Error signing up:", error.message);
      alert("Failed to sent Mail. Please try again later.");
    }
  };


  return (
    <div className='contact-us'>
      <div className='heading-contactus'>
        <h1>Contact <span>Us</span></h1>
        <p>Welcome to "ServiceHub360" We Provide Quality Services to our Clients
          <br />Using advance technologies.</p>
      </div>
      <div className='footer-contactus'>
        <div className='contactus-details'>
          <div>
            <h3>Contact Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div>
            <div className="us-detail">

              <div>
                <img src='https://img.icons8.com/?size=200&id=110291&format=png' style={{ height: '40px', width: "40px", objectfit: 'contain' }} />
              </div>
              <div className='us-text'>
                PHONE :
                <br />
                <span>+12457836913 , +12457836913</span>
              </div>
            </div>

            <div className="us-detail">
              <div>
                <img src='https://img.icons8.com/?size=288&id=P7UIlhbpWzZm&format=png' style={{ height: '40px', width: "40px", objectfit: 'contain' }} />
              </div>
              <div className='us-text'>
                EMAIL:
                <br />
                <span>example@info.com</span>
              </div>
            </div>
            <div className="us-detail">
              <div>
                <img src='https://img.icons8.com/?size=200&id=13800&format=png' style={{ height: '40px', width: "40px", objectfit: 'contain' }} />
              </div>
              <div className='us-text'>
                ADDRESS:
                <br />
                <span>Dlf Patia,Bhubaneswar</span>
              </div>
            </div>
          </div>

        </div>
        <div className='contactus-form'>
          <form className='frm' onSubmit={handleOnSubmit}>
            <div class="ctus-r1">
              <div>
                <input type="text" class="" name='name' placeholder="Name" value={contactUs.name}
          onChange={handleChange} />
              </div>
              <div >
                <input type="email" class="form-control" name='email' placeholder="Email" value={contactUs.email}
          onChange={handleChange} />
              </div>
            </div>
            <div class="ctus-r2">
              <input type="text" name='subject' class="form-control" placeholder="Subject" value={contactUs.subject}
          onChange={handleChange} />
            </div>

            <div class="ctus-r2">
              <textarea class="form-control" name='message' rows="5" id="comment" placeholder="Message" value={contactUs.message}
          onChange={handleChange}></textarea>
            </div>
            <button class="btn btn-block" type="submit">Send Now!</button>
          </form>
        </div>
      </div>
    </div>
    // <div className='contactus'>
    //     <div className="container">

    //             <div class="col-md-7"?
    //                 <form>
    //                     <div class="row">
    //                         <div class="col-sm-6">
    //                             <input type="text" class="form-control" placeholder="Name"/>
    //                         </div>
    //                         <div class="col-sm-6">
    //                             <input type="email" class="form-control" placeholder="Email"/>
    //                         </div>
    //                         <div class="col-sm-12">
    //                             <input type="text" class="form-control" placeholder="Subject"/>
    //                         </div>
    //                     </div>
    //                     <div class="form-group">
    //                         <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
    //                     </div>
    //                     <button class="btn btn-block" type="submit">Send Now!</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>

    // </div>
  )
}
