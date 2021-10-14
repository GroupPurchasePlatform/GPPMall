// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          'empty-description-color': '#fff',
          'nav-bar-background-color': '#3296fa'
        }
      }
    }
  }
}
