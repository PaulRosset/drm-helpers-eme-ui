import React, { Fragment, useState, useContext } from "react";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import copy from "copy-text-to-clipboard";

import Copy from "../../../static/copy.svg";
import CopyWhite from "../../../static/copy-white.svg";

import {
  FeatureSubTitle,
  FlexContainer,
  Image,
  Button,
  Line,
} from "../styleFeatureContainer";

import MediaConfigType from "./MediaConfigType";
import MediaConfigBufferType from "./MediaConfigBufferType";
import MediaConfigAudio from "./MediaConfigAudio";
import MediaConfigVideo from "./MediaConfigVideo";
import MediaConfigResult from "./MediaConfigResult";
import { ContextTheming } from "../../../App";

const changeMediaConfigType = assign({
  fileType: (ctx, evt) => (ctx.fileType = evt.payload),
});

const changeMediaConfigBufferType = assign({
  bufferType: (ctx, evt) => {
    return (ctx.bufferType[evt.payload.bufferType] = {
      ...ctx.bufferType,
      [evt.payload.bufferType]: evt.payload.shouldBeActive,
    });
  },
});

const changeOptionsManager = {
  CHANGE_BUFFER_TYPE: {
    actions: "changeMediaConfigBufferType",
  },
  CHANGE_FILE_TYPE: {
    target: "bufferType",
    actions: "changeMediaConfigType",
  },
  CHECK_DECODING_INFOS: {
    target: "check",
    actions: "getDecodingInfo",
  },
};

