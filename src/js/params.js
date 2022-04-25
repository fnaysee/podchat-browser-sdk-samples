import {CONFIG} from '../config';
var env = 'main';

const params = {
    appId: new Date().getTime(),
    socketAddress: CONFIG[env].socketAddress,
    ssoHost: CONFIG[env].ssoHost,
    platformHost: CONFIG[env].platformHost,
    fileServer: CONFIG[env].fileServer,
    podSpaceFileServer: CONFIG[env].podSpaceFileServer,
    serverName: CONFIG[env].serverName,
    callServerName: CONFIG[env].callServerName,

    token: CONFIG.token,
    grantDeviceIdFromSSO: false,
    enableCache: false,
    fullResponseObject: true,
    mapApiKey: CONFIG.mapApiKey,
    typeCode: "default",
    wsConnectionWaitTime: 500,
    connectionRetryInterval: 5000,
    connectionCheckTimeout: 10000,
    messageTtl: 24 * 60 * 60,
    reconnectOnClose: true,
    httpRequestTimeout: 30000,
    httpUploadRequestTimeout: 0,
    forceWaitQueueInMemory: true,
    asyncRequestTimeout: 50000,
    callRequestTimeout: 5000,
    callOptions: {
        // callSocketAddress: "wss://online-stream.pod.ir/gsthandler",
        // callTurnIp: "188.75.65.144",
        callSocketAddress: "wss://46.32.6.187/gsthandler",
        callTurnIp: "46.32.6.188",
        callDivId: "call-div",
        callVideo: {
            minWidth: 320,
            minHeight: 180
        },
        callAudioTagClassName: "podcall-audio",
        callVideoTagClassName: "podcall-video"
    },
    asyncLogging: {
        onFunction: true,
        consoleLogging: true,
        onMessageReceive: false,
        onMessageSend: false,
        actualTiming: false
    },
    clientName: 'SDK Default example'
};
export {params};

