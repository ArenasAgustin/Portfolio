import { FaLinkedinIn, FaGithub, FaGitlab, FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
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

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/arenasagustin/pens/public"
            className="footer__links-a"
            aria-label="CodePen"
          >
            <FaCodepen />
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
