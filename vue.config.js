module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // return {
      // plugins: [
      // new BundleAnalyzerPlugin()
      // ]
      // }
    } else if (process.env.NODE_ENV === 'development') {
    } else {
    }
  }
}
