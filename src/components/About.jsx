import "../styles/About.css";
import about from "../assets/aboutuss.jpeg";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-content">

        <span className="small-title">About Us</span>

        <h2>Welcome to CC Partners</h2>

        <p>
          We believe exceptional legal counsel goes beyond interpreting the law—it empowers decisions, protects investments, and creates opportunities.
        </p>

        <p>
          Our firm advises corporations, financial institutions, developers, investors, entrepreneurs, and private clients on complex legal and commercial matters across diverse sectors.
        </p>

        <p>Driven by a deep understanding of business, we deliver advice that is commercially sound, strategically focused, and tailored to every client's objectives.</p>
        <p>We are committed to building lasting relationships founded on trust, responsiveness, and uncompromising professional standards.</p>

        {/* <a href="#">→ Our Story</a> */}

      </div>

      <div className="about-image">

        <img src={about} alt="CC Partners"/>

      </div>

    </section>
  );
}

export default About;