import React from "react";

import { FeatureSubTitle, FlexContainer } from "../styleFeatureContainer";

function MediaConfigBufferType(props) {
  return (
    <FlexContainer direction="row">
      <FeatureSubTitle>Buffer Type: </FeatureSubTitle>
      <FlexContainer
        align="center"
        justify="space-evenly"
        margin="0 10px 0 10px"
      >
        <input
          type="checkbox"
          id="video"
          name="video"
          value="video"
          checked={props.video}
          onChange={props.onChangMediaConfigBufferType("video", !props.video)}
        />
        <label htmlFor="video" style={{ marginLeft: 3 }}>
          video
        </label>
      </FlexContainer>
      <FlexContainer
        align="center"
        justify="space-evenly"
        margin="0 10px 0 10px"
      >
        <input
          type="checkbox"
          id="audio"
          name="audio"
          value="audio"
          checked={props.audio}
          onChange={props.onChangMediaConfigBufferType("audio", !props.audio)}
        />
        <label htmlFor="audio" style={{ marginLeft: 3 }}>
          audio
        </label>
      </FlexContainer>
    </FlexContainer>
  );
}

export default MediaConfigBufferType;
