import React, { createContext, useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

import Dashboard from "./components/Dashboard";

import {
  ImageLogo,
  FlexContainer,
} from "./components/features/styleFeatureContainer";

import Moon from "./static/nature.svg";
import Sun from "./static/sun.svg";
import Play from "./static/play-button.svg";

const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 20px;
  max-width: 960px;
  margin: auto;
`;

const ContextTheming = createContext(false);
const { Provider, Consumer } = ContextTheming;

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === null || isDarkMode === "false") {
      changeSystemLuminosity(false)();
      return;
    }
    changeSystemLuminosity(true)();
  }, []);

  const changeSystemLuminosity = (shouldBeDarkMode) => () => {
    setDarkMode(shouldBeDarkMode);
    if (shouldBeDarkMode) {
      document.body.style.backgroundColor = "#0C1514";
      document.body.style.color = "#ffffff";
      localStorage.setItem("isDarkMode", true);
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      localStorage.setItem("isDarkMode", false);
    }
  };

  return (
    <Provider value={isDarkMode}>
      <div className="App">
        <div
          className="header"
          style={{
            backgroundColor: isDarkMode ? "#0C1514" : "#ffffff",
            borderBottom: isDarkMode ? "1px solid #fff" : "inherit",
          }}
        >
          <FlexContainer align="center">
            <ImageLogo src={Play} alt="logo brand" height="55px" width="55px" />
            Media Helpers for browsers
          </FlexContainer>
          <ImageLogo
            src={isDarkMode ? Sun : Moon}
            isDarkMode={isDarkMode}
            alt="darkmode"
            height="55px"
            width="55px"
            onClick={changeSystemLuminosity(!isDarkMode)}
          />
        </div>
        <Body>
          <Dashboard />
        </Body>
      </div>
    </Provider>
  );
}

export default App;
export { Consumer, ContextTheming };
