const API_URL = 'http://mini.backstage.zswenlv.com/'

const webpack = require('webpack')
module.exports = {
    lintOnSave: true,
    assetsDir: './',
    publicPath: '/',
    devServer: {
        proxy: {
            '/interface/v1/': {
                target: API_URL,
                ws: true,
                changeOrigin: true
            },
            '/oss/upload/': {
                target: API_URL,
                ws: true,
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            'window.Quill': 'quill/dist/quill.js',
            'Quill': 'quill/dist/quill.js'
        }]);
    }
}