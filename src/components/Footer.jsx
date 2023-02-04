import "./footerStyle.css";

import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              color="white"
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Lalitpur, Mangalbazar</p>
              <p>Nepal.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                color="white"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +977 9808862324
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                color="white"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              iamsaphal21@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is me Success. CEO &
             Founder of Myself.I enjoy discussing
              new projects and design challenges.</p>
            <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100008492380188" target={"_blank"}>  <FaFacebook
                color="white"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
           <a href="nkedin.com/in/saphal-ghorasaini-709b83240/" target={"_blank"}>

           
               <FaLinkedin
                   color="white"
                   size={30}
                   style={{ color: "#fff", marginRight: "1rem" }}
                 />
           </a>
           <FaTwitter
                color="white"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
           

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
