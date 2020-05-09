import React from "react";
import styled from "styled-components";

import { Consumer } from "../App";

// Features
import Infos from "./features/Infos";
import DetectEnv from "./features/DetectEnv";
import MediaDecoding from "./features/MediaDecoding";
import CDMDetector from "./features/cdmDetector/CDMDetector";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

function Dashboard() {
  return (
    <Consumer>
      {(isDarkMode) => (
        <DashboardContainer>
          <Infos isDarkMode={isDarkMode} />
          <DetectEnv isDarkMode={isDarkMode} />
          <MediaDecoding isDarkMode={isDarkMode} />
          <CDMDetector isDarkMode={isDarkMode} />
        </DashboardContainer>
      )}
    </Consumer>
  );
}

export default Dashboard;
