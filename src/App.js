import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
