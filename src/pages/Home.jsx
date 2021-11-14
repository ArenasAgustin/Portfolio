import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";

import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Intro />

      <About />

      <Cards />
    </div>
  );
}