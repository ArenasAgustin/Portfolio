import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import NavBtn from "../components/NavBtn/NavBtn";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

const Avatar = lazy(() => import("../components/Avatar/Avatar"));

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Home({ setIsDark, isDark = false }) {
  const [easterEgg, setEasterEgg] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  const { i18n } = useTranslation("global");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setBackToTop(true);
      else setBackToTop(false);
    });

    i18n.changeLanguage("es");

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleLanguageChange = () => {
    if (i18n.language === "es") i18n.changeLanguage("en");
    else i18n.changeLanguage("es");
  };

  return (
    <div className="home">
      <NavBtn
        isDark={isDark}
        setIsDark={setIsDark}
        setEasterEgg={setEasterEgg}
        handleLanguageChange={handleLanguageChange}
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
          <img
            src="/astronaut.png"
            alt="easter egg"
            loading="lazy"
            className="easter-egg"
            width="100%"
            height="100%"
          />
        </Suspense>
      ) : null}
    </div>
  );
}
