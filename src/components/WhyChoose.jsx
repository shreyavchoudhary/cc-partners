import "../styles/WhyChoose.css";
import {
  FaBalanceScale,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBalanceScale />,
    title: "Experienced Legal Team",
    desc: "Our experienced advocates provide practical and strategic legal advice across multiple practice areas.",
  },
  {
    icon: <FaHandshake />,
    title: "Client-Focused Approach",
    desc: "We believe every client deserves personalized attention and tailored legal solutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Trust",
    desc: "We maintain the highest standards of ethics, confidentiality and professional excellence.",
  },
  {
    icon: <FaUsers />,
    title: "Business-Oriented Solutions",
    desc: "Helping businesses and individuals make informed legal decisions with confidence.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section">

      <div className="why-title">
        <span>WHY CHOOSE CC PARTNERS</span>

        <h2>Committed to Excellence in Every Legal Matter</h2>

        <p>
          We combine legal expertise, strategic thinking and client-focused
          service to deliver exceptional results.
        </p>
      </div>

      <div className="why-grid">

        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;