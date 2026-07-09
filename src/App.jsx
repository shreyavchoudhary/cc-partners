import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MainLayout from "./layouts/MainLayout";
import PracticeAreas from "./components/PracticeAreas";
import Partners from "./components/Partners";
import WhyChoose from "./components/WhyChoose";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CorporateLaw from "./pages/CorporateLaw.jsx";
import LegalAdvice from "./pages/LegalAdvice";
import PropertyLaw from "./pages/PropertyLaw";

import PrivateClientPractice from "./pages/PrivateClientPractice";
import BankingFinance from "./pages/BankingFinance";
import DisputeResolution from "./pages/DisputeResolution";
import CapitalMarkets from "./pages/CapitalMarkets";
import LandClearance from "./pages/LandClearance";
import RealEstatePractice from "./pages/RealEstatePractice";

import Careers from "./pages/Careers";


function Home(){

  return(
    <>
      <Navbar />
      <div id="home">
  <Hero />
</div>

      <MainLayout>
         <div id="about">
         <About />
         </div>
        <div id="practice">
  <PracticeAreas />
</div>
       <div id="partners">
  <Partners />
</div>
        <WhyChoose />
        <Blog />
        <div id="contact">
         <Contact />
        </div>
        <Footer />
      </MainLayout>
    </>
  )

}


function App() {

  return (

    <Routes>

      <Route 
        path="/"
        element={<Home />}
      />


      <Route
        path="/blog/corporate-legal-compliance"
        element={<CorporateLaw />}
      />

      <Route
 path="/blog/legal-advice"
 element={<LegalAdvice />}
/>


<Route
 path="/blog/property-law"
 element={<PropertyLaw />}
/>

<Route path="/private-client-practice" element={<PrivateClientPractice />} />
<Route path="/banking-finance" element={<BankingFinance />} />
<Route path="/dispute-resolution" element={<DisputeResolution />} />
<Route path="/capital-markets" element={<CapitalMarkets />} />
<Route path="/land-clearance" element={<LandClearance />} />
<Route path="/real-estate" element={<RealEstatePractice />} />  

<Route path="/careers" element={<Careers />} />

    </Routes>

  );

}

export default App;