function buildDevServer(options) {
    return {
        port: options.port,
        hot: true,
        historyApiFallback: true,
    };
}

module.exports = { buildDevServer };
