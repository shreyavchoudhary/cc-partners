import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";

function PrivateClientPractice() {
  return (
    <section className="practice-detail">
      <h1>Private Client Practice</h1>

      <p>
        <strong>Protecting Wealth Across Generations</strong>
      </p>

      <p>
        We advise High Net Worth Individuals (HNIs), promoters,
        entrepreneurs and family offices on preserving, managing and
        transferring wealth efficiently while minimizing legal and tax risks.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>Estate Planning</li>
        <li>Succession Planning</li>
        <li>Wills</li>
        <li>Trust Formation</li>
        <li>Family Settlements</li>
        <li>Asset Protection</li>
        <li>Inheritance Planning</li>
        <li>Cross-border Estate Planning</li>
        <li>Gift Structuring</li>
        <li>Tax-efficient Wealth Transfer</li>
        <li>Family Constitutions</li>
        <li>Private Investments</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </section>
  );
}

export default PrivateClientPractice;