import { FiSmartphone, FiMail } from "react-icons/fi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact({ isDark = false }) {
  useEffect(() => Aos.init({ duration: 1500 }), []);

  return (
    <div className={`contact ${isDark ? "contact--dark" : ""}`}>
      <h1 className={`contact__title ${isDark ? "contact__title--dark" : ""}`} data-aos="flip-left">
        CONTACTO
      </h1>

      <div className={`contact__line ${isDark ? "contact__line--dark" : ""}`}></div>

      <div className="contact__info">
        <div className="contact__info-item">
          <p className={`contact__info-item-icon ${isDark ? "contact__info-item-icon--dark" : ""}`}>
            <span className={`contact__info-item-icon-span ${isDark ? "contact__info-item-icon-span--dark" : ""}`}>
              <FiMail />
            </span>
          </p>
          <a
            target="_blank"
            href="mailto:arenasagustin7@gmail.com"
            rel="noopener noreferrer"
            className={`contact__info-item-txt ${isDark ? "contact__info-item-txt--dark" : ""}`}
          >
            arenasagustin7@gmail.com
          </a>
        </div>

        <div className="contact__info-item">
          <p className={`contact__info-item-icon ${isDark ? "contact__info-item-icon--dark" : ""}`}>
            <span className={`contact__info-item-icon-span ${isDark ? "contact__info-item-icon-span--dark" : ""}`}>
              <FiSmartphone />
            </span>
          </p>

          <a
            target="_blank"
            href="https://walink.co/44734e"
            rel="noopener noreferrer"
            className={`contact__info-item-txt ${isDark ? "contact__info-item-txt--dark" : ""}`}
          >
            +54 9 351-7738914
          </a>
        </div>
      </div>
    </div>
  );
}
