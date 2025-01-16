import { createApp } from 'vue'
import App from './app.vue'
import TestUI from '@kairos-ui/components'
import "@kairos-ui/theme-chalk/index.less"; // 引入样式文件
// import TestUI from '../dist/es.js'
// import "../dist/theme-chalk/style.css"; // 引入样式文件

const app = createApp(App)
app.use(TestUI)
app.mount('#app')