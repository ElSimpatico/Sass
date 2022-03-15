const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassAlias = require('sass-alias');
const { resolve, join } = require('path');

const srcDir = resolve(__dirname, './src');

module.exports = (_env, options) => ({
    context: srcDir,
    entry: join(srcDir, 'index.jsx'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'demo.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            scss: resolve(__dirname, '../src/scss/'),
        },
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                importer: new SassAlias({
                                    '@scss': join(srcDir, 'scss'),
                                }).getImporter(),
                            },
                        },
                    },
                ],
            },
        ],
    },
    target: 'web',
    devServer: {
        hot: true,
        open: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(srcDir, 'index.html'),
        }),
    ],
});
