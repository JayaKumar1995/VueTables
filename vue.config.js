module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: `@import "~@assets/global.scss";`
      },
    }
  }
}