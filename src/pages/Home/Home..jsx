import Cards from "../../components/Cards/Cards";
import Cv from '../../assets/resume.pdf'
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='introduction'>
        <div className='introduction-title'>
          <h1>Hola, soy <span className='introduction-title-name'>Agustin Arenas</span></h1>
          <h1>Soy Full Stack Web Developer</h1>
          <a rel="noreferrer" class="btn-intro" href="#about">Conocer más</a>
        </div>
      </div>

      <div className="about" id='about'>
        <div className='about-container'>

        </div>
        <div className="about-card">
          <h1>Sobre mi</h1>

          <p className="about-txt">
            Programador y web developer, imaginativo, curioso y capaz de resolver diversos problemas. Soy un programador dispuesto a ayudar a mis colegas.
          </p>
          <p className="about-txt">
            Tengo interés por el estudio de diferentes tecnologías. En la actualidad estoy aprendiendo por mi cuenta el uso de Typescript y React Native. También disfruto con la música y el dibujo.
          </p>
          <a download href={Cv} className="about-btn">Ver resumen</a>
        </div>
      </div>

      <Cards />
    </div>
  );
}