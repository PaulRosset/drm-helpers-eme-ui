import React, { useEffect, useState, Fragment } from "react";
import Bowser from "bowser";
import copy from "copy-text-to-clipboard";
import { mediaCapabilitiesProber } from "rx-player/experimental/tools";

import Copy from "../../static/copy.svg";
import CopyWhite from "../../static/copy-white.svg";
import {
  FeatureContainer,
  Highlighter,
  FeatureTitle,
  FlexContainer,
  Image,
  TitleContainer,
} from "./styleFeatureContainer";

function DetectEnv({ isDarkMode }) {
  const [infosEnv, setInfosEnv] = useState(null);
  const [shouldShowCopyNotification, setCopyNotification] = useState(false);
  const [hdcpVersionsSupportedState, setHdcpVersionsSupport] = useState(null);
  const HDCP_STATUSES = [
    "1.0",
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "2.0",
    "2.1",
    "2.2",
    "2.3",
  ];
  const hdcpVersionsSupported = [];

  useEffect(() => {
    HDCP_STATUSES.forEach(async (hdcpVersion) => {
      const hdcpStatus = await mediaCapabilitiesProber.getStatusForHDCP(
        hdcpVersion
      );
      if (hdcpStatus === "Supported") {
        hdcpVersionsSupported.push(hdcpVersion);
      }
    });
    setHdcpVersionsSupport(hdcpVersionsSupported);
    const bowserParser = Bowser.getParser(window.navigator.userAgent);
    setInfosEnv({
      platform: bowserParser.getPlatformType(),
      os: bowserParser.getOSName(),
      browserName: bowserParser.getBrowserName(),
      browserVersion: bowserParser.getBrowserVersion(),
    });
  }, []);

  const onCopy = () => {
    if (shouldShowCopyNotification) {
      return;
    }
    copy(
      JSON.stringify({
        ...infosEnv,
        hdcpVersionsSupported,
      })
    );
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
    }, 2500);
  };

  return (
    <FeatureContainer isDarkMode={isDarkMode}>
      <TitleContainer direction="row">
        <FeatureTitle>Environment</FeatureTitle>
        {shouldShowCopyNotification ? (
          <div style={{ color: "#21ba45" }}>Copied!</div>
        ) : (
          <Image
            src={isDarkMode ? CopyWhite : Copy}
            alt="gear icon"
            height="18px"
            width="18px"
            onClick={onCopy}
          />
        )}
      </TitleContainer>
      {infosEnv === null ? null : (
        <FlexContainer direction="column">
          <div>
            <Highlighter>Platform:</Highlighter> {infosEnv.platform}
          </div>
          <div>
            <Highlighter>OS:</Highlighter> {infosEnv.os}
          </div>
          <div>
            <Highlighter>Browser:</Highlighter> {infosEnv.browserName}
          </div>
          <div>
            <Highlighter>Browser version:</Highlighter>{" "}
            {infosEnv.browserVersion}
          </div>
        </FlexContainer>
      )}
      <FlexContainer direction="column">
        <Highlighter>HDCP Status: </Highlighter>
        {hdcpVersionsSupportedState === null ||
        hdcpVersionsSupportedState.length === 0 ? (
          <div>
            None of{" "}
            {HDCP_STATUSES.map((version, i) => (
              <Highlighter key={version}>
                {version}
                {i + 1 === HDCP_STATUSES.length ? " " : ", "}
              </Highlighter>
            ))}{" "}
            versions are currently supported or are impossible to detect.
          </div>
        ) : (
          <Fragment>
            {hdcpVersionsSupportedState.map((version, i) => (
              <Highlighter key={version}>
                {version}
                {i + 1 === HDCP_STATUSES.length ? " " : ", "}
              </Highlighter>
            ))}{" "}
            version(s) supported
          </Fragment>
        )}
      </FlexContainer>
    </FeatureContainer>
  );
}

export default DetectEnv;
