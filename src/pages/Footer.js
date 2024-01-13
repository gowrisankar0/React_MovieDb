import React from "react";
import "./footer.css";
import FooterNavItem from "../components/FooterNavItem";

const Footer = () => {
const usefullinks=[
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy Policy"
];

const  locations =[
    "Dolorum optio",
    "Non rem rerum",
    "Cras fermentum odio",
    "Justo eget",
    "Fermentum iaculus"
]


  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Chris Petits 1980 film "Radio On" has a cult status. I watched
                it a few weeks ago and found it morose and melancholic. Content
                is meant to be Petits coda to that film 3 decades on.
                Interestingly, he'd been a journalist for Time Out and had to
                learn how to make films properly (he claims) after he'd made
                Radio On.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#" className="youtube">
                <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links"> 
            <h4>useful Links</h4>

            <ul>
              {usefullinks.map((link)=>(
                <FooterNavItem key={link} name={link}/>
              ))}
            </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links"> 
            <h4>Our Cinema</h4>
            <ul>
                {
                    locations.map((link)=>(
                        <FooterNavItem key={link} name={link} />
                    ))
                }
            </ul>
            
            
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>contact Us</h4>
                <p>
                    Street Name <br/>
                    City Name , state 12345
                    <br />
                    Australia <br/>
                    <br/>
                 <strong>Phone:</strong>+1 4526 2644 34
                 <br/>
                 <strong>Email:</strong>abcd@gmail.com
                 <br/>
                </p>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
            &copy; Copyright{" "}
            <strong>
                <span>xyx technology</span>
            </strong>
            .All Rights Reserved
        </div>
        <div className="credits"> 
        
         Designed by <a href="#">XYZ technology</a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
