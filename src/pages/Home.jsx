import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";

export default function Home({ setIsDark }) {
  return (
    <div className="home">
      <ThemeChanger setIsDark={setIsDark} />

      <Intro />

      <About />

      <Education />

      <Skills />

      <Cards />

      <Contact />

      <Footer />
    </div>
  );
}
