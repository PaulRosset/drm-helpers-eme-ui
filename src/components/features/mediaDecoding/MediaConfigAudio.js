import React from "react";

import {
  FeatureSubTitle,
  FlexContainer,
  BufferTypeContainer,
} from "../styleFeatureContainer";
import AutoComplete from "../../utils/AutoComplete";

function MediaConfigAudio({ onChangeFormFields, values, isDarkMode }) {
  return (
    <BufferTypeContainer margin="0 5px 0 5px" isDarkMode={isDarkMode}>
      <FeatureSubTitle>Audio</FeatureSubTitle>
      <FlexContainer direction="column">
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="contentType" style={{ marginRight: 3 }}>
            contentType
          </label>
          <AutoComplete
            id="contentTypeAudio"
            placeholder="contentType"
            list={['audio/mp4;codecs="mp4a.40.2"']}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="channels" style={{ marginRight: 3 }}>
            channels
          </label>
          <AutoComplete
            id="channels"
            placeholder="channels"
            list={["2.1", "2"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="bitrate" style={{ marginRight: 3 }}>
            bitrate
          </label>
          <AutoComplete
            id="bitrateAudio"
            placeholder="bitrate"
            list={["128000"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
        <FlexContainer margin="10px 0" direction="column" width="100%">
          <label htmlFor="samplerate" style={{ marginRight: 3 }}>
            samplerate
          </label>
          <AutoComplete
            id="samplerate"
            placeholder="samplerate"
            list={["48000"]}
            onChangeFormFields={onChangeFormFields}
            values={values}
          />
        </FlexContainer>
      </FlexContainer>
    </BufferTypeContainer>
  );
}

export default MediaConfigAudio;
