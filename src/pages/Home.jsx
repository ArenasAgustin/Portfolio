import { lazy, Suspense, useEffect, useState } from "react";
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
const ScrollToTop = lazy(() => import("../components/ScrollToTop/ScrollToTop"));

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Home({ setIsDark, isDark = false }) {
  const [easterEgg, setEasterEgg] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setBackToTop(true);
      else setBackToTop(false);
    });
  }, []);

  return (
    <div className="home">
      <Suspense fallback={renderLoader(isDark)}>
        <ThemeChanger
          isDark={isDark}
          setIsDark={setIsDark}
          setEasterEgg={setEasterEgg}
        />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Intro isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <About isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Education isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Skills isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Experience isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Cards isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Contact isDark={isDark} />
      </Suspense>

      <Suspense fallback={renderLoader(isDark)}>
        <Footer isDark={isDark} />
      </Suspense>

      {backToTop ? (
        <Suspense fallback={renderLoader(isDark)}>
          <ScrollToTop isDark={isDark} />
        </Suspense>
      ) : null}

      {easterEgg ? (
        <Suspense fallback={renderLoader(isDark)}>
          <img src="/astronaut.png" alt="easter egg" className="easter-egg" />
        </Suspense>
      ) : null}
    </div>
  );
}
