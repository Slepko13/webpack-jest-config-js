const { resolve } = require('path');

const { buildWebpack } = require('./config/build/build-webpack');

module.exports = (env) => {
    const paths = {
        output: resolve(__dirname, 'build'),
        entry: resolve(__dirname, 'index.jsx'),
        html: resolve(__dirname, 'public', 'index.html'),
        favicon: resolve(__dirname, 'public', 'test-favicon.png'),
    };

    const config = buildWebpack({
        target: env.mode === 'production' ? 'browserslist' : 'web',
        mode: env.mode === 'production' ? 'production' : 'development',
        port: env.port ?? 3000,
        platform: env.platform ?? 'production',
        paths,
    });

    return config;
};
