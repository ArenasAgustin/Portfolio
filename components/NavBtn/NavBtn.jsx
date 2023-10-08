import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

export default function NavBtn({
  isDark = false,
  setIsDark,
  setEasterEgg,
  handleLanguageChange,
  lang,
}) {
  const [easterEggCount, setEasterEggCount] = useState(1);

  const { i18n } = useTranslation();

  const handleThemeChange = () => {
    setIsDark(!isDark);

    if (easterEggCount < 7) setEasterEggCount(easterEggCount + 1);
    else if (easterEggCount === 7) {
      setEasterEggCount(easterEggCount + 1);
      setEasterEgg(true);
    } else {
      setEasterEggCount(1);
      setEasterEgg(false);
    }
  };

  return (
    <div className="nav">
      <button
        className={`language-changer__btn ${
          isDark ? "language-changer__btn--dark" : ""
        }`}
        onClick={handleLanguageChange}
        title="Change language"
      >
        <span className="language-changer__language">
          {i18n.language === "es" || lang === "es" ? "ES" : "EN"}
        </span>
      </button>

      <button
        className={`theme-changer__btn ${
          isDark ? "theme-changer__btn--dark" : ""
        }`}
        onClick={handleThemeChange}
        title="Theme changer"
      >
        {isDark ? (
          <FiSun className="theme-changer__svg theme-changer__svg--dark" />
        ) : (
          <HiOutlineMoon className="theme-changer__svg" />
        )}
      </button>
    </div>
  );
}
