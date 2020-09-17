const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js',
        pride: './src/pride.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'sass-loader'
                ],
            },
        ],
    },
}
