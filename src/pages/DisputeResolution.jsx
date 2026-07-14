import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DisputeResolution() {
  return (
      <>
    <Navbar />
    <section className="practice-detail">

      <h1 className="practice-title-detail">Dispute Resolution</h1>

      <p>
        <strong>Strategic Resolution of Commercial Disputes</strong>
      </p>

      <p>
        We represent clients before courts, tribunals and arbitral
        institutions across India, providing practical legal solutions
        for complex commercial and civil disputes.
      </p>

      <h2>Practice Areas</h2>

      <ul>
        <li>Commercial Litigation</li>
        <li>Civil Litigation</li>
        <li>Banking Disputes</li>
        <li>Property Disputes</li>
        <li>Recovery Matters</li>
        <li>Contract Disputes</li>
        <li>Shareholder Disputes</li>
        <li>Construction Disputes</li>
        <li>Partnership Disputes</li>
        <li>Corporate Litigation</li>
        <li>Arbitration</li>
        <li>Mediation</li>
        <li>Conciliation</li>
        <li>Insolvency Proceedings</li>
        <li>Execution Proceedings</li>
        <li>Interim Relief</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
    <Footer />
  </>
  );
}

export default DisputeResolution;