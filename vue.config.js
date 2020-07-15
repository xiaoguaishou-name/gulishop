//配置路径联想   
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115/",
        // pathRewrite: {
        //   "^/api": ""
        // }
        changeOringin: true
      }
    }
  }
}