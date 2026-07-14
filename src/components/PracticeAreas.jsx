// import "./../styles/PracticeAreas.css";

// const areas = [
//   "Private Client Practice",
//   "Banking & Finance",
//   "Dispute Resolution",
//   "Capital Markets",
//   "Land Clearance & Dispute Handling",
//   "Real Estate Practice",
// ];

// function PracticeAreas() {
//   return (
//     <section className="practice-section">

//       <div className="practice-header">
//         <span>Practice Areas</span>
//         <h2>Legal Expertise Across Every Sector</h2>
//         <p>
//           We provide strategic legal advice tailored to businesses,
//           entrepreneurs and individuals.
//         </p>
//       </div>

//       <div className="practice-grid">

//         {areas.map((item, index) => (
//           <div className="practice-card" key={index}>

//             <div className="icon">⚖</div>

//             <h3>{item}</h3>

//             <a href="#">Learn More →</a>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default PracticeAreas;











import "../styles/PracticeAreas.css";
import { Link } from "react-router-dom";

import {
  FaUserTie,
  FaUniversity,
  FaBalanceScale,
  FaChartLine,
  FaMapMarkedAlt,
  FaHome,
} from "react-icons/fa";

const practiceAreas = [
  {
    icon: <FaUserTie />,
    title: "Private Client Practice",
    desc: "Protecting wealth across generations through strategic estate and succession planning.",
    link: "/private-client-practice",
  },
  {
    icon: <FaUniversity />,
    title: "Banking & Finance",
    desc: "Structuring financial transactions with confidence for lenders and borrowers.",
    link: "/banking-finance",
  },
  {
    icon: <FaBalanceScale />,
    title: "Dispute Resolution",
    desc: "Strategic representation in litigation, arbitration and commercial disputes.",
    link: "/dispute-resolution",
  },
  {
    icon: <FaChartLine />,
    title: "Capital Markets",
    desc: "Supporting businesses through IPOs, investments and regulatory compliance.",
    link: "/capital-markets",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Land Clearance & Dispute Handling",
    desc: "Ensuring legally secure land acquisition and dispute-free development.",
    link: "/land-clearance",
  },
  {
    icon: <FaHome />,
    title: "Real Estate Practice",
    desc: "Comprehensive legal support across the complete real estate lifecycle.",
    link: "/real-estate",
  },
  {
  icon: <FaBalanceScale />,
  title: "White Collar Crime & Criminal Defence",
  desc: "Strategic legal representation in white collar crimes, criminal investigations, prosecutions, bail, trials, and appellate matters.",
  link: "/white-collar-criminal-defence",
},
];

function PracticeAreas() {
  return (
    <section id="practice" className="practice-section">

      <div className="practice-title">
        <span>OUR PRACTICE AREAS</span>

        <h2 className="info">Legal Expertise Across Every Sector</h2>

        <p>
          We provide strategic legal advice tailored to businesses,
          entrepreneurs and individuals across diverse practice areas.
        </p>
      </div>

    <div className="practice-grid">
  {practiceAreas.map((area, index) => (
    <div className="practice-card" key={index}>

      {/* Sirf White Collar card ke liye badge */}
      {area.title === "White Collar Crime & Criminal Defence" && (
        <span className="card-expert-badge">
          EXPERT FIELD
        </span>
      )}

      <div className="practice-icon">
        {area.icon}
      </div>

      <h3 className="practice-title-detail">{area.title}</h3>

      <p>{area.desc}</p>

      <Link to={area.link} className="learn-btn">
        Learn More →
      </Link>

    </div>
  ))}
</div>

    </section>
  );
}

export default PracticeAreas;