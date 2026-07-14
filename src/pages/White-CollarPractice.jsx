import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WhiteCollarCriminalDefence() {
  return (
    <>
      <Navbar />

      <section className="practice-detail">

       <div className="page-title">
  <h1 className="practice-title-detail" >White-Collar Crime & Criminal Defence</h1>

</div>
        <p>
          <strong>
            Strategic Legal Representation in White-Collar Crime and Criminal Defence Matters
          </strong>
        </p>

        <p>
          We represent individuals, corporate entities, promoters, directors,
          senior executives, and financial institutions in complex criminal
          investigations, regulatory proceedings, and court litigation. Our team
          provides practical, timely, and result-oriented legal solutions while
          protecting our clients' rights and business interests.
        </p>

        <h2>Our Services</h2>

        <ul>
          <li>White-Collar Crime Defence</li>
          <li>Criminal Litigation</li>
          <li>Economic Offences</li>
          <li>Corporate Fraud Investigations</li>
          <li>Financial Crime Advisory</li>
          <li>Money Laundering (PMLA) Matters</li>
          <li>Enforcement Directorate (ED) Proceedings</li>
          <li>CBI Investigations</li>
          <li>SFIO Investigations</li>
          <li>Income Tax Prosecution</li>
          <li>GST & Customs Prosecution</li>
          <li>Cheque Bounce Cases (NI Act)</li>
          <li>Cyber Crime Cases</li>
          <li>Bail Applications</li>
          <li>Anticipatory Bail</li>
          <li>Trial Representation</li>
          <li>Appeals & Revisions</li>
          <li>Criminal Writ Petitions</li>
          <li>Regulatory Investigations</li>
          <li>Internal Corporate Investigations</li>
          <li>Compliance Advisory</li>
          <li>Search & Seizure Matters</li>
          <li>Police Complaints & FIR Matters</li>
          <li>High Court & Supreme Court Litigation</li>
        </ul>

        <h2>Industries We Serve</h2>

        <ul>
          <li>Corporate Houses</li>
          <li>Financial Institutions</li>
          <li>Banks & NBFCs</li>
          <li>Listed Companies</li>
          <li>Private Companies</li>
          <li>Startups</li>
          <li>Manufacturing Companies</li>
          <li>Real Estate Developers</li>
          <li>Technology Companies</li>
          <li>Healthcare Organizations</li>
          <li>Hospitality Businesses</li>
          <li>Logistics Companies</li>
          <li>Educational Institutions</li>
          <li>High Net Worth Individuals (HNIs)</li>
          <li>Directors & Promoters</li>
          <li>Professionals & Executives</li>
          <li>International Businesses</li>
          <li>Foreign Investors</li>
        </ul>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

      </section>

      <Footer />
    </>
  );
}

export default WhiteCollarCriminalDefence;