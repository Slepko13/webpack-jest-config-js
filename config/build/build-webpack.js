const { buildDevServer } = require('./build-dev-server');
const { buildLoaders } = require('./build-loaders');
const { buildPlugins } = require('./build-plugins');
const { buildResolvers } = require('./build-resolvers');

function buildWebpack(options) {
    const { mode, paths, target } = options;
    const isDev = mode === 'development';

    return {
        mode: mode || mode,
        target,

        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'bundle.[contenthash].js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
            chunkFilename: 'chunk.[contenthash].js',
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

module.exports = { buildWebpack };
