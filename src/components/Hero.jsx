
// import "../styles/Hero.css";
// import hero from "../assets/hero.jpg";

// function Hero() {
//   return (
//     <section
//       className="hero"
//       style={{ backgroundImage: `url(${hero})` }}
//     >
//       <div className="overlay">
//         <div className="hero-content">

//           <h1>Your Trusted Legal Partners</h1>

//           <p>
//             Delivering practical, strategic and result-oriented legal
//             solutions with professionalism, integrity and excellence.
//           </p>

//           <div className="buttons">
//             <button className="primary">Get Consultation</button>
//             <button className="secondary">Learn More</button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import "../styles/Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home"
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <div className="hero-content">

          <h1>Your Trusted Legal Partners</h1>

          <p>
            Delivering practical, strategic and result-oriented legal
            solutions with professionalism, integrity and excellence.
          </p>

          <div className="buttons">
            <button
              className="primary"
              onClick={() => scrollToSection("contact")}
            >
              Get Consultation
            </button>

            <button
              className="secondary"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;