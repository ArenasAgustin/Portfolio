import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Avatar = lazy(() => import("../components/Avatar/Avatar"));

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Home({ setIsDark, isDark = false }) {
  const [easterEgg, setEasterEgg] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setBackToTop(true);
      else setBackToTop(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="home">
      <ThemeChanger
        isDark={isDark}
        setIsDark={setIsDark}
        setEasterEgg={setEasterEgg}
      />

      <Intro isDark={isDark} />

      <About isDark={isDark} />

      <Education isDark={isDark} />

      <Skills isDark={isDark} />

      <Experience isDark={isDark} />

      <Cards isDark={isDark} />

      <Contact isDark={isDark} />

      <Footer isDark={isDark} />

      <Suspense fallback={renderLoader(isDark)}>
        <Avatar />
      </Suspense>

      {backToTop ? <ScrollToTop isDark={isDark} /> : null}

      {easterEgg ? (
        <Suspense fallback={renderLoader(isDark)}>
          <img src="/astronaut.png" alt="easter egg" className="easter-egg" />
        </Suspense>
      ) : null}
    </div>
  );
}
