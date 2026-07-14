import "../styles/BlogDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PropertyLaw(){

  return(
      <>
    <Navbar />

    <section className="blog-detail">

      <div className="blog-container">


        <span className="blog-category">
          PROPERTY LAW
        </span>



        <h1>
          Property Law: Things You Should Know
        </h1>



        <p className="blog-intro">

          Understanding property laws is important before
          buying, selling or transferring any property.

        </p>



        <div className="blog-content">


          <h2 className="practice-title-detail">
            Importance of Property Verification
          </h2>

          <p>
            Before any property transaction, proper document
            verification helps ensure ownership clarity and
            prevents future disputes.
          </p>



          <h2>
            Common Property Legal Issues
          </h2>

          <p>
            Property disputes, ownership conflicts and
            documentation issues can create legal challenges.
            Professional advice helps resolve such matters.
          </p>



          <h2>
            How We Assist Clients
          </h2>

          <p>
            Our legal team provides guidance for property
            transactions, documentation and dispute resolution.
          </p>


        </div>


      </div>


    </section>
     <Footer />
  </>

  )

}


export default PropertyLaw;