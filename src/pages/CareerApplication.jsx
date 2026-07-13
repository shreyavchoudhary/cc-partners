
import "../styles/CareerApplication.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/CareerApplication.css";
import { useState } from "react";

function CareerApplication() {
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
  e.preventDefault();

  setSuccess(true);

  e.target.reset();
};
  return (
    <>
    <Navbar />
    <section className="career-application">
    <div className="application-top">

  <Link to="/careers" className="back-btn">
    ← Back to Careers
  </Link>

</div>

      <div className="application-container">

        <div className="application-left">

          <span>CAREERS</span>

          <h1>Apply for a Position</h1>

          <p>
            Thank you for your interest in joining CC Partners.
            Please complete the application form below. Our recruitment
            team will review your application and contact shortlisted
            candidates.
          </p>

          <div className="info-box">
            <h3>Email</h3>
            <p>info@ccpartners.in</p>
          </div>

        </div>

        <div className="application-right">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <select required>
              <option>Select Position</option>
              <option>Associate Lawyer</option>
              <option>Corporate Legal Associate</option>
              <option>Litigation Associate</option>
              <option>Legal Intern</option>
            </select>

            <textarea
              rows="5"
              placeholder="Cover Letter"
            ></textarea>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
            />

            <button type="submit">
              Submit Application
            </button>

          </form>

        </div>

      </div>

      {success && (
  <div className="success-popup">

    <div className="popup-box">

      <h2>✅ Application Submitted</h2>

      <p>
        Thank you for applying at CC Partners.
        We will contact you shortly.
      </p>

      <button
        onClick={() => setSuccess(false)}
      >
        OK
      </button>

    </div>

  </div>
)}
    </section>
    <Footer />
    </>
  );
}

export default CareerApplication;