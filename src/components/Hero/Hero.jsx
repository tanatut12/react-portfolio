import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aoun</h1>
        <p className={styles.description}>
          I graduated from Generation's Junior Software Developer Bootcamp and
          am currently seeking a position as a full-stack developer. My
          experience includes project management in the construction of pop-up
          stores, which has equipped me with valuable skills in teamwork and
          communication. I believe these skills are transferable and will serve
          me well in a junior developer role.
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
