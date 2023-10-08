"use client";

import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect, useState } from "react";

import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import NavBtn from "../components/NavBtn/NavBtn";
import Skills from "../components/Skills/Skills";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Loader from "../components/Loader/Loader";
import Image from "next/image";
import Stars from "../components/Stars/Stars";
import i18n from "./i18n";

const Avatar = lazy(() => import("../components/Avatar/Avatar"));

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Home() {
  const [easterEgg, setEasterEgg] = useState(0);
  const [backToTop, setBackToTop] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleChangeTheme = () => setIsDark((prev) => !prev);

  const { i18n } = useTranslation("global");

  const handleLanguageChange = () => {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setBackToTop(true);
      else setBackToTop(false);
    });

    i18n.changeLanguage("es");

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [i18n]);

  return (
    <main>
      <I18nextProvider i18n={i18n}>
        <div className={`App ${isDark ? "dark" : ""}`}>
          <div className="home">
            <NavBtn
              isDark={isDark}
              setIsDark={handleChangeTheme}
              setEasterEgg={setEasterEgg}
              handleLanguageChange={handleLanguageChange}
            />

            <Intro isDark={isDark} />

            <div id="about" />
            <br />

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
                <Image
                  src={require("./astronaut.png")}
                  alt="easter egg"
                  loading="lazy"
                  className="easter-egg"
                  width="100%"
                  height="100%"
                />
              </Suspense>
            ) : null}
          </div>

          <Stars isDark={isDark} />
        </div>
      </I18nextProvider>
    </main>
  );
}
