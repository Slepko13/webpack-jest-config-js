const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function buildPlugins(options) {
    const isDev = options.mode === 'development';

    const plugins = [
        new HTMLWebpackPlugin({
            template: options.paths.html,
            favicon: options.paths.favicon,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __MODE__: JSON.stringify(options.mode),
        }),
    ];

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name][contenthash].css',
                chunkFilename: 'css/[name][id][contenthash].css',
            })
        );
    } else {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}

module.exports = { buildPlugins };
