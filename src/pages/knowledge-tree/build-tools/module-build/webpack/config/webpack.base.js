// 清理产出目录插件（清理上次的）
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// html插件
const {HtmlWebpackPlugin} = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename :'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: './dist'  // 产出目录 开发服务器根目录
    },
    module: {
        rules: [{
            test: /\.(j,t)sx?/,
            use: 'ts-loader' // ts-loader有类型检查 babel没类型检查
        }]
    },
    plugin: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'] // 编译前清理的目录
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}