const buildPaths = require('../buildpaths');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        buildPaths.in.entryPoint
    ],
    output: {
        path: buildPaths.out.outputPath,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': buildPaths.in.srcPath
        },
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: require('../vueLoaderOptions')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [buildPaths.in.srcPath, buildPaths.test.testPath]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: buildPaths.assets.in(['img', '[name].[hash:7].[ext]'])
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: buildPaths.assets.in(['media', '[name].[hash:7].[ext]'])
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: buildPaths.assets.in(['fonts', '[name].[hash:7].[ext]'])
                }
            }
        ]
    }
};