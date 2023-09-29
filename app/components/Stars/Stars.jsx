export default function Stars({ isDark }) {
  return (
    <div className="starsContainer">
      <div className={`stars ${isDark ? "stars--dark" : ""}`}></div>
      <div className={`stars2 ${isDark ? "stars2--dark" : ""}`}></div>
      <div className={`stars3 ${isDark ? "stars3--dark" : ""}`}></div>
    </div>
  );
}
