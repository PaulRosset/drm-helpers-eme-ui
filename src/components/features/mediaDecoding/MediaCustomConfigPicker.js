import React, { Fragment } from "react";
import { Select, FeatureSubTitle } from "../styleFeatureContainer";

function MediaCustomConfigPicker(props) {
  return (
    <Fragment>
      <FeatureSubTitle>Select a config</FeatureSubTitle>
      <Select onChange={props.onChange}>
        <option value="0">Take a config:</option>
        <option value="0">Ultra HD / h264 / Video-Audio</option>
        <option value="0">Ultra HD / h265 / Video-Audio</option>
        <option value="0">Ultra HD / av1 / Video-Audio</option>

        <option value="0">Full HD / h264 / Video-Audio</option>
        <option value="0">Full HD / h265 / Video-Audio</option>
        <option value="0">Full HD / av1 / Video-Audio</option>

        <option value="0">HD / h264 / Video-Audio</option>
        <option value="0">HD / h265 / Video-Audio</option>
        <option value="0">HD / av1 / Video-Audio</option>
      </Select>
    </Fragment>
  );
}

export default MediaCustomConfigPicker;
