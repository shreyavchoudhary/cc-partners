import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";

function RealEstatePractice() {
  return (
    <section className="practice-detail">

      <h1>Real Estate Practice</h1>

      <p>
        <strong>Comprehensive Legal Support Throughout the Development Lifecycle</strong>
      </p>

      <p>
        We assist developers, investors, landowners and financial
        institutions in every stage of a real estate project.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>Joint Development Agreements</li>
        <li>Development Management Agreements</li>
        <li>Development Rights</li>
        <li>Collaboration Agreements</li>
        <li>Sale Deeds</li>
        <li>Conveyancing</li>
        <li>Lease Documentation</li>
        <li>Commercial Leasing</li>
        <li>Construction Contracts</li>
        <li>EPC Contracts</li>
        <li>RERA Compliance</li>
        <li>Town Planning</li>
        <li>Approvals</li>
        <li>Title Due Diligence</li>
        <li>Project Finance Support</li>
        <li>Real Estate Investment Structuring</li>
        <li>Redevelopment Projects</li>
        <li>Township Projects</li>
        <li>Industrial Parks</li>
        <li>Warehousing</li>
        <li>Data Centers</li>
        <li>Hospitality Projects</li>
        <li>Residential Projects</li>
        <li>Commercial Projects</li>
        <li>Mixed-use Developments</li>
      </ul>

      <h2>Industries We Serve</h2>

      <ul>
        <li>Real Estate Developers</li>
        <li>Banks</li>
        <li>NBFCs</li>
        <li>Private Equity Funds</li>
        <li>Infrastructure Companies</li>
        <li>Manufacturing</li>
        <li>MSMEs</li>
        <li>Technology Companies</li>
        <li>Family Offices</li>
        <li>High Net Worth Individuals</li>
        <li>Hospitality</li>
        <li>Healthcare</li>
        <li>Education</li>
        <li>Logistics</li>
        <li>Renewable Energy</li>
        <li>Construction Companies</li>
        <li>Startups</li>
        <li>International Investors</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
  );
}

export default RealEstatePractice;