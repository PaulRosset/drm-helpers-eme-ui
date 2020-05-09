import React from "react";

import {
  FeatureContainer,
  TitleContainer,
  FeatureTitle,
  FlexContainer,
} from "./styleFeatureContainer";

function Infos({ isDarkMode }) {
  return (
    <FeatureContainer isDarkMode={isDarkMode}>
      <TitleContainer direction="row">
        <FeatureTitle>Infos</FeatureTitle>
      </TitleContainer>
      <FlexContainer direction="column">
        This website is a tool that expose a bunch of different browser APIs
        related to Media playback capabilities in the browser.
        <br />
        The streaming industry on our today world is booming.
        <br />
        However, technically speaking, he is complex and very various through
        all browsers and devices capabilities that are different.
        <br />
        <br />
        <b>
          This tool, try to give an easier access to APIs that are not practical
          to use.
        </b>
      </FlexContainer>
    </FeatureContainer>
  );
}

export default Infos;
