import React from "react";

import {
  FeatureSubTitle,
  FlexContainer,
  BufferTypeContainer,
} from "../styleFeatureContainer";
import AutoComplete from "../../utils/AutoComplete";

function MediaConfigVideo({ onChangeFormFields, values, isDarkMode }) {
  return (
    <BufferTypeContainer margin="0 5px 0 5px" isDarkMode={isDarkMode}>
      <FeatureSubTitle>Video</FeatureSubTitle>
      <FlexContainer direction="column">
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="contentType" style={{ marginRight: 3 }}>
            contentType
          </label>
          <AutoComplete
            id="contentTypeVideo"
            placeholder="contentType"
            list={[
              'video/webm; codecs="vp09.00.10.08"', // standard
              'video/mp4;codecs="avc1.42e01e"',
              'video/mp4;codecs="avc1.4d401e"', // h264
              'video/mp4; codecs="hvc1"', // hevc
              'video/webm; codecs="vp8, vorbis"', // vp8
              'video/mp4; codecs="vp09.00.50.08"', // vp9
              'video/mp4; codecs="av01.0.08M.08"', // av1
            ]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="width" style={{ marginRight: 3 }}>
            width
          </label>
          <AutoComplete
            id="width"
            placeholder="width"
            list={["3840", "1920", "1280", "960", "720", "480"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="height" style={{ marginRight: 3 }}>
            height
          </label>
          <AutoComplete
            id="height"
            placeholder="height"
            list={["2160", "1080", "720", "540", "480", "360", "160"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="bitrate" style={{ marginRight: 3 }}>
            bitrate
          </label>
          <AutoComplete
            id="bitrateVideo"
            placeholder="bitrate"
            list={[
              "4800000",
              "2400000",
              "1200000",
              "800000",
              "400000",
              "250000",
            ]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="framerate" style={{ marginRight: 3 }}>
            framerate
          </label>
          <AutoComplete
            id="framerate"
            placeholder="framerate"
            list={["24", "25"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
      </FlexContainer>
    </BufferTypeContainer>
  );
}

export default MediaConfigVideo;
