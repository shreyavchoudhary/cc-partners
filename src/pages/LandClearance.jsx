import { Link } from "react-router-dom";
import "../styles/PracticeDetail.css";

function LandClearance() {
  return (
    <section className="practice-detail">

      <h1>Land Clearance & Dispute Handling</h1>

      <p>
        <strong>One of Our Core Specializations</strong>
      </p>

      <p>
        We help developers, investors, infrastructure companies and
        institutions secure legally clean, litigation-free land for
        successful development projects.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>Title Investigation</li>
        <li>Chain of Documents Verification</li>
        <li>Revenue Records Verification</li>
        <li>Mutation Verification</li>
        <li>Land Due Diligence</li>
        <li>Government Approvals</li>
        <li>Land Acquisition Support</li>
        <li>Farmland Conversion</li>
        <li>Consolidation Issues</li>
        <li>Encroachment Removal</li>
        <li>Boundary Verification</li>
        <li>Title Insurance Advisory</li>
        <li>Compensation Matters</li>
        <li>Land Litigation</li>
        <li>Revenue Litigation</li>
        <li>Mutation Proceedings</li>
        <li>Collector Matters</li>
        <li>Tehsildar Proceedings</li>
        <li>NCLT Related Land Issues</li>
        <li>Developer Risk Assessment</li>
        <li>Large Scale Land Aggregation</li>
      </ul>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

    </section>
  );
}

export default LandClearance;