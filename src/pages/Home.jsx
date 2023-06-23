//import Cards from "../components/Cards/Cards";
//import Intro from "../components/Intro/Intro";
//import About from "../components/About/About";
//import Contact from "../components/Contact/Contact";
//import Footer from "../components/Footer/Footer";
//import ThemeChanger from "../components/ThemeChanger/ThemeChanger";
//import Education from "../components/Education/Education";
//import Skills from "../components/Skills/Skills";
//import Experience from "../components/Experience/Experience";
import { lazy, Suspense, useState } from "react";
import Loader from "../components/Loader/Loader";

const Cards = lazy(() => import("../components/Cards/Cards"));
const Intro = lazy(() => import("../components/Intro/Intro"));
const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const ThemeChanger = lazy(() =>
  import("../components/ThemeChanger/ThemeChanger")
);
const Education = lazy(() => import("../components/Education/Education"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Experience = lazy(() => import("../components/Experience/Experience"));

const renderLoader = () => <Loader />;

export default function Home({ setIsDark, isDark }) {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <div className="home">
      <Suspense fallback={renderLoader()}>
        <ThemeChanger
          isDark={isDark}
          setIsDark={setIsDark}
          setEasterEgg={setEasterEgg}
        />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Intro />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <About />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Education />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Skills />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Experience />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Cards />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Contact />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <Footer />
      </Suspense>

      {easterEgg ? (
        <img src="/astronaut.png" alt="easter egg" className="easter-egg" />
      ) : null}
    </div>
  );
}
