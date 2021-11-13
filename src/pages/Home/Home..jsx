import Cards from "../../components/Cards/Cards";
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className='introduction'>
        <div className='introduction-title'>
          <h1>Hola, soy <span className='introduction-title-name'>Agustin Arenas</span></h1>
          <h1>Soy Full Stack Web Developer</h1>
        </div>
      </div>

      <Cards />
    </div>
  );
}