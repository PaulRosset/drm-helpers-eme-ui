const WIDEVINE_KeySystemConfiguration = [
  {
    type: "com.widevine.alpha",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
];

const PLAYREADY_KeySystemConfiguration = [
  {
    type: "com.microsoft.playready",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.recommendation",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.software",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.hardware",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
];

const ALL_KeySystemsConfiguration = [
  {
    type: "com.widevine.alpha",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.nagra.prm",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.software",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.hardware",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.apple.fps.1_0",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.chromecast.playready",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.youtube.playready",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
];

const ALL_KeySystemsConfiguration_persistent_License = [
  {
    type: "com.widevine.alpha",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          robustness: "HW_SECURE_ALL",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "HW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_DECODE",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
        {
          robustness: "SW_SECURE_CRYPTO",
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.software",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.microsoft.playready.hardware",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.apple.fps.1_0",
    configuration: {
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.chromecast.playready",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
  {
    type: "com.youtube.playready",
    configuration: {
      sessionTypes: ["persistent-license"],
      initDataTypes: ["cenc"],
      persistentState: "required",
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.4d401e"',
        },
      ],
    },
  },
];

export const dict_KeySystems = {
  "1": WIDEVINE_KeySystemConfiguration,
  "2": PLAYREADY_KeySystemConfiguration,
  "3": ALL_KeySystemsConfiguration,
  "4": ALL_KeySystemsConfiguration_persistent_License,
};
