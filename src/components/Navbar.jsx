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

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/cc logo.webp";

function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="CC Partners Logo" />
      </div>

      <ul>

        <li onClick={() => scrollToSection("home")}>
          Home
        </li>

        <li onClick={() => scrollToSection("about")}>
          About
        </li>

        <li onClick={() => scrollToSection("practice")}>
          Practice Areas
        </li>

        <li onClick={() => scrollToSection("partners")}>
          Partners
        </li>

        <li>
          <Link to="/careers">Careers</Link>
        </li>

        <li onClick={() => scrollToSection("contact")}>
          Contact
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
