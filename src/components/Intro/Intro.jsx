import Button from "../Button/Button";

export default function Intro({ isDark = false }) {
  return (
    <div className="introduction" id="home">
      <div className="introduction__title">
        <h1 className="introduction__title-h1">
          Hola, soy{" "}
          <span className="introduction__title-name">Agustín Arenas</span>
        </h1>

        <h1>Soy Full Stack Web Developer especializado en Front-end</h1>

        <Button
          href="#about"
          txt="Conocer más"
          className={`btn__link--intro ${isDark ? "btn__link--intro-dark" : ""}`}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
