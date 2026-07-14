
import "../styles/CareerApplication.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/CareerApplication.css";
import { useState } from "react";

function CareerApplication() {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  position: "",
  coverLetter: "",
});

const [resume, setResume] = useState(null);
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("position", formData.position);
  data.append("coverLetter", formData.coverLetter);

  if (resume) {
    data.append("resume", resume);
  }

  try {
    const response = await fetch("http://localhost:5000/api/career", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
      });

      setResume(null);
    } else {
      alert(result.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
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
  value={formData.fullName}
  onChange={(e) =>
    setFormData({ ...formData, fullName: e.target.value })
  }
  required
/>

           <input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  required
/>

            <input
  type="tel"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  required
/>

           <select
  value={formData.position}
  onChange={(e) =>
    setFormData({ ...formData, position: e.target.value })
  }
  required
>
  <option value="">Select Position</option>
  <option>Associate Lawyer</option>
  <option>Corporate Legal Associate</option>
  <option>Litigation Associate</option>
  <option>Legal Intern</option>
</select>

<textarea
  rows="5"
  placeholder="Cover Letter"
  value={formData.coverLetter}
  onChange={(e) =>
    setFormData({ ...formData, coverLetter: e.target.value })
  }
/>

<input
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={(e) => setResume(e.target.files[0])}
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