export const MediaConfigStateMachine = Machine(
  {
    id: "global-mediaConfig",
    initial: "fileType",
    context: {
      fileType: undefined,
      bufferType: { audio: false, video: false },
      result: undefined,
      error: undefined,
      lastActionDate: undefined,
    },
    states: {
      fileType: {
        on: {
          CHANGE_FILE_TYPE: {
            target: "bufferType",
            actions: "changeMediaConfigType",
          },
          CHANGE_FROM_PARENT: {
            target: "check",
          },
        },
      },
      bufferType: {
        on: changeOptionsManager,
      },
      check: {
        invoke: {
          id: "getDecodingInfo",
          src: (ctx, { payload }) => {
            console.warn(ctx, payload);
            return navigator.mediaCapabilities.decodingInfo({
              type: ctx.fileType,
              ...(ctx.bufferType.audio && {
                audio: {
                  contentType: payload.contentTypeAudio || "",
                  channels: payload.channels || "", // audio channels used by the track
                  bitrate: payload.bitrateAudio || "", // number of bits used to encode a second of audio
                  samplerate: payload.samplerate || "", //
                },
              }),
              ...(ctx.bufferType.video && {
                video: {
                  contentType: payload.contentTypeVideo || "",
                  width: payload.width || "",
                  height: payload.height || "",
                  bitrate: payload.bitrateVideo || "", // number of bits used to encode a second of video
                  framerate: payload.framerate || "", // number of frames used in one second
                },
              }),
            });
          },
          onDone: {
            target: "success",
            actions: assign({
              result: (_, event) => event.data,
              error: undefined,
              lastActionDate: () => {
                const now = new Date();
                const pad = (n) => (n < 10 ? "0" + n : n);
                return `${pad(now.getHours())}:${pad(
                  now.getUTCMinutes()
                )}:${pad(now.getSeconds())}`;
              },
            }),
          },
          onError: {
            target: "error",
            actions: assign({
              error: (_, evt) => evt.data.message,
              result: undefined,
              lastActionDate: () => {
                const now = new Date();
                const pad = (n) => (n < 10 ? "0" + n : n);
                return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
                  now.getSeconds()
                )}`;
              },
            }),
          },
        },
      },
      success: {
        on: changeOptionsManager,
      },
      error: {
        on: changeOptionsManager,
      },
    },
  },
  {
    actions: { changeMediaConfigType, changeMediaConfigBufferType },
  }
);

function MediaConfig() {
  const [state, send] = useMachine(MediaConfigStateMachine);
  const [formInputFieldsValues, setInputFieldValuesState] = useState({});
  const [shouldShowCopyNotification, setCopyNotification] = useState(false);
  const isDarkMode = useContext(ContextTheming);

  const onChangeMediaConfigType = (fileType) => () =>
    send({ type: "CHANGE_FILE_TYPE", payload: fileType });

  const changeMediaConfigBufferType = (bufferType, shouldBeActive) => (_) =>
    send({
      type: "CHANGE_BUFFER_TYPE",
      payload: { bufferType, shouldBeActive },
    });

  const checkDecodingInfos = (decodingInfos) => () =>
    send({ type: "CHECK_DECODING_INFOS", payload: decodingInfos });

  const setInputFieldValues = (configFieldType) => (_, { newValue }) =>
    setInputFieldValuesState({
      ...formInputFieldsValues,
      [configFieldType]: newValue,
    });

  const formatOutputCopy = (data) => () => {
    if (shouldShowCopyNotification) {
      return;
    }
    const {
      fileType,
      bufferType,
      contentTypeAudio,
      contentTypeVideo,
      channels,
      bitrateAudio,
      samplerate,
      width,
      height,
      bitrateVideo,
      framerate,
      result: { supported, powerEfficient, smooth },
    } = data;
    copy(
      JSON.stringify({
        input: {
          type: fileType,
          ...(bufferType.audio && {
            audio: {
              contentType: contentTypeAudio || "",
              channels: channels || "", // audio channels used by the track
              bitrate: bitrateAudio || "", // number of bits used to encode a second of audio
              samplerate: samplerate || "", //
            },
          }),
          ...(bufferType.video && {
            video: {
              contentType: contentTypeVideo || "",
              width: width || "",
              height: height || "",
              bitrate: bitrateVideo || "", // number of bits used to encode a second of video
              framerate: framerate || "", // number of frames used in one second
            },
          }),
        },
        result: {
          supported,
          smooth,
          powerEfficient,
        },
      })
    );
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
    }, 2500);
  };

  const { bufferType, fileType, error, result, lastActionDate } = state.context;
  return (
    <Fragment>
      <FeatureSubTitle>Media Config</FeatureSubTitle>
      <FlexContainer direction="column">
        <MediaConfigType
          fileType={fileType}
          onChangeMediaConfigType={onChangeMediaConfigType}
        />
        {fileType !== undefined ? (
          <MediaConfigBufferType
            audio={bufferType.audio}
            video={bufferType.video}
            onChangMediaConfigBufferType={changeMediaConfigBufferType}
          />
        ) : null}

        {bufferType.audio || bufferType.video ? (
          <FlexContainer width="100%">
            {bufferType.audio ? (
              <MediaConfigAudio
                isDarkMode={isDarkMode}
                onChangeFormFields={setInputFieldValues}
                values={formInputFieldsValues}
              />
            ) : null}
            {bufferType.video ? (
              <MediaConfigVideo
                isDarkMode={isDarkMode}
                onChangeFormFields={setInputFieldValues}
                values={formInputFieldsValues}
              />
            ) : null}
          </FlexContainer>
        ) : null}
        <Line isDarkMode={isDarkMode} />
        {bufferType.audio || bufferType.video ? (
          <Fragment>
            {lastActionDate !== undefined ? (
              <FlexContainer margin="5px 0">
                Last operation done at:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {String(lastActionDate)}
                </span>
              </FlexContainer>
            ) : null}
            <FlexContainer width="100%" justify="space-between">
              <Button onClick={checkDecodingInfos(formInputFieldsValues)}>
                Check
              </Button>
              {result !== undefined ? (
                <FlexContainer direction="column">
                  {shouldShowCopyNotification ? (
                    <div style={{ color: "#21ba45" }}>Copied!</div>
                  ) : (
                    <Image
                      src={isDarkMode ? CopyWhite : Copy}
                      alt="copy icon"
                      height="18px"
                      width="18px"
                      formsInputFieldsValues
                      onClick={formatOutputCopy({
                        ...state.context,
                        ...formInputFieldsValues,
                      })}
                      style={{ alignSelf: "center" }}
                    />
                  )}
                </FlexContainer>
              ) : null}
            </FlexContainer>
            {result !== undefined || error !== undefined ? (
              <MediaConfigResult error={error} result={result} />
            ) : null}
          </Fragment>
        ) : null}
      </FlexContainer>
    </Fragment>
  );
}

export default MediaConfig;
