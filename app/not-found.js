"use client";

import { Suspense, useState } from "react";
import Stars from "@/components/Stars/Stars";
import NavBtn from "@/components/NavBtn/NavBtn";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import Button from "@/components/Button/Button";

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Error404() {
  const [isDark, setIsDark] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [i18n, setI18n] = useState("es");

  const handleChangeTheme = () => setIsDark((prev) => !prev);

  const handleLanguageChange = () => {
    i18n === "es" ? setI18n("en") : setI18n("es");
  };

  return (
    <main>
      <div className={`App ${isDark ? "dark" : ""}`}>
        <NavBtn
          isDark={isDark}
          setIsDark={handleChangeTheme}
          setEasterEgg={setEasterEgg}
          handleLanguageChange={handleLanguageChange}
          lang={i18n}
        />

        <div className="error-404">
          <h1 className="title">404</h1>

          <p className="txt">
            {i18n === "es" ? "Página no encontrada" : "Page not found"}
          </p>

          <a
            className={`error__link ${isDark ? "error__link--dark" : ""}`}
            href="/"
          >
            <p className={`error__txt ${isDark ? "error__txt--dark" : ""}`}>
              {i18n === "es" ? "Volver al inicio" : "Go back to home"}
            </p>
          </a>
        </div>

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

        <Stars isDark={isDark} />
      </div>
    </main>
  );
}
