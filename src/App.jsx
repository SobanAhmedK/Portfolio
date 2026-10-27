import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

import CustomCursor       from "./components/CustomCursor";
import Navbar             from "./components/Navbar";
import Hero               from "./components/Hero";
import TechnologyMarquee  from "./components/TechnologyMarquee";
import Expertise          from "./components/Expertise";
import FeaturedProjects   from "./components/FeaturedProjects";
import Impact             from "./components/Impact";
import Toolkit            from "./components/Toolkit";
import Experience         from "./components/Experience";
import About              from "./components/About";
import Education          from "./components/Education";
import Contact            from "./components/Contact";
import Footer             from "./components/Footer";

function App() {
  useEffect(() => {
    // Force dark class for ChatBot legacy dark: classes
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechnologyMarquee />
        <Expertise />
        <FeaturedProjects />
        <Impact />
        <Toolkit />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
