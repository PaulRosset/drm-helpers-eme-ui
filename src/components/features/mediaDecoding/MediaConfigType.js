import React from "react";

import { FeatureSubTitle, FlexContainer } from "../styleFeatureContainer";

function MediaConfigType(props) {
  return (
    <FlexContainer direction="row">
      <FeatureSubTitle>Type: </FeatureSubTitle>
      <FlexContainer
        align="center"
        justify="space-evenly"
        margin="0 10px 0 10px"
      >
        <input
          type="radio"
          id="file"
          name="file"
          value="file"
          checked={props.fileType === "file"}
          onChange={props.onChangeMediaConfigType("file")}
        />
        <label htmlFor="file" style={{ marginLeft: 3 }}>
          file
        </label>
      </FlexContainer>
      <FlexContainer
        align="center"
        justify="space-evenly"
        margin="0 10px 0 10px"
      >
        <input
          type="radio"
          id="media-source"
          name="media-source"
          value="media-source"
          checked={props.fileType === "media-source"}
          onChange={props.onChangeMediaConfigType("media-source")}
        />
        <label htmlFor="media-source" style={{ marginLeft: 3 }}>
          media-source
        </label>
      </FlexContainer>
    </FlexContainer>
  );
}

export default MediaConfigType;
