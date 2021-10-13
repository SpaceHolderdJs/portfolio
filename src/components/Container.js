import React, { useState } from "react";

import styles from "../styles/container.module.css";

const Container = ({ title, children }) => {
  const [opened, setOpened] = useState(true);
  return (
    <div className={`column ${styles.container}`}>
      <h3
        onClick={() => setOpened(!opened)}
        className={`row centered ${styles.title}`}>
        {title}
      </h3>
      <div className={styles.divider}></div>
      {opened && <div className="animated">{children}</div>}
    </div>
  );
};

export default Container;
