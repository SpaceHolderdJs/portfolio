import React from "react";

import Container from "./Container";

import styles from "../styles/repo.module.css";

const Repo = ({ repo, closeFunc }) => {
  console.log(repo);
  const { name, description, created_at, topics, html_url, updated_at } = repo;

  const creationDate = new Date(Date.parse(created_at));
  const updateDate = new Date(Date.parse(updated_at));

  const dateFixer = (date) => (date.toString().length < 2 ? "0" + date : date);

  return (
    <div className={`column animated ${styles.repo}`}>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>
        Created:
        {dateFixer(creationDate.getDate())}.{dateFixer(creationDate.getMonth())}
        .{dateFixer(creationDate.getFullYear())}
      </span>
      <span>
        Last update:{dateFixer(updateDate.getDate())}.
        {dateFixer(updateDate.getMonth())}.{dateFixer(updateDate.getFullYear())}
      </span>
      {topics.length && (
        <Container title="Topics">
          <ul>
            {topics.map((topic) => (
              <li>{topic}</li>
            ))}
          </ul>
        </Container>
      )}

      <div className="row centered">
        <a
          className={`row centered ${styles.button}`}
          href={`https://spaceholderdjs.github.io/${name}`}>
          View
        </a>
        <a className={`row centered ${styles.button}`} href={html_url}>
          View Code
        </a>
        <button
          className={`row centered ${styles.button}`}
          onClick={() => closeFunc()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Repo;
