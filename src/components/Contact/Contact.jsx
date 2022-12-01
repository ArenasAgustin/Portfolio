import { FiSmartphone, FiMail } from "react-icons/fi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact({ isDark }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={`contact ${isDark ? "dark" : ""}`}>
      <h1 className="contact-title" data-aos="flip-left">
        CONTACTO
      </h1>

      <div className="contact-line"></div>

      <div className="contact-info">
        <div className="contact-info-item">
          <p className="contact-info-item-icon">
            <span>
              <FiMail />
            </span>
          </p>
          <a
            target="_blank"
            href="mailto:arenasagustin7@gmail.com"
            rel="noopener noreferrer"
            className="contact-info-item-txt"
          >
            arenasagustin7@gmail.com
          </a>
        </div>

        <div className="contact-info-item">
          <p className="contact-info-item-icon">
            <span>
              <FiSmartphone />
            </span>
          </p>

          <a
            target="_blank"
            href="https://walink.co/44734e"
            rel="noopener noreferrer"
            className="contact-info-item-txt"
          >
            +54 9 351-7738914
          </a>
        </div>
      </div>
    </div>
  );
}
