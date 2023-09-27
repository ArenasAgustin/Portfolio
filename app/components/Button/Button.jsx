export default function Button({
  href,
  txt,
  target = "",
  rel = "",
  className = "",
  download = false,
  onClick = () => {},
  isDark = false,
}) {
  return (
    <>
      {href && rel ? (
        <a
          rel={rel}
          className={`btn__link ${className} ${
            isDark ? "btn__link--dark" : ""
          }`}
          href={href}
          target={target}
          download={download}
          onClick={onClick}
        >
          <p className={`btn__txt ${isDark ? "btn__txt--dark" : ""}`}>{txt}</p>
        </a>
      ) : (
        <button
          className={`btn__link ${className} ${
            isDark ? "btn__link--dark" : ""
          }`}
          download={download}
          onClick={onClick}
        >
          <p className={`btn__txt ${isDark ? "btn__txt--dark" : ""}`}>{txt}</p>
        </button>
      )}
    </>
  );
}
