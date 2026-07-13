// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
// import logo from "../assets/cc logo.webp";

// function Navbar() {
//   return (
//     <nav>
//       <div className="logo">
//         <img src={logo} alt="CC Partners Logo" />
//       </div>

//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Practice Areas</a></li>
//         <li><a href="#">Partners</a></li>
//         <li>
//            <Link to="/careers">Careers</Link>
//          </li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;




// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
// import logo from "../assets/cc logo.webp";

// function Navbar() {

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <nav>
//       <div className="logo">
//         <img src={logo} alt="CC Partners Logo" />
//       </div>

//       <ul>

//         <li onClick={() => scrollToSection("home")}>
//           Home
//         </li>

//         <li onClick={() => scrollToSection("about")}>
//           About
//         </li>

//         <li onClick={() => scrollToSection("practice")}>
//           Practice Areas
//         </li>

//         <li onClick={() => scrollToSection("partners")}>
//           Partners
//         </li>

//         <li>
//           <Link to="/careers">Careers</Link>
//         </li>

//         <li onClick={() => scrollToSection("contact")}>
//           Contact
//         </li>

//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



// import "../styles/Navbar.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/cc logo.webp";

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const goToSection = (id) => {
//     if (location.pathname !== "/") {
//       navigate("/", { state: { section: id } });
//     } else {
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   };

//   return (
//     <nav>
//       <div className="logo">
//         <img src={logo} alt="CC Partners Logo" />
//       </div>

//       <ul>
//   <li>
//     <Link to="/" onClick={() => goToSection("home")}>
//       Home
//     </Link>
//   </li>

//   <li>
//     <Link to="/" onClick={() => goToSection("about")}>
//       About
//     </Link>
//   </li>

//   <li>
//     <Link to="/" onClick={() => goToSection("practice")}>
//       Practice Areas
//     </Link>
//   </li>

//   <li>
//     <Link to="/" onClick={() => goToSection("partners")}>
//       Partners
//     </Link>
//   </li>

//   <li>
//     <Link
//       to="/careers"
//       className={location.pathname === "/careers" ? "active" : ""}
//     >
//       Careers
//     </Link>
//   </li>

//   <li>
//     <Link to="/" onClick={() => goToSection("contact")}>
//       Contact
//     </Link>
//   </li>
// </ul>
//     </nav>
//   );
// }

// export default Navbar;







// 



import "../styles/Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/cc logo.webp";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { section: id } });
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="CC Partners" />
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li onClick={() => goToSection("home")}>Home</li>

        <li onClick={() => goToSection("about")}>About</li>

        <li onClick={() => goToSection("practice")}>
          Practice Areas
        </li>

        <li onClick={() => goToSection("partners")}>
          Partners
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/careers">Careers</Link>
        </li>

        <li onClick={() => goToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;