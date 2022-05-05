var CONFIG = {
    token: '7814c7bd130d423eb168f064e6a8f152',

    // Neshan Map Api Token
    // mapApiKey: '8b77db18704aa646ee5aaea13e7370f4f88b9e8c',

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
