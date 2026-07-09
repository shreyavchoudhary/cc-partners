import "../styles/Contact.css";

function Contact(){

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
              New Delhi, India
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



        <div className="contact-form">


          <input 
          type="text"
          placeholder="Your Name"
          />


          <input
          type="email"
          placeholder="Your Email"
          />


          <textarea
          placeholder="Your Message"
          rows="5"
          ></textarea>


          <button>
            Send Message
          </button>


        </div>



      </div>


    </section>

  )

}


export default Contact;