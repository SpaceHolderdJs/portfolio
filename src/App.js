import React, { useReducer, createContext, useEffect } from "react";
import "./App.css";

import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

import { initScene, tabSwitcherHandler } from "./scene";

export const Context = createContext();

const reducer = (store, action) => {
  switch (action.type) {
    case "INIT_TAB":
      return { ...store, tab: action.payload };
    default:
      return store;
  }
};

function App() {
  const [store, dispatch] = useReducer(reducer, {
    tab: "about",
  });

  const { tab } = store;

  useEffect(() => {
    initScene();
  }, []);

  useEffect(() => {
    tabSwitcherHandler(tab);
  }, [tab]);

  return (
    <div className="column centered app">
      <Context.Provider value={{ dispatch, store }}>
        <Header />
        {tab === "about" && <About />}
        {tab === "portfolio" && <Portfolio />}
      </Context.Provider>
    </div>
  );
}

export default App;
