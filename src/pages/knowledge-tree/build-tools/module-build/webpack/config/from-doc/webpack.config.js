// eslint-disable-next-line import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')

module.exports = {
    mode: 'production', // production | development ->process.env.NODE_ENV = 'production | development'
    // TODO: 多入口
    entry: {
        /* 
        des: 这告诉我们 webpack 从 app.js 和 vendors.js 开始创建依赖图(dependency graph)。
        这些依赖图是彼此完全分离、互相独立的（每个 bundle 中都有一个 webpack 引导(bootstrap)）。
        这种方式比较常见于，只有一个入口起点（不包括 vendor）的单页应用程序(single page application)中。 
        */
        app: './src/app.js', // 应用程序
        vendors: './src/vendors.js' // 第三方库
    }, // 入口 entry: string|Array<string> 
    output: { // 出口
        path: path.resolve(__dirname, 'dist'),
        fileName: 'my.bundle.js' // 多个入口的时候用 filename: '[name].js', 占位符 确保每个文件名称唯一
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            fileName: 'index.html',
            template: './src/index.html',
            chunk: ['list']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        option: {
                            module: true
                        }
                    },
                ]
            },
            { test: /\.ts$/, use: 'css-loader' }
        ]
    }
}