"use client";

import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect, useState } from "react";

import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NavBtn from "./components/NavBtn/NavBtn";
import Skills from "./components/Skills/Skills";
import styles from "./page.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loader from "./components/Loader/Loader";
import i18n from "./i18n";
import Image from "next/image";
import Head from "next/head";

const Avatar = lazy(() => import("./components/Avatar/Avatar"));

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Home() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleChangeTheme = () => setIsDark((prev) => !prev);

  const { i18n } = useTranslation("global");

  const handleLanguageChange = () => {
    if (i18n.language === "es") i18n.changeLanguage("en");
    else i18n.changeLanguage("es");
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./js/particlesItInit.js";
    script.defer = true;
    script.type = "text/javascript";
    script.id = "particles-it-init";

    if (!document.getElementById("particles-it-init"))
      document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.main}>
      <I18nextProvider i18n={i18n}>
        <div className={`App ${isDark ? "dark" : ""}`}>
          <div id="particles-js"></div>

          <div className="home">
            <NavBtn
              isDark={isDark}
              setIsDark={handleChangeTheme}
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
        </div>
      </I18nextProvider>

      <script defer src="./js/particles.min.js" type="text/javascript"></script>
    </main>
  );
}
