import DefaultTheme from "vitepress/theme";
import TestUI from "@kairos-ui/components";
import "@kairos-ui/theme-chalk/index.less"; // 引入样式文件
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import Preview from "./preview/index.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(TestUI);
    app.component("preview", Preview); // 注册预览功能的组件
    app.use(hljsVuePlugin);
  },
};
