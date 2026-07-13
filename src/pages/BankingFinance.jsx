import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BankingFinance() {
  return (
     <>
    <Navbar />
    <section className="practice-detail">

      <h1>Banking & Finance</h1>

      <p><strong>Structuring Financial Transactions with Confidence</strong></p>

      <p>
        We advise banks, NBFCs, financial institutions, lenders,
        borrowers and investors throughout the lending lifecycle.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>Project Finance</li>
        <li>Structured Finance</li>
        <li>Loan Documentation</li>
        <li>Security Creation</li>
        <li>Mortgage Advisory</li>
        <li>Consortium Lending</li>
        <li>Debt Restructuring</li>
        <li>Asset Financing</li>
        <li>SARFAESI Advisory</li>
        <li>IBC Advisory</li>
        <li>Recovery Proceedings</li>
        <li>Enforcement of Security</li>
        <li>Regulatory Compliance</li>
        <li>Banking Litigation</li>
        <li>Due Diligence</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
     <Footer />
  </>
  );
}

export default BankingFinance;