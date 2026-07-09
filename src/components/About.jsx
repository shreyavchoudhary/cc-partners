import "../styles/About.css";
import logo from "../assets/cc logo.webp";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-content">

        <span className="small-title">About Us</span>

        <h2>Welcome to CC Partners</h2>

        <p>
          CC Partners brings together experienced legal professionals
          dedicated to delivering practical, strategic and business-focused
          legal solutions.
        </p>

        <p>
          We believe in building long-term client relationships through
          integrity, transparency and excellence.
        </p>

        {/* <a href="#">→ Our Story</a> */}

      </div>

      <div className="about-image">

        <img src={logo} alt="CC Partners"/>

      </div>

    </section>
  );
}

export default About;