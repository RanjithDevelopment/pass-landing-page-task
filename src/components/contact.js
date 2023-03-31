import React from 'react'
import Header from './Header'
import Navabar from './Navabar'
import "../css/contact.css";
import { FaHome,FaFacebook,FaInstagram, FaPhone,FaMailBulk,FaGithub,FaLinkedin} from "react-icons/fa"

const contact = () => {
  return (
    <>
    <Navabar/>
    <Header/>
  
    <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "2rem" }} />
                       <div>
                            <p>123/A ,</p>
                           
                            <p>Uthukuli ,</p>
                            <p>pin-code:638 752,</p>
                            <p>Tiruppur Dt</p>
                       </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "2rem" }} />
                            +91 1234567890
                        </h4>

                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "2rem" }} />
                           example@gmail.com
                        </h4>

                    </div>
                    <div className="facebook">
                        <h4>
                            <FaFacebook size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "2rem" }} />
                           <a href='#' className='socialLinks' >FaFacebook</a>
                        </h4>

                    </div>
                    <div className="insta">
                        <h4>
                            <FaInstagram size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "2rem" }} />
                           <a href='#' className='socialLinks' >FaInstagram</a>
                        </h4>

                    </div>
                    <div className="linkedin">
                        <h4>
                        <FaLinkedin size={50} style={{ color: "rgba(248, 32, 79, 0.841)", marginRight: "1rem" }} />
                           <a href='#' className='socialLinks' >FaLinkedin</a>
                        </h4>

                    </div>

                </div>
                <div className="right">
                  <h4>About Me</h4>
                  <p>
                  hello ,We Are pass On Delivery Application ,we Make Sending, Buying and Travelling Easier By providing world Class to Our Clients Across the Globe
                  </p>
                  <div className="social">
                   
                 
                  </div>
                </div>

            </div>

        </div>
      
     
    </>
  )
}

export default contact
