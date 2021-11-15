import React from "react";
import { GrMailOption } from "react-icons/gr";
import { FiSmartphone, FiMail } from "react-icons/fi";
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <h1 className='contact-title'>CONTACTO</h1>

            <div className="contact-line"></div>

            <div className="contact-info">
                <div className="contact-info-item">
                    <p className="contact-info-item-icon"><FiMail /></p>
                    <a
                        href="mailto:arenasagustin7@gmail.com"
                        className="contact-info-item-txt"
                    >
                        arenasagustin7@gmail.com
                    </a>
                </div>

                <div className="contact-info-item">
                    <p className="contact-info-item-icon"><FiSmartphone /></p>

                    <p className="contact-info-item-txt">
                        +54 9 351-7738914
                    </p>
                </div>
            </div>
        </div>
    );
}
