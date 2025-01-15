import { createApp } from 'vue'
import App from './app.vue'
import KaiorsUI from '@kairos-ui/components'
import "@kairos-ui/theme-chalk/index.less"; // 引入样式文件


const app = createApp(App)
app.use(KaiorsUI)
app.mount('#app')