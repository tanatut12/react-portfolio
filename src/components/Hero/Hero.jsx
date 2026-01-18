import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tanatut</h1>
        <p className={styles.description}>
          Full-stack developer skilled in React.js, TypeScript, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB, with a solid foundation in HTML, CSS, JavaScript, and Git/GitHub. Strong in teamwork and communication.
        </p>
        <a href="mailto:tanatut12@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
