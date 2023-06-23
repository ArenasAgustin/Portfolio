import { IoIosArrowUp } from "react-icons/io";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#home" className="footer__home" aria-label="Home">
          <IoIosArrowUp />
        </a>

        <div className="footer__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/agustin-arenas-barea/"
            className="footer__links-a"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ArenasAgustin"
            className="footer__links-a"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/ArenasAgustin"
            className="footer__links-a"
            aria-label="GitLab"
          >
            <FaGitlab />
          </a>
        </div>

        <hr className="footer__hr"></hr>

        <div className="footer__copy">
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
