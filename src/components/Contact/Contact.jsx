import React from "react";
import { FiSmartphone, FiMail } from "react-icons/fi";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">CONTACTO</h1>

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
            className="contact-info-item-txt"
          >
            +54 9 351-7738914
          </a>
        </div>
      </div>
    </div>
  );
}
