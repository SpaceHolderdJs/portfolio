import React, { useState, useEffect, useCallback } from "react";

import Repo from "./Repo";

import { initRepos, scrollToRepo } from "../scene";

import styles from "../styles/portfolio.module.css";
import ReposList from "./ReposList";

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

  useEffect(() => {
    console.log(repos);
  }, [repos]);

  useEffect(() => {
    console.log(currentRepo);
    currentRepo && scrollToRepo(repos.indexOf(currentRepo));
  }, [currentRepo]);

  return (
    <div className={`column  animated ${styles.portfolio}`}>
      <h1>Portfolio</h1>
      <p>Here you can list my last projects</p>
      {currentRepo ? (
        <Repo repo={currentRepo} closeFunc={() => setCurrentRepo(null)} />
      ) : (
        <ReposList repos={repos} repoSetter={setCurrentRepo} />
      )}
    </div>
  );
};

export default Portfolio;
