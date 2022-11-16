import "./Home.scss";
import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger";

export default function Home({ isDark, setIsDark }) {
  return (
    <div className="home">
      <ThemeChanger isDark={isDark} setIsDark={setIsDark} />

      <Intro isDark={isDark} />

      <About isDark={isDark} />

      <Cards isDark={isDark} />

      <Contact isDark={isDark} />

      <Footer />
    </div>
  );
}
