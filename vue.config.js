const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const nodeExternals = require('webpack-node-externals')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack devserver 提供代理的功能，该代理可以把所有请求到当前的服务器的请求转发(代理)到另外的服务器上
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      // '/api': {
      //   // 要代理的服务器地址  这里不用写 api
      //   target: 'https://api.imooc-admin.lgdsunday.club/',
      //   // target: 'http://127.0.0.1:4523/mock/797275',
      //   changeOrigin: true // 是否跨域
      // }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  chainWebpack(config) {
    // config.resolve.fallback = Object.assign(config.resolve.fallback || {}, {
    //   path: require.resolve('path-browserify')
    // })
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    //新增规则，处理 element-plus2 错误
    config.module
      .rule('element-plus2')
      .test(/\.mjs$/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
})
