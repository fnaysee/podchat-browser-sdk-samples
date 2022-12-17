
import {contacts} from "./contacts/contacts";
import {threads} from "./threads/threads";
import {messages} from "./messages/messages";
import PodChat from 'podchat-browser';
import {CONFIG} from '../src/config';
(function () {
  let chatAgent = new PodChat({
    appId: 'CallTest',
    socketAddress: CONFIG[CONFIG.env].socketAddress,
    ssoHost: CONFIG[CONFIG.env].ssoHost,
    platformHost: CONFIG[CONFIG.env].platformHost,
    fileServer: CONFIG[CONFIG.env].fileServer,
    podSpaceFileServer: CONFIG[CONFIG.env].podSpaceFileServer,
    serverName: CONFIG[CONFIG.env].serverName,
    grantDeviceIdFromSSO: false,
    enableCache: false,
    fullResponseObject: true,
    mapApiKey: CONFIG.MAP_API_KEY,
    typeCode: "default",
    wsConnectionWaitTime: 500,
    connectionRetryInterval: 5000,
    connectionCheckTimeout: 10000,
    messageTtl: 24 * 60 * 60,
    reconnectOnClose: true,
    httpRequestTimeout: 30000,
    httpUploadRequestTimeout: 0,
    forceWaitQueueInMemory: true,
    asyncRequestTimeout: 20000,
    callRequestTimeout: 15000,
    callOptions: {
      callNoAnswerTimeout: 20000,
      useInternalTurnAddress: false,
      callTurnIp: "46.32.6.188",
      callDivId: "call-div",
      callVideo: {
        minWidth: 320,
        minHeight: 180
      },
      callAudioTagClassName: "podcall-audio",
      callVideoTagClassName: "podcall-video",
      /*        callPingInterval: 8000,
              noAnswerTimeout: 15000*/
    },
    asyncLogging: {
      onFunction: true,
      consoleLogging: true,
      onMessageReceive: false,
      onMessageSend: false,
      actualTiming: false
    }
  });

  window.chatAgent = chatAgent;
}())

