import { useEffect, useRef } from "react";
import Button from "../Button/Button";

export default function Intro({ isDark = false }) {
  const scramble = useRef(null);
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = this.randomInt();
        const end = start + this.randomInt();
        this.queue.push({ from, to, start, end });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = "";
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="scramble_dud">${char}</span>`;
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[this.randomInt(this.chars.length)];
    }

    randomInt(plus = 40) {
      return Math.floor(Math.random() * plus);
    }
  }

  const phrases = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    //"Córdoba, Argentina",
  ];

  useEffect(() => {
    const fx = new TextScramble(scramble.current);

    let counter = 0;

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1200);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <div className="introduction" id="home">
      <div className="introduction__title">
        <h1 className="introduction__title-h1">
          Hola, soy{" "}
          <span className="introduction__title-name">Agustín Arenas</span>
        </h1>

        <h1 className={`introduction__title-h1 scramble ${
            isDark ? "scramble-dark" : ""
          }`} ref={scramble}></h1>

        <Button
          href="#about"
          txt="Conocer más"
          className={`btn__link--intro ${
            isDark ? "btn__link--intro-dark" : ""
          }`}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
