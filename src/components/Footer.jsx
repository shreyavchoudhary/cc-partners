// import "../styles/Footer.css";

// function Footer(){

//     return(
//         <footer className="footer">

//             <div className="footer-container">


//                 <div className="footer-about">

//                     <h2>
//                         CC Partners
//                     </h2>

//                     <p>
//                         Providing professional legal solutions with
//                         expertise, dedication and commitment to protect
//                         our clients' interests.
//                     </p>

//                 </div>



//                 <div className="footer-links">

//                     <h3>
//                         Quick Links
//                     </h3>

//                     <a href="/">Home</a>
//                     <a href="#about">About</a>
//                     <a href="#practice">Practice Areas</a>
//                     <a href="#partners">Partners</a>
//                     <a href="#blog">Blog</a>
//                     <a href="#contact">Contact</a>

//                 </div>




//                 <div className="footer-practice">

//                     <h3>
//                         Practice Areas
//                     </h3>

//                     <p>Corporate Law</p>
//                     <p>Property Law</p>
//                     <p>Legal Advice</p>
//                     <p>Litigation</p>

//                 </div>




//                 <div className="footer-contact">

//                     <h3>
//                         Contact
//                     </h3>

//                     <p>
//                         📍 New Delhi
//                     </p>

//                     <p>
//                         📞 +91 90275 42106
//                     </p>

//                     <p>
//                         ✉ info@ccpartners.in
//                     </p>

//                 </div>


//             </div>


//             <div className="footer-bottom">

//                 <p>
//                     © 2026 CC Partners. All Rights Reserved.
//                 </p>

//             </div>


//         </footer>
//     )

// }


// export default Footer;


import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>CC Partners</h2>
          
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-box">
          <h3>Practice Areas</h3>

          <Link to="/private-client-practice">
            Private Client Practice
          </Link>

          <Link to="/banking-finance">
            Banking & Finance
          </Link>

          <Link to="/dispute-resolution">
            Dispute Resolution
          </Link>

          <Link to="/capital-markets">
            Capital Markets
          </Link>

          <Link to="/land-clearance">
            Land Clearance
          </Link>

          <Link to="/real-estate">
            Real Estate Practice
          </Link>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Your Office Address
          </p>

          <p>
            <FaPhoneAlt /> +91 90275 42106
          </p>

          <p>
            <FaEnvelope /> info@ccpartners.in
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CC Partners. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;