import type { Configuration } from 'webpack';
import { DefinePlugin } from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HTMLWebpackPlugin({
            template: options.paths.html,
            favicon: options.paths.favicon,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __MODE__: JSON.stringify(options.mode)
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
