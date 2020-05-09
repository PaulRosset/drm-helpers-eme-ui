import React from "react";

import { Highlighter, FlexContainer } from "../styleFeatureContainer";

function MediaConfigResult({ error, result }) {
  if (error !== undefined) {
    return (
      <FlexContainer direction="column" margin="10px 0 0 0">
        <div style={{ maxWidth: "300px" }}>
          <Highlighter color="#db2828">{error}</Highlighter>
        </div>
      </FlexContainer>
    );
  }
  const { supported, powerEfficient, smooth } = result;
  return (
    <FlexContainer direction="column" margin="10px 0 0 0">
      <div>
        <Highlighter>Is Media Supported:</Highlighter>{" "}
        <Highlighter color={supported ? "#21ba45" : "#db2828"}>
          {String(supported)}
        </Highlighter>
      </div>
      <div>
        <Highlighter>Is media playback Smooth:</Highlighter>{" "}
        <Highlighter color={smooth ? "#21ba45" : "#db2828"}>
          {String(smooth)}
        </Highlighter>
      </div>
      <div>
        <Highlighter>Is the media playback Power Efficient:</Highlighter>{" "}
        <Highlighter color={powerEfficient ? "#21ba45" : "#db2828"}>
          {String(powerEfficient)}
        </Highlighter>
      </div>
    </FlexContainer>
  );
}

export default MediaConfigResult;
