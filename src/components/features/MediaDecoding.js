import React from "react";

import Info from "../../static/info.svg";
import InfoWhite from "../../static/info-white.svg";

import {
  FeatureContainer,
  TitleContainer,
  FeatureTitle,
  Image,
  FlexContainer,
} from "./styleFeatureContainer";

import MediaConfig from "./mediaDecoding/MediaConfig";

import Warn from "../../static/warn.svg";

function MediaDecoding({ isDarkMode }) {
  return (
    <FeatureContainer isDarkMode={isDarkMode}>
      <TitleContainer direction="row">
        <FeatureTitle>Media Decoding Capabilities</FeatureTitle>
        <a
          href="https://googlechrome.github.io/samples/media-capabilities/decoding-info.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={isDarkMode ? InfoWhite : Info}
            alt="info icon"
            height="18px"
            width="18px"
          />
        </a>
      </TitleContainer>
      {navigator.mediaCapabilities !== undefined &&
      navigator.mediaCapabilities.decodingInfo !== undefined ? (
        <MediaConfig />
      ) : (
        <FlexContainer align="center" direction="column">
          <Image src={Warn} alt="warn" width="25px" height="25px" />
          <p>
            The <code>decodingInfo</code> method from{" "}
            <code>mediaCapabilities</code> is not available on your current
            browser.
          </p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API"
            target="_blank"
            rel="noopener noreferrer"
          >
            More infos
          </a>
        </FlexContainer>
      )}
    </FeatureContainer>
  );
}

export default MediaDecoding;
