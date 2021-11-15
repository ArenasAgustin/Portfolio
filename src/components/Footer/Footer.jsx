import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="#home" className="footer-home"><IoIosArrowUp /></a>

                <div className="footer-links">
                    <a target="_blank" href="https://www.linkedin.com/in/agustin-arenas-barea/" className='footer-link-a'>
                        <FaLinkedinIn />
                    </a>

                    <a target="_blank" href="https://github.com/ArenasAgustin" className='footer-link-a'>
                        <FaGithub />
                    </a>
                </div>

                <hr></hr>

                <div className="footer-copy">
                    <p>
                        © 2021 - Portfolio by <a href="https://github.com/ArenasAgustin" target="_blank">Agustín Arenas</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}