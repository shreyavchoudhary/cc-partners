import "../styles/Contact.css";
import { useState } from "react";

function Contact(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert(result.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};
  return(


    <section id="contact" className="contact">

      <div className="contact-container">


        <div className="contact-info">

          <h2>
            Contact Us
          </h2>

          <p>
            Have a legal concern? Our experienced team is
            ready to provide professional assistance.
          </p>


          <div className="contact-item">
            <h4>Address</h4>
            <p>
             C-6, 1st & 2nd Floor, Tees Hazari Court,
              <p>New Delhi — 110054</p>
            </p>
          </div>


          <div className="contact-item">
            <h4>Email</h4>
            <p>
              info@ccpartners.in
            </p>
          </div>


          <div className="contact-item">
            <h4>Phone</h4>
            <p>
              +91 90275 42106
            </p>
          </div>


        </div>



        <form className="contact-form" onSubmit={handleSubmit}>


          <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  required
/>

          <input
  type="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  required
/>


          <textarea
  placeholder="Your Message"
  rows="5"
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  required
></textarea>


          <button type="submit">
           Send Message
          </button>


        </form>
        {success && (
  <div className="success-popup">
    <div className="popup-box">

      <h2>✅ Message Sent</h2>

      <p>
        Thank you for contacting CC Partners.
        We will get back to you shortly.
      </p>

      <button
        onClick={() => setSuccess(false)}
      >
        OK
      </button>

    </div>
  </div>
)}


      </div>


    </section>

  )

}


export default Contact;