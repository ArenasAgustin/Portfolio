import { AiOutlineArrowUp } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ScrollToTop({ isDark = false }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => Aos.init({ duration: 500 }), []);

  return (
    <div className="scroll-top" data-aos="fade-up">
      <button
        className="scroll-top__btn"
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp
          className={`scroll-top__svg ${isDark ? "scroll-top__svg--dark" : ""}`}
        />
      </button>
    </div>
  );
}
