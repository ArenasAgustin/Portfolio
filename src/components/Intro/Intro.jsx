import Button from "../Button/Button";

export default function Intro() {
  return (
    <div className="introduction" id="home">
      <div className="introduction-title">
        <h1>
          Hola, soy{" "}
          <span className="introduction-title-name">Agustín Arenas</span>
        </h1>

        <h1>Soy Full Stack Web Developer especializado en Front-end</h1>

        <Button href="#about" txt="Conocer más" className="btn-intro" />
      </div>
    </div>
  );
}
