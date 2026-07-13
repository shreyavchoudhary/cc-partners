import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CapitalMarkets() {
  return (
     <>
    <Navbar />
    <section className="practice-detail">

      <h1>Capital Markets</h1>

      <p>
        <strong>Supporting Businesses Through Growth</strong>
      </p>

      <p>
        We advise issuers, investors, promoters and intermediaries on
        capital market transactions while ensuring regulatory compliance
        and efficient fund raising.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>IPO Advisory</li>
        <li>Private Placement</li>
        <li>Qualified Institutional Placements</li>
        <li>Rights Issues</li>
        <li>Preferential Allotments</li>
        <li>Debt Securities</li>
        <li>Corporate Governance</li>
        <li>SEBI Compliance</li>
        <li>Stock Exchange Regulations</li>
        <li>Merchant Banking Documentation</li>
        <li>Fund Raising</li>
        <li>Corporate Restructuring</li>
        <li>Listing Compliance</li>
        <li>Regulatory Opinions</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
     <Footer />
  </>
  );
}

export default CapitalMarkets;