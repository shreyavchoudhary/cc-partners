// import { Link } from "react-router-dom";
// import "../styles/PracticeDetail.css";

// function Careers() {
//   return (
//     <section className="practice-detail">

//       <h1>Careers at CC Partners</h1>

//       <p>
//         <strong>Build Your Legal Career With Us</strong>
//       </p>

//       <p>
//         At CC Partners, we are always looking for talented, motivated,
//         and passionate legal professionals who are committed to
//         excellence and client service.
//       </p>

//       <h2>Who Can Apply?</h2>

//       <ul>
//         <li>Law Graduates</li>
//         <li>Experienced Advocates</li>
//         <li>Legal Associates</li>
//         <li>Corporate Lawyers</li>
//         <li>Interns</li>
//         <li>Paralegals</li>
//       </ul>

//       <h2>Why Join CC Partners?</h2>

//       <ul>
//         <li>Professional Growth</li>
//         <li>Collaborative Work Environment</li>
//         <li>Mentorship by Senior Partners</li>
//         <li>Exposure to High-Profile Matters</li>
//         <li>Continuous Learning Opportunities</li>
//       </ul>

//       <p style={{ marginTop: "30px" }}>
//         Interested candidates can send their resume to:
//       </p>

//       <h3>careers@ccpartners.in</h3>

//       <Link to="/" className="back-btn">
//         ← Back to Home
//       </Link>

//     </section>
//   );
// }

// export default Careers;

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/careers.css";

function Careers() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <section className="careers-page">

      {/* HERO */}
      <div className="career-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <span>JOIN OUR TEAM</span>

          <h1>Careers at CC Partners</h1>

          <p>
            Build your legal career with one of India's trusted law firms.
            We value integrity, innovation and professional excellence.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/career-application")}
          > 
           Apply Now
           </button>
        </div>
      </div>

      {/* WHY JOIN */}
      <section className="career-section">
        <h2>Why Join CC Partners</h2>

        <div className="career-grid">
          <div className="career-card">
            <h3>Professional Growth</h3>
            <p>Continuous learning and career development.</p>
          </div>

          <div className="career-card">
            <h3>Mentorship</h3>
            <p>Work closely with experienced legal professionals.</p>
          </div>

          <div className="career-card">
            <h3>High Profile Matters</h3>
            <p>Handle corporate and complex legal matters.</p>
          </div>

          <div className="career-card">
            <h3>Collaborative Culture</h3>
            <p>Friendly environment with strong teamwork.</p>
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="career-section">
        <h2>Current Openings</h2>

        <div className="jobs">
          <div className="job-card">
            <h3>Associate Lawyer</h3>
            <p>2-5 Years Experience</p>
          </div>

          <div className="job-card">
            <h3>Corporate Legal Associate</h3>
            <p>Corporate Law Practice</p>
          </div>

          <div className="job-card">
            <h3>Litigation Associate</h3>
            <p>District & High Court Matters</p>
          </div>

          <div className="job-card">
            <h3>Legal Intern</h3>
            <p>Law Students (Final Year Preferred)</p>
          </div>
        </div>
      </section>

      {/* HIRING */}
      <section className="career-section">
        <h2>Hiring Process</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Apply</h3>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Interview</h3>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Assessment</h3>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Join Team</h3>
          </div>
        </div>
      </section>

      {/* APPLY BOX */}
      <section className="apply-box">
        <h2>Ready To Join Our Team?</h2>

        <p>Send your updated resume to</p>

        <h3>careers@ccpartners.in</h3>

       <button
className="apply-btn"
onClick={() => navigate("/career-application")}
>
Submit Resume
</button>
      </section>


    </section>
    <Footer />
    </>
  );
}

export default Careers;