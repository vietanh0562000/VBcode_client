module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "^/api/*": {
        target: "http://3.139.221.72:49154",
        secure: true,
      }
    }
  },
}