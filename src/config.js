var CONFIG = {
    // token: '1cfce37b60d4421db870e67dcfe407d9', // gameBOT
    // token: '567179f126d84277b8dced22599e0b82', // takiBOT
    // token: '1a9d91ccb4d5431b89dd74f7e0bb417b', // talkyBOT
    // token: 'd10237d19ad24ba089f66bdfe3de9974', // Clasor
    // token: "b135febd870746f88032df84dfb01c85", // Clasor Test BOT
    token: '492e3184cc2e423aa2d3d261a9f899c1',

    // Permenant Integration Tokens
    // token: "3dd6895c8dc64f93bcd43b58dcc2aab3", // Masoud Amjadi
    // token: "9c627a9125d04ebf8455bf57bb33d2a9", // Pooria Pahlevani
    // token: "f6464d4e0f044314b1a668f90287ba26", // Nadia Anvari
    // token: "99506f7c32c849a9a6e2a954303b81ee", // Farhad Kheirkhah
    // token: "979aa5de03934c73a5c6c855bd80cb04", // Mahyar Zhiani
    // token: "a47c9016c8354236abc01395093bed5c", // Ahmad Sajadi
    // token: "d3114ed2fd2a49b4a0a386e727c9e5fa", // Saba Safavi
    // token: "872110b9c6944eda9bc98ef2a68dcf50", // Leila Nemati

    // ActiveMQ Connection config
    // queueHost: "10.56.16.25",
    // queuePort: "61613",
    // queueUsername: "root",
    // queuePassword: "zalzalak",
    // queueReceive: "queue-in-amjadi-stomp",
    // queueSend: "queue-out-amjadi-stomp",

    // Neshan Map Api Token
    mapApiKey: '8b77db18704aa646ee5aaea13e7370f4f88b9e8c',

    // Main Server
    main: {
        socketAddress: 'wss://msg.pod.ir/ws',
        ssoHost: 'https://accounts.pod.ir',
        platformHost: 'https://api.pod.ir/srv/core',
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'https://podspace.pod.ir',
        serverName: 'chat-server'
    },

    // SandBox Server
    sandbox: {
        socketAddress: "wss://chat-sandbox.pod.ir/ws",
        ssoHost: "https://accounts.pod.ir",
        platformHost: "https://sandbox.pod.ir:8043/srv/basic-platform",
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'http://sandbox.podspace.ir:8080',
        serverName: "chat-server"
    },

    // Integration Server
    integration: {
        socketAddress: "ws://172.16.110.235:8003/ws",
        ssoHost: "http://172.16.110.76",
        platformHost: "http://172.16.110.235:8003/srv/bptest-core",
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'http://sandbox.podspace.ir:8080',//'http://172.16.110.61:8780/podspace',
        serverName: "chatlocal"
    }
}
export {CONFIG}
