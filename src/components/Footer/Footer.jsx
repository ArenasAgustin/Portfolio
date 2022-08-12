import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-home">
          <IoIosArrowUp />
        </a>

        <div className="footer-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/agustin-arenas-barea/"
            className="footer-link-a"
          >
            <FaLinkedinIn />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ArenasAgustin"
            className="footer-link-a"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/ArenasAgustin"
            className="footer-link-a"
          >
            <FaGitlab />
          </a>
        </div>

        <hr></hr>

        <div className="footer-copy">
          <p>
            &copy; 2021 - Portfolio by{" "}
            <a href="https://github.com/ArenasAgustin" target="_blank" rel="noopener noreferrer">
              Agustín Arenas
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
