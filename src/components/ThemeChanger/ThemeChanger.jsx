import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

export default function ThemeChanger({
  isDark = false,
  setIsDark,
  setEasterEgg,
}) {
  const [easterEggCount, setEasterEggCount] = useState(1);

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
    <div className="theme-changer">
      <button
        className={`theme-changer-btn ${isDark ? "dark" : ""}`}
        onClick={handleThemeChange}
        title="Theme changer"
        aria-label="Theme changer"
      >
        {isDark ? (
          <FiSun className="theme-changer-svg" />
        ) : (
          <HiOutlineMoon className="theme-changer-svg" />
        )}
      </button>
    </div>
  );
}
