const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue3-shop/',
  configureWebpack: {
    resolve: {
      fallback: {
        util: require.resolve('util/'),
        path: require.resolve('path-browserify'),
        url: require.resolve('url/'),
        assert: require.resolve('assert/'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
        fs: false,
        dgram: false,
        net: false,
        tls: false,
        child_process: false,
        module: false,
      },
    },
  },
});
