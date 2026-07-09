import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";

function Careers() {
  return (
    <section className="practice-detail">

      <h1>Careers at CC Partners</h1>

      <p>
        <strong>Build Your Legal Career With Us</strong>
      </p>

      <p>
        At CC Partners, we are always looking for talented, motivated,
        and passionate legal professionals who are committed to
        excellence and client service.
      </p>

      <h2>Who Can Apply?</h2>

      <ul>
        <li>Law Graduates</li>
        <li>Experienced Advocates</li>
        <li>Legal Associates</li>
        <li>Corporate Lawyers</li>
        <li>Interns</li>
        <li>Paralegals</li>
      </ul>

      <h2>Why Join CC Partners?</h2>

      <ul>
        <li>Professional Growth</li>
        <li>Collaborative Work Environment</li>
        <li>Mentorship by Senior Partners</li>
        <li>Exposure to High-Profile Matters</li>
        <li>Continuous Learning Opportunities</li>
      </ul>

      <p style={{ marginTop: "30px" }}>
        Interested candidates can send their resume to:
      </p>

      <h3>careers@ccpartners.in</h3>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
  );
}

export default Careers;