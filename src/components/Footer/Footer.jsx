import { IoIosArrowUp } from "react-icons/io";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-home" aria-label="Home">
          <IoIosArrowUp />
        </a>

        <div className="footer-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/agustin-arenas-barea/"
            className="footer-link-a"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ArenasAgustin"
            className="footer-link-a"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/ArenasAgustin"
            className="footer-link-a"
            aria-label="GitLab"
          >
            <FaGitlab />
          </a>
        </div>

        <hr></hr>

        <div className="footer-copy">
          <p>
            &copy; 2021 - Portfolio by{" "}
            <a
              href="https://github.com/ArenasAgustin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              Agustín Arenas
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
