import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import { useState } from "react";

export default function Home({ setIsDark, isDark }) {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <div className="home">
      <ThemeChanger isDark={isDark} setIsDark={setIsDark} setEasterEgg={setEasterEgg} />

      <Intro />

      <About />

      <Education />

      <Skills />

      <Experience />

      <Cards />

      <Contact />

      <Footer />

      {easterEgg ? (
        <img src="/astronaut.png" alt="easter egg" className="easter-egg" />
      ) : null}
    </div>
  );
}
