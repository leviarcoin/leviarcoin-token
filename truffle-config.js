module.exports = {
    networks: {
        live: {
            from: '0xYOUR_ADDRESS',
            host: "127.0.0.1",
            port: 8545,
            network_id: 1
        },
    },
    compilers: {
        solc: {
            version: "0.5.1"
        }
    }
};