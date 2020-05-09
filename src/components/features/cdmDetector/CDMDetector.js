import React, { useState, Fragment } from "react";
import { mediaCapabilitiesProber } from "rx-player/experimental/tools";
import copy from "copy-text-to-clipboard";

import Copy from "../../../static/copy.svg";
import CopyWhite from "../../../static/copy-white.svg";
import Warn from "../../../static/warn.svg";
import Safari from "../../../static/safari.svg";

import { dict_KeySystems } from "./MediaKeySystemConfigurations";

import {
  FeatureContainer,
  FeatureTitle,
  TitleContainer,
  Select,
  Image,
  TextArea,
  Button,
  Highlighter,
} from "./../styleFeatureContainer";
import { FlexContainer } from "../styleFeatureContainer";

function applyDate() {
  const now = new Date();
  const pad = (n) => (n < 10 ? "0" + n : n);
  return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
    now.getSeconds()
  )}`;
}

function securityLevelWidevine(compatibleConfiguration) {
  const videoRobustness = compatibleConfiguration.videoCapabilities.map(
    (videoCapa) => videoCapa.robustness
  );
  if ("HW_SECURE_ALL".includes(videoRobustness)) {
    return "L1";
  }
  let hasHardwareDecode = false;
  let hasHardwareDecrypt = false;
  videoRobustness.forEach((robustness) => {
    if (robustness === "HW_SECURE_DECODE") {
      hasHardwareDecode = true;
    } else if (robustness === "HW_SECURE_CRYPTO") {
      hasHardwareDecrypt = true;
    }
  });
  if (hasHardwareDecrypt) {
    if (hasHardwareDecode) {
      return "L1";
    } else {
      return "L2";
    }
  } else {
    return "L3";
  }
}

function formatCompatibleKeySystem(result) {
  const compatibleConfigurations = result.filter(
    (config) => "compatibleConfiguration" in config
  );
  if (compatibleConfigurations.length === 0) {
    return undefined;
  }
  return compatibleConfigurations;
}

function CDMDetector({ isDarkMode }) {
  const [config, setConfig] = useState(undefined);
  const [resultConfig, setConfigCapabilities] = useState(null);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(applyDate());
  const [shouldShowCopyNotification, setCopyNotification] = useState(false);
  const [configType, setConfigType] = useState("0");

  const onCopy = () => {
    if (shouldShowCopyNotification) {
      return;
    }
    copy(JSON.stringify(config, undefined, 2));
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
    }, 2500);
  };

  const onConfigChange = (e) => {
    if (e.currentTarget.value === "5") {
      setConfig("");
      setConfigType(e.currentTarget.value);
      return;
    }
    setConfigType(e.currentTarget.value);
    setConfig(dict_KeySystems[e.currentTarget.value]);
  };

  const onTextAreaChange = (e) => {
    setConfig(e.target.value);
  };

  const onProbeConfig = () => {
    try {
      if (config == null) {
        return;
      }
      mediaCapabilitiesProber
        .getCompatibleDRMConfigurations(
          configType === "5" ? JSON.parse(config) : config
        )
        .then((result) => {
          setConfigCapabilities(formatCompatibleKeySystem(result));
          setDate(applyDate());
        })
        .catch((err) => {
          setError(err);
          setConfigCapabilities(null);
          setTimeout(() => {
            setError(null);
          }, 2000);
        });
    } catch (e) {
      setError(e);
      setConfigCapabilities(null);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <FeatureContainer isDarkMode={isDarkMode}>
      <TitleContainer direction="row">
        <FeatureTitle>Content Decryption Module detection:</FeatureTitle>
        {config != null ? (
          shouldShowCopyNotification ? (
            <div style={{ color: "#21ba45" }}>Copied!</div>
          ) : (
            <Image
              src={isDarkMode ? CopyWhite : Copy}
              alt="gear icon"
              height="18px"
              width="18px"
              onClick={onCopy}
            />
          )
        ) : null}
      </TitleContainer>
      {navigator.requestMediaKeySystemAccess !== undefined ? (
        <FlexContainer direction="column" margin="5px 0" width="100%">
          <Select onChange={onConfigChange} isDarkMode={isDarkMode}>
            <option value="0">--Please choose a configuration--</option>
            <option value="1">Widevine</option>
            <option value="2">Playready</option>
            <option value="3">Multiple DRM</option>
            <option value="4">Multiple DRM - persistent_license</option>
            <option value="5">Custom</option>
          </Select>
          <TextArea
            isDarkMode={isDarkMode}
            placeholder="MediaKeySystemConfiguration"
            disabled={configType !== "5"}
            value={
              config === undefined
                ? ""
                : configType === "5"
                ? config
                : JSON.stringify(config, undefined, 2)
            }
            onChange={onTextAreaChange}
          />
          <FlexContainer justify="space-between" width="100%" align="center">
            <Button
              margin="10px 0"
              onClick={onProbeConfig}
              isDarkMode={isDarkMode}
            >
              Check
            </Button>
          </FlexContainer>
          {resultConfig !== null ? (
            <FlexContainer direction="column">
              {resultConfig !== undefined ? (
                <Fragment>
                  <Highlighter>Last action done: {date}</Highlighter>
                  <Highlighter>CDM supported:</Highlighter>
                  {resultConfig.map((config) => (
                    <FlexContainer direction="column" key={config.type}>
                      <div>
                        <Highlighter>KeySytem:</Highlighter>
                        <Highlighter color="#21ba45">{config.type}</Highlighter>
                      </div>
                      {config.type === "com.widevine.alpha" ? (
                        <Fragment>
                          <Highlighter>
                            Level:
                            <Highlighter color="#21ba45">
                              {securityLevelWidevine(
                                config.compatibleConfiguration
                              )}
                            </Highlighter>
                          </Highlighter>
                        </Fragment>
                      ) : null}
                    </FlexContainer>
                  ))}
                </Fragment>
              ) : (
                <Fragment>
                  <Highlighter>Last action done: {date}</Highlighter>
                  <Highlighter color="#db2828">
                    No Module of decryption is supported for the current
                    configuration.
                  </Highlighter>
                </Fragment>
              )}
            </FlexContainer>
          ) : null}
          {error !== null ? (
            <Highlighter color="#db2828">{error.message}</Highlighter>
          ) : null}
        </FlexContainer>
      ) : (
        <FlexContainer align="center" direction="column">
          <Image src={Warn} alt="warn" width="25px" height="25px" />
          <p>
            The <code>requestMediaKeySystemAccess</code> method from{" "}
            <code>navigator</code> is not available on your current browser.
          </p>
          {Object.prototype.toString
            .call(window.HTMLElement)
            .includes("Constructor") ||
          // eslint-disable-next-line
          (!window.safari || safari.pushNotification).toString() ===
            "[object SafariRemoteNotification]" ? (
            <p
              align="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Image src={Safari} alt="safari" width="25px" height="25px" />
              <div>
                However, we have detected that you were using Safari as a web
                browser.
                <br />
                Safari come with <b>Fairplay</b> as{" "}
                <b>Content decryption module.</b>
                <br /> It supports media decoding and decryption playback on the
                hardware side, that allow you to play 1080p quality content.
              </div>
            </p>
          ) : null}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess"
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

export default CDMDetector;
