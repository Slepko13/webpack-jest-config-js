function buildBabelLoader({ mode }) {
    const isDev = mode === 'development';
    const plugins = [];
    if (isDev) {
        plugins.push(require.resolve('react-refresh/babel'));
    }

    return {
        test: /\.[t,j]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: plugins.filter(Boolean),
            },
        },
    };
}

module.exports = { buildBabelLoader };
