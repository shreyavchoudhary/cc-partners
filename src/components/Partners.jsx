import "../styles/Partners.css";

import partner11 from "../assets/partner11.webp";
import partner2 from "../assets/partner2.webp";
import partner3 from "../assets/partner3.webp";
import partner4 from "../assets/partner4.webp";

const partners = [
  {
    image: partner11,
    name: "Chandan Kumar",
    role: "Co founder and Partner",
  },
  {
    image: partner2,
    name: "Chirag Gupta",
    role: "Co founder and Partner",
  },
  {
    image: partner3,
    name: "Abid Ahmad",
    role: "Partner",
  },
  {
    image: partner4,
    name: "Saurabh Priyadarshi",
    role: "Partner",
  },
];

function Partners() {
  return (
    <section id="partners" className="partners-section">

      <div className="partners-title">
        <span>OUR LEGAL EXPERTS</span>

        <h2>Meet Our Partners</h2>

        <p>
          Our experienced legal professionals are committed to providing
          exceptional legal services with integrity, expertise and dedication.
        </p>
      </div>

      <div className="partners-grid">

        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>

            <div className="partner-image">

              <img src={partner.image} alt={partner.name} />

            </div>

            <div className="partner-content">

              <h3>{partner.name}</h3>

              <p>{partner.role}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Partners;