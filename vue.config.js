const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: process.env.NODE_ENV === "production" ? ["vue", "vue3-dnd"] : [],
  },
});
