import React, { useState, useEffect, useCallback } from "react";

import { initRepos } from "../scene";

import styles from "../styles/portfolio.module.css";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState();

  const nick = "spaceholderdjs";

  const getRepos = useCallback(() => {
    fetch(`https://api.github.com/users/${nick}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        setRepos(repos.filter((repo) => repo.has_pages));
        initRepos(
          repos.filter((repo) => repo.has_pages),
          setCurrentRepo
        );
      });
  }, []);

  useEffect(() => {
    getRepos();
  }, []);

  //   useEffect(() => {
  //     console.log(repos);
  //   }, [repos]);

  return (
    <div className={`column  animated ${styles.portfolio}`}>
      <h1>Portfolio</h1>
      <p>Current {currentRepo && currentRepo.name}</p>
    </div>
  );
};

export default Portfolio;
