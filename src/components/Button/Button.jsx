export default function Button({
  href,
  txt,
  target = "",
  rel = "",
  className = "",
  download = false,
  onClick = () => {},
}) {
  return (
    <a
      rel={rel}
      className={`btn-a ${className}`}
      href={href}
      target={target}
      download={download}
      onClick={onClick}
    >
      <p className="btn-txt">{txt}</p>
    </a>
  );
}
