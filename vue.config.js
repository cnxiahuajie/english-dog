module.exports = {
  devServer: {
    port: 3333,
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.8:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variable.scss";`,
      },
    },
  },
}
