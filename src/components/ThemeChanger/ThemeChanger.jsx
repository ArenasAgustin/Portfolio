import React from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import "./ThemeChanger.scss";

export default function ThemeChanger({ isDark = false, setIsDark }) {
  return (
    <div className="theme-changer">
      <button
        className={`theme-changer-btn ${isDark ? "dark" : ""}`}
        onClick={setIsDark}
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
