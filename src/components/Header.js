import React, { useContext } from "react";

import { Context } from "../App";

import styles from "../styles/header.module.css";

const Header = () => {
  const { dispatch, store } = useContext(Context);
  const tabs = ["about", "portfolio"];

  return (
    <div className={`row centered shadow ${styles.header}`}>
      {tabs.map((tab) => (
        <button
          className={`${styles.tabSwitcher} ${
            store.tab === tab && styles.active
          }`}
          key={tab}
          onClick={() => dispatch({ type: "INIT_TAB", payload: tab })}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Header;
