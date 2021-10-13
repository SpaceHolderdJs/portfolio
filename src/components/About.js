import React, { useState } from "react";

import styles from "../styles/about.module.css";

import Container from "./Container";

const About = () => {
  const stacks = [
    "HTML",
    "CSS",
    "JS",
    "GIT",
    "Webpack",
    "React",
    "Redux",
    "Adobe Photoshop (basics)",
    "Three.js",
    "MERN",
  ];

  const yearOfBirth = 1999;
  const age = new Date().getFullYear() - yearOfBirth;

  return (
    <div className={`column centered animated ${styles.about}`}>
      <div className={`row centered ${styles.header}`}>
        <h1>Igor Sergienko</h1>
        <h3>[frontend developer]</h3>
      </div>
      <div className={`row centered ${styles.contentWrapper}`}>
        <div className={`column ${styles.content}`}>
          <p>
            Hi! My name is Igor and I am {age} y.o. I am in frontend dev for 5
            years. This page will produce you posibility to interact with my
            pets. You can find some more info about me below.
          </p>
          <Container title="Location">
            <p>Kyiv, Ukraine</p>
          </Container>
          <Container title="Education">
            <p>Place: National Transport University (NTU)</p>
            <p>Bakalavr: 121 Programm ingeniring [2017-2021]</p>
            <p>Master: 122 Computer Sience [2021-2022]</p>
            <p>IT-STEPS ACADEMY - Frontend dev [2020-2021]</p>
          </Container>
          <Container title="Hobbies">
            <p>💻 Programming</p>
            <p>📽️ Video editing</p>
            <p>📚 Reading</p>
            <p>🥊 Boxing</p>
          </Container>
        </div>
        <div className={`column centered ${styles.content}`}>
          <img src="/me.jpg" alt="me" className={`shadow ${styles.avatar}`} />
          <Container title="My stacks">
            <ul className={styles.list}>
              {stacks.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
