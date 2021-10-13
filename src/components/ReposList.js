import React from "react";

import styles from "../styles/reposList.module.css";

const ReposList = ({ repos, repoSetter }) => {
  return (
    <div className={`column animated ${styles.list}`}>
      {repos.length > 0 ? (
        repos.map((repo, i) => {
          const { name, size } = repo;

          return (
            <div
              key={repo + i}
              className={`row centered ${styles.repoSmall}`}
              onClick={() => repoSetter(repo)}>
              <h3>{name}</h3>
              <span>{size}kb</span>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ReposList;
