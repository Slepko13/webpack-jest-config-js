const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { buildBabelLoader } = require('./babel/buildBabelLoader');

function buildLoaders(options) {
    const isDev = options.mode === 'development';

    const cssModuleLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev
                    ? '[path][name]__[local]'
                    : '[hash:base64:5]',
            },
            importLoaders: 1,
        },
    };
    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['postcss-preset-env'],
            },
        },
    };
    const imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                },
            },
        ],
    };
    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };
    const stylesSimpleLoader = {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /\.module\.(s[ac]|c)ss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            postCssLoader,
            'sass-loader',
        ],
    };
    const stylesModuleLoader = {
        test: /\.module\.(s[ac]|c)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssModuleLoader,
            postCssLoader,
            'sass-loader',
        ],
    };
    const babelLoader = buildBabelLoader(options);

    return [
        imageLoader,
        svgLoader,
        fontsLoader,
        stylesSimpleLoader,
        stylesModuleLoader,
        babelLoader,
    ];
}

module.exports = { buildLoaders };
