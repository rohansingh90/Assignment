import React from "react";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import OurWork from "./Pages/OurWork";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Comoponents/Footer";
import Navbar from './Comoponents/Navbar'
const App = () => {
  return (
    <div className="overflow-scroll">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="our-work">
        <OurWork />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <Footer />
    </div>
  );
};

export default App;
